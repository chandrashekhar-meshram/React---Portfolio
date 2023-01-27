import React from 'react';

const Banner = () => {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img
              src="https://stackblitz.com/files/react-7tho53/github/chandrashekhar-meshram/React---Portfolio/main/person.png"
              alt=""
            />
          </div>
          <div className="banner-content">
            <h6>Hello, I'm Chandrashekhar Meshram</h6>
            <h3>Web Developer</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              magni possimus in architecto repellat perspiciatis cum recusandae
              adipisci culpa voluptatem dolorem laudantium temporibus quos
              laborum, beatae sint delectus expedita quo.
            </p>
            <a className="btn" href="#projects">
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
