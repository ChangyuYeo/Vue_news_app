import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'
import { NewsItem } from './api/interface'

declare module '@vue/runtime-core' {
	interface ComponentCustomProperties {
		$store: Store<NewsItem>
	}
}
