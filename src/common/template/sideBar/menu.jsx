import React from 'react';

import MenuItem from './menuItem';
import MenuTree from './menuTree';

export default props => (
  <nav className="mt-2">
    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
      <MenuItem  label='Inicio' icon='home' path='/' /> 

      <MenuTree label='Gerenciamento' icon='user-tie' >
        
      </MenuTree>

      <MenuTree label='Financeiro' icon='barcode' >
        <MenuItem label='Acessar' icon='circle' path='products' />
      </MenuTree>

      <MenuTree label='Relátorios' icon='th-list' >
        <MenuItem label='Acessar' icon='circle' path='billingCycles' />
      </MenuTree>

      <MenuTree label='Funcionários' icon='users-cog' >
        <MenuItem  label='Acessar' icon='circle' path='employee' />
      </MenuTree>

      <MenuTree label='Mensagens' icon='comment-alt' >
        
      </MenuTree>

      <MenuTree label='Avaliações' icon='star' >
        
      </MenuTree>

      <MenuTree label='Suporte' icon='comments' >
        
      </MenuTree>
      
      <MenuTree label='Configurações' icon='cogs' >
        <MenuItem  label='Acessar' icon='circle' path='company' />
      </MenuTree>

      <MenuTree label='Componentes' icon='archive'>
        <MenuItem label='Acessar' icon='angle-right' path='components' />
      </MenuTree>
    </ul>
  </nav>
);