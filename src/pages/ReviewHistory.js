import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SideNav from "../components/SideNav";
import Review from "../components/Review";
import "./ReviewHistory.css";

const ReviewHistory = () => {
  const navigate = useNavigate();
  const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, "$1");
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null); //
  const [titles, setTitles] = useState({});
  const [fetchedIsbns, setFetchedIsbns] = useState(new Set());

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      fetchReviews();
    }
  }, []);

  const fetchReviews = async () => {
    try {

      const response = await fetch('/reviews/all', {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        },
      });
      const data = await response.json();
      setReviews(data.reviews);

    } catch (error) {
      console.error(error);
    }
  };

  const deleteReview = async (isbn, token) => {
    try {
      const response = await fetch(`/book/${isbn}/review/delete`, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        },
      });
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };


  async function fetchTitleData(review) {
    if (fetchedIsbns.has(review.isbn)) {
      return;
    }

    const response = await fetch(`/book/${review.isbn}/title`);
    const data = await response.json();

    setTitles((prevTitles) => ({ ...prevTitles, [review.isbn]: data.title }));

    setFetchedIsbns((prevIsbns) => prevIsbns.add(review.isbn));
  }

  return (
    <div className="wishlist">
      <SideNav />
      <div className="wishlist-container">
        {reviews.length > 0 ? (
          reviews.map((review) => {
            fetchTitleData(review);

            if (titles[review.isbn]) {
              return (
                <div key={review.review_id}>
                  <h2>{titles[review.isbn]}</h2>
                  <Review review={review} />
                  <div className="button-stack">
                    <button
                      className="button"
                      onClick={() => deleteReview(review.isbn)}
                      style={{ backgroundColor: "#fce705" }}
                    >
                      Delete Review
                    </button>
                  </div>
                </div>
              );
            }

            return <></>;
          })
        ) : (
          <p>You have not left any reviews.</p>
        )}
      </div>
    </div>
  );
};

export default ReviewHistory;
