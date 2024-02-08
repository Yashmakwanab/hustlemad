import React from "react";

const Demo = () => {
  return (
    <div>
      <div className="card-section">
        {/* <div>
          <h1 className="card-title">Meet Our Exceptional Team Members</h1>
          <p className="card-subtitle">
            Discover the dedicated individuals who collaborate seamlessly,
            leveraging their diverse skills and experience to drive our
            company's growth.{" "}
          </p>
        </div>

        <div className="flipping-cards">
          <div className="profile-card first-profile-card">
            <div className="profile-card-front profile-card-face">
              <img
                src="./images/olivia-johnson.jpg"
                alt="profile-picture"
                className="profile-picture"
              />

              <h2 className="name">Olivia Johnson</h2>
              <h3 className="role">Software Engineer</h3>

              <div className="expertise-section">
                <p className="expertise-title">Areas of Expertise</p>
                <ul>
                  <li className="expertise">
                    <img src="./images/check-circle.svg" alt="check-circle" />
                    JavaScript
                  </li>
                  <li className="expertise">
                    <img src="./images/check-circle.svg" alt="check-circle" />
                    React Ecosystem
                  </li>
                  <li className="expertise">
                    <img src="./images/check-circle.svg" alt="check-circle" />
                    Web Accessibility
                  </li>
                  <li className="expertise">
                    <img src="./images/check-circle.svg" alt="check-circle" />
                    Performance Optimization
                  </li>
                  <li className="expertise">
                    <img src="./images/check-circle.svg" alt="check-circle" />
                    Agile Methodologies
                  </li>
                </ul>
              </div>
            </div>

            <div className="profile-card-back profile-card-face">
              <div className="about-section">
                <h2 className="about-title">About</h2>
                <p className="about-text">
                  Olivia Johnson is a senior software engineer with over 6 years
                  of experience in the technology industry. Throughout her
                  career, Oivia has successfully led numerous complex projects
                  from inception to completion. She specializes in designing
                  architectures that are scalable, efficient, and aligned with
                  business goals.
                </p>
              </div>

              <div className="interests-section">
                <p className="interests-title">Key Interests</p>
                <ul>
                  <li className="interest">
                    <img src="./images/check-circle.svg" alt="check-circle" />
                    Open-source Contribution
                  </li>
                  <li className="interest">
                    <img src="./images/check-circle.svg" alt="check-circle" />
                    Technology Conferences and Meetups
                  </li>
                  <li className="interest">
                    <img src="./images/check-circle.svg" alt="check-circle" />
                    Technical Blogging
                  </li>
                  <li className="interest">
                    <img src="./images/check-circle.svg" alt="check-circle" />
                    Professional Development
                  </li>
                  <li className="interest">
                    <img src="./images/check-circle.svg" alt="check-circle" />
                    Mentorship and Teaching
                  </li>
                </ul>
              </div>

              <footer>
                <div className="icons">
                  <a href="#">
                    <i className="fa-solid fa-envelope email-icon social-icon"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-linkedin linkedin-icon social-icon"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-square-twitter social-icon"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-square-github social-icon"></i>
                  </a>
                </div>
              </footer>
            </div>
          </div>

          <div className="profile-card second-profile-card">
            <div className="profile-card-front profile-card-face">
              <img
                src="./images/james-ethan.jpg"
                alt="profile-picture"
                className="profile-picture"
              />

              <h2 className="name">Samuel Ethan</h2>
              <h3 className="role">Product Manager</h3>

              <div className="expertise-section">
                <p className="expertise-title">Areas of Expertise</p>
                <ul>
                  <li className="expertise">
                    <img src="./images/check-circle.svg" alt="check-circle" />
                    Product Strategy and Roadmap Development
                  </li>
                  <li className="expertise">
                    <img src="./images/check-circle.svg" alt="check-circle" />
                    Market Research and Analysis
                  </li>
                  <li className="expertise">
                    <img src="./images/check-circle.svg" alt="check-circle" />
                    Agile Product Development
                  </li>
                  <li className="expertise">
                    <img src="./images/check-circle.svg" alt="check-circle" />
                    Product Performance Evaluation
                  </li>
                  <li className="expertise">
                    <img src="./images/check-circle.svg" alt="check-circle" />
                    Product Launch
                  </li>
                </ul>
              </div>
            </div>

            <div className="profile-card-back profile-card-face">
              <div className="about-section">
                <h2 className="about-title">About</h2>
                <p className="about-text">
                  James Ethan has a wealth of experience in leading
                  cross-functional teams and a track record of delivering
                  successful products. He has a unique blend of technical
                  expertise, and user-centric mindset. He is dedicated to
                  driving product excellence and empowering teams to surpass
                  expectations, shaping the future of digital innovation.
                </p>
              </div>

              <div className="interests-section">
                <p className="interests-title">Key Interests</p>
                <ul>
                  <li className="interest">
                    <img src="./images/check-circle.svg" alt="check-circle" />
                    Technology and Innovation
                  </li>
                  <li className="interest">
                    <img src="./images/check-circle.svg" alt="check-circle" />
                    User Experience
                  </li>
                  <li className="interest">
                    <img src="./images/check-circle.svg" alt="check-circle" />
                    Product Development
                  </li>
                  <li className="interest">
                    <img src="./images/check-circle.svg" alt="check-circle" />
                    Customer Advocacy
                  </li>
                  <li className="interest">
                    <img src="./images/check-circle.svg" alt="check-circle" />
                    Project Management
                  </li>
                </ul>
              </div>

              <footer>
                <div className="icons">
                  <a href="#">
                    <i className="fa-solid fa-envelope email-icon social-icon"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-linkedin linkedin-icon social-icon"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-square-twitter social-icon"></i>
                  </a>
                </div>
              </footer>
            </div>
          </div>

          <div className="profile-card third-profile-card">
            <div className="profile-card-front profile-card-face">
              <img
                src="./images/grace-victoria.png"
                alt="profile-picture"
                className="profile-picture"
              />

              <h2 className="name">Grace Victoria</h2>
              <h3 className="role">Data Scientist</h3>

              <div className="expertise-section">
                <p className="expertise-title">Areas of Expertise</p>
                <ul>
                  <li className="expertise">
                    <img src="./images/check-circle.svg" alt="check-circle" />
                    Statistical Modeling and Analysis
                  </li>
                  <li className="expertise">
                    <img src="./images/check-circle.svg" alt="check-circle" />
                    Data Mining and Data Extraction
                  </li>
                  <li className="expertise">
                    <img src="./images/check-circle.svg" alt="check-circle" />
                    Data Visualization
                  </li>
                  <li className="expertise">
                    <img src="./images/check-circle.svg" alt="check-circle" />
                    Big Data Processing
                  </li>
                  <li className="expertise">
                    <img src="./images/check-circle.svg" alt="check-circle" />
                    Machine Learning
                  </li>
                </ul>
              </div>
            </div>

            <div className="profile-card-back profile-card-face">
              <div className="about-section">
                <h2 className="about-title">About</h2>
                <p className="about-text">
                  Grace Victoria is a data scientist with over 5 years of
                  experience extracting valuable insights from complex datasets.
                  She has a profound knowledge of advanced statistical modeling,
                  machine learning algorithms, and data visualization techniques
                  has enabled her to drive transformative solutions for complex
                  business challenges.
                </p>
              </div>

              <div className="interests-section">
                <p className="interests-title">Key Interests</p>
                <ul>
                  <li className="interest">
                    <img src="./images/check-circle.svg" alt="check-circle" />
                    Artificial Intelligence
                  </li>
                  <li className="interest">
                    <img src="./images/check-circle.svg" alt="check-circle" />
                    Data Analysis
                  </li>
                  <li className="interest">
                    <img src="./images/check-circle.svg" alt="check-circle" />
                    Data Ethics
                  </li>
                  <li className="interest">
                    <img src="./images/check-circle.svg" alt="check-circle" />
                    Natural Language Processing
                  </li>
                  <li className="interest">
                    <img src="./images/check-circle.svg" alt="check-circle" />
                    Business Strategy and Impact
                  </li>
                </ul>
              </div>

              <footer>
                <div className="icons">
                  <a href="#">
                    <i className="fa-solid fa-envelope email-icon social-icon"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-linkedin linkedin-icon social-icon"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-square-twitter social-icon"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-square-github social-icon"></i>
                  </a>
                </div>
              </footer>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Demo;
