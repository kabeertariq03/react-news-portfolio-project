import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsItem from './NewsItem';
import { BrowserRouter as Router, Route, Link, Routes, BrowserRouter } from "react-router-dom"

export default function News({ country, category, ApiKey }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [moreLoad, setMoreLoad] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const Apikey = import.meta.env.VITE_API_KEY;
      
      const URL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${Apikey}&page=${page}`;
      
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data.articles);
      if (data.articles.length === 0) {
        setHasMore(false);
      } else {
        setArticles(prevArticles => [...prevArticles, ...data.articles]);
        setLoading(false);

      }
      setMoreLoad(false)
    };
    fetchData();
  }, [country, category, page]);

  const loadMoreArticles = () => {
    setPage(prevPage => prevPage + 1);
    setMoreLoad(true)
  };

  const renderEndMessage = () => {
    return hasMore || (
      <p style={{ textAlign: "center" }}>
        <h1>Great, you've caught up with all the latest {category} news for now!</h1>
      </p>
    );
  };

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }


  return (
    <>
    
      <div className="container text-center">
        <h1>Top {capitalizeFirstLetter(category)} News</h1>
      </div>

      {loading  && (
        <div className="d-flex justify-content-center align-items-center">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      )}
      {!loading && articles.length === 0 && <div>No articles found.</div>}
      {!loading && articles.length > 0 && (
        <InfiniteScroll
          dataLength={articles.length}
          next={loadMoreArticles}
          hasMore={hasMore}
          endMessage={renderEndMessage()}
        >
          <div className="container w-100">
            <div className="row">
              {articles.map((article, index) => (
                <NewsItem article={article} key={index} />
              ))}
              {moreLoad && (
                <div className="d-flex justify-content-center align-items-center my-3">
                  <div className="spinner-border text-primary" role="status">
                    <span className="sr-only"></span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </InfiniteScroll>
      )}
    </>
  );
}
