import { ActionContext } from 'vuex'
import {
	fetchNewList,
	fetchAskList,
	fetchJobsList,
	fetchUserInfo,
	fetchItemInfo
} from '../api'
import { RootState } from './state'

export default {
	async FETCH_NEWS({ commit }: ActionContext<RootState, RootState>) {
		commit('SET_LOADING', true)
		try {
			const response = await fetchNewList()
			commit('SET_NEWS', response.data)
			return response
		} catch (error) {
			console.error(`error 발생: ${error}`)
		} finally {
			commit('SET_LOADING', false)
		}
	},
	async FETCH_ASK({ commit }: ActionContext<RootState, RootState>) {
		commit('SET_LOADING', true)
		try {
			const response = await fetchAskList()
			commit('SET_ASK', response.data)
			return response
		} catch (error) {
			console.error(`error 발생: ${error}`)
		} finally {
			commit('SET_LOADING', false)
		}
	},
	async FETCH_JOBS({ commit }: ActionContext<RootState, RootState>) {
		commit('SET_LOADING', true)
		try {
			const response = await fetchJobsList()
			commit('SET_JOBS', response.data)
			return response
		} catch (error) {
			console.error(`error 발생: ${error}`)
		} finally {
			commit('SET_LOADING', false)
		}
	},
	async FETCH_USER(
		{ commit }: ActionContext<RootState, RootState>,
		id: string | string[]
	) {
		commit('SET_LOADING', true)
		try {
			const response = await fetchUserInfo(id)
			commit('SET_USER', response.data)
			return response
		} catch (error) {
			console.error(`error 발생: ${error}`)
		} finally {
			commit('SET_LOADING', false)
		}
	},
	async FETCH_ITEM(
		{ commit }: ActionContext<RootState, RootState>,
		id: string | string[]
	) {
		commit('SET_LOADING', true)
		try {
			const response = await fetchItemInfo(id)
			commit('SET_ITEM', response.data)
			return response
		} catch (error) {
			console.error(`error 발생: ${error}`)
		} finally {
			commit('SET_LOADING', false)
		}
	}
}
