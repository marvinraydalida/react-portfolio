const icons = {
  javascript: {
    src: "/images/javascript.svg",
    bgColor: "#4F4714",
  },
  php: {
    src: "/images/php.svg",
    bgColor: "#682C54",
  },
  codeigniter: {
    src: "/images/codeigniter.svg",
    bgColor: "#693932",
  },
  mysql: {
    src: "/images/mysql.svg",
    bgColor: "#164C63",
  },
  html: {
    src: "/images/html.svg",
    bgColor: "#693932",
  },
  css: {
    src: "/images/css.svg",
    bgColor: "#164C63",
  },
  python: {
    src: "/images/python.svg",
    bgColor: "#444780",
  },
  django: {
    src: "/images/django.svg",
    bgColor: "#275B47",
  },
  sklearn: {
    src: "/images/sklearn.png",
    bgColor: "#CACACA",
  },
  tensorflow: {
    src: "/images/tensorflow.svg",
    bgColor: "#693932",
  },
  fastapi: {
    src: "/images/fastapi.svg",
    bgColor: "#164C63",
  },
};

function ProjectIcon(props) {
  return (
    <div
      className="project-icon"
      style={{ backgroundColor: icons[props.technology].bgColor }}
    >
      <img
        className="project-icon-image"
        src={icons[props.technology].src}
        alt={props.alt}
      />
    </div>
  );
}

export default ProjectIcon;
