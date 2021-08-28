import axios from 'axios'

const config = {
	baseUrl: process.env.VUE_APP_API_URL
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

function fetchUserInfo(id) {
	return axios.get(`${config.baseUrl}user/${id}.json`)
}

function fetchItemInfo(id) {
	return axios.get(`${config.baseUrl}item/${id}.json`)
}

export {
	fetchNewList,
	fetchAskList,
	fetchJobsList,
	fetchUserInfo,
	fetchItemInfo
}
