import { create } from "apisauce";

const api = create({
  baseURL: 'https://newsapi.org/v2',
});

const apiKey = '7698045f6f3f4354934520f2af18b651';

const getTopHeadlines = () => api.get(`/top-headlines?country=us&apiKey=${apiKey}`);
const getByCategory = (category) => api.get(`/everything?q=${category}&apiKey=${apiKey}`);

export default {
  getTopHeadlines,
  getByCategory,
};
