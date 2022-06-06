<template>
    <div>
        <Header :authorized="authorized"/>
            <section className="board">
                <Boardheader/>
                <TaskDescription/>
            </section>
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import Boardheader from '../components/Boardheader.vue';
import TaskDescription from '../components/TaskDescription.vue';
export default {
    data() {
        return {
           authorized: true,
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
    components: { Header, Boardheader, TaskDescription }
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