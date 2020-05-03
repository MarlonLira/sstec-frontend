import { IsValid } from './properties';

function Refresh(seconds) {
  window.location.reload(seconds);
}

function IsNeedRefresh(isRefresh = false) {
  if (!IsValid(localStorage.getItem("isRefresh"))) {
    localStorage.setItem("isRefresh", 0);
  }
  else if (localStorage.getItem("isRefresh") == 0 && isRefresh == true) {
    localStorage.setItem("isRefresh", 1);
    window.location.reload(10);
  } else if (!IsValid(localStorage.getItem("_sp_token_employee"))) {
    localStorage.clear();
  }
}

export { Refresh, IsNeedRefresh }