/*import React from 'react';
import './ClinicConsultation.css';

const ClinicConsultation = () => {
  const specialties = [
    {
      image: '/path/to/dentist-image.png',
      title: 'Dentist',
      description: 'Teething troubles? Schedule a dental checkup',
      link: 'https://example.com/dentist',
    },
    {
      image: '/path/to/gynecologist-image.png',
      title: 'Gynecologist/Obstetrician',
      description: 'Explore for women’s health, pregnancy, and infertility treatments',
      link: 'https://example.com/gynecologist',
    },
    {
      image: '/path/to/dietitian-image.png',
      title: 'Dietitian/Nutrition',
      description: 'Get guidance on eating right, weight management, and sports nutrition',
      link: 'https://example.com/dietitian',
    },
    {
      image: '/path/to/physiotherapist-image.png',
      title: 'Physiotherapist',
      description: 'Pulled a muscle? Get it treated by a trained physiotherapist',
      link: 'https://example.com/physiotherapist',
    },
  ];

  return (
    <div className="clinic-consultation">
      <div className="header">
        <div className="header-left">
          <h2>Book an appointment for an in-clinic consultation</h2>
          <p>Find experienced doctors across all specialties</p>
        </div>
      </div>
      <div className="specialties-grid">
        {specialties.map((specialty, index) => (
          <div className="specialty-card" key={index}>
            <img src={specialty.image} alt={specialty.title} className="specialty-image" />
            <h3>{specialty.title}</h3>
            <p>{specialty.description}</p>
            <a href={specialty.link} target="_blank" rel="noopener noreferrer" className="specialty-link">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClinicConsultation;
*/


/*import React from "react";
import "./ClinicConsultation.css";

const ClinicConsultation = () => {
  const cards = [
    {
      title: "Dentist",
      description: "Teething troubles? Schedule a dental checkup",
      image: "assets/dentist.jpeg",
      link: "/dentist",
    },
    {
      title: "Gynecologist/Obstetrician",
      description: "Explore for women's health, pregnancy, and infertility treatments",
      image: "assets/gyneco.jpeg",
      link: "/gynecologist",
    },
    {
      title: "Dietitian/Nutrition",
      description: "Get guidance on eating right, weight management, and sports nutrition",
      image: "assets/dietitian.jpeg",
      link: "/dietitian",
    },
    {
      title: "Physiotherapist",
      description: "Pulled a muscle? Get it treated by a trained physiotherapist",
      image: "assets/physio.jpeg",
      link: "/physiotherapist",
    },
    {
      title: "General Surgeon",
      description: "Need to get operated? Find the right surgeon",
      image: "assets/general.jpeg",
      link: "/surgeon",
    },
    {
      title: "Orthopedist",
      description: "For Bone and Joints issues, spinal injuries, and more",
      image: "assets/ortho.jpg",
      link: "/orthopedist",
    },
    {
      title: "General Physician",
      description: "Find the right family doctor in your neighborhood",
      image: "assets/blog1.jpg",
      link: "/physician",
    },
    {
      title: "Pediatrician",
      description: "Child Specialists and Doctors for Infant",
      image: "assets/pediatrician.jpeg",
      link: "/pediatrician",
    },
  ];

  return (
    <div className="app">
      <header className="header">
        <h1>Book an appointment for an in-clinic consultation</h1>
        <p>Find experienced doctors across all specialties</p>
      </header>
      <div className="vertical-scroll-container">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} alt={card.title} className="card-image" />
            <h2>
              <a href={card.link} className="card-title">
                {card.title}
              </a>
            </h2>
            <p>
              <a href={card.link} className="card-description">
                {card.description}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClinicConsultation;
*/




import React, { useRef } from "react";
import "./ClinicConsultation.css";

const ClinicConsultation = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollContainerRef;
    if (current) {
      current.scrollBy({
        left: direction === "left" ? -200 : 200, // Adjust scroll distance
        behavior: "smooth",
      });
    }
  };

  const cards = [
    {
        title: "Dentist",
        description: "Teething troubles? Schedule a dental checkup",
        image: "assets/dentist.jpeg",
        link: "/dentist",
      },
      {
        title: "Gynecologist/Obstetrician",
        description: "Explore for women's health, pregnancy, and infertility treatments",
        image: "assets/gyneco.jpeg",
        link: "/gynecologist",
      },
      {
        title: "Dietitian/Nutrition",
        description: "Get guidance on eating right, weight management, and sports nutrition",
        image: "assets/dietitian.jpeg",
        link: "/dietitian",
      },
      {
        title: "Physiotherapist",
        description: "Pulled a muscle? Get it treated by a trained physiotherapist",
        image: "assets/physio.jpeg",
        link: "/physiotherapist",
      },
      {
        title: "General Surgeon",
        description: "Need to get operated? Find the right surgeon",
        image: "assets/general.jpeg",
        link: "/surgeon",
      },
      {
        title: "Orthopedist",
        description: "For Bone and Joints issues, spinal injuries, and more",
        image: "assets/ortho.jpg",
        link: "/orthopedist",
      },
      {
        title: "General Physician",
        description: "Find the right family doctor in your neighborhood",
        image: "assets/blog1.jpg",
        link: "/physician",
      },
      {
        title: "Pediatrician",
        description: "Child Specialists and Doctors for Infant",
        image: "assets/pediatrician.jpeg",
        link: "/pediatrician",
      },
  ];

  return (
    <div className="app">
      <div className="header">
        <h1>Book an appointment for an in-clinic consultation</h1>
        <p>Find experienced doctors across all specialties</p>
      </div>
      <div className="horizontal-scroll-container" ref={scrollContainerRef}>
        <button className="arrow left" onClick={() => scroll("left")}>
          &#8592;
        </button>
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <img
              src={card.image}
              alt={card.title}
              className="card-image"
            />
            <div className="card-title">{card.title}</div>
            <div className="card-description">{card.description}</div>
          </div>
        ))}
        <button className="arrow right" onClick={() => scroll("right")}>
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default ClinicConsultation;

