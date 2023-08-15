import React, { useState } from 'react';
import "./qualification.css";
const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) =>{
        setToggleState(index);
    };

  return (
  <section className="qualification section">
       <h2 className="section__title">Qualification</h2>
    <span className="section__subtitle">My personal journey
    </span>

    <div className="qualification__container container">
        <div className="qualification__tabs">
            <div className={toggleState === 1 ? "qualification__button qualification__active button--flex": "qualification__button button--flex"}
            onClick={()=> toggleTab(1)}
            >
                <i className="uil uil-graduation-cap qualification__icon">
                </i> {" "} Education
            </div>

            <div className={toggleState === 2 ? "qualification__button qualification__active button--flex": "qualification__button button--flex"}
              onClick={()=> toggleTab(2)}
            >
                <i className="uil uil-briefcase-alt qualification__icon">
                </i>Experience
            </div>
        </div>

        <div className="qualification__sections">
            <div className={toggleState === 1 ? "qualification__content qualification__content-active":"qualification__content"}>
                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Masteral</h3>
                        <span className="qualification__subtitle">
                            Bulacan Sate University
                        </span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt">         
                            </i> 2021 - Present
                        </div>
                    </div>
                    <div>
                     <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                   </div>
                </div>

                <div className="qualification__data">
                    <div></div>

                    <div>
                     <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                   </div>

                    <div>
                        <h3 className="qualification__title">Bachelor of Science in Information Technology</h3>
                        <span className="qualification__subtitle">
                            Bulacan Sate University
                        </span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt">         
                            </i> 2015 - 2018
                        </div>
                    </div>    
                </div>

                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Valedictorian
                        </h3>
                        <span className="qualification__subtitle">
                            Agape Christian School
                        </span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt">         
                            </i> 2011 - 2014
                        </div>
                    </div>
                    <div>
                     <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                   </div>
                </div>

                <div className="qualification__data">
                    <div></div>

                    <div>
                     <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                   </div>

                    <div>
                        <h3 className="qualification__title">Top 1</h3>
                        <span className="qualification__subtitle">
                            Del Carmen Learning School
                        </span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt">         
                            </i> 2006-2010
                        </div>
                    </div>    
                </div>
            </div>

            <div className={toggleState === 2 ? "qualification__content qualification__content-active":"qualification__content"}>
                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Senior Computer Operator</h3>
                        <span className="qualification__subtitle">
                            Bureau of Fisheries and Aquatic Resources
                        </span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt">         
                            </i> 2023 - Present
                        </div>
                    </div>
                    <div>
                     <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                   </div>
                </div>

                <div className="qualification__data">
                    <div></div>

                    <div>
                     <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                   </div>

                    <div>
                        <h3 className="qualification__title">Technical Support Specialist</h3>
                        <span className="qualification__subtitle">
                            Land Transportation Office - Central
                        </span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt">         
                            </i> 2020 - 2022
                        </div>
                    </div>    
                </div>

                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">HMO Staff
                        </h3>
                        <span className="qualification__subtitle">
                            Commonwealth Hospital
                        </span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt">         
                            </i> 2019 - 2020
                        </div>
                    </div>
                    <div>
                     <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                   </div>
                </div>
            </div>
        </div>
    </div>
  </section>
  );
};

export default Qualification;
