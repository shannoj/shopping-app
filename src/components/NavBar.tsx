import {Menu} from "antd"
import type { MenuProps } from 'antd';

const items: MenuProps['items'] = [
    {
        label: 'Accuel',
        key: 'Accuel',
      },
      {
        label: 'Produits',
        key: 'Produits',
      },
      {
        label: 'Clients',
        key: 'Clients',
      },
      {
        label: 'Machines',
        key: 'Machines',
      },
      {
        label: 'Services',
        key: 'Services',
      },
      {
        label: 'Ecologique',
        key: 'Ecologique',
      },
      {
        label: 'Contact',
        key: 'Contact',
      },
]

const NavBar = () => {
    return (
        <><Menu mode="horizontal"items={items}></Menu></>
    )
}

export default NavBar;