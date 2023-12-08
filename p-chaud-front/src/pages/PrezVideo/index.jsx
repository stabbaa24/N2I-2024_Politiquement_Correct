import React, { useState, useEffect } from 'react';
import '../Home/home.css'; // Assuming you have saved the provided CSS in home.css

const importAll = (r) => r.keys().map(r);
const goodImage = importAll(require.context('../../img/', false, /bien.*\.jpg$/));
const badImage = importAll(require.context('../../img/', false, /mal.*\.jpg$/));
const PrezVideo = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Effect to cycle through images every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % goodImage.length);
        }, 5000); // 5000ms = 5 seconds

        // Clear the interval on component unmount
        return () => clearInterval(timer);
    }, []);
    return (
        <div className="main-container"> {/* This is the .main-container in your CSS */}
            <div className="side-panel picture_left"> {/* This is your .side-panel and .picture_left */}
                {/* This is where you would put your image or content for the left panel */}
                <img src={badImage[currentImageIndex]} alt={`Content ${currentImageIndex}`} />
            </div>
            <div className="side-panel center-content present"> {/* This is your .center-content and .present */}
                <h2>Vidéo de présentation de notre projet</h2>

                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/-Efu5D-cA50?si=Q3aZd1bVe0QQDrfG" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe>

            </div>
            <div className="side-panel picture_right"> {/* This is your .side-panel and .picture_right */}
                {/* This is where you would put your image or content for the right panel */}
                <img src={goodImage[currentImageIndex]} alt={`Content ${currentImageIndex}`} />
            </div>
        </div>
    );
};

export default PrezVideo;
