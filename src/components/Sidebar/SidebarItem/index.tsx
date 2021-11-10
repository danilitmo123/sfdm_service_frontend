import React, { FC } from 'react';

import './SidebarItem.scss';

interface SidebarItemProps {
  img: string;
  title: string;
}

const SidebarItem: FC<SidebarItemProps> = (props) => {
  const { img, title } = props;
  return (
    <li className="sidebar-item">
      <div className="link">
        <span className="icon">{img}</span>
        <span className="title">{title}</span>
      </div>
    </li>
  );
};

export default SidebarItem;
