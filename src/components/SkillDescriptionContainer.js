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
          firstText={props.placeHolderTitle[0]}
          secondText={props.placeHolderTitle[1]}
          thirdText={props.placeHolderTitle[2]}
        />
      )}
    </div>
  );
}

export default SkillDescriptionContainer;
