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


function CleanMask(value, Mask) {
  switch (Mask) {
    case Mask.COMPANY_REGISTRY_CODE:
      return value.replace(/[^\d]+/g, '');
    case Mask.CURRENCY:
      return value.replace('R$', '');
    case Mask.PHONE:
      return value.replace(/[^\d]+/g, '');
    case Mask.USER_REGISTRY_CODE:
      return value.replace(/[^\d]+/g, '');
    default:
      return value.replace(/[^\d]+/g, '');
  }
}

function CreateMaskText(text, maskName) {
  switch (maskName) {
    case Mask.COMPANY_REGISTRY_CODE:
      return MaskCompanyText(text);
    case Mask.PHONE:
      return MaskPhoneText(text);
    default:
      break;
  }
}

function MaskCompanyText(text) {
  let value;

  value = text.substring(0, 2) + '.' +
    text.substring(2, 5) + '.' +
    text.substring(5, 8) + '/' +
    text.substring(8, 12) + '-' +
    text.substring(12, 14);

  return (value);
}

function MaskPhoneText(text) {
  let value;

  value = '(' +
    text.substring(0, 2) + ')' + ' ' +
    text.substring(2, 3) + ' ' +
    text.substring(3, 7) + ' - ' +
    text.substring(7, 11);

  return value;
}

export { CreateMask, CreateMaskText, MaskPhoneText, Mask, CleanMask };