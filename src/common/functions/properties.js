function ReturnIfValid(value) {
  let result = null;
  if (value != undefined && value != '' && value != null) {
    result = value;
  }
  return result;
}

function ReturnIfValid(value, defaultValue) {
  let result = defaultValue;
  if (value != undefined && value != '' && value != null) {
    result = value;
  }
  return result;
}

function IsValid(value) {
  return (value != undefined && value != '' && value != null) ? true : false;
}

function LeftZero(value) {
  let result = ' ';
  if (value != undefined && value != null) {
    result = value.toString();
    if (value.toString().length == 1) {
      result = `0${value.toString()}`;
    }
  }
  return result;
}

function GetDateNow() {
  var InnerDate = {};
  let _date = new Date();
  InnerDate.Year = LeftZero(_date.getFullYear());
  InnerDate.Month = LeftZero(_date.getMonth() + 1);
  InnerDate.Day = LeftZero(_date.getDate());
  InnerDate.FullDate = `${InnerDate.Year}-${InnerDate.Month}-${InnerDate.Day}`;
  return InnerDate;
}

export { ReturnIfValid, GetDateNow, IsValid };