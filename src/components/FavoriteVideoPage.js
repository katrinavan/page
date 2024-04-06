import React from 'react';
import './FavoriteVideoPage.css';

const FavoriteVideoPage = () => {
  const videoSrc = "https://www.youtube.com/embed/odwksjh6wCQ?si=MoapwD9k2mT6LSJX"; // Replace VIDEO_ID with your video's ID

  return (
    <div className="favorite-videos-page">
      <h1>Favorite Video</h1>
      {/* Embed the YouTube video */}
      <iframe width="560" height="315" src="https://www.youtube.com/embed/odwksjh6wCQ?si=MoapwD9k2mT6LSJX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      {/* You can repeat the iframe or map over an array of video IDs to embed multiple videos */}
      <p>
        I have a love for cats /ᐠ｡ꞈ｡ᐟ\
      </p>
    </div>
  );
};

export default FavoriteVideoPage;
