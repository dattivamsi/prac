import React, { useState } from "react";
import img1 from "../../assets/Mask_group.png";
import img2 from "../../assets/image_6.png";
import img3 from "../../assets/image_8.png";
import rating from "../../assets/Rating.png";
import img4 from "../../assets/image_9.png";

import { Cards } from "../utils";
import Slider from "./Slider";
import Slider1 from "./Slider";

const Content = () => {
  const [consultaion, setConsultaion] = useState(0);
  const stats = [
    { value: "12M+", label: "Happy Patients" },
    { value: "22K+", label: "Surgeries" },
    { value: "25+", label: "Hospitals" },
    { value: "16+", label: "Cities" },
    { value: "1200+ Reviews", label: "", stars: true },
  ];

  const data = [
    {
      heading:
        "Chronic Total Occlusion Percutaneous Coronary Interventions (CTO-PCI)",
      text1:
        "CTO refers to the complete blockages in coronary arteries that develop over a prolonged period of time and can often lead to collaterals, or conduits in between coronary arteries without intervening capillary beds, that provide alternate routes for blood supply.",
      text2:
        "Subsequently, patients with CTO may develop symptoms varying in severity and character associated with myocardial ischemia, including fatigue, chest pain, dyspnea, neck or arm pain, malignant heart rhythm, heart failure, and more.",
      text3:
        "CTO refers to the complete blockages in coronary arteries that develop over a prolonged period of time and can often lead to collaterals, or conduits in between coronary arteries without intervening capillary beds, that provide alternate routes for blood supply.",
      image: img2,
    },
    {
      heading:
        "Chronic Total Occlusion Percutaneous Coronary Interventions (CTO-PCI)",
      text1:
        "CTO refers to the complete blockages in coronary arteries that develop over a prolonged period of time and can often lead to collaterals, or conduits in between coronary arteries without intervening capillary beds, that provide alternate routes for blood supply.",
      text2:
        "Subsequently, patients with CTO may develop symptoms varying in severity and character associated with myocardial ischemia, including fatigue, chest pain, dyspnea, neck or arm pain, malignant heart rhythm, heart failure, and more.",
      text3:
        "CTO refers to the complete blockages in coronary arteries that develop over a prolonged period of time and can often lead to collaterals, or conduits in between coronary arteries without intervening capillary beds, that provide alternate routes for blood supply.",
      image: img4,
    },
    {
      heading:
        "Chronic Total Occlusion Percutaneous Coronary Interventions (CTO-PCI)",
      text1:
        "CTO refers to the complete blockages in coronary arteries that develop over a prolonged period of time and can often lead to collaterals, or conduits in between coronary arteries without intervening capillary beds, that provide alternate routes for blood supply.",
      text2:
        "Subsequently, patients with CTO may develop symptoms varying in severity and character associated with myocardial ischemia, including fatigue, chest pain, dyspnea, neck or arm pain, malignant heart rhythm, heart failure, and more.",
      text3:
        "CTO refers to the complete blockages in coronary arteries that develop over a prolonged period of time and can often lead to collaterals, or conduits in between coronary arteries without intervening capillary beds, that provide alternate routes for blood supply.",
      image: img4,
    },
    {
      heading:
        "Chronic Total Occlusion Percutaneous Coronary Interventions (CTO-PCI)",
      text1:
        "CTO refers to the complete blockages in coronary arteries that develop over a prolonged period of time and can often lead to collaterals, or conduits in between coronary arteries without intervening capillary beds, that provide alternate routes for blood supply.",
      text2:
        "Subsequently, patients with CTO may develop symptoms varying in severity and character associated with myocardial ischemia, including fatigue, chest pain, dyspnea, neck or arm pain, malignant heart rhythm, heart failure, and more.",
      text3:
        "CTO refers to the complete blockages in coronary arteries that develop over a prolonged period of time and can often lead to collaterals, or conduits in between coronary arteries without intervening capillary beds, that provide alternate routes for blood supply.",
      image: img4,
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleChange = (val) => {
    setConsultaion(val);
  };

  return (
    <main>
      <section className="main-container">
        <div className="hosp-content">
          <h1 className="best-head">Best Cardiology Hospital In Bengaluru</h1>
          <p className="desc">
            Experience excellence in cardiology care at Medicover Hospitals
            Bengaluru. Trust our expert cardiologists for your heart health
            needs.
          </p>
        </div>
        <div className="glass-effect">
          <form>
            <h3 className="form-head">
              Book Your Appointment With{" "}
              <span className="experts">Our Experts</span>
            </h3>
            <input type="text" placeholder="Enter Name" />
            <input type="text" placeholder="Enter Name" />
            <input
              type="text"
              placeholder="Enter Name"
              style={{ padding: "2rem 1rem" }}
            />
            <button>Book An Appointment</button>
          </form>
        </div>
      </section>
      <section>
        <div className="stats-cards">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={
                stat?.stars === true ? "stats-card w-fit-content" : "stats-card"
              }
            >
              <div className="stats-value">{stat.value}</div>
              <div className="stats-label">{stat.label}</div>
              {stat.stars && (
                <div className="stats-stars">
                  <span>⭐⭐⭐⭐⭐</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="experience-heart">
          <div className="right">
            <h2 className="best-head">
              Experience Supreme Heart Care At
              <span className="experts"> Medicover Hospitals </span>
            </h2>
            <p className="desc">
              The Department of Cardiology at Medicover Hospitals offers
              comprehensive, multi-disciplinary programs for the prevention,
              diagnosis, and treatment of various Heart conditions. We provide a
              full range of cardiac diagnostic investigations and interventional
              procedures for adult and pediatric heart cases. Our team is
              accessible round the clock to render assistance and ensure a
              quicker recovery.
            </p>
          </div>
          <div className="left">
            <img src={img1} alt="" />
          </div>
        </div>
      </section>
      <section>
        <Slider1 />
      </section>
      <section>
        <div
          className="stats-cards"
          style={{ padding: "2rem 4rem", justifyContent: "normal" }}
        >
          <div>
            <img src={img3} alt="" className="cardiology-img" />
          </div>
          <div className="cardiology-card">
            <h1 className="cardiology-head">Cardiology Consultation</h1>
            <p className="desc op-5">
              At Medicover Hospitals, we have a team of highly qualified and
              experienced doctors along with support professionals. Our team
              manages various cardiac diseases with innovative technology and
              state-of-the-art facilities, treating heart conditions like heart
              attacks, valve disorders, high blood pressure, and many more. Our
              patient-centric approach assists patients in developing a healthy
              heart and improving their overall quality of life by providing
              high-quality treatment.
            </p>
            <button>Book Free Appointment</button>
          </div>
        </div>
        <section>
          <div className="why_choose_us">
            <h1 className="cardiology-head">Why Choose Us?</h1>

            <div className="why_cards_container">
              <div class="box">
                <img src={rating} alt="rating" />
                <h2 className="head op-5">25+ Years Of Experience</h2>
                <p className="desc op-5">
                  Excellent team of interventional cardiologists and cardiac
                  surgeons in Hyderabad
                </p>
              </div>
              <div class="box">
                <img src={rating} alt="rating" />
                <h2 className="head op-5">25+ Years Of Experience</h2>
                <p className="desc op-5">
                  Excellent team of interventional cardiologists and cardiac
                  surgeons in Hyderabad
                </p>
              </div>
              <div class="box">
                <img src={rating} alt="rating" />
                <h2 className="head op-5">25+ Years Of Experience</h2>
                <p className="desc op-5">
                  Excellent team of interventional cardiologists and cardiac
                  surgeons in Hyderabad
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section>
        <div className="p4-p2">
          <h1 className="cardiology-head text-center">
            Types Of Cardiology Consultation
          </h1>
          <div className="button-container">
            <button onClick={() => handleChange(0)}>CTO Surgery</button>
            <button onClick={() => handleChange(1)}>CTO Surgery</button>
            <button onClick={() => handleChange(2)}>CTO Surgery</button>
            <button onClick={() => handleChange(3)}>CTO Surgery</button>
            <button onClick={() => handleChange(4)}>CTO Surgery</button>
            <button>CTO Surgery</button>
          </div>
          {data?.map(
            (ele, index) =>
              index === consultaion && (
                <div className="types_container" key={index}>
                  <div className="right">
                    <h3 className="op-5 head">
                      {/* Chronic Total Occlusion Percutaneous Coronary
                      Interventions (CTO-PCI) */}
                      {ele?.heading}
                    </h3>
                    <p className="desc op-5">
                      {/* CTO refers to the complete blockages in coronary arteries
                      that develop over a prolonged period of time and can often
                      lead to collaterals, or conduits in between coronary
                      arteries without intervening capillary beds, that provide
                      alternate routes for blood supply. */}
                      {ele?.text1}
                    </p>
                    <p className="desc op-5">
                      {/* Subsequently, patients with CTO may develop symptoms
                      varying in severity and character associated with
                      myocardial ischemia, including fatigue, chest pain,
                      dyspnea, neck or arm pain, malignant heart rhythm, heart
                      failure, and more. */}
                      {ele?.text2}
                    </p>
                    <p className="desc op-5">
                      {/* CTO refers to the complete blockages in coronary arteries
                      that develop over a prolonged period of time and can often
                      lead to collaterals, or conduits in between coronary
                      arteries without intervening capillary beds, that provide
                      alternate routes for blood supply. */}
                      {ele?.text3}
                    </p>
                  </div>
                  <div className="left">
                    <img src={ele?.image} alt="" />
                  </div>
                </div>
              )
          )}
          {/* <div className="types_container">
            <div className="right">
              <h3 className="op-5 head">
                Chronic Total Occlusion Percutaneous Coronary Interventions
                (CTO-PCI)
              </h3>
              <p className="desc op-5">
                CTO refers to the complete blockages in coronary arteries that
                develop over a prolonged period of time and can often lead to
                collaterals, or conduits in between coronary arteries without
                intervening capillary beds, that provide alternate routes for
                blood supply.
              </p>
              <p className="desc op-5">
                Subsequently, patients with CTO may develop symptoms varying in
                severity and character associated with myocardial ischemia,
                including fatigue, chest pain, dyspnea, neck or arm pain,
                malignant heart rhythm, heart failure, and more.
              </p>
              <p className="desc op-5">
                CTO refers to the complete blockages in coronary arteries that
                develop over a prolonged period of time and can often lead to
                collaterals, or conduits in between coronary arteries without
                intervening capillary beds, that provide alternate routes for
                blood supply.
              </p>
            </div>
            <div className="left">
              <img src={img4} alt="" />
            </div>
          </div> */}
        </div>
      </section>
      <section>
        <div className="why_choose_us">
          <h1 className="cardiology-head">Success Stories</h1>
        </div>
      </section>
    </main>
  );
};

export default Content;
