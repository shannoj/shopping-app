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
import { Link } from "react-router-dom";

const items: MenuProps["items"] = [
  {
    label: (
      <Link to="/">
        <img
          src="../images/DABB-logo-horiz-moyen.jpeg"
          style={{ height: 50 }}
        ></img>
      </Link>
    ),
    key: "logo",
  },
  {
    label: "Accueil",
    key: "Accueil",
    icon: <FontAwesomeIcon icon={faCircleInfo} />,
  },
  {
    label: <Link to="products">Produits</Link>,
    key: "Produits",
    icon: <FontAwesomeIcon icon={faBasketShopping} />,
    children: [
      {
        label: <Link to="products/food/hotdrinks">Boissons chaudes</Link>,
        key: "boissons chaudes",
      },
      {
        label: <Link to="products/food/colddrinks">Boissons fraîches</Link>,
        key: "boissons fraîches",
      },
      {
        label: (
          <Link to="products/food/snacks">Snacks et Produits fraiche</Link>
        ),
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
      <Menu theme="light" mode="horizontal" items={items}></Menu>
    </>
  );
};

export default NavBar;
