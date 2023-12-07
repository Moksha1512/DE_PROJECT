import React , {useEffect} from 'react'

function History({data,setCurrID,query}) {
  const [feedData,setFeedData] = React.useState([])
  useEffect(() => {
    const fetchData = async (query) => {
      try {
        console.log('searching', query);
        const response = await fetch(`http://127.0.0.1:5000/search?query=${query}`);
        const data = await response.json(); 
        setFeedData(data.results)
        console.log(data.results); 
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    fetchData(query);
  }, [query]);
  
  const makeHistory = feedData.map( (data) => (
    <div
        className='d-flex mb-2'
          style={{
          cursor:"pointer"
        }}
        onClick={() => {setCurrID(prevID => data._id.$oid)}}
    > 
        <img 
            width='33%'
            style={{borderRadius:'5%'}}
            src={data.videoInfo.snippet.thumbnails.medium.url} 
        />
        <div className='smallLH mt-1'>

            <p className='px12 mediumLH' style={{marginBottom:0}}>{data.videoInfo.snippet.title}</p>
            <br></br>
            <p className='px10 mb-1' style={{marginBottom:0}}>{data.videoInfo.snippet.channelTitle}</p>
            <p className='px8 grey ' style={{marginBottom:0}}>{data.videoInfo.statistics.viewCount} Views</p>

        </div>
    </div>
  )) 

  return (
    <div className='mt-2'>
        {makeHistory}
    </div>
  )
}

export default History