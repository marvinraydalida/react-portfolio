import SkillTitle from "./SkillTitle";
import SkillDescription from "./SkillDescription";

function SkillDescriptionContainer(props) {
  return (
    <div className="container description hidden">
      {props.isActive ? (
        <SkillDescription
          title={props.title}
          description={props.description}
          titleRef={props.titleRef}
          descriptionRef={props.descriptionRef}
        />
      ) : (
        <SkillTitle
          firstText={"Programming &"}
          secondText={"Markup"}
          thirdText={"Languages"}
        />
      )}
    </div>
  );
}

export default SkillDescriptionContainer;
