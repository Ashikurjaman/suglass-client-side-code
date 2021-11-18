import { Rating } from '@mui/material';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



const DisplayReview = ({ review }) => {
    useEffect( () => {
        AOS.init();
      },[])
    const { name, description, rating } = review;
    return (
        <div>
            <div className="col">
                <div data-aos="zoom-in-up" className="card h-100 p-2">
                    <div data-aos="zoom-in-up" className="card-body">
                    <div>
                            <img data-aos="zoom-in-up" src="https://i.ibb.co/NS5Bw8J/player-1.png" className="card-img-top" alt="..." />
                        </div>
                        
                    </div>
                    <div className=" ms-3 ">
                    <p data-aos="zoom-in-up" className="card-text">{description?.slice(0,170)}</p>
                    <br/>
                        <div data-aos="zoom-in-up" className="ms-3 mt-2">
                            <h6>{name}</h6>
                            <br/>
                            <div>
                                <Rating data-aos="zoom-in-up" name="read-only" value={rating} readOnly />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayReview;