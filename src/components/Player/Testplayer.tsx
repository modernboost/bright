import React, { useRef, useState, useEffect } from 'react';
import './style.css'; // Import the CSS file for styles

const TestPlayer = ({ videoSrc }) => {
  const videoRef = useRef(null);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [bufferedTime, setBufferedTime] = useState(0);
  const [controlsVisible, setControlsVisible] = useState(true); // Controls visible by default

  useEffect(() => {
    const video = videoRef.current;

    const handleLoadedMetadata = () => setDuration(video.duration);
    const handleTimeUpdate = () => setCurrentTime(video.currentTime);
    const handleProgress = () => {
      if (video.buffered.length > 0) {
        setBufferedTime(video.buffered.end(video.buffered.length - 1));
      }
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('progress', handleProgress);

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('progress', handleProgress);
    };
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  const handleSeek = (e) => {
    const progressBar = e.target;
    const newTime = (e.nativeEvent.offsetX / progressBar.offsetWidth) * duration;
    videoRef.current.currentTime = newTime;
  };

  const handleBulletDrag = (e) => {
    const progressBar = document.querySelector('.progress-bar-container');
    const newTime = (e.clientX / progressBar.offsetWidth) * duration;
    videoRef.current.currentTime = newTime;
  };

  const showControls = () => setControlsVisible(true); // Show controls on hover

  return (
    <div className="player" onMouseMove={showControls}>
      <video ref={videoRef} src={videoSrc} className="video-player" controls={false} />

      {controlsVisible && (
        <div className="controls">
          <div className="progress-bar-container" onClick={handleSeek}>
            <div
              className="progress-bar-buffered"
              style={{ width: `${(bufferedTime / duration) * 100}%` }}
            ></div>
            <div
              className="progress-bar-played"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            ></div>
            <div
              className="progress-bullet"
              style={{ left: `${(currentTime / duration) * 100}%` }}
              onMouseDown={(e) => e.preventDefault()}
              onDrag={(e) => handleBulletDrag(e)}
            ></div>
          </div>

          <div className="time-info">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration - currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      )}
    </div>
  );
};


// const TestPlayer = ({ videoSrc }) => {
//   const videoRef = useRef(null);
//   const [duration, setDuration] = useState(0);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [bufferedTime, setBufferedTime] = useState(0);
//   const [controlsVisible, setControlsVisible] = useState(true);
//   const hideTimeoutRef = useRef(null);

//   useEffect(() => {
//     const video = videoRef.current;

//     // Update duration when video metadata is loaded
//     const handleLoadedMetadata = () => setDuration(video.duration);

//     // Update current time while video is playing
//     const handleTimeUpdate = () => setCurrentTime(video.currentTime);

//     // Update buffered time (loaded) when the video progresses
//     const handleProgress = () => {
//       if (video.buffered.length > 0) {
//         setBufferedTime(video.buffered.end(video.buffered.length - 1));
//       }
//     };

//     video.addEventListener('loadedmetadata', handleLoadedMetadata);
//     video.addEventListener('timeupdate', handleTimeUpdate);
//     video.addEventListener('progress', handleProgress);

//     return () => {
//       video.removeEventListener('loadedmetadata', handleLoadedMetadata);
//       video.removeEventListener('timeupdate', handleTimeUpdate);
//       video.removeEventListener('progress', handleProgress);
//     };
//   }, []);

//   const formatTime = (time) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = Math.floor(time % 60);
//     return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
//   };

//   const handleSeek = (e) => {
//     const progressBar = e.target;
//     const newTime = (e.nativeEvent.offsetX / progressBar.offsetWidth) * duration;
//     videoRef.current.currentTime = newTime;
//   };

//   // Show controls when hovering or interacting
//   const showControls = () => {
//     setControlsVisible(true);
//     if (hideTimeoutRef.current) {
//       clearTimeout(hideTimeoutRef.current);
//     }
//   };

//   // Hide controls after a delay
//   const hideControls = () => {
//     hideTimeoutRef.current = setTimeout(() => {
//       setControlsVisible(false);
//     }, 3000); // 3 seconds of inactivity
//   };

//   // Reset hide timer on mouse movement
//   const handleMouseMove = () => {
//     showControls();
//     hideControls();
//   };

//   useEffect(() => {
//     hideControls(); // Start the hiding logic when component mounts
//   }, []);

//   return (
//     <div className="player" onMouseMove={handleMouseMove} onMouseLeave={hideControls}>
//       <video ref={videoRef} src={videoSrc} className="video-player" controls={false} />

//       {controlsVisible && (
//         <div className="controls">
//           <div className="progress-bar-container" onClick={handleSeek}>
//             <div
//               className="progress-bar-buffered"
//               style={{ width: `${(bufferedTime / duration) * 100}%` }}
//             ></div>
//             <div
//               className="progress-bar-played"
//               style={{ width: `${(currentTime / duration) * 100}%` }}
//             ></div>
//           </div>

//           <div className="time-info">
//             <span>{formatTime(currentTime)}</span>
//             <span>{formatTime(duration - currentTime)}</span>
//             <span>{formatTime(duration)}</span>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };


export default TestPlayer