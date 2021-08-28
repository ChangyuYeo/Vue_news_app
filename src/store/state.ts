import { ItemInfoType, NewsItem, UserInfoType } from '../api/interface'

const state = {
	news: [] as NewsItem[],
	ask: [] as NewsItem[],
	jobs: [] as NewsItem[],
	user: {} as UserInfoType,
	item: {} as ItemInfoType,
	loading: false as boolean
}

type RootState = typeof state

export { state, RootState }
