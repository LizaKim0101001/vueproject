<template>
    <div>
            <section className="board">
                <TaskDescription :id="id"/>
            </section>
    </div>
</template>

<script>
import TaskDescription from '../components/TaskDescription.vue';
export default {
    data() {
        return {
        };
    },
    props: {},
    computed: {
        id(){
            return this.$route.params.id
        }
    },
    mounted() {
    },
    methods: {
    
    },
    watch:{

    },
    components: {TaskDescription }
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