
import VueRouter from 'vue-router';
import Authorize from "../view/Authorize.vue";
import TasksList from "../view/TasksList.vue";
import Profile from "../view/Profile.vue";
import TaskEdit from "../view/TaskEdit.vue";
import Users from "../view/Users.vue";
import TaskAdd from "../view/TaskAdd.vue";
import Task from "../view/Task.vue"
Vue.use(VueRouter)

const router = () => {
	const r = 
	 new VueRouter({
		mode: 'hash',
		routes: [
			{ 
				path: '/authorize', 
				name: 'Authorize',
				component: Authorize, 
				props: true,
				children: [
				]
			},
			{ 
				path: '/list', 
				name: 'TasksList',
				component: TasksList, 
				props: true,
				children: [
				]
			},
			{ 
				path: '/task/:id', 
				name: 'Task',
				component: Task, 
				props: true,
				children: [
				]
			},{ 
				path: '/edit/:id', 
				name: 'TaskEdit',
				component: TaskEdit, 
				props: true,
				children: [
				]
			},
			{ 
				path: '/add', 
				name: 'TaskAdd',
				component: TaskAdd, 
				props: true,
				children: [
				]
			},
			{ 
				path: '/users', 
				name: 'Users',
				component: Users, 
				props: true,
				children: [
				]
			},
			{ 
				path: '/profile/:id', 
				name: 'Profile',
				component: Profile, 
				props: true,
				children: [
				]
			},
			{
			 	path: '/', redirect: { name: 'Authorize' }
			 },
			 {
			 	path: '*', redirect: { name: '' }
			 }
		],
		
	});

	return r
}

export default router