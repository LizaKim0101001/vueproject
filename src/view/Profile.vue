<template>
    <div>
            <section class="board">
                <ProfileBoard/>
            </section>
    </div>
</template>

<script>
import Boardheader from '../components/Boardheader.vue';
import ProfileBoard from '../components/ProfileBoard.vue';
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
    components: { Boardheader, ProfileBoard }
}
</script>

<style lang="scss" scoped>
@import "../scss/blocks/board.scss";

</style>