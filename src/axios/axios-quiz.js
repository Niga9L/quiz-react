import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-e397e.firebaseio.com/'
})