import React from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import "./front-page.css";
import { TbReportAnalytics } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa";

import Let_start from "./Let_start";
import About_us from "../pages/about_us box/About_us";
import Process_box from "../pages/process_box/Process_box";
import Pricing_box from "../pages/process_box/Pricing_box";
import FixedBackground from "../pages/fixedBcakground/FixedBackground";
import Blog from "../pages/Blog/Blog";
import FeedbackForm from "../pages/FeedbackForm/FeedbackForm";
import Testimonials from "../pages/Testimonials/Testimonials";

const Front_page = () => {
    return (
        <>
            <div className="frontPageContainer">
                <div className="container">
                    <div className="service_container">
                        <div className="service_left" id="service_left">
                            <div className="service">SERVICE</div>
                            <div className="service_heading">
                                We provide the best
                                <br /> solutions for your growth.
                            </div>
                        </div>
                        <div className="service_right">
                            <p className="service_paragraph paraTextSize">
                                A business consultant is a professional who provides expert
                                advice and guidance to businesses and organizations to help them
                                improve their performance, solve problems, and achieve their
                                goals.
                            </p>
                            <div className="read_about">
                                Read About Us
                                {/* <span>
                    <BsArrowRightCircleFill />
                </span> */}
                            </div>
                        </div>
                    </div>

                    <div className="container-box">
                        <div className="single-service-box">
                            <TbReportAnalytics className="single-icon" />

                            <h3 className="single-box-header">Insights & Analytics</h3>
                            <p className="single-box-paragraph paraTextSize">
                                We always provide people a complete solution focused of any
                                business.
                            </p>
                            <div className="read-more">
                                <FaArrowRight className="icon" />
                                <span className="text">Read More</span>
                            </div>
                        </div>

                        <div className="single-service-box">
                            <TbReportAnalytics className="single-icon" />

                            <h3 className="single-box-header">Insights & Analytics</h3>
                            <p className="single-box-paragraph paraTextSize">
                                We always provide people a complete solution focused of any
                                business.
                            </p>
                            <div className="read-more">
                                <FaArrowRight className="icon" />
                                <span className="text">Read More</span>
                            </div>
                        </div>

                        <div className="single-service-box">
                            <TbReportAnalytics className="single-icon" />

                            <h3 className="single-box-header">Insights & Analytics</h3>
                            <p className="single-box-paragraph paraTextSize">
                                We always provide people a complete solution focused of any
                                business.
                            </p>
                            <div className="read-more">
                                <FaArrowRight className="icon" />
                                <span className="text">Read More</span>
                            </div>
                        </div>

                        <div className="single-service-box">
                            <TbReportAnalytics className="single-icon" />

                            <h3 className="single-box-header">Insights & Analytics</h3>
                            <p className="single-box-paragraph paraTextSize">
                                We always provide people a complete solution focused of any
                                business.
                            </p>
                            <div className="read-more">
                                <FaArrowRight className="icon" />
                                <span className="text">Read More</span>
                            </div>
                        </div>
                    </div>

                    <div className="service-bottom">
                        Bring them together and you overcome the ordinary.
                        <span className="service-bottom-highlight">See what we do</span>
                    </div>

                    <Let_start />
            <About_us />
            <Process_box />
            <Pricing_box />
            <FixedBackground />
            <Blog />
            <FeedbackForm />
            {/* <Testimonials /> */}
                </div>
            </div>
        </>
    );
};

export default Front_page;
