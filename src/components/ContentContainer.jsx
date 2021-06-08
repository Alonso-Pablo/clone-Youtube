import React from 'react';

import '../assets/styles/components/ContentContainer.scss'


const ContentContainer = ({children, title_section}) => (
    <section className="content__container">
        <div className="container__section--title">
            <a href="#"><span>{title_section}</span></a>
        </div>
        {children}
    </section>
);

export default ContentContainer;