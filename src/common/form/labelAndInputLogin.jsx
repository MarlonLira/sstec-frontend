import React from 'react';
import Grid from '../layout/grid';
import If from '../operator/if';

export default props => (
    <If test={!props.hide}>
        <Grid cols={props.cols}>
            <div className='container form-group'>
                <input {...props.input}
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