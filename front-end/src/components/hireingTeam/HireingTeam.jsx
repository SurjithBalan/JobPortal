import React from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import "./HireingTeam.css";
import HiringteamImage from "../../assets/image/teamhireing.jpg";

// Import slick styles in App.js or here if not already imported
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HireingTeam = () => {
    const settings = {
        dots: true,                // ✅ Enables pagination dots
        arrows: true,              // Optional: show next/prev arrows
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: false,
                },
            },
        ],
    };

    return (
        <Container className="hireing-team-section my-5">
            <Slider {...settings}>
                {/* Slide 1: Image */}
                <div className="slider-item">
                    <div className="image-wrapper text-center">
                        <img
                            src={HiringteamImage}
                            alt="Hiring Team"
                            className="img-fluid w-100"
                        />
                    </div>
                </div>

                {/* Slide 2: Text Content */}
                <div className="slider-item text-center p-3">
                    <h6 className="text-primary" style={{ color: "red" }}>
                        HIRE YOUR DREAM TEAM
                    </h6>
                    <h1>Transform Your Hiring Experience With Skylark HR Solutions</h1>
                    <p> 
                        At Skylark HR Solutions, we understand the critical role of finding
                        the right talent for your organization. Our team of experts is
                        dedicated to providing hiring support tailored to your unique needs.
                        With 10 years of experience, we have developed a comprehensive
                        recruitment approach that ensures you find the best candidates for
                        your mid and senior-level positions.
                    </p>
                    <button className="btn btn-success">Contact us</button>
                </div>
            </Slider>
        </Container>
    );
};

export default HireingTeam;