<template>
    <div>
            <section className="board">
                <Boardheader/>
                <UserList/>
                <Paging pathname="Users"/>
            </section>
    </div>
</template>

<script>
import Boardheader from '../components/Boardheader.vue';
import UserList from '../components/UserList.vue';
import Paging from '../components/Paging.vue';

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
        toProfile(user){
            this.$router.push({path:`/profile/${user.id}`})
        },
},
    
    components: { Boardheader, UserList, Paging }
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