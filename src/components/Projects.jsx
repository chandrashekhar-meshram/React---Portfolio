import React from "react";
import { useState } from "react";

function Projects() {
  const [projects] = useState([
    {
      title: "1. TVmaze (Frontend)",
      img: "https://stackblitz.com/files/chandrashekhar/github/chandrashekhar-meshram/React---Portfolio/main/Untitled%20design.png",
      gLink: "https://github.com/chandrashekhar-meshram/ns-tvmaze-project",
      lLink: "https://ns-react-tvmaze.netlify.app/",
      info:"User can search using two different preferences like By Actor or By Show Name. \n This app is using API to to display the result. \n This is responsive app."
    },
    {
      title: "Project 2",
      img: "https://stackblitz.com/files/react-7tho53/github/chandrashekhar-meshram/React---Portfolio/main/2.png",
      gLink: "https://github.com/chandrashekhar-meshram/React---Portfolio",
      lLink: "https://chandrashekhar.stackblitz.io/",
    },
    {
      title: "Project 3",
      img: "https://stackblitz.com/files/chandrashekhar/github/chandrashekhar-meshram/React---Portfolio/image/3.%20Herbal%20Tea.png",
      gLink: "https://github.com/chandrashekhar-meshram/HTML-CSS-Project---HTML-CSS-Mini-Project---c4cwa2yua84u",
      lLink: "https://herbal-tea.netlify.app/",
    },
    // {
    //   title: "Project 4",
    //   img: "https://stackblitz.com/files/react-7tho53/github/chandrashekhar-meshram/React---Portfolio/main/4.png",
    //   gLink: "https://github.com/chandrashekhar-meshram/React---Portfolio",
    //   lLink: "https://chandrashekhar.stackblitz.io/",
    // },
    // {
    //   title: "Project 5",
    //   img: "https://stackblitz.com/files/react-7tho53/github/chandrashekhar-meshram/React---Portfolio/main/5.png",
    //   gLink: "https://github.com/chandrashekhar-meshram/React---Portfolio",
    //   lLink: "https://chandrashekhar.stackblitz.io/",
    // },
    // {
    //   title: "Project 6",
    //   img: "https://stackblitz.com/files/react-7tho53/github/chandrashekhar-meshram/React---Portfolio/main/6.png",
    //   gLink: "https://github.com/chandrashekhar-meshram/React---Portfolio",
    //   lLink: "https://chandrashekhar.stackblitz.io/",
    // },
  ]);
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="title">
          <h3>Featured Projects</h3>
          <a
            href="https://github.com/chandrashekhar-meshram"
            target="_blank"
            className="btn"
            rel="noreferrer"
          >
            View All
          </a>
        </div>
        <div className="projects-wrapper">
          {projects.map((project, i) => (
            <div className="project" key={i}>
              <div className="img-container">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="description">
                <h4>{project.title}</h4>
                <div className="links">
                  <a href={project.gLink} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={project.lLink} target="_blank" rel="noreferrer">
                    <i className="fa fa-globe"></i>
                  </a>
                </div>
              </div>
              <p>
                {project.info}
                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                ea nobis aut deserunt. Reprehenderit numquam harum facilis
                beatae praesentium pariatur eligendi non. Explicabo, cupiditate
                odit vero quo iste numquam obcaecati. */}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;