import axios from 'axios';

import { API_URL } from '../constants';

export let api = axios.create({
  baseURL: API_URL
});

export const postsList = (type, q, category_id, page, per_page) => {
  return api({
    method: 'GET',
    url: 'posts',
    params: {
      type,
      q,
      category_id,
      page,
      per_page
    }
  }).then(function (response) {
    return response.data;
  })
};

