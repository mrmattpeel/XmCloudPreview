import Link from 'next/link';
import { useState } from 'react';

type HubBarItemModel = {
  itemName: string;
  itemUrl: string;
};

const HubBarItem = (props: HubBarItemModel) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const activate = () => {
    setIsActive(!isActive);
  };

  return (
    <li
      onClick={activate}
      className={`hub-nav-menu__item hub-nav-menu__link${isActive ? '--active' : ''}`}
    >
      <Link href={props.itemUrl}>
        <a className="hub-nav-menu__link">{props.itemName}</a>
      </Link>
    </li>
  );
};

export default HubBarItem;
