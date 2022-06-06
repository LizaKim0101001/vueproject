<template>
    <section class="table-wrapper">
        <table class="table">
            <TaskItem1 :taskItem="data" />
        </table> 
    </section>
</template>

<script>
import TaskItem1 from './TaskItem.vue';
export default {
    data() {
        return {
            data: {
                id: "sdsd",
                userId: "23iugi",
                assignedId: "sd7678",
                title: "task1",
                description: "skjfhlsfh ksdjhfkjsdhf",
                type: "task",
                dateOfCreation: "2022-06-05T12:59:58.859Z",
                dateOfUpdate: "2022-06-05T12:59:58.859Z",
                timeInMinutes: 0,
                status: "opened",
                rank: "low"
                }
            }
            
    },

    props: {},
    computed: {
    },
    mounted() {
    },
    methods: {
    
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