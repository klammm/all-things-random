import { API } from '../constants';

const fetchMemes = () => (
  fetch(API.REDDIT_URL)
    .then((res) => res.json())
    .then((response) => {
      const payload = response.data.children;
      for (let i = 0; i < payload.length; i += 1) {
        if (payload[i].data.post_hint === 'image') {
          return payload[i].data;
        }
      }
      return null;
    })
    .catch((err) => new Error('Error Generating Memes: ', err))
);

export default fetchMemes;
