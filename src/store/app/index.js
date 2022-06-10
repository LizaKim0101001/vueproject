import api from '@/api'

export const mutation = {
	SET_USERS_FILTER: 'SET_USERS_FILTER',
	SET_USERS :"SET_USERS",
	SET_FILTERED :"SET_FILTERED",
	SET_TOTAL : 'SET_TOTAL',
	SET_ONEUSER: "SET_ONEUSER",
	SET_LOGINDATA: 'SET_LOGINDATA',
	SET_EDITPROFILE: 'SET_EDITPROFILE',
	SET_USERDATA: 'SET_USERDATA',
	SET_AUTHORIZED: 'SET_AUTHORIZED'
}

export default {
	namespaced: true,
	state: {
		loginData: {login: "", password: ""},
		authorized: false,
		userData: [],
		filtered : [],
		users:[],
		oneUser: [],
		total: "",
		userFilter : {
			filter: {
			  query: ""
			},
			page: 0,
			limit: 10
		  },
	  	editProfile : {
		  id: "",
		  login: "",
		  username: "",
		  about: "",
		  photoUrl: "",
		  password: ""
		}
	},

	getters: {
		users: state => state.users,
		filtered: state => state.filtered,
		userFilter: state => state.userFilter,
		editProfile: state => state.editProfile,
		total: state => state.total,
		oneUser: state => state.oneUser,
		loginData: state => state.loginData,
		userData: state => state.userData,
		authorized: state => state.authorized

	},

	mutations: {
		[mutation.SET_USERS_FILTER]: (state, data)=>{
			state.userFilter = data
		},
		[mutation.SET_USERS]: (state, data)=>{
			state.users = data || []
		},
		[mutation.SET_FILTERED]: (state, data)=>{
			state.filtered = data
		},
		[mutation.SET_TOTAL]: (state, data)=>{
			state.total = data
		},
		[mutation.SET_LOGINDATA]: (state, data)=>{
			state.loginData = data
		},
		[mutation.SET_ONEUSER]: (state, data)=>{
			state.oneUser = data
		},
		[mutation.SET_EDITPROFILE]: (state, data)=>{
			state.editProfile = data
		},
		[mutation.SET_USERDATA]: (state, data)=>{
			state.userData = data
		},
		[mutation.SET_AUTHORIZED]:(state, data)=>{
			state.authorized = data
		},
	},

	actions: {
		fetchUsers: ({dispatch, commit}) => {
			return  api.Users.getAllUsers()
				.then(({data})=>{
					commit(mutation.SET_USERS, data)
					return data
				})
		},
		filterUser: ({dispatch, commit, getters}, value) =>{
			commit(mutation.SET_USERS_FILTER, value)
			api.Users.getFilterUsers(value)
			.then(({data})=>{
				commit(mutation.SET_TOTAL, data.total)
				commit(mutation.SET_FILTERED, data.data)
			})
		},
		getOne({commit},id){
			api.Users.getOneUsers(id)
			.then((data)=>{
				commit(mutation.SET_ONEUSER, data)
			})
		},
		editProfile({commit}, body){
			commit(mutation.SET_EDITPROFILE, body)
			api.Users.editUser(body)
			.then((data)=>{
				commit(mutation.SET_USERDATA, data)
			})
		},
		login({commit}, body){
			commit(mutation.SET_LOGINDATA, body)
			api.Users.postLogin(body)
			.then(({data})=>{
				commit(mutation.SET_AUTHORIZED, true)
				commit(mutation.SET_USERDATA, data)
			})
		},
		logout({commit}){
			commit(mutation.SET_AUTHORIZED, false)
		},

	},
}

/* 		setLoading: ({ dispatch, commit }, value) => {
			commit(mutation.SET_LOADING, value)
		},
		initApp: ({ dispatch, commit }, value) => {
			
		},
		fetchEvents: ({ dispatch, commit, getters }, value) => {
			dispatch('setLoading', true)
			api.Events.getEvents()
			.then(({data}) => {
				setTimeout( () => {
					dispatch('setLoading', false)
					commit(mutation.SET_EVENTS, data)
				}, 5000)
			})
		}, */
/* 		setUsers: ({dispatch, commit}, value)=>{
			commit(mutation.SET_USERS, value)
		},
		setFilter: ({commit}, value)=>{
			commit(mutation.SET_FILTERED, value)
		}, */
				// setActiveTab: ({ dispatch, commit }, value) => {
		// 	commit(mutation.SET_ACTIVE_TAB, value)
		// },
		// setFilters: ({ dispatch, commit }, value) => {
		// 	commit(mutation.SET_FILTER, value)
		// }