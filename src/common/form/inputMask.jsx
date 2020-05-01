import React from 'react';
import Grid from '../layout/grid';
import If from '../operator/if';
import MaskedInput from 'react-text-mask'

export default props => (
    <If test={!props.hide}>
        <Grid cols={props.cols}>
            <div className='container form-group'>
                <MaskedInput {...props.input}
                    placeholder={props.placeholder}
                    readOnly={props.readOnly}
                    type={props.type}
                    maxLength={props.maxLength}
                    required={props.required}
                    pattern={props.pattern}
                    mask={props.mask}
                />
            </div>
        </Grid>
    </If>
)