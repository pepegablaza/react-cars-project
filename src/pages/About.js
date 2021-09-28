import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-title">
        <h3>
          About
          <span className="h3-green">Me</span>
        </h3>
        <h5>Allow me to introduce myself</h5>
      </div>

      <div className="about-body">
        <div className="education">
          <h2>Education</h2>
          <ul>
            <li>High School of Mechatronics</li>
            <li>Algebra PHP Course</li>
            <li>Online Front End Courses</li>
          </ul>

          <section className="social-media">
            <h2>Follow Me on Social Media</h2>
            <img
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <div>
              <a href="https://www.facebook.com/mario.blazevic123">
                <i className="fab fa-facebook"></i>
              </a>

              <a href="https://github.com/pepegablaza">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://twitter.com/MarioBlaevi3">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </section>
        </div>

        <div className="goals">
          <h2>Future Career goals</h2>
          <section>
            Since i am front end junior, firstly i would like to get some
            experience in working in groups, upgrade communication skills,and
            also upgrade my coding skills. I am coding for less than a year, and
            i can see myself doing that job in future. Would like to work as
            Front End developer also as Full Stack developer.
            <span>Looking forward to hiring up!</span>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
