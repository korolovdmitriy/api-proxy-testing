const axios = require("axios");
const {
  url,
  accessToken,
  policeStationId,
  userAccessToken,
} = require("./configs/configs.json");

test("GET /v1/my-guard-police/police-stations", async () => {
  await axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((res) => expect(Array.isArray(res.data)).toBeTruthy());
});

test("POST /v1/my-guard-police/police-stations/:id", async () => {
  await axios
    .post(url, {
      headers: {
        Authorization: `Bearer ${userAccessToken}`,
      },
    })
    .catch((err) => {
      expect(err.response.data.message).toEqual("User is not authorized");
    });
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

test("DELETE /v1/my-guard-police/police-stations/:id", async () => {
  await axios
    .get(`${url}/${policeStationId}`, {
      headers: {
        Authorization: `Bearer ${userAccessToken}`,
      },
    })
    .catch((err) => {
      expect(err.response.data.message).toEqual(
        "You don't have sufficient rights"
      );
    });
});

test("GET /v1/my-guard-police/police-stations/:id/crimes", async () => {
  await axios
    .get(`${url}/${policeStationId}/crimes`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((res) => {
      expect(Array.isArray(res.data)).toBeTruthy();
    });
});

test("GET /v1/my-guard-police/police-stations/:id/check-crimes", async () => {
  await axios
    .get(`${url}/${policeStationId}/check-crimes`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((res) => {
      expect(res.data).toBeTruthy();
    });
});
