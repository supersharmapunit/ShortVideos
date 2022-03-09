import React, { useState, useEffect } from 'react'
import Video from './Video'
import vid1 from './videos/WhatsApp Video 2022-02-28 at 2.57.19 PM (1).mp4'
import vid2 from './videos/WhatsApp Video 2022-02-28 at 2.57.26 PM.mp4'
import vid3 from './videos/WhatsApp Video 2022-02-28 at 2.57.24 PM.mp4'
import vid4 from './videos/WhatsApp Video 2022-02-28 at 2.57.19 PM (2).mp4'
function Ioa() {
  const [sources, setSources] = useState([{ url: vid1 }, { url: vid2 }, { url: vid3 }, { url: vid4 }]);
  
  let callback = (entries) => {
    entries.forEach(eachEntry => {
      let ele = eachEntry.target.childNodes[0];
      ele.play().then(()=>{
        if(!ele.paused && !eachEntry.isIntersecting) ele.pause();
      })
      // Each entry describes an intersection change for one observed
      // target element:
      //   entry.boundingClientRect
      //   entry.intersectionRatio
      //   entry.intersectionRect
      //   entry.isIntersecting
      //   entry.rootBounds
      //   entry.target
      //   entry.time
    });
  };
  
  const observer = new IntersectionObserver(callback, {
    threshold: 0.9
  })
  useEffect(() => {
    let elements = document.querySelectorAll('.videos');
    elements.forEach(el => observer.observe(el));
  }, [])
  
  
  
  

  // let target = document.querySelector('#listItem');
  // observer.observe(target);

  // the callback we setup for the observer will be executed now for the first time
  // it waits until we assign a target to our observer (even if the target is currently not visible)
  return (
    <div className='video-container'>
      <div className='videos'>
        <Video source={sources[0].url} />
      </div>
      <div className='videos'>
        <Video source={sources[1].url} />
      </div>
      <div className='videos'>
        <Video source={sources[2].url} />
      </div>
      <div className='videos'>
        <Video source={sources[3].url} />
      </div>
    </div>
  )
}

export default Ioa