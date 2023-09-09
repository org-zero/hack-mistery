// components/Video.js

const Video = ({ src, title }) => {
    return (
      <div className="video-container">
        <iframe
          src={src}
          title={title}
          allowFullScreen
          frameBorder="0"
        ></iframe>
        <style jsx>{`
          .video-container {
            position: relative;
            padding-bottom: 56.25%; /* 16:9 */
            height: 0;
            overflow: hidden;
          }
  
          .video-container iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 80%;
          }
        `}</style>
      </div>
    );
  };
  
  export default Video;
  