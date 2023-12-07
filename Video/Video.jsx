import React,{useEffect} from 'react';
import './Video.css'
function Video({data,currID}) {
  const LikeBtn = () => (
    <>
    <button
      className={`btn`}
    >
      <span className="material-symbols-outlined">thumb_up</span>
        {data.videoInfo.statistics.likeCount}
    </button>

    <button
      className={`btn `}
    >
      <span className="material-symbols-outlined">thumb_down</span>
        {data.videoInfo.statistics.dislikeCount}
    </button>
  </>
  )
  useEffect(() => {
    const fetchData = async (currID) => {
      try {
        console.log('finding',currID)
        const response = await fetch(`http://127.0.0.1:5000/find?id=${currID}`);
        console.log(response,'FEED')
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData(currID)
  }, [currID])
  return (
    <div className='mt-2' style={{ height: '75vh', border: '1px solid black' }}>
      <img 
          width={'100%'}
          height={'100%'}
          src={data.videoInfo.snippet.thumbnails.high.url} 
      />
      <br></br>
      <p className='px24'>&nbsp; {data.videoInfo.snippet.title}</p>
      <div className='d-flex justify-content-between'>
        <div className=''>
            <p className='px20' style={{lineHeight:'9px'}}>&nbsp; {data.videoInfo.snippet.channelTitle}</p>
            <p className='px12 grey' style={{lineHeight:'9px'}}>&nbsp; {data.videoInfo.statistics.viewCount} Views</p>
        </div>
        <div className='d-flex' >{LikeBtn()}</div>
      </div>
      <br></br>
      <p className='px14 '>{data.videoInfo.snippet.description}</p>
      <p>{data.videoInfo.statistics.commentCount} Comments</p>
      {data.videoInfo.snippet.tags.map( (e) => <span className='blue' style={{}}>#{e} </span> )}
  </div>

  );
}

export default Video;
