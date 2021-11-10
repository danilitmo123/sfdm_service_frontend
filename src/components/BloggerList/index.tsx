import React, { FC } from 'react';

import './BloggerList.scss';
import { bloggersAPI } from '../../services/BloggerService';

const BloggerList: FC = () => {
  const { data: bloggers } = bloggersAPI.useFetchAllBloggersQuery('');

  console.log(bloggers);
  return (
    <div className="blogger-list">
      {/* {mockBloggers.map((blogger) => <BloggerItem blogger={blogger} key={blogger.id} />)} */}
    </div>
  );
};

export default BloggerList;
