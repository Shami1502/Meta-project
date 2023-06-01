import React from 'react'
import './article.css';

const Article = ({imgUrl,date,text}) => {
  return (
    <>
      <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        <h3>{date}</h3>
        <p>{text}</p>
      </div>
      <p>Order Deleivery</p>
    </div>
  </div>
    </>
  )
}

export default Article
