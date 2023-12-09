import PropTypes from "prop-types";
import CloseIcon from "/close.svg";

IconClose.propTypes = {
  setIsMenuOpen: PropTypes.func,
};

export default function IconClose({ setIsMenuOpen }) {
  return (
    <div className="btn-close-menu" onClick={() => setIsMenuOpen(false)}>
      <img src={CloseIcon} alt="icon" />
    </div>
  );
}
