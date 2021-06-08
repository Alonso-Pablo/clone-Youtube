import React from 'react';

import '../assets/styles/components/ContentBtnMore.scss'


const ContentBtnMore = ({arrowDownIcon}) => (
    <button className="content__more-content">
        <img src={arrowDownIcon} alt="button for more content" />
    </button>
);

export default ContentBtnMore;