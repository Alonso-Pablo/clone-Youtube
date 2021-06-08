import React, { useState, useEffect } from 'react';

// Components
import Header from '../components/Header'
import MiniGuide from '../components/MiniGuide'
import Search from '../components/Search'
import Main from '../components/Main'
import Content from '../components/Content'
import ContentForYou from '../components/ContentForYou'
import ContentBtnMore from '../components/ContentBtnMore'
import ContentContainer from '../components/ContentContainer'
import ContentItem from '../components/ContentItem'

// Resources
    // Header:
import menuIcon from '../assets/static/menu-icon.svg';
import logoYT from '../assets/static/youtube_logo.png'; // Original size: 1280px x 256px
import appsIcon from '../assets/static/apps-icon.svg';
import optionsIcon from '../assets/static/options-icon.svg';
import userIcon from '../assets/static/user-icon.svg';

    // Search:
import searchIcon from '../assets/static/search-icon.svg'
import micIcon from '../assets/static/mic-icon.svg';

    // MiniGuide:
import homeIcon from '../assets/static/home-icon.svg'
import exploreIcon from '../assets/static/explore-icon.svg'
import subscriptionsIcon from '../assets/static/subscriptions-icon.svg'
import libraryIcon from '../assets/static/library-icon.svg'
import historyIcon from '../assets/static/history-icon.svg'

    // ContentBtnMore
import arrowDownIcon from '../assets/static/arrowdown-icon.svg'

    // ContentItem:
import thumbnail from '../assets/static/thumbnail.jpg' // Original size: 1424px x 756px
import miniThumbnail from '../assets/static/mini-thumbnail.jpg' // Original size: 200px x 200px
import verifiedIcon from '../assets/static/verified-icon.svg'

import '../assets/styles/App.scss'


const App = () => {

    const header = {menuIcon, logoYT, appsIcon, optionsIcon, userIcon};
    const search = {searchIcon, micIcon};
    const miniGuide = {homeIcon, exploreIcon, subscriptionsIcon, libraryIcon, historyIcon};
    const contentBtnMore = {arrowDownIcon};
    const contentItem = {thumbnail, miniThumbnail, verifiedIcon};

    return (
    <>
        <Header {...header} >
            <Search {...search} />
        </Header>
        <Main>
            <MiniGuide {...miniGuide} />
            <Content>
                <ContentForYou>
                    <ContentItem {...contentItem} />
                    <ContentItem {...contentItem} />
                    <ContentItem {...contentItem} />
                    <ContentItem {...contentItem} />
                    <ContentItem {...contentItem} />
                    <ContentItem {...contentItem} />
                </ContentForYou>

                <ContentContainer title_section="Trending">
                    <ContentItem {...contentItem} />
                    <ContentItem {...contentItem} />
                    <ContentItem {...contentItem} />
                    <ContentItem {...contentItem} />
                    <ContentItem {...contentItem} />
                    <ContentItem {...contentItem} />
                </ContentContainer>

                <ContentBtnMore {...contentBtnMore} />

                <ContentContainer title_section="">
                    <ContentItem {...contentItem} />
                    <ContentItem {...contentItem} />
                    <ContentItem {...contentItem} />
                    <ContentItem {...contentItem} />
                    <ContentItem {...contentItem} />
                    <ContentItem {...contentItem} />
                </ContentContainer>


            </Content>
        </Main>
    </>
    )
};

export default App;