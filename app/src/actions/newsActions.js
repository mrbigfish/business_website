export const getNews = () => ({
  type: 'GET_NEWS',
});

export const newsReceived = (payload) => ({
  type: 'NEWS_RECEIVED',
  payload,
})