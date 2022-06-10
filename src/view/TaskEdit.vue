<template>
    <div>
            <section className="board">
                <AddEdit/>
            </section>
    </div>
</template>

<script>
import Boardheader from '../components/Boardheader.vue';
import AddEdit from '../components/AddEdit.vue';
export default {
    data() {
        return {
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
    components: {Boardheader, AddEdit }
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