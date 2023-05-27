import axios from 'axios';
export { fetchPictures };
export const perPage = 12;
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '34960206-de96c32252473378b1121ae11';
const searchParams = new URLSearchParams({
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: perPage,
});
async function fetchPictures(query, page) {
  const response = await axios.get(
    `${BASE_URL}?${searchParams}&q='${query}'&page=${page}`
  );
  return response.data;
}