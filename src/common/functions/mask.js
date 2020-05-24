import createNumberMask from 'text-mask-addons/dist/createNumberMask';

const Mask = {
  CURRENCY: 'CURRENCY',
  PHONE: 'PHONE',
  USER_REGISTRY_CODE: 'USERREGISTRYCODE',
  COMPANY_REGISTRY_CODE: 'COMPANYREGISTRYCODE'
}

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

function CreateMask(maskName) {

  switch (maskName) {
    case Mask.CURRENCY:
      return currencyMask;
    case Mask.PHONE:
      return ['(', /[1-9]/, /\d/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    case Mask.USER_REGISTRY_CODE:
      return [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/,];
    case Mask.COMPANY_REGISTRY_CODE:
      return [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];
    default:
      break;
  }
}

export { CreateMask, Mask };