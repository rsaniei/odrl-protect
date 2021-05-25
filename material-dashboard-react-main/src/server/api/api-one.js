const axios = require('axios');

export function getInfo() {
  axios.get("https://ipinfo.io/json?token=08f1e249c0a63e")
    .then(resp => {
      console.log("Hello world. You are in:" + resp.data.city);
    })
    .catch(error => console.log('Error', error));

}
