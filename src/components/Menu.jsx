import { useState } from "react";
import PropTypes from "prop-types";
import CloseMenu from "./CloseMenu";
import Button from "./Button";
import exportUserData from "../exportData";
import FooterMenu from "./MenuFooter";

Menu.propTypes = {
  setData: PropTypes.func,
  setCount: PropTypes.func,
  data: PropTypes.array,
};

export default function Menu({ setData, setCount, data }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <MenuButton setIsMenuOpen={setIsMenuOpen} />
      {isMenuOpen && (
        <ModalMenu
          setData={setData}
          setCount={setCount}
          isMenuOpen={isMenuOpen}
          data={data}
        >
          <CloseMenu setIsMenuOpen={setIsMenuOpen} />
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
  setData: PropTypes.func,
  setCount: PropTypes.func,
  data: PropTypes.array,
};

function ModalMenu({ children, setData, setCount, data }) {
  const resetAlluserData = function () {
    const uservalidation = window.confirm(
      "Vous allez supprimer toutes les statistiques, ces données ne pourront pas être récupérées. n continuer ?"
    );

    if (uservalidation) {
      setData(() => []);
      setCount(() => 0);
    }
  };

  const custom = {
    padding: "12px 25px",
  };

  // width des boutons = largeur du plus grand bouton
  return (
    <div className="menu">
      {children}

      <div className="menu-container">
        <Button
          customStyle={{ color: "#fb8500", ...custom }}
          className="btn-overlay-menu"
          label="Afficher l'historique"
        />
        <Button
          customStyle={{ color: "#fb8500", ...custom }}
          className="btn-overlay-menu"
          label="Exporter les données (.xlsx)"
          onClick={() => exportUserData(data)}
        />

        <Button
          customStyle={{ color: "#fb8500", ...custom }}
          className="btn-overlay-menu"
          label="F.A.Q"
        />

        <a href="https://www.buymeacoffee.com/visualartisan">
          <Button
            customStyle={{ color: "#fb8500", ...custom }}
            className="btn-overlay-menu"
            label="Soutenir le projet"
          />
        </a>

        <Button
          customStyle={{ color: "#fb8500", ...custom }}
          className="btn-overlay-menu"
          label="Proposer une améliorations"
        />
        <Button
          customStyle={{ color: "#fff", backgroundColor: "red", ...custom }}
          className="btn-overlay-menu"
          label="Réinitialiser les statistiques"
          onClick={resetAlluserData}
        ></Button>
      </div>
      <FooterMenu />
    </div>
  );
}
