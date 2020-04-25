import React from 'react';
import Menu from './menu';
import UserPanel from './userPanel';
import Logo from './logo';
import '../style/layout/auth.css'

export default props => (
  <aside className='main-sidebar sidebar-light-primary elevation-4'>
    {/* <!-- Logo --> */}
    <Logo text="Simple Parking" icon="car" />
    <section className='sidebar'>
      <UserPanel />
      <Menu />
    </section>
  </aside>
);