import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 5b2213bcfe39b462484789658f83c43e161ea4be74414d0ca8999d3738a9f851'
    }
}); 