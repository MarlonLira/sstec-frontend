import React from 'react';

import MenuItem from './menuItem';
import MenuTree from './menuTree';

export default props => (
  <nav className="mt-2">
    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
      <MenuTree path='/' label='Dashboard' icon='tachometer-alt' />
      <MenuTree label='Cliente' icon='users' >
        <MenuItem label='Acessar' icon='circle' path='clients' />
      </MenuTree>
      <MenuTree label='Produtos' icon='boxes' >
        <MenuItem label='Acessar' icon='circle' path='products' />
      </MenuTree>
      <MenuTree label='Ciclos de Pagamento' icon='calculator' >
        <MenuItem label='Acessar' icon='circle' path='billingCycles' />
      </MenuTree>
      <MenuTree label='Componentes' icon='archive'>
        <MenuItem label='Acessar' icon='angle-right' path='components' />
      </MenuTree>
    </ul>
  </nav>
);