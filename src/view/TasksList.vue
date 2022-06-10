<template>
    <div>
            <section className="board">
                <Boardheader/>
                <Form/>
                <TaskListBoard/>
                <Paging pathname="TasksList"/>
            </section>
    </div>
</template>

<script>
import Boardheader from '../components/Boardheader.vue';
import Form from '../components/Form.vue';
import TaskListBoard from '../components/TaskListBoard.vue';
import Paging from '../components/Paging.vue';

export default {
    data() {
        return {
        };
    },
    props: {},

    watch:{

    },
    components: { Boardheader, Form, TaskListBoard, Paging }
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