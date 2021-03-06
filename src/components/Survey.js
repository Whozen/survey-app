import React, { Component } from "react";
// import cat from '../assets/images/cat.png';
// import electricCar from '../assets/images/electric-car.png';
// import building from '../assets/images/building.png';
// import crossing from '../assets/images/crossing.png';
// import nature from '../assets/images/nature.png';
// import policeman from '../assets/images/policeman.png';
import axios from "axios";

const Surveys = props => (
    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.0s">
        <div className="service-item">
            <div className="service-icon">
                <img src={props.source.image_link} alt={props.source.tag} width="150px" height="150px" />
                <a href={props.source.image_link} active-color="cyan" />
            </div>
            <h3>Cat</h3>
        </div>
    </div>
)
export default class Survey extends Component {
    constructor(props) {
        super(props);

        this.state = {
            surveyList: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3500/surveys')
        .then(response => {
            this.setState({
                surveyList: response.data
            })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    getSurveyList() {
        return this.state.surveyList.map(currentSource => {
            return <Surveys source={currentSource} key={currentSource._id} />
        });
    }

    render() {
        return (
            <div>
                <section id="survey" className="parallex-section">
                    <div className="container" >
                        <div className="row">
                            <div className="col-md-offset-1 col-md-10 col-sm-12" >
                                <div className="survey-wrapper" style={{ paddingTop : 5}}> 
                                    <h3 className="wow fadeInUp" data-wow-delay="0.4s" > iLearn </h3>
                                    <h1 className="wow fadeInUp" data-wow-delay="0.6s" >Explore our online surveys</h1>
                                    <a href="#work-survey" className="wow fadeInUp smoothScroll arrow-btn" data-wow-delay="1s"><i className="fa fa-angle-double-down"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="work-survey" className="parallax-section">
                    <div className="container">
                        <div className="row">

                            <div className="col-md-12 col-sm-12">
                                <div className="wow fadeInUp section-title" data-wow-delay="0.2s" style={{ paddingTop: 8}}>
                                    <h2 >Survey Categories</h2>
                                    <p>At iLearn, taking surveys is a piece of cake. Choose a category from below or <a href="survey.ejs"><b>Click here</b></a> to explore more and begin!</p>
                                </div>
                            </div>

                            <div className="service" style={{ paddingBottom: 8}}>
                                <div className="container">
                                    <div className="row">
                                        { this.getSurveyList() }
                                        {/* <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.0s">
                                            <div className="service-item">
                                                <div className="service-icon">
                                                    <img src={cat} alt="Cat" width="150px" height="150px" />
                                                    <a href="survey-questions" active-color="cyan" />
                                                </div>
                                                <h3>Cat</h3>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                                            <div className="service-item active">
                                                <div className="service-icon">
                                                        <img src={electricCar} alt="Electric Car" width="150px" height="150px" />
                                                        <a href="dog-survey" active-color="cyan" />
                                                </div>
                                                <h3>Car</h3>
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                                            <div className="service-item">
                                                <div className="service-icon">
                                                    <img src={building} alt="Building" width="150px" height="150px" />
                                                </div>
                                                <h3>Buildings</h3>
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                                            <div className="service-item active">
                                                <div className="service-icon">
                                                    <img src={crossing} alt="Cross-Walk" width="150px" height="150px" />
                                                </div>
                                                <h3>Cross-Walk</h3>
                                            </div>
                                        </div>
                                    
                                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.8s">
                                            <div className="service-item">
                                                <div className="service-icon">
                                                    <img src={nature} alt="Nature" width="150px" height="150px" />
                                                </div>
                                                <h3>Tree</h3>
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.10s">
                                            <div className="service-item active">
                                                <div className="service-icon">
                                                    <img src={policeman} alt="Policeman" width="150px" height="150px" />
                                                </div>
                                                <h3>Policeman</h3>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

// export default Survey