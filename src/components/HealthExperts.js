import React from "react";
import "./HealthExperts.css";

const HealthExperts = () => {
  const articles = [
    {
      category: "CORONAVIRUS",
      title: "12 Coronavirus Myths and Facts That You Should Be Aware Of",
      author: "Dr. Diana Borgio",
      image: "/assets/doc1.jpg",
      link: "/coronavirus-myths",
      
    },
    {
      category: "VITAMINS AND SUPPLEMENTS",
      title: "Eating Right to Build Immunity Against Cold and Viral Infections",
      author: "Dr. Diana Borgio",
      image: "assets/OIP.jpeg",
      link: "/build-immunity",
    },
  ];

  return (
    <div className="app">
      <div className="articles-section">
        <div className="left-content">
          <h1>Read top articles from health experts</h1>
          <p>
            Health articles that keep you informed about good health practices
            and achieve your goals.
          </p>
          <a href="/all-articles" className="see-all-button">
            See all articles
          </a>
        </div>
        <div className="right-content">
          {articles.map((article, index) => (
            <div className="article-card" key={index}>
              <img
                src={article.image}
                alt={article.title}
                className="article-image"
              />
              <div className="article-details">
                <a href={article.link} className="article-category">
                  {article.category}
                </a>
                <a href={article.link} className="article-title">
                  {article.title}
                </a>
                <p className="article-author">{article.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthExperts;
