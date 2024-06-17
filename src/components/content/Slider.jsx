import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Cards } from '../utils';
import img2 from "../../assets/image_6.png";



const Slider1 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <Slider {...settings}>
            <div>
                <div className="stats-cards cards">
                    <Cards
                        image={img2}
                        name={"Dr Ramnaresh Soudri"}
                        designation={"Consultant Interventional Cardiologist"}
                        time={"10:00 AM - 4:00 PM"}
                        exp={"Exp: 10+ Yrs"}
                    />
                    <Cards
                        image={img2}
                        name={"Dr Naga Srinivaas Akondi"}
                        designation={"Senior Consultant Cardiologist"}
                        time={"10:00 AM - 4:00 PM"}
                        exp={"Exp: 25+ Yrs"}
                    />
                </div>
            </div>
            <div>
                <div className="stats-cards cards">
                    <Cards
                        image={img2}
                        name={"Dr Ramnaresh Soudri"}
                        designation={"Consultant Interventional Cardiologist"}
                        time={"10:00 AM - 4:00 PM"}
                        exp={"Exp: 10+ Yrs"}
                    />
                    <Cards
                        image={img2}
                        name={"Dr Naga Srinivaas Akondi"}
                        designation={"Senior Consultant Cardiologist"}
                        time={"10:00 AM - 4:00 PM"}
                        exp={"Exp: 25+ Yrs"}
                    />
                </div>
            </div>
            <div>
                <div className="stats-cards cards">
                    <Cards
                        image={img2}
                        name={"Dr Ramnaresh Soudri"}
                        designation={"Consultant Interventional Cardiologist"}
                        time={"10:00 AM - 4:00 PM"}
                        exp={"Exp: 10+ Yrs"}
                    />
                    <Cards
                        image={img2}
                        name={"Dr Naga Srinivaas Akondi"}
                        designation={"Senior Consultant Cardiologist"}
                        time={"10:00 AM - 4:00 PM"}
                        exp={"Exp: 25+ Yrs"}
                    />
                </div>
            </div>
        </Slider>
    );
};

export default Slider1;
