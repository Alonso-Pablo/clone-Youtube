import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setAddQueue } from '../actions';

import '../assets/styles/components/ContentItem.scss'


const ContentItem = (props) => {

    const { thumbnail, miniThumbnail, verifiedIcon, optionsIcon } = props;

    const handleSetAddQueue = () => {
        props.setAddQueue(
            {
                thumbnail, optionsIcon// miniThumbnail, verifiedIcon
            }
        )
    }

    const [ moreOptions, setMoreOptions ] = useState(false);

    const handle_showMoreOptions = () => {
        setMoreOptions( !moreOptions );
        return moreOptions;
    };

    return (
        <>
        <div className="content__item">
            <img className="content__item--thumbnail" src={thumbnail} alt="thumbnail of the video" />
            <div className="item__description">
                <img className="content__item--mini-thumbnail" src={miniThumbnail} alt="thumbnail of channel" />
                <div className="description__title-and-data">
                    <h3>
                        <a href="#" aria-label="Lorem ipsum ... ">Lorem ipsum dolor sit amet consectetur, adipisicing elit! </a>
                    </h3>
                    <img className="description__more-option" src={optionsIcon} onClick={ handle_showMoreOptions }/>
                    {moreOptions &&
                        <div className="more-option__menu--displayed">
                            <button onClick={ handleSetAddQueue }>
                                <svg viewBox="0 0 24 24" width="24" height="24"><g><path fill="#909090" d="M9,10 L18,10 L18,12 L9,12 L9,10 Z M6,6 L18,6 L18,8 L6,8 L6,6 Z M12,14 L18,14 L18,16 L12,16 L12,14 Z M6,12 L6,18 L10,15 L6,12 Z"></path></g></svg> 
                                <span>Add to queue</span>
                            </button>
                        </div>
                    }
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
}

const mapDispatchToProps = {
    setAddQueue, 
}

export default connect(null, mapDispatchToProps)(ContentItem);