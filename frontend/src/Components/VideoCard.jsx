import React from 'react';
import "../Style/VideoCard.css";

const VideoCard = ({ 
  title, 
  description, 
  imageUrl, 
  channelName, 
  channelAvatar, 
  views, 
  uploadTime, 
  duration 
}) => {
  return (
    <div className="card">
      <div className="video">
        <img src={imageUrl} alt={title} />
        <div className="duration">{duration}</div>
      </div>
      <div className="videoInfo">
        <div className="channelAvatar">
          <img src={channelAvatar} alt={channelName} />
        </div>
        <div className="videoDetails">
          <h3 className="videoTitle">{title}</h3>
          <p className="channelName">{channelName}</p>
          <div className="videoMeta">
            <span>{views} views</span>
            <span>{uploadTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const VideoCardList = () => {
  const videos = [
    {
      title: "Building a Modern Web Application with React",
      description: "Learn how to build a modern web application using React and modern tools",
      imageUrl: "https://i.ytimg.com/vi/JKccS9k56_I/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLB3buPALCIV0BuL0oSYAkX-ViJzZw",
      channelName: "Tech Academy",
      channelAvatar: "https://yt3.googleusercontent.com/ytc/APkrFKaqca-xQcJtp1Pqv-APucCa0nToHYGPVT00YiQ0Lg=s176-c-k-c0x00ffffff-no-rj",
      views: "1.2M",
      uploadTime: "2 months ago",
      duration: "15:24"
    },
    {
      title: "JavaScript Tips and Tricks Every Developer Should Know",
      description: "Essential JavaScript tips for modern web development",
      imageUrl: "https://images.unsplash.com/photo-1621520456501-7b6d5b6f7f6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      channelName: "Code Masters",
      channelAvatar: "https://yt3.googleusercontent.com/ytc/APkrFKaqca-xQcJtp1Pqv-APucCa0nToHYGPVT00YiQ0Lg=s176-c-k-c0x00ffffff-no-rj",
      views: "856K",
      uploadTime: "1 month ago",
      duration: "12:45"
    },
    {
      title: "React Hooks Explained in Detail",
      description: "Deep dive into React Hooks and their use cases",
      imageUrl: "https://images.unsplash.com/photo-1621520456501-7b6d5b6f7f6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      channelName: "Web Dev Pro",
      channelAvatar: "https://yt3.googleusercontent.com/ytc/APkrFKaqca-xQcJtp1Pqv-APucCa0nToHYGPVT00YiQ0Lg=s176-c-k-c0x00ffffff-no-rj",
      views: "542K",
      uploadTime: "3 weeks ago",
      duration: "18:30"
    }
  ];

  return (
    <div className="videocard">
      {videos.map((video, index) => (
        <VideoCard key={index} {...video} />
      ))}
    </div>
  );
}

export default VideoCardList;