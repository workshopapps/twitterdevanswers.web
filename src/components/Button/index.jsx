import classNames from "classnames";
import PropTypes from "prop-types";
import "./styles.css";

export function Button(props) {
  const { outline, component } = props;
  const className = classNames("button", { "button--outline": outline });

  if (component === "a") {
    return (
      <a className={className} {...props}>
        {props.children}
      </a>
    );
  }

  return (
    <button {...props} className={className}>
      {props.children}
    </button>
  );
}

Button.propTypes = {
  outline: PropTypes.bool,
  component: PropTypes.oneOf(["a", "button"]),
};
