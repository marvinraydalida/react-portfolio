function SkillTitle(props) {
  return <>
    <h1 className="skill-first-text">{props.firstText}</h1>
    <h1 className="skill-second-text">{props.secondText}</h1>
    <h1 className="skill-third-text">{props.thirdText}</h1>
  </>;
}

export default SkillTitle;
