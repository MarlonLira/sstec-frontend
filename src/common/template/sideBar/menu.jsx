import React, { Component } from 'react';
import { connect } from 'react-redux';

import MenuItem from './menuItem';
import MenuTree from './menuTree';

class Menu extends Component {
  render() {
    const { authenticationLevel } = this.props.auth;
    return (
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <MenuItem label='Inicio' icon='home' path='/' />
          <MenuTree label='Gerenciamento' icon='tasks' authenticationLevel={authenticationLevel} accessLevel={2}>
            <MenuItem label='Estacionamento' icon='angle-right' path='parking' />
            <MenuItem label='Funcionários' icon='angle-right' path='employee' />
            <MenuItem label='Reservas' icon='angle-right' path='schedulings' />
            <MenuItem label='Vagas' icon='angle-right' path='parkingSpace' />
            <MenuItem label='Promoções' icon='angle-right' path='#' />
            <MenuItem label='Permissões' icon='angle-right' path='rule' />
          </MenuTree>
          <MenuTree label='Financeiro' icon='barcode' authenticationLevel={authenticationLevel} accessLevel={1}>
            <MenuItem label='Acessar' icon='angle-right' path='products' />
          </MenuTree>
          <MenuTree label='Relátorios' icon='th-list' authenticationLevel={authenticationLevel} accessLevel={2}>
            <MenuItem label='Acessar' icon='angle-right' path='billingCycles' />
          </MenuTree>
          <MenuTree label='Suporte' icon='comments' authenticationLevel={authenticationLevel} accessLevel={3}>
            <MenuItem label='Mensagens' icon='angle-right' path='#' />
            <MenuItem label='Avaliações' icon='angle-right' path='#' />
          </MenuTree>
          <MenuTree label='Configurações' icon='cogs' authenticationLevel={authenticationLevel} accessLevel={2}>
            <MenuItem label='Acessar' icon='angle-right' path='company' />
          </MenuTree>
          <MenuTree label='Componentes' icon='archive' authenticationLevel={authenticationLevel} accessLevel={1}>
            <MenuItem label='Acessar' icon='angle-right' path='components' />
          </MenuTree>
        </ul>
      </nav>
    )
  }
}

const mapStateToProps = state => ({ auth: state.auth });
export default connect(mapStateToProps)(Menu);