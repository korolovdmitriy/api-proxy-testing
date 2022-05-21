const axios = require("axios");
const { url, accessToken, policeStationId } = require("./configs/configs.json");

axios
  .get(`${url}/${policeStationId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
  .then((res) => console.log(res.data[0].location))
  .catch((err) => console.log(err.response.status));
