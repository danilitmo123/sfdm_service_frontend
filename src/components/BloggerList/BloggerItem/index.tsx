import React, { FC } from 'react';
import { IBlogger } from '../../../models/IBlogger';

import './BloggerItem.scss';

const mockPhoto = require('../../../image/mockPhotoIvleeva.jpg');
const star = require('../../../image/star.png');

interface BloggerItemProps {
  blogger: IBlogger
}

const BloggerItem: FC<BloggerItemProps> = (props) => {
  const { blogger } = props;

  const generateStars = () => {
    const starsArray = [];
    for (let i = 1; i <= +blogger.rate; i += 1) {
      starsArray.push(<img src={star} alt="" className="star" />);
    }
    return starsArray;
  };

  return (
    <div className="blogger-card">
      <div className="blogger-stars">{generateStars()}</div>
      <div className="blogger-description-block">
        <div className="blogger-description">
          <img
            src={mockPhoto}
            alt=""
            className="blogger-img"
          />
          <div className="blogger-info">
            <div className="blogger-about">{blogger.about}</div>
            <div className="name-wrapper">
              <div className="blogger-name">{blogger.name}</div>
            </div>
          </div>
        </div>
        <div className="followers-wrapper">
          <div className="followers">10,000,000</div>
          <div className="followers-title">Подписчиков в Instagram</div>
        </div>
      </div>
      <div className="case-wrapper">
        {/* {blogger.completedJobs.map((jobItem) => ( */}
        {/*  <div className="case-item" key={jobItem.id}> */}
        {/*    <div className="circle" /> */}
        {/*    <div className="case-descr"> */}
        {/*      <div className="case-title">{jobItem.title}</div> */}
        {/*      <div className="case-date">{jobItem.customer}</div> */}
        {/*    </div> */}
        {/*  </div> */}
        {/* ))} */}
      </div>
      <div className="tag-wrapper">
        {blogger.tags.map((tagItem) => (
          <div className="tag-item" key={tagItem.id}>
            #
            {tagItem.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BloggerItem;
