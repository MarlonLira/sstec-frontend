import React from 'react';
import MaskedInput from 'react-text-mask';

import Grid from '../layout/grid';
import If from '../operator/if';
import { ReturnIfValid, IsValid } from '../functions/properties';
import { CreateMask } from '../functions/mask';

export default props => (
    <If test={!props.hide}>
        <Grid cols={props.cols}>
            <div className='form-group'>
                <If test={IsValid(props.label)}>
                    <label htmlFor={props.name}>{props.label}</label>
                </If>

                {/* Masked Input */}
                <If test={IsValid(props.mask)}>
                    <MaskedInput {...props.input}
                        className='input-square'
                        placeholder={props.placeholder}
                        readOnly={props.readOnly}
                        type={props.type}
                        maxLength={props.maxLength}
                        required={props.required}
                        pattern={props.pattern}
                        mask={CreateMask(props.mask)}
                        guide={ReturnIfValid(props.guide, false)}
                    />
                </If>

                {/*  Simple Input */}
                <If test={!IsValid(props.mask)}>
                    <input {...props.input}
                        className='input-square'
                        placeholder={props.placeholder}
                        readOnly={props.readOnly}
                        type={props.type}
                        maxLength={props.maxLength}
                        required={props.required}
                    />
                </If>

            </div>
        </Grid>
    </If>
)