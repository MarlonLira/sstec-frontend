import React from 'react';
import Grid from '../layout/grid';
import If from '../operator/if';
//import '../../auth/auth.css'

export default props => (
    <If test={!props.hide}>
        <Grid cols={props.cols}>
            <div className='container'>
                <label htmlFor={props.name}>{props.label}</label>
                <input {...props.input}
                    className='content'
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