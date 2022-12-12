function SkillGrid(props) {
  return (
    <div className="skill-grid hidden" data-name={props.alt} onClick={props.onClick}>
      <img
        className="skill-image"
        src={props.source}
        alt={props.alt}
      />
    </div>
  );
}

export default SkillGrid;
