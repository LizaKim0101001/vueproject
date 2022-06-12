import Vuex from 'vuex'

import index from './app/index'
import task from './app/task'
import comment from './app/comment'

Vue.use(Vuex)

const store = () => {
	return new Vuex.Store({
		modules: {
			index,
			task,
			comment
		}
	})
}

export default store
