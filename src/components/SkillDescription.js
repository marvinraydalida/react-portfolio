function SkillDescription(props){
    return <>
        <h1 className="language-name">{props.title}</h1>
        <p className="language-description">{props.description}</p>
    </>
}

export default SkillDescription;