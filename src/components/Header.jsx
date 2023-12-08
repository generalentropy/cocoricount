import PropTypes from "prop-types";

Header.propTypes = {
  children: PropTypes.element,
};

export default function Header({ children }) {
  return (
    <div className="header">
      {children}
      <MenuButton />
    </div>
  );
}

function MenuButton() {
  return (
    <div className="btn-menu">
      <img src="/menu-kebab.svg"></img>
    </div>
  );
}
