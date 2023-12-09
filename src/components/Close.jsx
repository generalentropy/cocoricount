import PropTypes from "prop-types";
import { ReactComponentElement as Logo } from "/logo.svg";

IconClose.propTypes = {
  setIsMenuOpen: PropTypes.func,
};

export default function IconClose({ setIsMenuOpen }) {
  return (
    <div className="btn-close-menu" onClick={() => setIsMenuOpen(false)}>
      <Logo />
    </div>
  );
}
