import axios from 'axios';

const baseURL = 'https://hacker-news.firebaseio.com/v0';
const topHNStories = `${baseURL}/topstories.json`;
const singleItemURL = `${baseURL}/item`;

export const getStoryIds = async () => {
  const response = await axios.get(topHNStories).then(({ data }) => data);
  return response;
};

export const getItem = async (itemID) => {
  const response = await axios.get(`${singleItemURL}/${itemID}.json`).then(({ data }) => data);
  return response;
}