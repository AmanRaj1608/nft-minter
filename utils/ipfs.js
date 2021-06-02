const axios = require('axios');
const FormData = require('form-data');

export const pinJSONToIPFS = (JSONBody) => {
  const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
  return axios
    .post(url, JSONBody, {
      headers: {
        pinata_api_key: '35fe459e878dd11337ee9',
        pinata_secret_api_key: '54a437bb947101cbebc34661e6909d2f92cbf926fa42f6a9a596c203b45b25a9'
      }
    })
    .then(function (response) {
      const x = response.data.IpfsHash
      return x
    })
    .catch(function (error) {
      console.error(error)
    });
}

export const pinFileToIPFS = (file) => {
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

  let data = new FormData();
  data.append('file', file)

  return axios
    .post(url, data, {
      maxContentLength: 'Infinity',
      headers: {
        'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
        pinata_api_key: '35fe459e878dd11337ee9',
        pinata_secret_api_key: '54a437bb947101cbebc34661e6909d2f92cbf926fa42f6a9a596c203b45b25a9'
      }
    })
    .then(function (response) {
      const y = response.data.IpfsHash
      return y
    })
    .catch(function (error) {
      console.log(error)
    });
}

export const encodedParams = "0x485f0f700000000000000000000000000000000000000000000000000000000000ad253b000000000000000000000000000000000000000000000000000000000013081b00000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000008676976656e55524c000000000000000000000000000000000000000000000000"
