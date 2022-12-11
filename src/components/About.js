import { useEffect, useRef } from "react";

function About() {
  const aboutMeRef = useRef();
  const educationRef = useRef();
  const hobbyRef = useRef();

  useEffect(() => {
    document.body.className = "about-body";
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    for (const container of aboutMeRef.current.children) {
      observer.observe(container);
    }
    for (const container of educationRef.current.children) {
      observer.observe(container);
    }
    for (const container of educationRef.current.firstElementChild.children) {
      observer.observe(container);
    }
    for (const container of hobbyRef.current.children) {
      observer.observe(container);
    }
    for (const container of hobbyRef.current.firstElementChild.children) {
      observer.observe(container);
    }
  }, []);
  return (
    <>
      <section className="about-section" id="about" ref={aboutMeRef}>
        <div className="container hidden">
          <div id="image-me-container"></div>
        </div>
        <div className="container hidden">
          <h1>
            about.<span>me</span>
          </h1>
          <p>
            Hello! I am Marvin, but I prefer to be called by my nickname Amben.
            I still remember that moment when I displayed my first “Hello
            World!” with HTML, it felt ecstatic. The thought of developing
            something cool and fun has never left my mind, and that is the
            reason why I’m pursuing a professional career as a developer.
          </p>
        </div>
      </section>
      <section className="about-section" id="education" ref={educationRef}>
        <div className="container hidden">
          <h1>
            <span>self.</span>education
          </h1>

          <div className="school-container hidden">
            <p className="school">
              Technological University of the Philippines - Manila
            </p>
            <p className="course">BS - Computer Science</p>
            <p className="school-year">(2019 - Present)</p>
          </div>
          <div className="school-container hidden">
            <p className="school">Informatics College - Cavite</p>
            <p className="course">TechVoc - Computer Programming </p>
            <p className="school-year">(2017 - 2019)</p>
          </div>
          <div className="school-container hidden">
            <p className="school">
              General Emilio Aguinaldo National High School
            </p>
            <p className="school-year">(2013 - 2017)</p>
          </div>
        </div>
        <div className="container hidden">
          <div id="image-education-container"></div>
        </div>
      </section>
      <section className="about-section" id="hobby" ref={hobbyRef}>
        <div className="container hidden">
          <div className="hobby-image hidden"></div>
          <div className="hobby-image hidden"></div>
          <div className="hobby-image hidden"></div>
          <div className="hobby-image hidden"></div>
        </div>
        <div className="container hidden">
          <h1>
            hobbies.<span>forEach</span>
          </h1>
          <p>
            Apart from learning new programming stuff, I also indulge myself
            with my favorite hobbies which are: listening to music, playing
            guitar, getting rekt in Dota 2, and watching some anime and movies.
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
