import React from 'react';
import './Video'

function Video(props) {
    let handleMute = (e)=>{
        e.preventDefault();
        e.target.muted = !e.target.muted;
    }
  return (
    <>
        <video className='video-styles' autoPlay loop onClick = {handleMute} muted='muted' type='video/*'>
            <source src={props.source} type='video/webm'/>
        </video>
    </>
  )
}

export default Video