import React from 'react'; // Import React for component creation

const healthyVideos = [
  {
    url: "https://www.youtube.com/watch?v=fqhYBTg73fw", 
    title: "What's the Best Diet? Healthy Eating 101",
  },
  {
    url: "https://www.youtube.com/watch?v=Q4yUlJV31Rk", 
    title: "How to make healthy eating unbelievably easy",
  },
  {
    url: "https://www.youtube.com/watch?v=AYXfaVD5o40", 
    title: "Cheap And Healthy Meals For The Week, Done In 1 Hour",
  },
  {
    url: "https://www.youtube.com/watch?v=jwWpTAXu-Sg", // Full YouTube URL
    title: "BEGINNERS GUIDE TO HEALTHY EATING | 15 healthy eating tips",
  },
];

const HealthyVideos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        These are some videos that show the benefits of eating healthy in daily life
      </h5>
      <ul className="flex flex-wrap justify-center"> {/* Improved layout */}
        {healthyVideos.map((video, index) => (
          <li
            className="flex items-center justify-center m-2" // Added margin
            key={index}
          >
            <a href={video.url} target="_blank" rel="noreferrer noopener">
              {video.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HealthyVideos;
