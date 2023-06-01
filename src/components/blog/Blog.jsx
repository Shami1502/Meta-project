import React from 'react';
import "./blog.css";
import { blog2,blog3,blog4 } from './import';
import Article from '../article/Article';

const Blog = () => {
  return (
   <>
     <article className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1>This week Special</h1>
      <button> Online Menu</button>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog2} date="Green Salad" text="A green salad is a simple and delicious addition to any meal. There are so many different ingredients you can put into a salad. The list of ingredients and the different ways they can be prepared is very vast. Some of the most common vegetables you may find in a green salad are lettuce, spinach, bell peppers, tomatoes, and cucumbers" />
        <Article imgUrl={blog3} date="Lemon Dessert" text="A green salad is a simple and delicious addition to any meal.  are lettuce, spinach, bell peppers, tomatoes, and cucumbers" />
        <Article imgUrl={blog4} date="Brutteca" text="A green salad is a simple and delicious addition to any meal. There are so many different ingredients you can put into a salad. The list of ingredients and the different ways they can be prepared is very vast. Some of the most common vegetables you may find in a green salad are lettuce, spinach, bell peppers, tomatoes, and cucumbers" />
      </div>
    </div>
  </article>
   </>
  )
}

export default Blog
