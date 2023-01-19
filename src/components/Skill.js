import { useState, useEffect, useRef } from "react";

import { languages, technologies } from "../SkillList";

import SkillDescriptionContainer from "./SkillDescriptionContainer";
import SkillGrid from "./SkillGrid";

// import SkillTitle from "./SkillTitle";
// import SkillDescription from "./SkillDescription";

function Skill() {
  const languagesSectionRef = useRef(null);
  const technologySectionRef = useRef(null);
  const softSkillsSectionRef = useRef(null);

  const languagePreviousActiveGrid = useRef(null);
  const technologyPreviousActiveGrid = useRef(null);
  const [isLanguageActive, setIsLanguageActive] = useState(false);
  const [isTechnologyActive, setIsTechnologyActive] = useState(false);
  const [languageName, setLanguageName] = useState("");
  const [languageDescription, setlanguageDescription] = useState("");
  const [technologyName, setTechnologyName] = useState("");
  const [technologyDescription, settTechnologyDescription] = useState("");

  const languageNameRef = useRef(null);
  const languageDescriptionRef = useRef(null);
  const technologyNameRef = useRef(null);
  const technologyDescriptionRef = useRef(null);

  function onSelectLanguage(event) {
    const selectedLanguage = languages.find(
      (language) => language.name === event.target.dataset.name
    );

    event.target.classList.toggle("selected");

    setLanguageName(selectedLanguage.name);
    setlanguageDescription(selectedLanguage.description);

    if (languagePreviousActiveGrid.current !== null) {
      if (languagePreviousActiveGrid.current !== event.target) {
        languagePreviousActiveGrid.current.classList.toggle("selected");
        languagePreviousActiveGrid.current = event.target;
      } else {
        languagePreviousActiveGrid.current = null;
        setLanguageName("");
        setIsLanguageActive(false);
      }
    } else {
      languagePreviousActiveGrid.current = event.target;
      setIsLanguageActive(true);
    }
  }

  function onSelectTechnology(event) {
    const selectedTechnology = technologies.find(
      (technology) => technology.name === event.target.dataset.name
    );

    event.target.classList.toggle("selected");

    setTechnologyName(selectedTechnology.name);
    settTechnologyDescription(selectedTechnology.description);

    if (technologyPreviousActiveGrid.current !== null) {
      if (technologyPreviousActiveGrid.current !== event.target) {
        technologyPreviousActiveGrid.current.classList.toggle("selected");
        technologyPreviousActiveGrid.current = event.target;
      } else {
        technologyPreviousActiveGrid.current = null;
        setTechnologyName("");
        setIsTechnologyActive(false);
      }
    } else {
      technologyPreviousActiveGrid.current = event.target;
      setIsTechnologyActive(true);
    }
  }

  useEffect(() => {
    document.body.className = "scroll-body";

    const timeOut = setTimeout;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");

          timeOut(() => {
            entry.target.style.transitionDelay = "0ms";
          }, 250);
        }
      });
    });

    const languageContainer = languagesSectionRef.current.children;
    const languageGrid = languagesSectionRef.current.lastElementChild.children;

    const technologyContainer = technologySectionRef.current.children;
    const technologyGrid =
      technologySectionRef.current.firstElementChild.children;

    const softSkillsContainer = softSkillsSectionRef.current.children;
    const softSkillsGrid =
      softSkillsSectionRef.current.lastElementChild.children;

    for (const container of languageContainer) {
      observer.observe(container);
    }

    for (const grid of languageGrid) {
      observer.observe(grid);
    }

    for (const container of technologyContainer) {
      observer.observe(container);
    }

    for (const grid of technologyGrid) {
      observer.observe(grid);
    }

    for (const container of softSkillsContainer) {
      observer.observe(container);
    }

    for (const grid of softSkillsGrid) {
      console.log(grid);
      observer.observe(grid);
    }

    return () => clearTimeout(timeOut);
  }, []);

  useEffect(() => {
    if (languageNameRef.current !== null) {
      languageNameRef.current.classList.add("slide-in");
      languageDescriptionRef.current.classList.add("slide-in");
    }

    const timeOut = setTimeout(() => {
      if (languageNameRef.current !== null) {
        languageNameRef.current.classList.remove("slide-in");
        languageDescriptionRef.current.classList.remove("slide-in");
      }
    }, 250);

    return () => clearTimeout(timeOut);
  }, [languageName]);

  useEffect(() => {
    if (technologyNameRef.current !== null) {
      technologyNameRef.current.classList.add("slide-in");
      technologyDescriptionRef.current.classList.add("slide-in");
    }

    const timeOut = setTimeout(() => {
      if (technologyNameRef.current !== null) {
        technologyNameRef.current.classList.remove("slide-in");
        technologyDescriptionRef.current.classList.remove("slide-in");
      }
    }, 250);

    return () => clearTimeout(timeOut);
  }, [technologyName]);

  return (
    <>
      <section className="skill-section" ref={languagesSectionRef}>
        <SkillDescriptionContainer
          title={languageName}
          description={languageDescription}
          titleRef={languageNameRef}
          descriptionRef={languageDescriptionRef}
          isActive={isLanguageActive}
          placeHolderTitle={["Programming &", "Markup", "Languages"]}
        />
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
            source="/images/javascript.svg"
            alt="JavaScript"
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
            source="/images/c.svg"
            alt="C"
            onClick={onSelectLanguage}
          />
        </div>
      </section>
      <section className="skill-section" ref={technologySectionRef}>
        <div className="container skill-grid-container hidden">
          <SkillGrid
            source="/images/react.svg"
            alt="React JS"
            onClick={onSelectTechnology}
          />
          <SkillGrid
            source="/images/codeigniter.svg"
            alt="CodeIgniter 3"
            onClick={onSelectTechnology}
          />
          <SkillGrid
            source="/images/django.svg"
            alt="Django"
            onClick={onSelectTechnology}
          />
          <SkillGrid
            source="/images/fastapi.svg"
            alt="FastAPI"
            onClick={onSelectTechnology}
          />
          <SkillGrid
            source="/images/bootstrap.svg"
            alt="Bootstrap"
            onClick={onSelectTechnology}
          />
          <SkillGrid
            source="/images/express.svg"
            alt="Express JS"
            onClick={onSelectTechnology}
          />
          <SkillGrid
            source="/images/tensorflow.svg"
            alt="TensorFlow"
            onClick={onSelectTechnology}
          />
          <SkillGrid
            source="/images/mysql.svg"
            alt="MySQL"
            onClick={onSelectTechnology}
          />
          <SkillGrid
            source="/images/mongodb.svg"
            alt="MongoDB"
            onClick={onSelectTechnology}
          />
        </div>
        <SkillDescriptionContainer
          title={technologyName}
          description={technologyDescription}
          titleRef={technologyNameRef}
          descriptionRef={technologyDescriptionRef}
          isActive={isTechnologyActive}
          placeHolderTitle={["Frameworks,", "Libraries &", "Databases"]}
        />
      </section>
      <section className="skill-section soft-skills" ref={softSkillsSectionRef}>
        <div id="soft-skills-title" className="hidden">
          <h1 className="skill-first-text">Soft</h1>
          <h1 className="skill-third-text">skills</h1>
        </div>
        <p className="hidden">
          Here are some of my skills that I believe would benefit my team.
        </p>
        <div id="soft-skills-grid-container">
          <div className="soft-skill-grid hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-people"
              viewBox="0 0 16 16"
            >
              <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
            </svg>
            <h1>Collaboration</h1>
            <p>
              I am experienced in collaborating with others and effectively
              working in a team environment.
            </p>
          </div>
          <div className="soft-skill-grid hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-lightning-charge"
              viewBox="0 0 16 16"
            >
              <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z" />
            </svg>
            <h1>Problem Solving</h1>
            <p>
              I possess problem-solving abilities and am dedicated to finding
              effective solutions.
            </p>
          </div>
          <div className="soft-skill-grid hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chat-left-dots"
              viewBox="0 0 16 16"
            >
              <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
              <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
            </svg>
            <h1>Communication</h1>
            <p>
              Effective communication skills are crucial for success, making it
              necessary to possess them.
            </p>
          </div>
          <div className="soft-skill-grid hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-hourglass-split"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z" />
            </svg>
            <h1>Time management</h1>
            <p>
              As a developer, effectively managing my time and efficiently
              completing tasks is essential.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skill;
