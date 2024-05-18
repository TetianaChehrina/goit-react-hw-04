import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

const fetchImages = async (searchQuery, page) => {
  const response = await axios.get(`/search/photos?query=${searchQuery}`, {
    params: {
      client_id: "tEgtofoAx8QSIQt_CDWkpCX8nYPOxNtQoMYrKcvuucY",
      query: searchQuery,
      page: page,
      per_page: 15,
    },
  });
  return response.data.results;
};

export default fetchImages;
