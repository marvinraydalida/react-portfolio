import { useEffect, useRef } from "react";

function About() {
  const aboutMeRef = useRef();
  const educationRef = useRef();
  const hobbyRef = useRef();

  useEffect(() => {
    document.body.className = "scroll-body";
    document.body.parentNode.className = 'scroll-body';
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
            Hello! My name is Marvin, but I prefer to be called Amben. I still
            remember the exhilarating feeling of creating my first "Hello
            World!" program in HTML. The idea of developing exciting and
            engaging applications has always captivated my mind, and that is why
            I am pursuing a professional career as a developer. Excited to learn
            new skills and techniques for creating innovative solutions. Let's
            explore the world of code together and see what we can achieve!
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
            In addition to learning new programming skills, I also enjoy
            indulging in my favorite hobbies. These include listening to music,
            playing guitar, getting rekt in Dota 2, and watching anime and
            movies. These activities allow me to relax and recharge, and they
            also help me stay creative and inspired in my work as a developer,
            except getting destroyed in Dota.
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
