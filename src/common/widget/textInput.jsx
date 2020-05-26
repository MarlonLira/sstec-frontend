import React from 'react';
import MaskedInput from 'react-text-mask';

import Grid from '../layout/grid';
import If from '../operator/if';
import { ReturnIfValid, IsValid } from '../functions/properties';

function OnInvalid(e) {
  e.target.setCustomValidity(e.target.getAttribute('data-pattern-error'));
  return e;
}

function OnInput(e) {
  e.target.setCustomValidity('');
  return e;
}

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
            mask={props.mask}
            guide={ReturnIfValid(props.guide, false)}
            autoComplete='off'
            onInvalid={OnInvalid}
            onInput={OnInput}
            data-pattern-error={ReturnIfValid(props.patternError, '')}
          />
        </If>

        {/*  Simple Input */}
        <If test={!IsValid(props.mask)}>
          <input {...props.input}
            className='input-square'
            placeholder={props.placeholder}
            readOnly={props.readOnly}
            type={props.type}
            pattern={props.pattern}
            maxLength={props.maxLength}
            required={props.required}
            autoComplete='off'
            onInvalid={OnInvalid}
            onInput={OnInput}
            data-pattern-error={ReturnIfValid(props.patternError, '')}
          />
        </If>

      </div>
    </Grid>
  </If>
)