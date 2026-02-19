import { useState } from "react";
import "./SocialButton.css";
import PropTypes from "prop-types";

const SocialButton = ({ link, image, service, account, enabled }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleFeedback = () => {
    if (!enabled) {
      setIsPressed(true);
      setTimeout(() => setIsPressed(false), 100);
    }
  };

  const handleClick = (e) => {
    if (!enabled) {
      e.preventDefault();
    }
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }

  return (
    <a
      href={enabled ? link : undefined}
      onClick={handleClick}
      onMouseDown={handleFeedback}
      onTouchStart={handleFeedback}
      onContextMenu={handleContextMenu}
      className={!enabled ? "disabled-link" : ""}
      aria-disabled={!enabled}
      style={{ cursor: enabled ? "pointer" : "not-allowed" }}
    >
      <div
        className={`button ${!enabled ? "button-disabled" : ""} ${
          isPressed ? "pressed" : ""
        }`}
      >
        <img src={image} alt="" />
        <div className="info">
          <div className="service">{service}</div>
          <div className="account light">{account}</div>
        </div>
      </div>
    </a>
  );
};

SocialButton.propTypes = {
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  service: PropTypes.string.isRequired,
  account: PropTypes.string.isRequired,
  enabled: PropTypes.bool.isRequired,
};

export default SocialButton;
