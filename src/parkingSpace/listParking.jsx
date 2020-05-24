import React from 'react';
import Grid from '../../src/common/layout/grid';
import If from '../../src/common/operator/if';

export default props => (
    <If test={!props.hide}>
        <Grid cols={props.cols}>
            <div className="form-group">
                <label htmlFor={props.name}>{props.label}</label>
                <select
                    value={props.value}
                    onChange={props.onChangeField}
                    name="select"
                    className="input-square"
                    required={props.required}
                    readOnly={props.readOnly}>
                    <option value="" defaultValue></option>
                    {props.options}
                </select>
            </div>
        </Grid>
    </If>
)