import React, { FC } from 'react';
import BloggerItem from './BloggerItem';

import './BloggerList.scss';

const BloggerList: FC = () => {
  const mockBloggers = [
    {
      id: 1,
      rate: 5,
      blogger: {
        name: 'Даня ',
        surname: 'Милохин',
        about: 'TikTok, Instagram',
        img: '',
      },
      case: [
        { title: 'Реклама выборов', date: '17.07.2021' },
        { title: 'Реклама выборов', date: '17.07.2021' },
        { title: 'Реклама выборов', date: '17.07.2021' },
      ],
      tag: [
        { title: '1XBET' },
        { title: 'SBER' },
        { title: 'ITMO' },
      ],
    },
    {
      id: 2,
      rate: 4,
      blogger: {
        name: 'Настя',
        surname: 'Ивлеева',
        about: 'YouTube, Instagram',
        img: '',
      },
      case: [
        { title: 'Реклама выборов', date: '17.07.2021' },
        { title: 'Реклама выборов', date: '17.07.2021' },
        { title: 'Реклама выборов', date: '17.07.2021' },
      ],
      tag: [
        { title: '1XBET' },
        { title: 'SBER' },
        { title: 'ITMO' },
      ],
    },
    {
      id: 3,
      rate: 4,
      blogger: {
        name: 'Настя',
        surname: 'Ивлеева',
        about: 'YouTube, Instagram',
        img: '',
      },
      case: [
        { title: 'Реклама выборов', date: '17.07.2021' },
        { title: 'Реклама выборов', date: '17.07.2021' },
        { title: 'Реклама выборов', date: '17.07.2021' },
      ],
      tag: [
        { title: '1XBET' },
        { title: 'SBER' },
        { title: 'ITMO' },
      ],
    },
    {
      id: 4,
      rate: 4,
      blogger: {
        name: 'Настя',
        surname: 'Ивлеева',
        about: 'YouTube, Instagram',
        img: '',
      },
      case: [
        { title: 'Реклама выборов', date: '17.07.2021' },
        { title: 'Реклама выборов', date: '17.07.2021' },
        { title: 'Реклама выборов', date: '17.07.2021' },
      ],
      tag: [
        { title: '1XBET' },
        { title: 'SBER' },
        { title: 'ITMO' },
      ],
    },
  ];

  return (
    <div className="blogger-list">
      {mockBloggers.map((blogger) => <BloggerItem blogger={blogger} key={blogger.id} />)}
    </div>
  );
};

export default BloggerList;
