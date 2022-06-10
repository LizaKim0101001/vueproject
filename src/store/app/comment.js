import api from '@/api'

export const mutation = {
    SET_ALL_COMMENTS: 'SET_ALL_COMMENTS',
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
	},

	getters: {
		allComments: state => state.allComments,
	},

	mutations: {
		[mutation.SET_ALL_COMMENTS]:(state, data)=>{
			state.allComments = data
		},

},

	actions: {
        getAll:({commit},id)=>{
            return api.Comment.getAllComments(id)
        },
        setComments:({commit}, data)=>{
            commit(mutation.SET_ALL_COMMENTS, data)
        },
        addEditComment:(body)=>{
            api.Comment.createEditComments(body)
        },
        deleteComment:(id)=>{
            api.Comment.deleteComments(id)
        }
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