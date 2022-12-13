function SkillDescription(props){
    return <>
        <h1 className="language-name" ref={props.titleRef}>{props.title}</h1>
        <p className="language-description" ref={props.descriptionRef}>{props.description}</p>
    </>
}

export default SkillDescription;