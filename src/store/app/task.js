import api from '@/api'

export const mutation = {
	SET_FILTERED_DATA : 'SET_FILTERED_DATA',
	SET_TASK: 'SET_TASK',
	SET_TOTAL: 'SET_TOTAL',
	SET_CREATE_EDIT: 'SET_CREATE_EDIT',
	SET_TASK_FILTER: 'SET_TASK_FILTER',
	SET_WORKTIME: 'SET_WORKTIME',
    SET_ADTASKTOUSER: 'SET_ADTASKTOUSER'
}

export default {
	namespaced: true,
	state: {
		filteredData : [],
		task : [],
		totalTask : 0,
		createEdit : {
			id: "",
			userId: "",
			assignedId: "",
			title: "",
			description: "",
			type: "",
			rank: "",
		},
		taskFilter : {
			filter: {
			query: "",
			assignedUsers: [
			],
			userIds: [
			],
			type: [
			],
			status: [
			],
			rank: [
			]
			},
			page: 0,
			limit: 10,
		},
		workTime : {
			timeInMinutes: 0,
			comment: "",
			currentUser: ""
		},
        adTaskToUser : {text:"Выберите исполнителя", value: ""},
	},

	getters: {
		filteredData: state => state.filteredData,
		task: state => state.task,
		totalTask: state => state.totalTask,
		createEdit: state => state.createEdit,
		taskFilter: state => state.taskFilter,
		workTime: state => state.workTime,
        adTaskToUser: state => state.adTaskToUser
	},

	mutations: {
		[mutation.SET_FILTERED_DATA]:(state, data)=>{
			state.filteredData = data
		},
		[mutation.SET_TASK]:(state, data)=>{
			state.task = data
		},
		[mutation.SET_TOTAL]:(state, data)=>{
			state.totalTask = data
		},
		[mutation.SET_CREATE_EDIT]:(state, data)=>{
			state.createEdit = data
		},
		[mutation.SET_TASK_FILTER]:(state, data)=>{
			state.taskFilter = data
		},
		[mutation.SET_WORKTIME]:(state, data)=>{
			state.workTime = data
		},
        [mutation.SET_ADTASKTOUSER]: (state, data)=>{
            state.adTaskToUser = data
        }
},

	actions: {
		filterTasks:({commit}, value)=>{
			return api.Task.getFilterTasks(value)
			.then(({data})=>{
				commit(mutation.SET_TOTAL, data.total)
				commit(mutation.SET_FILTERED_DATA, data.data)
                return data
			})
		},
        commentWorkTime:(id, value)=>{
			api.Task.changeWorktimeTask(id, value)
        },
        oneTask:({commit}, id)=>{
            return api.Task.getOneTask(id)
            .then(({data})=>{
                commit(mutation.SET_TASK, data)
                return data
            })
        },
        addEditTask:({commit}, body)=>{
            api.Task.createEditTask(body)
        },
        setStatus:({dispatch},id, status)=>{
            api.Task.changeStatus(id, status)
            dispatch('oneTask', id)
        },
        setAdTaskToUser:({commit}, value)=>{
            commit(mutation.SET_ADTASKTOUSER, value)
        }
	}
}
/*
<template>
    <section class="pagination">
        <div class="pagination_wrapper">
            <button class="pagination_prev_next button" @click="prevPage">Назад</button>
            <button class="pagination_item button" v-for="n in pages" @click="paginate(n)" :key="n">{{n}}</button>              
            <button class="pagination_prev_next button" @click="nextPage">Вперед</button>
            </div>
        <div class="pagination_shown">
            Показано {{firstOfPage}} - {{lastOfPage}} из {{total}}
        </div>
    </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            userPerPage: 10,
            filter: {},
        };
    },
    props: {
    },
    computed: {
        ...mapGetters(['userFilter', 'total']),
        ...mapGetters('task', ['taskFilter', 'total']),

        firstOfPage() {
            return (1 + (this.filter.page * this.filter.limit));
        },
        pages(){
            return Math.ceil(this.total / this.filter.limit);
        },
        lastOfPage() {
            if ((this.filter.page + 1) === this.pages) {
                return this.total;
            }
            else {
                return this.filter.limit * (this.filter.page + 1);
            }
        },
        pathname(){
            console.log(this.$route.name);
            return this.$route.name
        }
    },
    mounted() {
        if (this.pathname === "Users") {
            this.filter = this.userFilter
            this.filterUser(this.filter)
        }
        if (this.pathname === "TasksList") {
            this.filter = this.taskFilter
            this.filterTasks(this.filter)
        }

    },
    methods: {
         ...mapActions(['filterUser']),
         ...mapActions('task',[ 'filterTasks']),

        nextPage() {
            this.filter.page = this.filter.page + 1;
            if (pathname === "TasksList") {
                this.filterTasks(this.filter)
            }
            if (this.pathname === "Users") {
                this.filterUser(this.filter)
            }
        },
        prevPage() {
            this.filter.page = this.filter.page - 1;
            if (pathname === "TasksList") {
                this.filterTasks(this.filter)
            }
            if (this.pathname === "Users") {
                this.filterUser(this.filter)
            }
        },
        paginate(item) {
            this.filter.page = (item - 1);
            if (pathname === "TasksList") {
                this.filterTasks(this.filter)
            }
            if (this.pathname === "Users") {
                this.filterUser(this.filter)
            }
        }
    },
}
    computed: {
        ...mapGetters(['userFilter', 'filtered', 'total']),
        firstOfPage() {
            return (1 + (this.filter.page * this.filter.limit));
        },
        pages(){
            return Math.ceil(this.total / this.filter.limit);
        },
        lastOfPage() {
            if ((this.filter.page + 1) === this.pages) {
                return this.total;
            }
            else {
                return this.filter.limit * (this.filter.page + 1);
            }
        },

    },
    mounted() {
        this.filter = this.userFilter
        this.filterUser(this.filter)

    },
    methods: {
         ...mapActions(['filterUser']),
        nextPage() {
            this.filter.page = this.filter.page + 1;

        this.filterUser(this.filter)
        },
        prevPage() {
            this.filter.page = this.filter.page - 1;

        this.filterUser(this.filter)
        },
        paginate(item) {
            this.filter.page = (item - 1);

        this.filterUser(this.filter)    
        }
    },
*/