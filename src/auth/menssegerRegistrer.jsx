import React from 'react';
import Grid from '../../src/common/layout/grid';
import If from '../../src/common/operator/if';


export default props => (
    <If test={!props.hide}>
        <Grid cols={props.cols}>
            <div className="login-paragraph">
                <hr/>
                <h1>Seja bem-vindo!</h1>
                <h4>
                    Seu cadastro foi realizado com sucesso. <br/>
                    Em breve, nossa equipe de atendimento entrará em contato <br/>
                    para validar e ativar o seu login a plataforma. <br/> 
                    Aguarde nosso contato. Desde já, agradecemos.  <br/>
                    <br/>
                    Equipe <strong>Simple Parking</strong> 
                </h4>
            </div>
        </Grid>
    </If>
)