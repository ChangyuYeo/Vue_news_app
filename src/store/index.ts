import { createStore, StoreOptions } from 'vuex'
import { state, RootState } from './state'
import mutations from './mutations'
import actions from './actions'

const store: StoreOptions<RootState> = {
	state,
	mutations,
	actions
}

export default createStore(store)
