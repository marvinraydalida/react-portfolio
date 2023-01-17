import { useState, useEffect, useRef } from "react";

import { languages, technologies } from "../SkillList";

import SkillDescriptionContainer from "./SkillDescriptionContainer";
import SkillGrid from "./SkillGrid";

// import SkillTitle from "./SkillTitle";
// import SkillDescription from "./SkillDescription";

function Skill() {
  const languagesSectionRef = useRef(null);
  const technologySectionRef = useRef(null);

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
    const selectedLanguage = technologies.find(
      (language) => language.name === event.target.dataset.name
    );

    event.target.classList.toggle("selected");

    setTechnologyName(selectedLanguage.name);
    settTechnologyDescription(selectedLanguage.description);

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
            entry.target.style.transitionDelay = "0ms"
          }, 250)
        }
      });
    });

    const languageContainer = languagesSectionRef.current.children;
    const languageGrid = languagesSectionRef.current.lastElementChild.children;

    const technologyContainer = technologySectionRef.current.children;
    const technologyGrid =
      technologySectionRef.current.firstElementChild.children;

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
            alt="Mongo DB"
            onClick={onSelectTechnology}
          />
        </div>
        <SkillDescriptionContainer
          title={technologyName}
          description={technologyDescription}
          titleRef={technologyNameRef}
          descriptionRef={technologyDescriptionRef}
          isActive={isTechnologyActive}
        />
      </section>
    </>
  );
}

export default Skill;
