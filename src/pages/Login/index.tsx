import React, { FC } from 'react';
import { Input } from 'antd';
import './Login.scss';
import Button from '../../UI/Button';

const Login: FC = () => (
  <div className="login-page">
    <div>
      <label htmlFor="email">Email</label>
      <Input />
    </div>
    <div>
      <label htmlFor="password">Пароль</label>
      <Input
        type="password"
      />
    </div>
    <Button text="Войти" primary />
  </div>
);

export default Login;
