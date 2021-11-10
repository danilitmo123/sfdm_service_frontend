import React, { FC } from 'react';
import Sidebar from '../../components/Sidebar';
import Button from '../../UI/Button';

import './Bloggers.scss';
import FilterPanel from '../../components/FilterPanel';
import BloggerList from '../../components/BloggerList';

const Bloggers: FC = () => (
  <div className="bloggers-page">
    <Sidebar />
    <div className="bloggers-wrapper">
      <div className="bloggers-top-tile">
        <div className="bloggers-title">Поиск по блоггерам</div>
        <div className="bloggers-popup">
          <div className="bloggers-popup-text">Продвигайте заказы по подписке SFDM PRO!</div>
          <Button text="Узнать больше" primary />
        </div>
      </div>
      <FilterPanel />
      <BloggerList />
    </div>
  </div>
);

export default Bloggers;
