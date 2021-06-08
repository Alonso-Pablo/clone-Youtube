import React from 'react';

import '../assets/styles/components/ContentItem.scss'


const ContentItem = ({thumbnail, miniThumbnail, verifiedIcon}) => (
    <>
        <div className="content__item">
            <img className="content__item--thumbnail" src={thumbnail} alt="thumbnail of the video" />
            <div className="item__description">
                <img className="content__item--mini-thumbnail" src={miniThumbnail} alt="thumbnail of channel" />
                <div className="description__title-and-data">
                    <h3><a href="#" aria-label="Lorem ipsum ... ">Lorem ipsum dolor sit amet consectetur, adipisicing elit! </a></h3>
                    <div className="description__data">
                        <a href="#"><span>clonYoutube</span><img src={verifiedIcon} alt="verifed channel icon" /></a>
                        <div className="data-date">
                            <span>5.1M views •</span><span> 2 days ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default ContentItem;