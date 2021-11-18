import React, { useEffect, useState } from 'react';
import DisplayReview from '../DisplayReview/DisplayReview';


const DisplayReviews = () => {
    
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/addreviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    })
    return (
        <div>
            <div>
                <h1 className="text-center mb-5 mt-5">Customer reviews</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 container mx-auto mb-5">
                {
                    reviews.map(review => <DisplayReview
                        key={review._id}
                        review={review}
                    ></DisplayReview>)
                }
            </div>
        </div>
    );
};

export default DisplayReviews;