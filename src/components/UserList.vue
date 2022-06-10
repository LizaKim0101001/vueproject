<template>
    <section class="table-wrapper">
        <table class="table">
            <tr class="table_list" v-for="user in filtered" :key="user.id" @click="toProfile(user)">
                <td class="table_item">
                    <p class="table-cell">{{user.username}}</p>
                </td>
            </tr>
        </table> 
    </section>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'
export default {
    data() {
        return {}
    },

    props: {},
    computed: {
        ...mapGetters('index',['userFilter', 'filtered', 'users']),
    },
    mounted() {
    },
    methods: {
        toProfile(user){
            this.$router.push({path:`/profile/${user.id}`})
        },
        ...mapActions('index',['filterUser']),
},
    components: {}
}
</script>

<style lang="scss" scoped>
.table{
    width: 100%;
    min-height: 684px;
    height: 100%;
    box-shadow: inset 0px 0px 2px 1px #B5B5B5;
    border-radius: 5px;
    background-color: $white;
    position: relative;
    z-index: 2;
    box-sizing: border-box;
    &-wrapper{
        width: 100%;
    }
    &_list{
        height: 68px;
        @include flex(flex, row, space-between, flex-start, no-wrap);
        padding: 0 30px;
    }
    &_list:nth-child(2n){
        background-color: #F2F2F2;
    }
    &_item{
        display: block;
        padding: 22px 0;
    }
   
}


.erase{
    text-decoration: none;
}
</style>