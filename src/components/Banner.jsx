import React from 'react';

function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img
              src="https://user-images.githubusercontent.com/63050133/156676671-d5b2e362-97d4-4404-9447-dd71ddfea82f.gif"
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
