import React from 'react'
import aboutImage from '../assets/images/about-image.jpg'

function Home() {
  return (
    <div>
        <section id="home" className="parallax-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-offset-1 col-md-10 col-sm-12">
                        <div className="home-wrapper">
                            <h3 className="wow fadeInUp" data-wow-delay="0.4s">Image Survey</h3>
                            <h1 className="wow fadeInUp" data-wow-delay="0.6s">iLearn : A new survey panel with daily online surveys</h1>
                            <a href="#about" className="wow fadeInUp smoothScroll arrow-btn" data-wow-delay="1s"><i className="fa fa-angle-double-down"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="about" className="parallax-section">
            <div className="container">
                <div className="row">

                    <div className="col-md-4 col-sm-8">
                        <img src={aboutImage} className="wow fadeInUp img-responsive" data-wow-delay="0.2s" alt="about image" />
                        <div className="wow fadeInUp" data-wow-delay="0.4s">    
                            <h4>Interested to Join?</h4>
                            <p>Sign up completely free. It only takes a minute.</p>
                            <a href="#">Sign Up Now</a>
                        </div>
                    </div>

                    <div className="col-md-8 col-sm-12">
                        <div className="about-thumb">
                                <div className="wow fadeInUp section-title" data-wow-delay="0.6s">
                                    <h3>we make things better</h3>
                                    <h2>What is iLearn?</h2>
                                </div>
                                <div className="wow fadeInUp" data-wow-delay="0.8s">
                                    <p>Once upon a time, we had a dream....</p>
                                    <p>Then we woke up and made <b>iLearn!</b></p>
                                    <p>At iLearn, we have created a thriving community where anyone can sign up to our online survey platform and get rewards. We offer rewards for online surveys across all sorts of different categories.</p>
                                </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </div>
  )
}

export default Home