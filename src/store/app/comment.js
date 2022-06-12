import api from '@/api'

export const mutation = {
    SET_ALL_COMMENTS: 'SET_ALL_COMMENTS',
    SET_TOTAL_COMMENTS: 'SET_TOTAL_COMMENTS'
}

export default {
	namespaced: true,
	state: {
        allComments : [],
        comentData : {
        id: "",
        taskId: "",
        userId: "",
        text: ""
        },
        totalComments: ''
	},

	getters: {
		allComments: state => state.allComments,
        totalComments: state => state.totalComments
	},

	mutations: {
		[mutation.SET_ALL_COMMENTS]:(state, data)=>{
			state.allComments = data
		},
        [mutation.SET_TOTAL_COMMENTS]:(state, data)=>{
            state.totalComments = data
        }

},

	actions: {
        getAll:({commit},id)=>{
            api.Comment.getAllComments(id)
            .then(({data})=>{
                commit(mutation.SET_ALL_COMMENTS, data)
                commit(mutation.SET_TOTAL_COMMENTS, data.length)
            })
        },
/* 		filterTasks:({commit}, value)=>{
			commit(mutation.SET_TASK_FILTER, value)
			api.Task.getFilterTasks(value)
			.then(({data})=>{
				commit(mutation.SET_TOTAL, data.total)
				commit(mutation.SET_FILTERED_DATA, data.data)
			})
		}, */
	}
}