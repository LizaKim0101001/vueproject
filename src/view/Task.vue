<template>
    <div>
            <section class="board">
                <TaskDescription />
            </section>
    </div>
</template>

<script>
import TaskDescription from '../components/TaskDescription.vue';
import { mapGetters, mapActions } from 'vuex'
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
    components: {TaskDescription }
}
</script>

<style lang="scss" scoped>
@import "../scss/blocks/board.scss";

</style>