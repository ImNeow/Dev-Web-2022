import React from 'react';
import { Carousel } from "react-bootstrap";

const imgCarrouselNames = ["store1.jpg", "store2.jpg", "store3.jpg", "store4.jpg",
                             "store5.jpg", "store6.jpg", "store7.jpg", "store8.jpg",
                             "store9.jpg", "store10.jpg", "store11.jpg"];
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
                        {/*<Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>*/}
                    </Carousel.Item>
                );
            })}
            
            
        </Carousel>
      );
};
export default CustomCarousel;
