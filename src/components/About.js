import React from "react";
import foto from "../foto.jpg";
import "../About.css";

export default function About() {
  return (
    <main className="Fondo absolute object-cover w-full h-full ">
      <div className="flex justify-center mt-40">
      <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
        <div className="flex justify-center md:justify-end -mt-16">
          <img
            className="w-40 h-40 object-cover rounded-full border-2 border-indigo-500"
            alt="foto"
            src={foto}
          />
        </div>
        <div>
          <h2 className="text-gray-800 text-3xl font-semibold">About Me</h2>
          <p className="mt-2 text-gray-600">
            Hi! My name is Christian , I'm a Junior Fullstack Web
            Developer from Peru. I have studied different programming languages
            such as JavaScript, Ruby, C++, I also enjoy developing webpages with
            HTML and CSS, I have some repositories on my Github account which
            you can see by clicking the logo on the top of this page, as well as
            my linkedIn profile for more personal and professional information.
            I consider myself as a simple person who enjoys watching anime,
            series and play video games.
          </p>
        </div>
        <div className="flex justify-end mt-4">
          <span className="text-xl font-medium text-indigo-500">
            Christian Sagástegui
          </span>
        </div>
      </div>
      </div>
    </main>
  );
}
