import { ItemInfoType, NewsItem, UserInfoType } from '../api/interface'
import { RootState } from './state'

export default {
	SET_NEWS(state: RootState, news: NewsItem[]) {
		state.news = news
	},
	SET_ASK(state: RootState, ask: NewsItem[]) {
		state.ask = ask
	},
	SET_JOBS(state: RootState, jobs: NewsItem[]) {
		state.jobs = jobs
	},
	SET_USER(state: RootState, user: UserInfoType) {
		state.user = user
	},
	SET_ITEM(state: RootState, item: ItemInfoType) {
		state.item = item
	},
	SET_LOADING(state: RootState, boolean: boolean) {
		state.loading = boolean
	}
}
