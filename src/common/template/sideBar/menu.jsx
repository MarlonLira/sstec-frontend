import React from 'react';

import MenuItem from './menuItem';
import MenuTree from './menuTree';

export default props => (
  <nav className="mt-2">
    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
      <MenuItem label='Inicio' icon='home' path='/' />
      <MenuTree label='Gerenciamento' icon='user-tie' >
        <MenuItem label='Cadastro de Estacionamento' icon='angle-right' path='#' />
        <MenuItem label='Cadastro de Vagas' icon='angle-right' path='#' />
        <MenuItem label='Cadastro de Promoções' icon='angle-right' path='#' />
      </MenuTree>
      <MenuTree label='Financeiro' icon='barcode' >
        <MenuItem label='Acessar' icon='angle-right' path='products' />
      </MenuTree>
      <MenuTree label='Reservas' icon='bookmark' >
        <MenuItem label='Acessar' icon='angle-right' path='requests' />
      </MenuTree>
      <MenuTree label='Relátorios' icon='th-list' >
        <MenuItem label='Acessar' icon='angle-right' path='billingCycles' />
      </MenuTree>
      <MenuTree label='Funcionários' icon='users-cog' >
        <MenuItem label='Acessar' icon='angle-right' path='employee' />
      </MenuTree>
      <MenuTree label='Mensagens' icon='comment-alt' >
      </MenuTree>
      <MenuTree label='Avaliações' icon='star' >
      </MenuTree>
      <MenuTree label='Suporte' icon='comments' >
      </MenuTree>
      <MenuTree label='Configurações' icon='cogs' >
        <MenuItem label='Acessar' icon='angle-right' path='company' />
      </MenuTree>
      <MenuTree label='Componentes' icon='archive'>
        <MenuItem label='Acessar' icon='angle-right' path='components' />
      </MenuTree>
    </ul>
  </nav>
);