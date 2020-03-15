import '../common/template/dependencies';
import React from 'react';

import Navbar from '../common/template/navbar/navbar';
import NavbarItem from '../common/template/navbar/navItem';
import NavbarItems from '../common/template/navbar/navItems';
import NavbarSearch from '../common/template/navbar/navSearch';
import SideBar from '../common/template/sideBar';
import Footer from '../common/template/footer';
import Messages from '../common/msg/messages';

export default props => (
  <div className='wrapper'>
    <div>
      <Navbar>
        <NavbarItems>
          <NavbarItem label="Inicio" source="#" />
          <NavbarItem label="Contato" source="#contato" />
        </NavbarItems>
        <NavbarSearch />
      </Navbar>
      <SideBar />
      <div className='content-wrapper'>
        {props.children}
      </div>
      <Footer />
    </div>
    <Messages />
  </div >
);