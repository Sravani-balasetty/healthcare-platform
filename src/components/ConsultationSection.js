import React from 'react';
import './ConsultationSection.css';

const ConsultationSection = () => {
  const consultations = [
    {
      image: 'assets/preg.jpeg',
      title: 'Period doubts or Pregnancy',
      link: 'https://example.com/period-doubts',
    },
    {
      image: 'assets/acne.jpeg',
      title: 'Acne, pimple or skin issues',
      link: 'https://example.com/skin-issues',
    },
    {
      image: 'assets/bed.jpg',
      title: 'Performance issues in bed',
      link: 'https://example.com/performance-issues',
    },
    {
      image: 'assets/cold.jpeg',
      title: 'Cold, cough or fever',
      link: 'https://example.com/cold-cough',
    },
    {
      image: 'assets/child.jpeg',
      title: 'Child not feeling well',
      link: 'https://example.com/child-health',
    },
    {
      image: 'assets/depression.png',
      title: 'Depression or anxiety',
      link: 'https://example.com/depression',
    },
  ];

  return (
    <div className="consultation-section">
      <div className="section-header">
        <div className="header-left">
          <h2>Consult top doctors online for any health concern</h2>
          <p>Private online consultations with verified doctors in all specialties</p>
        </div>
        <div className="header-right">
          <a href="https://example.com/all-specialties" className="view-all">
            View All Specialties
          </a>
        </div>
      </div>
      <div className="consultation-grid">
        {consultations.map((consultation, index) => (
          <div className="consultation-card" key={index}>
            <img src={consultation.image} alt={consultation.title} className="consultation-image" />
            <h3>{consultation.title}</h3>
            <a href={consultation.link} target="_blank" rel="noopener noreferrer" className="consult-link">
              CONSULT NOW
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConsultationSection;


/*import React from "react";
import "./ConsultationSection.css";

const consultations = [
    {
        image: 'assets/preg.jpeg',
        title: 'Period doubts or Pregnancy',
        link: 'https://example.com/period-doubts',
      },
      {
        image: 'assets/acne.jpeg',
        title: 'Acne, pimple or skin issues',
        link: 'https://example.com/skin-issues',
      },
      {
        image: 'assets/bed.jpg',
        title: 'Performance issues in bed',
        link: 'https://example.com/performance-issues',
      },
      {
        image: 'assets/cold.jpeg',
        title: 'Cold, cough or fever',
        link: 'https://example.com/cold-cough',
      },
      {
        image: 'assets/child.jpeg',
        title: 'Child not feeling well',
        link: 'https://example.com/child-health',
      },
      {
        image: 'assets/depression.png',
        title: 'Depression or anxiety',
        link: 'https://example.com/depression',
      },
];

const ConsultationSection = () => {
  return (
    <div className="consultation-section-wrapper">
      <div className="consultation-section-header">
        <h2>Consult top doctors online for any health concern</h2>
        <p>Private online consultations with verified doctors in all specialties</p>
        <a href="#" className="view-all-link">
          View All Specialties
        </a>
      </div>
      <div className="consultation-section-container">
        {consultations.map((consult, index) => (
          <div className="consult-card" key={index}>
            <div className="image-wrapper">
              <img src={consult.img} alt={consult.title} />
            </div>
            <h3>{consult.title}</h3>
            <a href={consult.link} className="consult-link">
              CONSULT NOW
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConsultationSection;
*/