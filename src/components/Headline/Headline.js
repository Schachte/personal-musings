import React from 'react';
import "./welcome.css" 

function Headline({imgLink}) {
  return (
        <section className="headliner-container">
          <div className="main-headline">
            <div id="welcome-large">
              👋 I’m Ryan Schachte. <br />I’m a <span className="u-main">software engineer</span> <br /> & <span className="u-main">online educator</span>.
            </div>
            <div id="welcome-small">
              Welcome to my digital oasis 🌵— Feel free to browse around my
              posts and videos. You can also find me on websites like <span className="u-orange">Strava</span> for my athletic things, <span className="u-dark-blue">LinkedIn</span> for my business things
              and <span className="u-red">Youtube</span> for my educational things.
            </div>
            <div id="welcome-links">
              <button>📬 Join Newsletter</button>
              <button>📹 Subscribe Youtube</button>
            </div>
          </div>
          <div className="image-headline">
            <div className="image-offset"></div>
            <img
              src={imgLink}
            />
          </div>
        </section>
    );
}

export default Headline;