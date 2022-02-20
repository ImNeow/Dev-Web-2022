import React from 'react';
import { Carousel } from "react-bootstrap";

const imgCarrouselNames = ["store1.webp", "store2.webp", "store3.webp", "store4.webp",
                             "store5.webp", "store6.webp", "store7.webp", "store8.webp",
                             "store9.webp", "store10.webp", "store11.webp"];
const CustomCarousel = () => {
    return (
        <Carousel>
            {imgCarrouselNames.map((myPicture) => {
                return(
                    <Carousel.Item key={myPicture} interval={5000}>
                        <img
                        className="d-block w-100"
                        src={"pictures/storeCarousel/"+myPicture} 
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                );
            })}
            
            
        </Carousel>
      );
};
export default CustomCarousel;