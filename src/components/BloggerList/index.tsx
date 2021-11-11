import React, { FC } from 'react';

import './BloggerList.scss';
import { bloggersAPI } from '../../services/BloggerService';
import BloggerItem from './BloggerItem';
import { IBlogger } from '../../models/IBlogger';

const BloggerList: FC = () => {
  const { data: bloggers, error, isLoading } = bloggersAPI.useFetchAllBloggersQuery('');

  console.log(bloggers, isLoading);

  if (isLoading) {
    return <h1>Идет загрузка</h1>;
  }

  return (
    <div className="blogger-list">
      {error && <h1>Ошибка</h1>}
      {bloggers && bloggers.map((blogger: IBlogger) => <BloggerItem blogger={blogger} key={blogger.id} />)}
    </div>
  );
};

export default BloggerList;
