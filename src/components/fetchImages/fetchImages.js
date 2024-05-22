import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

const fetchImages = async (searchTerm, page) => {
  const response = await axios.get("/search/photos", {
    params: {
      client_id: "tEgtofoAx8QSIQt_CDWkpCX8nYPOxNtQoMYrKcvuucY",
      query: searchTerm,
      page: page,
      per_page: 15,
    },
  });
  return response.data;
};

export default fetchImages;
