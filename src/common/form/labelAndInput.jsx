import React from 'react';
import Grid from '../layout/grid';
import If from '../operator/if';

export default props => (
    <If test={!props.hide}>
        <Grid cols={props.cols}>
            <div className='form-group'>
                <label htmlFor={props.name}>{props.label}</label>
                <input {...props.input}
                    className='form-control'
                    placeholder={props.placeholder}
                    readOnly={props.readOnly}
                    type={props.type}
                    maxLength={props.maxLength}
                    required={props.required}
                    pattern={props.pattern}
                />
            </div>
        </Grid>
    </If>
)