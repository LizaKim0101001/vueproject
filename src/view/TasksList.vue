<template>
    <div>
            <section clas="board">
                <Form :taskFilter="taskFilter" @sub="sub"/>
                <TaskListBoard/>
                <Paging 
                :total="total" 
                pathname="TasksList" 
                :filter="taskFilter" 
                @pag="pag"/>
            </section>
    </div>
</template>

<script>
import Boardheader from '../components/Boardheader.vue';
import Form from '../components/Form.vue';
import TaskListBoard from '../components/TaskListBoard.vue';
import Paging from '../components/Paging.vue';
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            taskFilter:{
                filter: {
                    query: "",
                    assignedUsers: [],
                    userIds: [],
                    type: [],
                    status: [],
                    rank: []
                },
                page: 0,
                limit: 10
                },
            total:'',
        };
    },
   computed: {
    },
        mounted() {

        this.filterTasks(this.taskFilter)
        .then((data)=>{
            this.total = data.total
        })
    },
    watch:{
    },
    methods: {
         ...mapActions('task',[ 'filterTasks']),
        toProfile(user){
            this.$router.push({path:`/profile/${user.id}`})
        },
         sub(value){
            this.taskFilter = value
            this.filterTasks(this.taskFilter)
            .then((data)=>{
                this.total = data.total
            })
        },
        pag(value){
            this.taskFilter.page = value
            this.filterTasks(this.taskFilter)
            .then((data)=>{
                this.total = data.total
            })
        }
    },
    components: { Boardheader, Form, TaskListBoard, Paging }
}
</script>

<style lang="scss" scoped>
@import "../scss/blocks/board.scss";
</style>