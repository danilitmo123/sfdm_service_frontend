import React from 'react';
import Login from '../pages/Login';
import Bloggers from '../pages/Bloggers';
import Account from '../pages/Account';

export interface IRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export enum RouteNames {
  LOGIN = '/login',
  BLOGGERS = '/bloggers',
  ACCOUNT = '/account'
}

export const publicRoutes: IRoute[] = [
  { path: RouteNames.LOGIN, exact: true, component: Login },
  { path: RouteNames.BLOGGERS, exact: false, component: Bloggers },
];

export const privateRoutes: IRoute[] = [
  { path: RouteNames.ACCOUNT, exact: true, component: Account },
];
