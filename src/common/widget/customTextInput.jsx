import React from 'react';
import MaskedInput from 'react-text-mask';

import Grid from '../layout/grid';
import If from '../operator/if';
import { ReturnIfValid, IsValid } from '../functions/properties';

function onChange(e) {

  //e.target.setCustomValidity("Please select a date in the past.");
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
          <div className="wrap-input100 validate-input">
            <MaskedInput {...props.input}
              className='input100'
              placeholder={props.placeholder}
              readOnly={props.readOnly}
              type={props.type}
              maxLength={props.maxLength}
              required={props.required}
              pattern={props.pattern}
              mask={props.mask}
              guide={ReturnIfValid(props.guide, false)}
              autoComplete='off'
            />
            <span className="focus-input100"></span>
            <span className="symbol-input100">
              <i className={`fa fa-${props.icon}`} aria-hidden="true"></i>
            </span>
          </div>
        </If>

        {/*  Simple Input */}
        <If test={!IsValid(props.mask)}>
          <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
            <input {...props.input}
              className='input100'
              placeholder={props.placeholder}
              readOnly={props.readOnly}
              type={props.type}
              pattern={props.pattern}
              maxLength={props.maxLength}
              required={props.required}
              autoComplete='off'
              data-pattern-error="Please use only letters for your city."
            />
            <span className="focus-input100"></span>
            <span className="symbol-input100">
              <i className={`fa fa-${props.icon}`} aria-hidden="true"></i>
            </span>
          </div>
        </If>

      </div>
    </Grid>
  </If>
)