import { Menu } from "antd";
import type { MenuProps } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faBellConcierge,
  faBasketShopping,
  faUser,
  faCircleInfo,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const items: MenuProps["items"] = [
  {
    label: "Accueil",
    key: "Accueil",
    icon: <FontAwesomeIcon icon={faCircleInfo} />,
  },
  {
    label: "Produits",
    key: "Produits",
    icon: <FontAwesomeIcon icon={faBasketShopping} />,
    children: [
      { label: "Boissons chaudes", key: "boissons chaudes" },
      { label: "Boissons fraîches", key: "boissons fraîches" },
      {
        label: "Snacks et Produits fraiche",
        key: "Snacks et Produits fraiche",
      },
      {
        type: "group",
        label: "Machines",
        key: "Machines",
        children: [
          {
            label: "Distributeurs automatiques de boissons chaudes",
            key: "Distributeurs automatiques de boissons chaudes",
          },
          {
            label: "Petites machines expresso grain",
            key: "Petites machines expresso grain",
          },
          {
            label: "Petites machines expresso dosette",
            key: "Petites machines expresso dosette",
          },
          {
            label: "Petites machines expresso Pro et Caféterie",
            key: "Petites machines expresso Pro et Caféterie",
          },
          {
            label: "Fontaines à eau sur réseau",
            key: "Fontaines à eau sur réseau",
          },
          {
            label: "Système de filtration",
            key: "Système de filtration",
          },
        ],
      },
    ],
  },
  {
    label: "Clients",
    key: "Clients",
    icon: <FontAwesomeIcon icon={faUser} />,
  },
  {
    label: "Services",
    key: "Services",
    icon: <FontAwesomeIcon icon={faBellConcierge} />,
  },
  {
    label: "Ecologique",
    key: "Ecologique",
    icon: <FontAwesomeIcon icon={faLeaf} />,
  },
  {
    label: "Contact",
    key: "Contact",
    icon: <FontAwesomeIcon icon={faEnvelope} />,
  },
];

const NavBar = () => {
  return (
    <>
      <Menu mode="horizontal" items={items}></Menu>
    </>
  );
};

export default NavBar;
