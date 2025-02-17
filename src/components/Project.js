import React from "react";
import amazon from "../assets/amazon.jpg";
import restoren from "../assets/restoren.jpeg";
import bubble from "../assets/bubble.jpg";
import shipra from "../assets/shipra.jpg";
import dish from "../assets/dish.jpg";


const Projects = () => {
  // Array of projects with names, links, and images
  const projects = [
    {
      name: "Food-Delivery Frontend",
      link: "https://khanapahuchana.netlify.app/",
      image: dish,
    },
    {
      name: "Amazon Clone",
      link: "https://ritishkumar.github.io/Amazon-clone/",
      image: amazon,
    },
    {
      name: "Restoran",
      link: "https://ritishkumar.github.io/Restoran/",
      image: restoren,
    },
    {
      name: "Shipra Assistant",
      link: "https://shifraraj.netlify.app/",
      image: shipra,
    },
    {
      name: "Bubble Hit Game",
      link: "https://ritishkumar.github.io/Bubble-Game/",
      image: bubble,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          My Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block border-4 border-blue-500 bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-transform transform hover:scale-105"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              {/* Project Details */}
              <div
                className={`p-4 ${
                  project.name.includes("Game") ? "border-l-4 border-r-4 border-gray-500" : ""
                }`}
              >
                <h3 className="text-lg font-semibold">{project.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
