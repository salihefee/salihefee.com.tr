import "react";
import "./SocialButton.css";
import PropTypes from "prop-types";

const SocialButton = ({ link, image, service, account }) => (
    <>
        <a href={link}>
            <div className="button">
                <img src={image} alt="" />
                <div className="info">
                    <div className="service">{service}</div>
                    <div className="account light">{account}</div>
                </div>
            </div>
        </a>
    </>
);

SocialButton.propTypes = {
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    service: PropTypes.string.isRequired,
    account: PropTypes.string.isRequired,
};

export default SocialButton;
