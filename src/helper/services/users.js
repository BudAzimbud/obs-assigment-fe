import { objectToQueryString } from '..';
import api from '../api/api';

export const getUsersApi = (query) => {
  return api.get(`users?${objectToQueryString(query)}`);
};
