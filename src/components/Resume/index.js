import React from "react";

function Resume() {
  return (
    <section class="container">
      <h2 className="top-title">Resume</h2>
      <hr></hr>

      <div>
        <div class="mt-5">
          <h2 className="top-title">Phon Phongsavath</h2>
          <ul>
            <li>
              Full Stack Web Developer
            </li>
          </ul>
          <a
            href="https://docs.google.com/document/d/1I4CVcuTcgeS-oKy5MrCqUe8i-__amVz3_3ZIFMdEc_U/edit?usp=sharing"
            class="link"
          >
            Resume
          </a>
        </div>
      </div>

      <div class="justify-content-center mt-5">
        <div>
          <h2 className="top-title">Education</h2>
          <ul>
            <li>
              The Ohio State University
            </li>
            <li>
              Web Developer Bootcamp
            </li>
            <li>
              July 2021 - Janurary 2022
            </li>
          </ul>
          <h2 className="top-title">Proficiencies</h2>
          <ul>
            <li>
            HTML, CSS , JavaScript, jQuery, React.js,<br />
            Bootstrap, Bulma CSS Framework, Handlebars, RestAPI, <br/>
            Node.js, Express.js, MySQL, Sequelize, MongoDB, Mongoose.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;