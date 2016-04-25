import {request} from '../utils/util';

export const getInfo = ({ dispatch }) => {
  request('/mock/mock.json', (res) => {
    dispatch('GET_INFO', res);
  });
};
