import React, { FC } from 'react';
import { Input, Select } from 'antd';
import Button from '../../UI/Button';
import './FilterPanel.scss';

const FilterPanel: FC = () => (
  <div className="filter-panel">
    <Input
      className="filter-panel-input"
      placeholder="Введите имя..."
    />
    <div>
      <Select
        placeholder="Выбрать по хештегу"
        showSearch
      >
        <Select.Option value="1XBET">1XBET</Select.Option>
      </Select>
      <Select
        placeholder="Выбрать по сервису"
        showSearch
      >
        <Select.Option value="1XBET">1XBET</Select.Option>
      </Select>
      <Button text="По рейтингу" primary={false} />
      <Button text="По подписчикам" primary={false} />
    </div>
  </div>
);

export default FilterPanel;
