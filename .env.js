// this is formatted to echo the structure of the Bluemix credentials
module.exports = {
    VCAP_SERVICES: JSON.stringify({
        conversation: [{
            credentials: {
              "url": "https://gateway.watsonplatform.net/conversation/api",
              "username": "8082f228-f5af-4f3a-8e1a-aa6ca2892379",
              "password": "mHf1pDN8QCoO"
            }
        }],
        discovery: [{
          credentials: {
            "url": "https://gateway.watsonplatform.net/discovery/api",
            "username": "cfc6aa07-e075-4489-9921-7173ca381704",
            "password": "M8TvuOxej2Cy"
          }
        }]
    }),
    // conversation creds
    workspace_id: "d22bfd60-a2d0-4eaa-b58b-e1f62ffe2765",
    conversation_version: "2017-05-26",
    // disco creds
    environment_id: "d3fea7a4-5a7d-4b99-be8f-d88ee1936f19",
    collection_id: "d76e42d2-94c8-4372-9eb2-e8d39c4738ff",
    discovery_version: "2017-10-16"
};
