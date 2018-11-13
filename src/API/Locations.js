const CLIENT_ID = "FG31YNYTBHS2RL0HGDUYPQN4OTLW3L0J2DSH5RBDAFYOAWYI";
const CLIENT_SECRET = "LM2KV5VPZYQM244NW4IYV2UR2TCEMDCE1SQN2VAIKWR1L3Q5";

export const getLocations = () => {
    return fetch(`https://api.foursquare.com/v2/venues/search?ll=32.715738,-117.161084&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20181111
  `)
      .then(resp => resp.json())
      .then(result => result.response.groups[0].items);
};
