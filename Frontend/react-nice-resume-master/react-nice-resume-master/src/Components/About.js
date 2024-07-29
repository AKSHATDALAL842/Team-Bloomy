import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;


    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
  

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Nordic Giant Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>Transport made efficient</h2>

              <p>{bio}</p>

            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
