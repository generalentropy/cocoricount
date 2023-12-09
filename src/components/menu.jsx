import { useState } from "react";
import PropTypes from "prop-types";
import CloseButton from "./close";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <MenuButton setIsMenuOpen={setIsMenuOpen} />
      {isMenuOpen && (
        <ModalMenu isMenuOpen={isMenuOpen}>
          <CloseButton setIsMenuOpen={setIsMenuOpen} />
        </ModalMenu>
      )}
    </>
  );
}

MenuButton.propTypes = {
  setIsMenuOpen: PropTypes.func,
};

function MenuButton({ setIsMenuOpen }) {
  return (
    <div className="btn-menu" onClick={() => setIsMenuOpen(true)}>
      <img src="/menu-kebab.svg" alt="open menu"></img>
    </div>
  );
}

ModalMenu.propTypes = {
  children: PropTypes.element,
};

function ModalMenu({ children }) {
  return (
    <div className="menu">
      {children}
      <div className="menu-container">Je suis une modale</div>
    </div>
  );
}
