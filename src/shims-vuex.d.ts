import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'
import { RootState } from './store/state'

declare module '@vue/runtime-core' {
	// state type 선언
	// interface State {
	// 	count: number
	// }

	interface ComponentCustomProperties {
		$store: Store<RootState>
	}
}
