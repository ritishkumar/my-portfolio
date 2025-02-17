import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 px-8 bg-gray-100 text-center">
      <h2 className="text-4xl font-semibold">About Me</h2>
      <div className="mt-8 max-w-4xl mx-auto space-y-6">
        <p className="text-lg">
          I’m Ritish Kumar, a passionate Full Stack Developer specializing in the MERN stack 
          (MongoDB, Express.js, React.js, Node.js). I focus on building scalable, responsive, 
          and user-friendly web applications.
        </p>
        <p className="text-lg">
          With hands-on experience in tools like <b>React.js</b>, <b>Node.js</b>, <b>Tailwind CSS</b>, 
          and <b>JavaScript</b>, I enjoy transforming ideas into functional products. 
          Some of my key projects include a Bubble Hit game, an Amazon Clone, and a restaurant website named Restoran.
        </p>
        <p className="text-lg">
          Currently, I’m a trainee at <b>Digicoders Private Limited</b>, sharpening my web development skills 
          and working on real-world projects. My goal is to craft efficient solutions to solve real-world problems 
          and deliver seamless digital experiences.
        </p>
      </div>
    </section>
  );
};

export default About;
