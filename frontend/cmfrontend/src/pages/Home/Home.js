import React, { useEffect } from "react";
import './Home.css';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer"
import heroimg from "../../images/Hero.svg";
import fbicon from "../../images/fbicon.png";
import instaicon from "../../images/instaicon.png";
import wpicon from "../../images/wpicon.png";
import IntroCard from "../../components/IntroCard/IntroCard";
import videoicon from "../../images/video.png";
import paymenticon from "../../images/payment.png";
import commenticon from "../../images/comments.png";
import staricon from "../../images/star.png";
import CategoryCard from "../../components/CategoryCard/CategoryCard";


const Home = () => {
    useEffect(() => {
        console.log('The star is on the home')
    }, [])
    return (
        <div>
            <Navbar />

            <div id="hero-section" className="main-area container-fluid">
                <div className="row justify-content-evenly">
                    <div className="col-5 star-search">
                        <p>Find the star for your</p>
                        <p className="sky-blue-color">next event</p>
                        <p>Whatever be your budget, we got just the right person for your event!</p>
                        {/* <form>
                            <input type="text" placeholder="Ahsaas Channa" />
                            <button type="submit">Search</button>
                        </form> */}
                        <form class="my-2 my-lg-0 search-box">
                            <div className="col-9">
                                <input className="form-control" type="search" placeholder="Ahsaas Channa" aria-label="Search" />
                            </div>
                            <div className="col-3">
                                <button class="btn my-2 my-sm-0" type="submit">
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="col-5">
                        <img src={heroimg} alt="Celebrity Managers" className="cm-img" />
                    </div>
                </div>


                <div className="row justify-content-center">
                    <div className="col-3 frame-title fw-bold lh-1 subject">
                        <p>Our Best</p>
                        <p className="sky-blue-color">Offerings</p>
                    </div>
                    <div className="col-5 d-flex justify-content-center align-items-center caption">
                        <p>Our star studded list is here to wow you and the prices are the best of the bunch, because you wouldn’t find it anywhere else!</p>
                    </div>
                </div>

                <div className="row">
                    <ul className="nav nav-pills mb-3 justify-content-center celebrity-gallery" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-livebands-tab" data-bs-toggle="pill" data-bs-target="#pills-livebands" type="button" role="tab" aria-controls="pills-livebands" aria-selected="true">Live Bands</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-singers-tab" data-bs-toggle="pill" data-bs-target="#pills-singers" type="button" role="tab" aria-controls="pills-singers" aria-selected="false">Singers</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-comedians-tab" data-bs-toggle="pill" data-bs-target="#pills-comedians" type="button" role="tab" aria-controls="pills-comedians" aria-selected="false">Comedians</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-dj" type="button" role="tab" aria-controls="pills-dj" aria-selected="false">DJ</button>
                        </li>
                    </ul>
                    <div className="container">
                        <div className="tab-content desc-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-livebands" role="tabpanel" aria-labelledby="pills-livebands-tab">
                                <div><IntroCard /></div>
                                <div><IntroCard /></div>
                                <div><IntroCard /></div>
                                <div><IntroCard /></div>
                            </div>
                            <div className="tab-pane fade" id="pills-singers" role="tabpanel" aria-labelledby="pills-singers-tab">Singers</div>
                            <div className="tab-pane fade" id="pills-comedians" role="tabpanel" aria-labelledby="pills-comedians-tab">Comedians</div>
                            <div className="tab-pane fade" id="pills-dj" role="tabpanel" aria-labelledby="pills-dj-tab">DJ</div>
                        </div>
                    </div>
                </div>



                <div className="row justify-content-center">
                    <div className="col-3 frame-title fw-bold lh-1 subject">
                        <p>From The</p>
                        <p className="sky-blue-color">Industry</p>
                    </div>
                    <div className="col-5 d-flex justify-content-center align-items-center caption">
                        <p>Celebrity Managers has been lucky enough to work with the best of the best, procuring the industry's star studded personalities.</p>
                    </div>
                </div>


                <div className="row justify-content-center">
                    <div className="col-3 frame-title fw-bold lh-1 subject">
                        <p>How to</p>
                        <p>Book an</p>
                        <p className="sky-blue-color">Artist</p>
                    </div>
                    <div className="col-5 justify-content-center align-items-center caption">
                        <div className="container">
                            <div className="row">
                                <div className="col-5 book-card">
                                    <p>1.  Search for the Celebrity</p>
                                    <div className="d-flex">
                                        <div className="book-img-div"><img src={staricon} className="book-img"/></div>
                                        <div className="sky-blue-color book-caption">
                                            Search for your favourite celebrity from 100+ celebrities at CM.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-5 book-card">
                                    <p>2.  Share your Message</p>
                                    <div className="d-flex">
                                        <div className="book-img-div"><img src={commenticon} className="book-img"/></div>
                                        <div className="sky-blue-color book-caption">
                                            Share us the message that the celebrity will record and send.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-5 book-card">
                                    <p>3.  Make your Payment</p>
                                    <div className="d-flex">
                                        <div className="book-img-div"><img src={paymenticon} className="book-img"/></div>
                                        <div className="sky-blue-color book-caption">
                                            Choose and pay through your comfortable payment method - Credit Card, Debit Card, UPI or any major Wallet.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-5 book-card">
                                    <p>4.  Get your Video</p>
                                    <div className="d-flex">
                                        <div className="book-img-div"><img src={videoicon} className="book-img"/></div>
                                        <div className="sky-blue-color book-caption">
                                            We will share your video through WhatsApp and e-mail in 72 hours.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-3 frame-title fw-bold lh-1 subject">
                        <p>Our</p>
                        <p className="sky-blue-color">Categories</p>
                    </div>
                    <div className="col-5 d-flex justify-content-center align-items-center caption">
                        <p>Celebrity Managers has been in the industry since 2018 and has been making great strides, and it is well on the way to become India's largest Celebrity discovery and booking platform.</p>
                    </div>
                </div>
                <div className="container">
                    <div className="category-data">
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-3 frame-title fw-bold lh-1 subject">
                        <p>What They</p>
                        <p className="sky-blue-color">Say</p>
                    </div>  
                    <div className="col-5 d-flex justify-content-center align-items-center caption">
                        <p>Celebrity Managers has been in the industry since 2018 and has been making great strides, and it is well on the way to become India's largest Celebrity discovery and booking platform.</p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-3 frame-title fw-bold lh-1 subject">
                        <p>About</p>
                        <p className="sky-blue-color">Us</p>
                    </div>
                    <div className="col-5 d-flex justify-content-center align-items-center caption">
                        <p>We have been in the industry for quite some time, and this is what our esteemed customers have to say about us.</p>
                    </div>
                </div>
                <div className="row justify-content-center about-section">
                    <div className="col-2 artists-managed">
                        <p className="metric">500+</p>
                        <p className="metric-desc">artists managed</p>
                    </div>
                    <div className="col-2 stage-time">
                        <p className="metric">400K+</p>
                        <p className="metric-desc">minutes of stage time</p>
                    </div>
                    <div className="col-2 bookings-catered">
                        <p className="metric">8000+</p>
                        <p className="metric-desc">bookings catered to</p>
                    </div>
                </div>
      
                <div className="container">
                    <div className="contact-box">
                        <div className="row justify-content-evenly">
                            <div className="col-3 fs-1 fw-bold subject">Like what you see?</div>
                            <div className="col-5 icon-slab">
                                <p className="small-text">We are just one call away, here to save the day. We promise to pick up your calls :)</p>
                                <p className="contacticons">
                                    <span><button className="contactbutton">Contact Us</button></span>
                                    <span><img src={fbicon}alt="Connect on Whatsapp" /></span>
                                    <span><img src={instaicon}alt="Follow our Instagram page" /></span>
                                    <span><img src={wpicon} alt="Follow our Facebook page" /></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Home;