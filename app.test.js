const axios = require("axios");
const configs = require("./configs/configs.json");

test("GET /v1/my-guard-police/police-stations", async () => {
  await axios
    .get(configs.url, {
      headers: {
        Authorization: `Bearer ${configs.accessToken}`,
      },
    })
    .then((res) => expect(Array.isArray(res.data)).toBeTruthy());
});
