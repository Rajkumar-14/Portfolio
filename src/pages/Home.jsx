import React from "react";
import profileImage from "../assets/profile.jpeg";
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-black text-white px-10">
      
      {/* Left Content */}
      <div className="flex-1">
        <h1 className="text-5xl font-bold">Hi, I'm Raj</h1>
        <p className="mt-4 text-gray-400">
          Full Stack Developer | MERN | React
        </p>

        <a
          href="/resume.pdf"
          download
          className="inline-block mt-6 px-6 py-3 bg-purple-600 rounded-lg"
        >
          Download Resume
        </a>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center object-cover">
        <img
          src={profileImage}
          alt="Profile"
          className="h-80 w-80 rounded-full border-4 border-purple-500"
        />
      </div>

    </section>
  );
};

export default Hero;
