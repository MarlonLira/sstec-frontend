import React from 'react';
import Grid from '../layout/grid';
import If from '../operator/if';
import MaskedInput from 'react-text-mask'
import { typeMask } from '../functions/typeMask'

export default props => (
    <If test={!props.hide}>
        <Grid cols={props.cols}>
            <div className='form-group'>
                <label htmlFor={props.name}>{props.label}</label>
                <MaskedInput {...props.input}
                    className='form-control'
                    placeholder={props.placeholder}
                    readOnly={props.readOnly}
                    type={props.type}
                    maxLength={props.maxLength}
                    required={props.required}
                    pattern={props.pattern}
                    mask={typeMask(props.mask)}
                />
            </div>
        </Grid>
    </If>
)
