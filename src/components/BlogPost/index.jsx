import PropTypes from "prop-types";
import "./styles.css";

export function BlogPost(props) {
  return (
    <div className="blog-post main-axis" style={{ "--gap": "12px" }}>
      <a href={props.link}>
        <img src={props.image} alt={props.imageAlt} />
      </a>

      <div className="main-axis" style={{ "--gap": "6px" }}>
        <h2 className="blog-post__title">
          <a
            href={props.link}
            style={{
              font: "inherit",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {props.title}
          </a>
        </h2>

        <span className="blog-post__date">{props.date}</span>
      </div>
    </div>
  );
}

BlogPost.propTypes = {
  image: PropTypes.node.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
