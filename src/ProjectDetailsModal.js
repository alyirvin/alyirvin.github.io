import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css';

function ProjectDetailsModal(props) {
  let technologies, images, title, description, url, tech, img;

  if (props.data) {
    technologies = props.data.technologies;
    images = props.data.images;
    title = props.data.title;
    description = props.data.description;
    url = props.data.url;

    if (technologies) {
      tech = technologies.map((icons, i) => (
        <li className="list-inline-item mx-3" key={i}>
          <span>
            <div className="text-center">
              <i className={icons.class} style={{ fontSize: '300%' }}>
                <p className="text-center" style={{ fontSize: '30%' }}>
                  {icons.name}
                </p>
              </i>
            </div>
          </span>
        </li>
      ));
    }

    if (images) {
      img = images.map((elem, i) => <div key={i} data-src={elem} />);
    }
  }

  if (!props.show) {
    return null;
  }

  return (
    <div className="modal" onClick={props.onHide}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <span onClick={this.props.onHide} className="modal-close">
          <i className="fas fa-times fa-3x close-icon"></i>
        </span>
        <div className="col-md-12">
          <div className="col-md-10 mx-auto" style={{ paddingBottom: "50px" }}>
            <div className="slider-tab">
              <span
                className="iconify slider-iconfiy"
                data-icon="emojione:red-circle"
                data-inline="false"
                style={{ marginLeft: "5px" }}
                ></span>{" "}
              &nbsp;{" "}
              <span
                className="iconify slider-iconfiy"
                data-icon="twemoji:yellow-circle"
                data-inline="false"
                ></span>{" "}
              &nbsp;{" "}
              <span
                className="iconify slider-iconfiy"
                data-icon="twemoji:green-circle"
                data-inline="false"
                ></span>
            </div>
          </div>
        </div>
        <AwesomeSlider
          animation="scaleOutAnimation"
          className="slider-image"
        >
          {img}
        </AwesomeSlider>
        <h3>{title}</h3>
        <p>{description}</p>
        <ul>{tech}</ul>
      </div>
    </div>
  );
}
  
  export default ProjectDetailsModal;
  
