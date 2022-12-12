import { useState, useEffect, useRef } from "react";

import SkillTitle from "./SkillTitle";
import SkillGrid from "./SkillGrid";
import SkillDescription from "./SkillDescription";

const languages = [
  {
    name: "HTML 5",
    description:
      "HTML is the language that introduced me to coding. It's one of the core technologies used for creating and publishing content on the World Wide Web, and is often the first language that people learn when they're starting to explore the world of coding.",
  },
  {
    name: "CSS 3",
    description:
      "You can't mention HTML without mentioning CSS, because they're like bread and butter. As a frontend developer, I find that CSS takes up a lot of my time because it involves both coding and design. It's an essential part of creating engaging and visually appealing web pages.",
  },
  {
    name: "PHP",
    description:
      "PHP was my introduction to backend development, and it taught me a lot about working with databases and APIs. With PHP, I've built some web applications from start to finish, including both the frontend and backend components.",
  },
  {
    name: "Python",
    description:
      "Python is an excellent programming language for beginners because it's simple, yet powerful. With Python, I have been able to automate tedious and repetitive tasks, such as data cleansing, which has saved me a lot of time and effort. I highly recommend Python to anyone looking to get started in programming.",
  },
  {
    name: "JavaScript",
    description:
      "JavaScript is crucial for adding interactivity to the frontend of my web applications, which helps keep users engaged. I love working with JavaScript because it allows me to manipulate elements and objects on the page using the Document Object Model (DOM). It's a powerful and fun language to work with.",
  },
  {
    name: "C",
    description:
      "C was my first ever programming language, and it introduced me to some of the core concepts of programming such as conditional statements, loops, logic, and data structures. Learning C was a great foundation for my development as a programmer.",
  },
];

function Skill() {
  const languagesSectionRef = useRef(null);

  const previousActiveGrid = useRef(null);
  const [active, setActive] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function onSelectLanguage(event) {
    const selectedLanguage = languages.find(
      (language) => language.name === event.target.dataset.name
    );

    event.target.classList.toggle("selected");

    setTitle(selectedLanguage.name);
    setDescription(selectedLanguage.description);

    if (previousActiveGrid.current !== null) {
      if (previousActiveGrid.current !== event.target) {
        previousActiveGrid.current.classList.toggle("selected");
        previousActiveGrid.current = event.target;
      } else {
        previousActiveGrid.current = null;
        setActive(false);
      }
    } else {
      previousActiveGrid.current = event.target;
      setActive(true);
    }
  }

  useEffect(() => {
    document.body.className = "scroll-body";
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    for (const container of languagesSectionRef.current.children) {
      observer.observe(container);
    }
    for (const grid of languagesSectionRef.current.lastElementChild.children) {
      observer.observe(grid);
    }
    setTimeout(() => {
      for (const grid of languagesSectionRef.current.lastElementChild
        .children) {
        grid.classList.remove('hidden');
        grid.classList.remove('show');
      }
    }, 1500);
  }, []);

  return (
    <>
      <section className="skill-section" ref={languagesSectionRef}>
        <div className="container hidden">
          {active ? (
            <SkillDescription title={title} description={description} />
          ) : (
            <SkillTitle
              firstText={"Programming &"}
              secondText={"Markup"}
              thirdText={"Languages"}
            />
          )}
        </div>
        <div className="container skill-grid-container hidden">
          <SkillGrid
            source="/images/html.svg"
            alt="HTML 5"
            onClick={onSelectLanguage}
          />
          <SkillGrid
            source="/images/css.svg"
            alt="CSS 3"
            onClick={onSelectLanguage}
          />
          <SkillGrid
            source="/images/php.svg"
            alt="PHP"
            onClick={onSelectLanguage}
          />
          <SkillGrid
            source="/images/python.svg"
            alt="Python"
            onClick={onSelectLanguage}
          />
          <SkillGrid
            source="/images/javascript.svg"
            alt="JavaScript"
            onClick={onSelectLanguage}
          />
          <SkillGrid
            source="/images/c.svg"
            alt="C"
            onClick={onSelectLanguage}
          />
        </div>
      </section>
    </>
  );
}

export default Skill;
