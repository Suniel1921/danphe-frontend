import React from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import "./front-page.css";
import { TbReportAnalytics } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa";
import Let_start from "./Let_start";
import About_us from "./about_us box/About_us";
import Process_box from "./process_box/Process_box";
import Pricing_box from "./process_box/Pricing_box";
import FixedBackground from "./fixedBcakground/FixedBackground";
import Blog from "./Blog/Blog";
import FeedbackForm from "./FeedbackForm/FeedbackForm";
import Testimonials from "./Testimonials/Testimonials";
import Pricing_main from "./prcing_main/Pricing_main";
import Banner from "./Banner/Banner";
import Profile from "./Profile/Profile";
// import Banner2 from './pages/Banner copy/Banner2';
import imge from "./12.png";
import Footer from "./footer/Footer";

const Front_page = () => {
    return (
        <>
            <Banner />
            <div className="service_container">
                <div className="service_left" id="service_left">
                    <div className="serviceBG">
                        <span className="redDot"></span>
                        <p className="service">SERVICES</p>
                    </div>

                    <div className="service_heading">
                        We provide the best
                        <br /> solutions for your growth.
                    </div>
                </div>
                <div className="service_right">
                    <p className="service_paragraph">
                        A business consultant is a professional who provides expert advice
                        and guidance to businesses and organizations to help them improve
                        their performance, solve problems, and achieve their goals.
                    </p>
                    <div id="unique-hover-button">
                        <div id="unique-hover-button__div">
                            <span>
                                <p>READ ABOUT US</p>
                            </span>
                        </div>
                        <div id="unique-hover-button__div">
                            <span>
                                <p>READ ABOUT US</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-box">
                <div className="single-service-box">
                    <TbReportAnalytics className="single-icon" />

                    <h3 className="single-box-header">Insights & Analytics</h3>
                    <p className="single-box-paragraph">
                        We always provide people a complete solution focused of any
                        business.
                    </p>
                    <div className="read-more">
                        <FaArrowRight className="arrow_icon" />
                        <span className="text">Read More</span>
                    </div>
                </div>

                <div className="single-service-box">
                    <TbReportAnalytics className="single-icon" />

                    <h3 className="single-box-header">Strategic Marketing</h3>
                    <p className="single-box-paragraph">
                        We always provide people a complete solution focused of any
                        business.
                    </p>
                    <div className="read-more">
                        <FaArrowRight className="arrow_icon" />
                        <span className="text">Read More</span>
                    </div>
                </div>

                <div className="single-service-box">
                    <TbReportAnalytics className="single-icon" />

                    <h3 className="single-box-header">Business Consulting</h3>
                    <p className="single-box-paragraph">
                        We always provide people a complete solution focused of any
                        business.
                    </p>
                    <div className="read-more">
                        <FaArrowRight className="arrow_icon" />
                        <span className="text">Read More</span>
                    </div>
                </div>

                <div className="single-service-box">
                    <TbReportAnalytics className="single-icon" />

                    <h3 className="single-box-header">Data collection</h3>
                    <p className="single-box-paragraph">
                        We always provide people a complete solution focused of any
                        business.
                    </p>
                    <div className="read-more">
                        <FaArrowRight className="arrow_icon" />
                        <span className="text">Read More</span>
                    </div>
                </div>
            </div>

            <div className="service-bottom">
                Bring them together and you overcome the ordinary.
                <span className="service-bottom-highlight">
                    See what we do
                    <img src={imge} alt="Cover Image" class="cover-image" />
                </span>
            </div>

            <Let_start />
            <About_us />
            <Process_box />
            <Pricing_main />
            <Banner />
            <Profile />

            {/* <Banner2/> */}
            <Pricing_box />
            <FixedBackground />
            <Blog />
            <FeedbackForm />
            <Testimonials />
            <Footer/>
        </>
    );
};

export default Front_page;
