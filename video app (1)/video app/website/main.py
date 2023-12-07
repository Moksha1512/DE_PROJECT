from flask import Flask, request, jsonify
from neo4j import GraphDatabase
from pymongo import MongoClient
from flask_cors import CORS
from flask_cors import cross_origin
from flask import Flask, send_from_directory
app = Flask(__name__)
CORS(app, resources={r"/search": {"origins": "*"}})

@app.route('/favicon.ico')
def favicon():
    return send_from_directory('static', 'favicon.ico', mimetype='image/vnd.microsoft.icon')

# CORS(app, resources={r"/*": {"origins": "*"}})
# Neo4j connection parameters
app.config['NEO4J_URI'] = 'bolt://localhost:7687'
app.config['NEO4J_USER'] = 'neo4j'
app.config['NEO4J_PASSWORD'] = 'password'
neo4j_driver = GraphDatabase.driver(app.config['NEO4J_URI'], auth=(app.config['NEO4J_USER'], app.config['NEO4J_PASSWORD']))

# MongoDB connection parameters
app.config['MONGO_URI'] = 'mongodb://localhost:27017/'
app.config['MONGO_DB'] = 'videoApp'
mongo_client = MongoClient(app.config['MONGO_URI'])
mongo_db = mongo_client[app.config['MONGO_DB']]

mongo_video_collection = mongo_db["videos"]
mongo_video_collection.create_index([("tags", 1), ("videoInfo.id", 1)], background=True)

@app.route('/search', methods=['GET'])
# @cross_origin(origin='http://localhost:3000', headers=['Content- Type', 'Authorization'])
def search():
    print(request.args.get('query'))
    # return jsonify("query")
    search_query = request.args.get('query')
    with neo4j_driver.session() as session:
        neo4j_query = """
        MATCH (v:V)
        WHERE ANY(tag IN v.tags WHERE toLower(tag) CONTAINS toLower($searchTag))
        RETURN v.id

        """
        neo4j_result = session.run(neo4j_query, searchTag=search_query)
        neo4j_data = [record['v.id'] for record in neo4j_result]

    mongo_video_collection = mongo_db["videos"]
    mongo_video_details = mongo_video_collection.find(
        {"videoInfo.id": {"$in": neo4j_data}}
    ).sort("videoInfo.statistics.viewCount", -1).limit(6)

    video_details_list = []
    for video_detail in mongo_video_details:
        video_info = video_detail.get("videoInfo", {})
        snippet = video_info.get("snippet", {})
        statistics = video_info.get("statistics", {})
        thumbnails = snippet.get("thumbnails", {}).get("high", {})
        video_detail['_id'] = str(video_detail['_id'])
        video_details_list.append(video_detail)
        
    response = jsonify(results=video_details_list)
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
    print(response,'ff')
    return response

@app.route('/like', methods=['GET'])
def like():
    video_id = request.args.get('id')
    mongo_video_collection = mongo_db["videos"]
    result=mongo_video_collection.update_one(
        {"videoInfo.id": video_id},
        {"$inc": {"videoInfo.statistics.likeCount": 1}}
    )
    if result.modified_count == 1:
        response = jsonify({"success": "Like count incremented successfully"})
    else:
        response = jsonify({"error": "Video ID not found"}), 404
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
    print(response,'ff')
    return response

@app.route('/dislike', methods=['GET'])
def dislike():
    video_id = request.args.get('video_id')
    mongo_video_collection = mongo_db["videos"]
    result=mongo_video_collection.update_one(
        {"videoInfo.id": video_id},
        {"$inc": {"videoInfo.statistics.dislikeCount": -1}}
    )
    if result.modified_count == 1:
        return jsonify({"success": "Dislike count decremented successfully"})
    else:
        return jsonify({"error": "Video ID not found"}), 404

@app.route('/click', methods=['GET'])
def click():
    # Assuming video_id is passed as a query parameter
    video_id = request.args.get('id')
    print(request.args.get('id'))
    # Neo4j Query for related video IDs
    with neo4j_driver.session() as session:
        related_video_ids_query = """
        MATCH (clicked:V {id: $videoId})-[*]-(related)
        RETURN DISTINCT related.id AS video_id
        """
        related_video_ids_result = session.run(related_video_ids_query, videoId=video_id)
        related_video_ids_data = [record['video_id'] for record in related_video_ids_result]

    # Update view count for the clicked video
    mongo_video_collection = mongo_db["videos"]
    mongo_video_collection.update_one(
        {"videoInfo.id": video_id},
        {"$inc": {"videoInfo.statistics.viewCount": 1}}
    )

    # Retrieve details of related videos from MongoDB
    mongo_video_details = list(mongo_video_collection.find(
        {"videoInfo.id": {"$in": related_video_ids_data}}
    ).sort("videoInfo.statistics.viewCount", -1).limit(7))

    # Append the data for the clicked video to the result
    clicked_video = mongo_video_collection.find_one({"videoInfo.id": video_id})
    if clicked_video:
        clicked_video['_id'] = str(clicked_video['_id'])
        mongo_video_details.insert(0, clicked_video)

    # Convert ObjectId to string for each video
    for video_detail in mongo_video_details:
        video_detail['_id'] = str(video_detail['_id'])

    response = jsonify(results=mongo_video_details)
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
    return response

@app.route('/display', methods=['GET'])
def display():
    mongo_video_collection = mongo_db["videos"]
    video_id = request.args.get('id')
    clicked_video = mongo_video_collection.find_one({"videoInfo.id": video_id})
    clicked_video['_id'] = str(clicked_video['_id'])
    response = jsonify(results=clicked_video)
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
    return response



if __name__ == '__main__':
    app.run(debug=True, port=5000)
