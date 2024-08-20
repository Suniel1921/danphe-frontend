import React, { useState } from 'react';
import "./Pricing_main.css";
import { FaCartShopping } from "react-icons/fa6";
import { BsCart2 } from 'react-icons/bs';
import Button_box from '../Button/Button_box';
import Button_red from '../Button/Button_red';

const Pricing_main = () => {
    const [billing, setBilling] = useState('monthly');

    return (
        <section className="pricing-section">
            <div className="container">
                <div className="top_pricing_container">
                <div className="priceBG">
                        <span className="price_redDot"></span>
                        <p className="price">PRICING</p>
                    </div>
                    <h1 className="title_pricing">The best pricing plans.</h1>
                    <p className="description_pricing">We are specialists in both economics and information technologies and we apply our full range of talent to creating the perfect solution for each client’s needs.</p>
                </div>
                <div className="pricing-cards">
                    <div className="card">
                        <div className='icon_top'>
                            <FaCartShopping className='Icon_top_icon' />
                        </div>
                        <h1 className="plan-price">$56<span className="billing-cycle">Monthly</span></h1>
                        <h2 className="plan-title">BUSINESS</h2>
                        <div className='feature_points'>
                            <p className="feature"><span className="icon">✔</span>Vexillologist pitchfork</p>
                            <p className="feature"><span className="icon">✔</span>Tumeric plaid portland</p>
                            <p className="feature"><span className="icon">✔</span>Hexagon neutra unicorn</p>
                            <p className="feature"><span className="icon">✔</span>Vexillologist pitchfork</p>
                            <p className="feature"><span className="icon">✔</span>Mixtape chillwave tumeric</p>
                        </div>
                        <Button_box/>
                    </div>
                    
                    <div className="cardpopular">
                        <span className="badge">POPULAR</span>
                        <div className='popular_content'>
                            <div className='icon_top'>
                                <FaCartShopping className='Icon_top_icon' />
                            </div>

                            <h1 className="plan-price">$38<span className="billing-cycle">Monthly</span></h1>
                            <h2 className="plan-title">PRO</h2>
                            <div className='feature_points'>
                                <p className="feature"><span className="icon">✔</span>Vexillologist pitchfork</p>
                                <p className="feature"><span className="icon">✔</span>Tumeric plaid portland</p>
                                <p className="feature"><span className="icon">✔</span>Hexagon neutra unicorn</p>
                                <p className="feature"><span className="icon">✔</span>Vexillologist pitchfork</p>
                                <p className="feature"><span className="icon">✔</span>Mixtape chillwave tumeric</p>
                            </div>
                            {/* <button className="cta-button popular">Button</button> */}
                            <Button_red/>
                        </div>

                    </div>
                    <div className="card">
                        <div className='icon_top'>
                            <FaCartShopping className='Icon_top_icon' />
                        </div>
                        <h1 className="plan-price">$56<span className="billing-cycle">Monthly</span></h1>
                        <h2 className="plan-title">BUSINESS</h2>
                        <div className='feature_points'>
                            <p className="feature"><span className="icon">✔</span>Vexillologist pitchfork</p>
                            <p className="feature"><span className="icon">✔</span>Tumeric plaid portland</p>
                            <p className="feature"><span className="icon">✔</span>Hexagon neutra unicorn</p>
                            <p className="feature"><span className="icon">✔</span>Vexillologist pitchfork</p>
                            <p className="feature"><span className="icon">✔</span>Mixtape chillwave tumeric</p>
                        </div>
                        <Button_box/>
                    </div>
                    <div className="card">
                        <div className='icon_top'>
                            <FaCartShopping className='Icon_top_icon' />
                        </div>
                        <h1 className="plan-price">$56<span className="billing-cycle">Monthly</span></h1>
                        <h2 className="plan-title">BUSINESS</h2>
                        <div className='feature_points'>
                            <p className="feature"><span className="icon">✔</span>Vexillologist pitchfork</p>
                            <p className="feature"><span className="icon">✔</span>Tumeric plaid portland</p>
                            <p className="feature"><span className="icon">✔</span>Hexagon neutra unicorn</p>
                            <p className="feature"><span className="icon">✔</span>Vexillologist pitchfork</p>
                            <p className="feature"><span className="icon">✔</span>Mixtape chillwave tumeric</p>
                        </div>
                        <div>
                            <Button_box/>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing_main




