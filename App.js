import 'bootstrap/dist/css/bootstrap.min.css';
import Video from "./Video/Video"; 
import Navbar from "./NavBar/Navbar";
import History from "./History/History";
import React, { useEffect } from 'react';
import Enter from './components/enter/Enter';
import SignUp from './components/enter/SignUp';
import Feed from './Feed/History'
import Login from './components/enter/Login';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios'
function App() {  
  const data = [{
      "_id": {
        "$oid": "6545255274915ee3f80583c3"
      },
      "videoInfo": {
        "kind": "youtube#video",
        "statistics": {
          "commentCount": 13,
          "viewCount": 43966,
          "favoriteCount": 0,
          "dislikeCount": 17,
          "likeCount": "96"
        },
        "snippet": {
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/b0E5ybGb3U0/default.jpg",
              "width": 120,
              "height": 90
            },
            "high": {
              "url": "https://i.ytimg.com/vi/b0E5ybGb3U0/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/b0E5ybGb3U0/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/b0E5ybGb3U0/sddefault.jpg",
              "width": 640,
              "height": 480
            }
          },
          "title": "Army and Family Members Pay Tribute to Martyrs of Uri Terror Attack",
          "defaultAudioLanguage": "hi",
          "localized": {
            "description": "Uri Attack: Army and family members pay tribute to martyrs of Uri terror attack. Watch India TV's special report to know the story of brave martyrs. Daughters of martyr Sunil gave exams with tears in eyes. \n\nSUBSCRIBE to India TV Here: http://goo.gl/fcdXM0\n\nFollow India TV on Social Media:\nFacebook: https://www.facebook.com/indiatvnews\nTwitter: https://twitter.com/indiatvnews\n\nDownload India TV Android App here: http://goo.gl/kOQvVB",
            "title": "Army and Family Members Pay Tribute to Martyrs of Uri Terror Attack"
          },
          "channelId": "UCttspZesZIDEwwpVIgoZtWQ",
          "publishedAt": "2016-09-21T04:58:09.000Z",
          "liveBroadcastContent": "none",
          "channelTitle": "IndiaTV",
          "categoryId": "25",
          "tags": [
            "Uri Attack",
            "Uri terror Attack",
            "Uri attack martyr",
            "army martyr",
            "indian army martyr",
            "tribute to martyr",
            "uri",
            "jammu and kashmir",
            "hindi news",
            "India TV",
            "india tv news",
            "aap ki adalat",
            "Aaj Ki Baat",
            "aap ki adalat latest",
            "india tv live",
            "india tv news live",
            "india tv hindi",
            "india tv youtube",
            "india tv hindi news",
            "india tv channel live",
            "martyr family"
          ],
          "description": "Uri Attack: Army and family members pay tribute to martyrs of Uri terror attack. Watch India TV's special report to know the story of brave martyrs. Daughters of martyr Sunil gave exams with tears in eyes. \n\nSUBSCRIBE to India TV Here: http://goo.gl/fcdXM0\n\nFollow India TV on Social Media:\nFacebook: https://www.facebook.com/indiatvnews\nTwitter: https://twitter.com/indiatvnews\n\nDownload India TV Android App here: http://goo.gl/kOQvVB"
        },
        "etag": "\"gMxXHe-zinKdE9lTnzKu8vjcmDI/myyclBkIzBKA3vU_E2Ba7rRiksA\"",
        "recordingDetails": {
          "recordingDate": "2016-09-21T00:00:00.000Z"
        },
        "id": "b0E5ybGb3U0"
      }
    },
    {
      "_id": {
        "$oid": "6545255274915ee3f80583c4"
      },
      "videoInfo": {
        "snippet": {
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/1KT5z-rkZrM/default.jpg",
              "width": 120,
              "height": 90
            },
            "high": {
              "url": "https://i.ytimg.com/vi/1KT5z-rkZrM/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/1KT5z-rkZrM/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/1KT5z-rkZrM/sddefault.jpg",
              "width": 640,
              "height": 480
            }
          },
          "tags": [
            "ABP News Videos",
            "Pathankot attack",
            "employee",
            "arrested"
          ],
          "channelId": "UCRWFSbif-RFENbBrSiez1DA",
          "publishedAt": "2016-01-08T09:00:28.000Z",
          "liveBroadcastContent": "none",
          "channelTitle": "ABP NEWS",
          "title": "Pathankot attack: Investigation agency detains an employee of the air base",
          "categoryId": "22",
          "localized": {
            "description": "Pathankot air base employee has been detained by an investigating agency on the suspicion of helping the terrorists.The employee worked in the military and engineering department. Flood lights at the spot from where attackers infiltrated the air base were not working and the area belonged to the military and engineering department.\n\nFor latest breaking news, other top stories log on to:  http://www.abplive.in & http://www.youtube.com/abpnewsTV",
            "title": "Pathankot attack: Investigation agency detains an employee of the air base"
          },
          "description": "Pathankot air base employee has been detained by an investigating agency on the suspicion of helping the terrorists.The employee worked in the military and engineering department. Flood lights at the spot from where attackers infiltrated the air base were not working and the area belonged to the military and engineering department.\n\nFor latest breaking news, other top stories log on to:  http://www.abplive.in & http://www.youtube.com/abpnewsTV"
        },
        "kind": "youtube#video",
        "statistics": {
          "commentCount": 0,
          "viewCount": 1124,
          "favoriteCount": 0,
          "dislikeCount": 0,
          "likeCount": "4"
        },
        "etag": "\"gMxXHe-zinKdE9lTnzKu8vjcmDI/g3znmFvgD4V4Flw-ZD-86bYeTJc\"",
        "id": "1KT5z-rkZrM"
      }
    },
    {
      "_id": {
        "$oid": "6545255274915ee3f80583c5"
      },
      "videoInfo": {
        "kind": "youtube#video",
        "statistics": {
          "commentCount": 2055,
          "viewCount": 5360401,
          "favoriteCount": 0,
          "dislikeCount": 2487,
          "likeCount": "13635"
        },
        "snippet": {
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/AUGrLlJvIUs/default.jpg",
              "width": 120,
              "height": 90
            },
            "high": {
              "url": "https://i.ytimg.com/vi/AUGrLlJvIUs/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/AUGrLlJvIUs/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/AUGrLlJvIUs/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/AUGrLlJvIUs/sddefault.jpg",
              "width": 640,
              "height": 480
            }
          },
          "title": "Yakeen Nahi Hota: How Modi Hit Pakistan's ISI and Dawood Hard by Banning Rs 500, Rs 1000 Notes",
          "defaultAudioLanguage": "hi",
          "localized": {
            "description": "Watch India TV's special show 'Yakeen Nahi Hota', today's report on how PM Narendra Modi's ban on Rs 500 and Rs 1000 notes hit hard on Pakistan's ISI and underworld DON Dawood Ibrahim. \nPM Narendra Modi announces that currency notes of Rs 1000 and Rs 500 will not be legal tender from November 10 midnight. Modi government takes such bold step to curb black money, corruption and fake currency and terrorism.\nPeople can exchange or submit 500 rupee and 1000 rupee notes in the banks and post offices. Soon the government will launch new currency notes of 500 and 2000.\n\nSUBSCRIBE to India TV Here: http://goo.gl/fcdXM0\n\nFollow India TV on Social Media:\nFacebook: https://www.facebook.com/indiatvnews\nTwitter: https://twitter.com/indiatvnews\n\nDownload India TV Android App here: http://goo.gl/kOQvVB\n\nFor More Videos Visit Here:\nhttp://www.indiatvnews.com/video/",
            "title": "Yakeen Nahi Hota: How Modi Hit Pakistan's ISI and Dawood Hard by Banning Rs 500, Rs 1000 Notes"
          },
          "channelId": "UCttspZesZIDEwwpVIgoZtWQ",
          "publishedAt": "2016-11-09T18:07:58.000Z",
          "liveBroadcastContent": "none",
          "channelTitle": "IndiaTV",
          "defaultLanguage": "en-GB",
          "categoryId": "25",
          "tags": [
            "fake currency note",
            "yakeen nahi hota",
            "pakistan isi",
            "fake note pakistan",
            "dawood fake currency",
            "modi",
            "pakistan",
            "500",
            "1000",
            "isi",
            "india tv",
            "500 rupee note ban",
            "ban on rs 1000",
            "black money",
            "exchange rs 500 and rs 1000",
            "deposit rs 500 and rs 1000",
            "fake rs 500 note",
            "fake 1000 rupees note",
            "india tv live",
            "india tv hindi",
            "new rs 2000 note",
            "new rs 500 note",
            "dawood ibrahim",
            "currency ban in india",
            "pakistani media on india latest",
            "pakistan on modi"
          ],
          "description": "Watch India TV's special show 'Yakeen Nahi Hota', today's report on how PM Narendra Modi's ban on Rs 500 and Rs 1000 notes hit hard on Pakistan's ISI and underworld DON Dawood Ibrahim. \nPM Narendra Modi announces that currency notes of Rs 1000 and Rs 500 will not be legal tender from November 10 midnight. Modi government takes such bold step to curb black money, corruption and fake currency and terrorism.\nPeople can exchange or submit 500 rupee and 1000 rupee notes in the banks and post offices. Soon the government will launch new currency notes of 500 and 2000.\n\nSUBSCRIBE to India TV Here: http://goo.gl/fcdXM0\n\nFollow India TV on Social Media:\nFacebook: https://www.facebook.com/indiatvnews\nTwitter: https://twitter.com/indiatvnews\n\nDownload India TV Android App here: http://goo.gl/kOQvVB\n\nFor More Videos Visit Here:\nhttp://www.indiatvnews.com/video/"
        },
        "etag": "\"gMxXHe-zinKdE9lTnzKu8vjcmDI/RcYYswls__ODz8z7cC-8GSFkMgk\"",
        "recordingDetails": {
          "recordingDate": "2016-11-09T00:00:00.000Z",
          "location": {
            "latitude": 28.5242195129,
            "altitude": 0,
            "longitude": 77.4104690552
          }
        },
        "id": "AUGrLlJvIUs"
      }
    }]
  const [currID,setCurrID] = React.useState('6545255274915ee3f80583c3')
  const [query,setQuery] = React.useState('')
  const [isClicked,setIsClicked] = React.useState(0)

  console.log(query)
  return (
    <Router>
      <Routes>
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/login' element={<Enter />}/>
          <Route path='/history' element={<Feed  data = {data} setCurrID = {setCurrID}/>}/>
          <Route path='/video' element={    <div>
        <div className='mt-2'>
            <Navbar setQuery = {setQuery} setIsClicked={setIsClicked}/>
        </div>
        <div  className="container">
            <div className="row">
                <div className="col-8">
                    <Video currID={currID} data={data[0]} />
                </div>
                <div className="col-4">
                    <History data = {data} setCurrID = {setCurrID} query={query}/>
                    
                </div>
            </div>
        </div>

    </div>} />
        </Routes>
    </Router>
  );
}

export default App;


