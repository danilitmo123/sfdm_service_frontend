import React, { FC } from 'react';
import Button from '../../UI/Button';
import SidebarItem from './SidebarItem';
import './Sidebar.scss';

const Sidebar: FC = () => (
  <div className="sidebar">
    <div className="logo-text">SFDM</div>
    <ul className="sidebar-nav">
      <SidebarItem img="" title="Поиск по блоггерам" />
      <SidebarItem img="" title="Добавить заказ" />
      <SidebarItem img="" title="Размещенные заказы" />
      <SidebarItem img="" title="Успешные сделки" />
      <SidebarItem img="" title="SFDM PRO" />
    </ul>
    <div className="line" />
    <div className="account-info">
      <div className="email">example@gmail.com</div>
      <Button text="ЛИЧНЫЙ КАБИНЕТ" primary />
    </div>
    <div className="line" />
  </div>
);

export default Sidebar;
