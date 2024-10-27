import React from "react";

const VideoSection = () => {
  const videos = [
    {
      title: "12 month vegetable farming",
      videoUrl: "https://www.youtube.com/watch?v=7LDm72BgRGI",
    },
    {
      title: "Farming on rooftop",
      videoUrl: "https://www.youtube.com/watch?v=cmKHkjqenc0",
    },
    // Add more videos as needed
  ];

  return (
    <div className="mt-20 p-10">
      <h2
        data-aos="fade-down"
        data-aos-duration="3000"
        className="text-center text-4xl font-bold"
      >
        Video Section
      </h2>
      <div className="w-4/5 text-center mx-auto">
        <hr />
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5 m-5 p-5">
        {videos.map((video) => (
          <div key={video.title}>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${getYouTubeVideoId(
                video.videoUrl
              )}`}
              title={video.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <p className="text-xl text-black mt-5">Title: {video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Function to extract YouTube video ID from URL
const getYouTubeVideoId = (url) => {
  const match = url.match(/[?&]v=([^?&]+)/);
  return match && match[1];
};

export default VideoSection;
