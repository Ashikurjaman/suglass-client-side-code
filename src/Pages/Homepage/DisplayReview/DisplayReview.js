import { Rating } from '@mui/material';
import React from 'react';
import img from "../../../images/player-1.png"


const DisplayReview = ({ review }) => {
    const { name, description, rating } = review;
    return (
        <div>
            <div class="col">
                <div class="card h-100 p-2">
                    <div class="card-body">
                    <div>
                            <img src={img} class="card-img-top" alt="..." />
                        </div>
                        
                    </div>
                    <div className=" ms-3 ">
                    <p class="card-text">{description?.slice(0,170)}</p>
                    <br/>
                        <div className="ms-3 mt-2">
                            <h6>{name}</h6>
                            <br/>
                            <div>
                                <Rating name="read-only" value={rating} readOnly />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayReview;