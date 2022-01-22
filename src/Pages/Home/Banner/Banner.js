import React from 'react';
import './Banner.css'
import { Card } from 'react-bootstrap';
import banner from '../../../images/bannerbackground.png'

const Banner = () => {

    return (
      <div>
        <Card className="text-black text-center">
          <Card.Img src={banner} className="bannerImg" alt="Card image" />
          <Card.ImgOverlay className="pt-5">
            <Card.Title className="fs-2">
              best food waiting for your belly!
            </Card.Title>
            <div className="search">
              <input
                className="rounded-pill border-0 px-3 py-1 mt-2 me-2"
                type="text"
              />
              <button className="search-btn btn btn-sm btn-danger rounded-pill px-3">
                Search
              </button>
            </div>
          </Card.ImgOverlay>
        </Card>
      </div>
    );
};

export default Banner;