import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

const importAll = (r) => r.keys().map(r);
const goodImage = importAll(require.context('../../img/', false, /bien.*\.jpg$/));
const badImage = importAll(require.context('../../img/', false, /mal.*\.jpg$/));

const Home = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const navigate = useNavigate(); // Utilisez useNavigate ici

    // Fonction pour naviguer vers une nouvelle page
    const navigateToNewPage = () => {
        navigate('../PrezVideo'); // Utilisez le chemin de votre nouvelle page
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % goodImage.length);
        }, 5000); // 5000ms = 5 secondes

        return () => clearInterval(timer);
    }, []);
    return (
        <div className="main-container"> {/* This is the .main-container in your CSS */}
            <div className="side-panel picture_left"> {/* This is your .side-panel and .picture_left */}
                {/* This is where you would put your image or content for the left panel */}
                <img src={badImage[currentImageIndex]} alt={`Content ${currentImageIndex}`} />
            </div>
            <div className="side-panel center-content present"> {/* This is your .center-content and .present */}
                <h2>Présentation</h2>
                {/* Other content for your center panel goes here */}
                <p>Bienvenue sur l'application P-Chaud !
                    <br />Cette application a pour but de vous sensibiliser sur le réchauffement climatique et de vous aider à réduire votre empreinte carbone.
                    <br />Comment ? C'est très simple, il s'agit d'une application de rencontre !
                    <br />Chaque card représente un thème avec une question.
                    <br />Vous allez pouvoir répondre vrai ou faux et voir si vous matchez avec le climat
                    <br />Si vous matchez alors vous allez pouvoir flirter avec le thème du climat !
                    <br />Alors amusez-vous, renseignez-vous et sauvez la planète !
                </p>
                <button className="call-to-action">Prêt à sauver la planète ?</button>
                <button className="call-to-action" onClick={navigateToNewPage}>Présentation du sujet</button>
            </div>
            <div className="side-panel picture_right"> {/* This is your .side-panel and .picture_right */}
                {/* This is where you would put your image or content for the right panel */}
                <img src={goodImage[currentImageIndex]} alt={`Content ${currentImageIndex}`} />
            </div>
        </div>
    );
};

export default Home;
