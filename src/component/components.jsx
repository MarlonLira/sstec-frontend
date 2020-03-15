import React, { Component } from 'react';
import Select from '../common/widget/select/select';

class Components extends Component {

  render() {
    return (
      <div>
        <div className="card card-primary card-outline card-outline-tabs">
          <div className="card-header p-0 border-bottom-0">
            <ul className="nav nav-tabs" id="custom-tabs-three-tab" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="custom-tabs-three-home-tab" data-toggle="pill" href="#custom-tabs-three-home" role="tab" aria-controls="custom-tabs-three-home" aria-selected="true">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="custom-tabs-three-profile-tab" data-toggle="pill" href="#custom-tabs-three-profile" role="tab" aria-controls="custom-tabs-three-profile" aria-selected="false">Profile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="custom-tabs-three-messages-tab" data-toggle="pill" href="#custom-tabs-three-messages" role="tab" aria-controls="custom-tabs-three-messages" aria-selected="false">Messages</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="custom-tabs-three-settings-tab" data-toggle="pill" href="#custom-tabs-three-settings" role="tab" aria-controls="custom-tabs-three-settings" aria-selected="false">Settings</a>
              </li>
            </ul>
          </div>
          <div className="card-body">
            <div className="tab-content" id="custom-tabs-three-tabContent">
              <div className="tab-pane fade show active" id="custom-tabs-three-home" role="tabpanel" aria-labelledby="custom-tabs-three-home-tab">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada lacus ullamcorper dui molestie, sit amet congue quam finibus. Etiam ultricies nunc non magna feugiat commodo. Etiam odio magna, mollis auctor felis vitae, ullamcorper ornare ligula. Proin pellentesque tincidunt nisi, vitae ullamcorper felis aliquam id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin id orci eu lectus blandit suscipit. Phasellus porta, ante et varius ornare, sem enim sollicitudin eros, at commodo leo est vitae lacus. Etiam ut porta sem. Proin porttitor porta nisl, id tempor risus rhoncus quis. In in quam a nibh cursus pulvinar non consequat neque. Mauris lacus elit, condimentum ac condimentum at, semper vitae lectus. Cras lacinia erat eget sapien porta consectetur.
                  </div>
              <div className="tab-pane fade" id="custom-tabs-three-profile" role="tabpanel" aria-labelledby="custom-tabs-three-profile-tab">
                Mauris tincidunt mi at erat gravida, eget tristique urna bibendum. Mauris pharetra purus ut ligula tempor, et vulputate metus facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas sollicitudin, nisi a luctus interdum, nisl ligula placerat mi, quis posuere purus ligula eu lectus. Donec nunc tellus, elementum sit amet ultricies at, posuere nec nunc. Nunc euismod pellentesque diam.
                  </div>
              <div className="tab-pane fade" id="custom-tabs-three-messages" role="tabpanel" aria-labelledby="custom-tabs-three-messages-tab">
                Morbi turpis dolor, vulputate vitae felis non, tincidunt congue mauris. Phasellus volutpat augue id mi placerat mollis. Vivamus faucibus eu massa eget condimentum. Fusce nec hendrerit sem, ac tristique nulla. Integer vestibulum orci odio. Cras nec augue ipsum. Suspendisse ut velit condimentum, mattis urna a, malesuada nunc. Curabitur eleifend facilisis velit finibus tristique. Nam vulputate, eros non luctus efficitur, ipsum odio volutpat massa, sit amet sollicitudin est libero sed ipsum. Nulla lacinia, ex vitae gravida fermentum, lectus ipsum gravida arcu, id fermentum metus arcu vel metus. Curabitur eget sem eu risus tincidunt eleifend ac ornare magna.
                  </div>
              <div className="tab-pane fade" id="custom-tabs-three-settings" role="tabpanel" aria-labelledby="custom-tabs-three-settings-tab">
                Pellentesque vestibulum commodo nibh nec blandit. Maecenas neque magna, iaculis tempus turpis ac, ornare sodales tellus. Mauris eget blandit dolor. Quisque tincidunt venenatis vulputate. Morbi euismod molestie tristique. Vestibulum consectetur dolor a vestibulum pharetra. Donec interdum placerat urna nec pharetra. Etiam eget dapibus orci, eget aliquet urna. Nunc at consequat diam. Nunc et felis ut nisl commodo dignissim. In hac habitasse platea dictumst. Praesent imperdiet accumsan ex sit amet facilisis.
                  </div>
            </div>
          </div>
        </div>

        <div className="card card-primary card-outline card-outline-tabs">
          
            <div className="card-header p-0 border-bottom-0">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a href="javascript:;" className="nav-link" data-toggle="pill" role="tab" data-target="tabList">
                    <i className="fa fa-bars"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="javascript:;" className="nav-link" data-toggle="pill" role="tab" data-target="tabCreate">
                    <i className="fa fa-plus"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <div className="tab-content">
                <div id="tabList" className="tab-pane fade show active" role="tabpanel">
                  <div>
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Cliente</th>
                          <th>CPF</th>
                          <th>Telefone</th>
                          <th>Email</th>
                          <th>Ações</th>
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table>
                  </div>
                </div>
                <div id="tabCreate" className="tab-pane fade  show" role="tabpanel">
                  <form role="form">
                    <div className="row">
                      <div className="col-xs-12 col-sm-4 ">
                        <div className="form-group">
                          <label>Nome</label>
                          <input type="text" name="name" value="" className="form-control" placeholder="Informe o nome do cliente" maxlength="30" required="" />
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-4 ">
                        <div className="form-group">
                          <label>CPF</label>
                          <input type="text" name="registryCode" value="" className="form-control" placeholder="Informe o CPF do cliente" maxlength="12" required="" pattern="\d{11,12}" />
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-4 ">
                        <div className="form-group">
                          <label>Telefone</label>
                          <input type="tel" name="phone" value="" className="form-control" placeholder="Informe o telefone do cliente" maxlength="12" required="" pattern="\d{11,12}" />
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-4 ">
                        <div className="form-group">
                          <label>Email</label>
                          <input type="text" name="email" value="" className="form-control" placeholder="Informe o email do cliente" maxlength="50" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
                        </div>
                      </div>
                    </div>
                    <div className="box-footer"><button type="submit" className="btn btn-primary">Incluir</button><button type="button" className="btn btn-default">Cancelar</button></div>
                  </form>
                </div>
              </div>
            </div>
          
        </div>


      </div>
    );
  }
}


export default Components;