import React from 'react';
import { FaStar } from 'react-icons/fa';
import { BsFillBagHeartFill } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
const Card = ({ img, title, starCount, newPrice, reviews, prevPrice }) => {
  return (
    <section className="card">
      <img src={img} alt={title} className="card-image" />
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <section className="card-reviews">
          {Array.from({ length: starCount }, (_, i) => (
            <AiFillStar key={i} className="rating-star" />
          ))}
          <span className="total-reviews">{reviews}</span>
        </section>
        <section className="card-price">
          <div className="price">
            <del style={{ marginRight: '5px' }}>{prevPrice}</del>
            {newPrice}
          </div>
          <div className="bag">
            <BsFillBagHeartFill className="bag-icon" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Card;
