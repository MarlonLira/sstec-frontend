import axios from 'axios';
import Consts from '../../../consts';

const BASE_URL = Consts.API_URL;

export function getList(list) {
  let result = {};
  list = [
    {
      "value": 1,
      "name": "opt 1"
    },
    {
      "value": 2,
      "name": "opt 2"
    }
  ];
  result = list == undefined || list == null ? '' : list;
  return new Promise((resolve) => {
    resolve({
      type: 'SELECT_FETCHED',
      payload: result
    });
  })
}
