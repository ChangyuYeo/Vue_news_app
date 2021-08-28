import {
	fetchNewList,
	fetchAskList,
	fetchJobsList,
	fetchUserInfo,
	fetchItemInfo
} from '@/api/index'

export default {
	async FETCH_NEWS({ commit }) {
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
	async FETCH_ASK({ commit }) {
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
	async FETCH_JOBS({ commit }) {
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
	async FETCH_USER({ commit }, id) {
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
	async FETCH_ITEM({ commit }, id) {
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
