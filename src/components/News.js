import React from "react";

const News = ({ data }) => {
  const renderNews = data.map((news) => {
    const {
      abstract,
      _id,
      headline: { main },
      news_desk,
      section_name,
      word_count,
      web_url,
    } = news;
    return (
      <div className="news-data-2" key={_id}>
        <h1>{main}</h1>
        <p>{abstract}</p>
        <ul>
          <li>
            <span>News Desk:</span> {news_desk}
          </li>
          <li>
            <span>Section Name:</span> {section_name}
          </li>
          <li>
            <span>Word Count:</span> {word_count}
          </li>
        </ul>

        <a href={web_url} target="_blank">
          Web Resource
        </a>
      </div>
    );
  });

  return <div className="news-data">{renderNews}</div>;
};

export default News;
