const axios = require("axios");
const configs = require("./configs/configs.json");

axios
  .get(configs.url, {
    headers: {
      Authorization: `Bearer ${configs.accessToken}`,
    },
  })
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err.response.status));
