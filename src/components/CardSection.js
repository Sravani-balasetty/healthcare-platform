import React from 'react';
import './CardSection.css';

const CardSection = () => {
  const cards = [
    {
      image: 'assets/video.jpg', // Replace with your actual image path
      title: 'Instant Video Consultation',
      description: 'Connect within 60 secs',
      link: 'https://example.com/video-consultation', // Replace with the URL
    },
    {
      image: 'assets/doc2.jpg', // Replace with your actual image path
      title: 'Find Doctors Near You',
      description: 'Confirmed appointments',
      link: 'https://example.com/find-doctors', // Replace with the URL
    },
    {
      image: 'assets/doc3.jpg', // Replace with your actual image path
      title: 'Surgeries',
      description: 'Safe and trusted surgery centers',
      link: 'https://example.com/surgeries', // Replace with the URL
    },
  ];

  return (
    <div className="card-section">
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.image} alt={card.title} className="card-image" />
          <h3>
            <a href={card.link} target="_blank" rel="noopener noreferrer" className="card-title">
              {card.title}
            </a>
          </h3>
          <p>
            <a href={card.link} target="_blank" rel="noopener noreferrer" className="card-description">
              {card.description}
            </a>
          </p>
        </div>
      ))}
    </div>
  );
};

export default CardSection;
