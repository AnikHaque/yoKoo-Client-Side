import React, { useEffect, useState } from 'react';
// import './Explore.css'
import SingleReview from '../singlereview/SingleReview'
import Star from '../Star'
const ManageReview = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://fast-reaches-25590.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (
        <div id="services">
            <h1 className="fw-bold mt-2 text-center mb-5">Our Reviews</h1>
            <div className="service-container">
                <div className="container">
            <div class="row row-cols-1 row-cols-md-4 g-4">
                {
                    reviews.map(review => <SingleReview
                        key={review.id}
                        review={review}
                    ></SingleReview>)
                }
                </div>
                </div>
            </div>
        </div>
    );
};

export default ManageReview;