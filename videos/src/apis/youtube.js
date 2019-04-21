import axios from 'axios';

const KEY = 'AIzaSyC2cnnl-saUGqZ5El1-ZpBLu_HE1ybbsrw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
