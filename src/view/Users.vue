<template>
    <div>
            <section class="board">
                <UserList/>
                <Paging 
                pathname="Users" 
                :filter="userFilter" 
                @pag="pag" 
                :total="total" />
            </section>
    </div>
</template>

<script>
import Boardheader from '../components/Boardheader.vue';
import UserList from '../components/UserList.vue';
import Paging from '../components/Paging.vue';
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            userFilter : {
                filter: {
                query: ""
                },
                page: 0,
                limit: 10
		    },
            total: 0,
        };
    },
    props: {},
    computed: {

    },
    mounted() {
        this.filterUser(this.userFilter)
            .then((data)=>{
                this.total = data.total
        })
    },
    methods: {
         ...mapActions('index',['login', 'filterUser']),

        toProfile(user){
            this.$router.push({path:`/profile/${user.id}`})
        },
        pag(value){
            this.userFilter.page = value
            this.filterUser(this.userFilter)
            .then((data)=>{
                this.total = data.total
            })
        }
},
    
    components: { Boardheader, UserList, Paging }
}
</script>

<style lang="scss" scoped>
@import "../scss/blocks/board.scss";

</style>