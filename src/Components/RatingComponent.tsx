import React, { useState } from 'react';
import './RatingComponent.css'; 
import img from '../images/icon-star.svg'
import img1 from '../images/illustration-thank-you.svg'

interface RatingComponentProps {}

const RatingComponent: React.FC<RatingComponentProps> = () => {
  const [submitted, setSubmitted] = useState(false);
  const [selectedRating, setSelectedRating] = useState<number>(0);

  const handleRatingClick = (rating: number) => {
    setSelectedRating(rating);
  };

  const handleSubmitRating = () => {
    setSubmitted(true);
  };

  const handleRateAgain = () => {
    setSubmitted(false);
    setSelectedRating(0);
  };

  return (
    <div>
      {!submitted && (
        <div className="container">
          <img src={img} alt="" className="containerImg" />
          <h1 className="containerH1">How did we do?</h1>

          <p className="containerP">
            Please let us know how we did with your support request. All feedback is
            appreciated to help us improve our offering!
          </p>

          <ul className="containerUl">
            {[1, 2, 3, 4, 5].map((rating) => (
              <li key={rating} className="containerUlLi">
                <button
                  className={`btn ${selectedRating === rating ? 'selected' : ''}`}
                  onClick={() => handleRatingClick(rating)}
                >
                  {rating}
                </button>
              </li>
            ))}
          </ul>

          <button className="btnSubmit" onClick={handleSubmitRating}>
            Submit
          </button>
        </div>
      )}

      {/* Additional feature: Display selected rating */}
      {submitted && (
        <div className="thank-you">
          <img src={img1} alt="" className="thankYouImg" />
          <p className="gray">
            You selected
            <span style={{ display: 'inline-block', margin: '0 0.3rem' }}>{selectedRating}</span>
            out of 5
          </p>
          <h2>Thank you!</h2>
          <p>
            We appreciate you taking the time to give a rating. If you ever need more support,
            don’t hesitate to get in touch!
          </p>
          <button className="btnSubmit" onClick={handleRateAgain}>
            Rate Again
          </button>
        </div>
      )}
       <div className="attribution">
        Challenge by
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by
        <a href="https://kevorklepedjian.vercel.app/" target="_blank" rel="noreferrer">
          Kevork Lepedjian
        </a>
      </div>
    
    </div>
  );
};

export default RatingComponent;
