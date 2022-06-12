<template>
    <tr class="table_list" >
        <td class="table_item type" @click="toTask">
            <p class="table-cell " :class="taskItem.type"></p>
        </td>
        <td class="table_item table-name-task" @click="toTask" >
            <p class="table-cell">{{taskItem.title}} </p>
        </td>
        <td class="table_item table-users"  >
            <p class="table-cell">{{this.authorTask}}</p>
        </td>
        <td class="table_item table-status" >
            <Button class="status" :class="taskItem.status">{{statusEnum[taskItem.status].text}}</Button>
        </td>  
        <td class="table_item table-priority" >
            <p class="table-cell" :class="taskItem.rank">{{rankEnum[taskItem.rank].text}}</p>
        </td>
        <td class="table_item table-edit" id={id}>
            <Dropdown class="table-cell" button="true">
                <template v-slot:list>
                    <button class="dropdown-item" @click="toEdit">Редактировать</button>
                    <button class="dropdown-item dropdown-item_er" @click="del">Удалить</button>
                    <button class="dropdown-item" v-for="item in statusArray[taskItem.status]" :key="item.status" :id="item.status" @click="setSatus">{{item.text}}</button>
                </template>
            </Dropdown>
        </td>
    </tr>
</template>

<script>
import Dropdown from './Dropdown.vue';
import Button from './Button.vue';
import { mapGetters, mapActions } from 'vuex'
import api from '@/api'
import {rankEnum, statusArray, statusEnum} from "../common/const";
export default {
    data() {
        return {
        };
    },
    props: {
        "taskItem":{
            type: Object,
        },
    },
    computed: {
        ...mapGetters('index',['users']),
        ...mapGetters('task',['taskFilter']),

        statusEnum(){
            return statusEnum
        },
        rankEnum(){
            return rankEnum
        },
        statusArray(){
            return statusArray
        },
        authorTask(){
        if (this.users.find(user => user.id === this.taskItem.assignedId) === undefined) {
            return "Не задан"
        } else {
            return this.users.find(user => user.id === this.taskItem.assignedId).username
        }
            },
    },
    mounted() {
        this.fetchUsers()
        },
    methods: {
         ...mapActions('index',['fetchUsers']),
         ...mapActions('task',['oneTask', 'filterTasks']),
         ...mapActions('comment',['getAll',]),


        toEdit(){
            const id = this.taskItem.id 
            this.oneTask(id)
            this.$router.push({name:"TaskEdit", params: {id} })
        },
        toTask(){
            const id = this.taskItem.id
            this.oneTask(id)
            this.getAll(id)
            this.$router.push({name:"Task", params: {id}})
        },
        setSatus(e){
            console.log();
            api.Task.changeStatus(this.taskItem.id, e.target.id)
            //this.oneTask(this.id) 
        },
        del(){
            const id = this.taskItem.id
            api.Task.deleteTask(id)
            this.filterTasks(this.taskFilter)
        }
    },
    watch:{

    },
    components: { Dropdown, Button }
}
</script>

<style lang="scss" scoped>
@import "../scss/blocks/table.scss";




</style>