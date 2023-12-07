import React from 'react'

function History({data,setCurrID}) {

  const makeHistory = data.map( (data) => (
    <div
        className='d-flex'
        style={{
          border:"1px solid black",
          cursor:"pointer"
        }}
        onClick={() => setCurrID(data._id.$oid)}
    > 
        <img 
            width='50%'
            src={data.videoInfo.snippet.thumbnails.high.url} 
        />
        <p>{data.videoInfo.snippet.title}</p>
    </div>
  )) 

  return (
    <>
        {makeHistory}
    </>
  )
}

export default History