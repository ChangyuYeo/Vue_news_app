import axios from 'axios'

const config = {
	baseUrl: 'https://api.hnpwa.com/v0/'
}

function fetchNewList() {
	return axios.get(`${config.baseUrl}news/1.json`)
}

function fetchAskList() {
	return axios.get(`${config.baseUrl}ask/1.json`)
}

function fetchJobsList() {
	return axios.get(`${config.baseUrl}jobs/1.json`)
}

export { fetchNewList, fetchAskList, fetchJobsList }
