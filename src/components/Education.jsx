import React, { useEffect, useState } from "react";
import axios from "axios";
// import "./NewsList.css";

const Education = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const apiKey = "pub_653173d613a44eaf74b46df868d00513e8641";
  const apiUrl = `https://newsdata.io/api/1/news?apikey=${apiKey}&q=sports&country=in&language=mr&category=education `;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(apiUrl);
        if (response.data.status === "success") {
          setArticles(response.data.results);
        } else {
          setError("No articles found.");
        }
      } catch (err) {
        setError("Failed to fetch news.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="news-container">
      {articles.map((article, index) => (
        <div key={index} className="news-card">
          <h2>{article.title}</h2>
          <p>{article.description || "No description available."}</p>
          <a href={article.link} target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        </div>
      ))}
    </div>
  );
};

export default Education;
