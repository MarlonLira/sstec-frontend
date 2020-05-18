import React from 'react';
import Grid from '../layout/grid';
import If from '../operator/if';
import MaskedInput from 'react-text-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

const defaultMaskOptions = {
    prefix: 'R$',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ',',
    allowDecimal: true,
    decimalSymbol: '.',
    decimalLimit: 2,
    integerLimit: 7,
    allowNegative: false,
    allowLeadingZeroes: false,
}

const currencyMask = createNumberMask(defaultMaskOptions)

export default props => (
    <If test={!props.hide}>
        <Grid cols={props.cols}>
            <div className='form-group'>
                <label htmlFor={props.name}>{props.label}</label>
                <MaskedInput {...props.input}
                    className="form-control"
                    placeholder={props.placeholder}
                    readOnly={props.readOnly}
                    type={props.type}
                    maxLength={props.maxLength}
                    required={props.required}
                    pattern={props.pattern}
                    mask={currencyMask}
                />
            </div>
        </Grid>
    </If>
)