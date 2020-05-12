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

function GetTime(date) {
  if (!IsTime(date)) {
    let _date = new Date(date);
    let hours = LeftZero(_date.getUTCHours());
    let minutes = LeftZero(_date.getUTCMinutes());
    let seconds = LeftZero(_date.getUTCSeconds());
    return `${hours}:${minutes}:${seconds}`;
  } else {
    return date;
  }
}

function IsTime(time) {
  var isTime = /^([0-2]{1}[0-9]{1}):[0-5]{1}[0-9]:[0-5]{1}[0-9]/;
  if (isTime.test(time)) {
    return true;
  } else {
    false;
  }
}

function LeftZero(value) {
  let result = ' ';
  if (value !== undefined && value != null) {
    result = value.toString();
    if (value.toString().length === 1) {
      result = `0${value.toString()}`;
    }
  }
  return result;
}

export { ReturnIfValid, GetDateNow, IsValid, GetTime };