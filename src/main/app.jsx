import '../common/style/layout/dependencies';
import React from 'react';

import Header from '../common/style/layout/header';
import Footer from '../common/style/layout/footer';
import SideBar from '../common/style/layout/sideBar';
import Routes from './routes';
import Messages from '../common/widget/messages';

export default props => (
  <div className='wrapper'>
    <Header />
    <SideBar />
    <div className='content-wrapper'>
      <Routes />
    </div>
    <Footer />
    <Messages />
  </div>
);