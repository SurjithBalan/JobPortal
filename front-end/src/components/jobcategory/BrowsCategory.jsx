import React from "react";
import { Card } from "react-bootstrap";
import Slider from "react-slick";
import { BsLaptop, BsHeadset, BsGraphUp, BsPeople, BsCalculator, BsMegaphone, BsHeartPulse, BsGear, BsPersonLinesFill, BsBriefcase, BsTools, BsFillPatchQuestionFill } from "react-icons/bs";

const jobCategories = [
    { id: 1, name: "IT", openings: 81, logo: <BsLaptop size={50} /> },
    { id: 2, name: "BPO", openings: 8, logo: <BsHeadset size={50} /> },
    { id: 3, name: "Sales & Marketing", openings: 14, logo: <BsGraphUp size={50} /> },
    { id: 4, name: "Customer Service", openings: 1, logo: <BsPeople size={50} /> },
    { id: 5, name: "Accounts", openings: 5, logo: <BsCalculator size={50} /> },
    { id: 6, name: "Digital Marketing", openings: 7, logo: <BsMegaphone size={50} /> },
    { id: 7, name: "Health Care", openings: 1, logo: <BsHeartPulse size={50} /> },
    { id: 8, name: "Manufacturing", openings: 6, logo: <BsGear size={50} /> },
    { id: 9, name: "Skin Clinic", openings: 4, logo: <BsPersonLinesFill size={50} /> },
    { id: 10, name: "Human Resources", openings: 11, logo: <BsBriefcase size={50} /> },
    { id: 11, name: "Operations", openings: 10, logo: <BsTools size={50} /> },
    { id: 12, name: "Miscellaneous", openings: 5, logo: <BsFillPatchQuestionFill size={50} /> },
];

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <button className="slick-next">&#8250;</button>,
    prevArrow: <button className="slick-prev">&#8249;</button>,
};

const JobCategoriesCarousel = () => {
    return (
        <div className="container py-5">
            <h2 className="mb-4 text-center fw-bold">Top companies hiring now</h2>
            <Slider {...settings}>
                {jobCategories.map((category) => (
                    <div key={category.id} className="px-2">
                        <Card className="shadow-sm p-3 rounded-4 border-0 text-center">
                            <div className="mb-3 text-primary">{category.logo}</div>
                            <h5 className="fw-bold">{category.name} &gt;</h5>
                            <p>{category.openings} are actively hiring</p>
                        </Card>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default JobCategoriesCarousel;