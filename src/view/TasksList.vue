<template>
    <div>
        <Header :authorized="authorized"/>
            <section className="board">
                <Boardheader/>
                <Form/>
                <TaskListBoard/>
                <Paging currentPage="0" total="1"/>
            </section>
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import Boardheader from '../components/Boardheader.vue';
import Form from '../components/Form.vue';
import TaskListBoard from '../components/TaskListBoard.vue';
import Paging from '../components/Paging.vue';
export default {
    data() {
        return {
           authorized: true,
           total: 1,
        };
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
    components: { Header, Boardheader, Form, TaskListBoard, Paging }
}
</script>

<style lang="scss" scoped>
.board{
    width: 100%;
    max-width: 1280px;
    padding: 30px 80px;
    box-sizing: border-box;
    @include flex(flex, column, center, center, no-wrap);
}
.erase{
    text-decoration: none;
}
</style>