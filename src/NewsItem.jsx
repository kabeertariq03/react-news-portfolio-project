import React from 'react';

export default function NewsItem({ article}) {
  return (
    <div className="col-md-4 mt-1">
      <div className="card">
        <img
          src={article.urlToImage}
          className="card-img-top"
          alt={article.title}
        />
        <div className="card-body">
          <h5 className="card-title">{article.title}</h5>
          <p className="card-text">{article.description}</p>
          <a
            href={article.url}
            target="_blank"
            rel="noopener"
            className="btn btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
