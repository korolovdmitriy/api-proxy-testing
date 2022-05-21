const axios = require("axios");
const { url, accessToken, policeStationId } = require("./configs/configs.json");

test("GET /v1/my-guard-police/police-stations", async () => {
  await axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((res) => expect(Array.isArray(res.data)).toBeTruthy());
});

test("GET /v1/my-guard-police/police-stations/:id", async () => {
  await axios
    .get(`${url}/${policeStationId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((res) => {
      expect(res.data[0].id).toBeTruthy();
      expect(res.data[0].location).toBeTruthy();
    });
});
