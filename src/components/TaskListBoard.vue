<template>
    <section class="table-wrapper">
        <table class="table">
            <TaskItem1 :taskItem="item" v-for="item in filteredData" :key="item.id"/>
        </table> 
    </section>
    
</template>

<script>
import TaskItem1 from './TaskItem.vue';
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            }
            
    },

    props: {},
    computed: {
        ...mapGetters('task', ['filteredData', 'taskFilter']),
        ...mapGetters('index', ['users']),


    },
    mounted() {
        this.fetchUsers()
        this.filterTasks(this.taskFilter)
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
@import "../scss/blocks/table.scss";

</style>