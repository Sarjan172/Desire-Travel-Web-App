const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://travel-advisor.p.rapidapi.com/hotels/get-details',
  params: {
    location_id: '10359481',
    checkin: '2022-03-15',
    adults: '1',
    lang: 'en_US',
    currency: 'USD',
    nights: '2'
  },
  headers: {
    'X-RapidAPI-Key': '8de403cab2msh88b148050344178p163da5jsnb66975827c12',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});