import React from "react";
import hearthouse from "../assets/house-heart.svg";

function homeCarousel(){
    return(
        <div className="carousel-section">
            <div id="demo" className="carousel slide" data-bs-ride="carousel">

                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item carousel-item-style active">
                        <img src="https://img.perceptpixel.com/pykhlszs/food-banner-chinese.webp" alt="Los Angeles" className="d-block img-w-100 carousel-item-img"/>
                    </div>
                    <div className="carousel-item carousel-item-style">
                        <img src="https://img.perceptpixel.com/pykhlszs/f_webp/food-banner-three.webp" alt="Chicago" className="d-block img-w-100 carousel-item-img"/>
                    </div>
                    <div className="carousel-item carousel-item-style">
                        <img src="https://img.perceptpixel.com/pykhlszs/f_webp/food-banner-two.webp" alt="New York" className="d-block img-w-100 carousel-item-img"/>
                    </div>
                </div>

                {/* <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button> */}
            </div>

            <div className="container-fluid mt-3">
                <h3 className="brand-title"> 
                    <img src={hearthouse} alt="icon"/>
                        Kota Babe
                    <img src={hearthouse} alt="icon"/>
                </h3>
                <p className="welcome-txt">Welcome to Kota Babe, a house of tasty, freshly made kotas..</p>
                <p><span className="highlight-txt"> Check</span> and <span className="highlight-txt">Order</span> your favourite dishes right now.</p>
            </div>
        </div>
    )
}

export default homeCarousel;