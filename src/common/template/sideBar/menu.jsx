import React from 'react';

import MenuItem from './menuItem';
import MenuTree from './menuTree';

export default props => (
  <nav className="mt-2">
    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
      <MenuItem label='Inicio' icon='home' path='/' />
      <MenuTree label='Gerenciamento' icon='user-tie' >
<<<<<<< HEAD
        <MenuItem label='Cadastro de Estacionamento' icon='angle-right' path='parking' />
        <MenuItem label='Cadastro de Vagas' icon='angle-right' path='parkingSpace' />
        <MenuItem label='Cadastro de Promoções' icon='angle-right' path='#' />
=======
        <MenuItem label='Estacionamento' icon='angle-right' path='parking' />
        <MenuItem label='Funcionários' icon='angle-right' path='employee' />
        <MenuItem label='Reservas' icon='angle-right' path='schedulings' />
        <MenuItem label='Vagas' icon='angle-right' path='#' />
        <MenuItem label='Promoções' icon='angle-right' path='#' />
        <MenuItem label='Permissões' icon='angle-right' path='rule' />
>>>>>>> 83c4ffc1cf4d4738660c487102cee951cefee033
      </MenuTree>
      <MenuTree label='Financeiro' icon='barcode' >
        <MenuItem label='Acessar' icon='angle-right' path='products' />
      </MenuTree>
      <MenuTree label='Relátorios' icon='th-list' >
        <MenuItem label='Acessar' icon='angle-right' path='billingCycles' />
      </MenuTree>
      <MenuTree label='Suporte' icon='comments' >
        <MenuItem label='Mensagens' icon='angle-right' path='#' />
        <MenuItem label='Avaliações' icon='angle-right' path='#' />
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