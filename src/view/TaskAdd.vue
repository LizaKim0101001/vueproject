<template>
    <div>
            <section class="board">
                <AddEdit/>
            </section>
    </div>
</template>

<script>
import Boardheader from '../components/Boardheader.vue';
import AddEdit from '../components/AddEdit.vue';
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
    components: {Boardheader, AddEdit }
}
</script>

<style lang="scss" scoped>
@import "../scss/blocks/board.scss";

</style>