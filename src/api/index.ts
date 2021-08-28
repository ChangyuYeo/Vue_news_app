import axios, { AxiosPromise } from 'axios'
import { ItemInfoType, NewsItem, UserInfoType } from './interface'

const config = {
	baseUrl: process.env.VUE_APP_API_URL
}

function fetchNewList(): AxiosPromise<NewsItem[]> {
	return axios.get(`${config.baseUrl}news/1.json`)
}

function fetchAskList(): AxiosPromise<NewsItem[]> {
	return axios.get(`${config.baseUrl}ask/1.json`)
}

function fetchJobsList(): AxiosPromise<NewsItem[]> {
	return axios.get(`${config.baseUrl}jobs/1.json`)
}

function fetchUserInfo(id: string | string[]): AxiosPromise<UserInfoType> {
	return axios.get(`${config.baseUrl}user/${id}.json`)
}

function fetchItemInfo(id: string | string[]): AxiosPromise<ItemInfoType> {
	return axios.get(`${config.baseUrl}item/${id}.json`)
}

export {
	fetchNewList,
	fetchAskList,
	fetchJobsList,
	fetchUserInfo,
	fetchItemInfo
}
