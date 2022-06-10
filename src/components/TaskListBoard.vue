<template>
    <section class="table-wrapper">
        <table class="table">
            <TaskItem1 :users="users" :taskItem="item" v-for="item in filteredData" :key="item.id"/>
        </table> 
    </section>
</template>

<script>
import TaskItem1 from './TaskItem.vue';
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            users :[]
            }
            
    },

    props: {},
    computed: {
        ...mapGetters('task', ['filteredData']),

    },
    mounted() {
        this.fetchUsers()
        .then((data)=>{
            this.users = data
        })
    },
    methods: {
         ...mapActions('task',[ 'filterTasks']),
         ...mapActions('index',['fetchUsers']),


    },
    watch:{

    },
    components: {TaskItem1 }
}
</script>

<style lang="scss" scoped>
.table{
    width: 100%;
    min-height: 684px;
    height: 100%;
    box-shadow: inset 0px 0px 2px 1px #B5B5B5;
    border-radius: 5px;
    background-color: $white;
    position: relative;
    z-index: 2;
    box-sizing: border-box;
    &-wrapper{
        width: 100%;
    }
}


.erase{
    text-decoration: none;
}
</style>