<template>
    <section class="pagination">
        <div class="pagination_wrapper">
            <button class="pagination_prev_next button" @click="prevPage">Назад</button>
            <button class="pagination_item button" v-for="n in pages" @click="paginate(n)" :key="n">{{n}}</button>              
            <button class="pagination_prev_next button" @click="nextPage">Вперед</button>
            </div>
        <div class="pagination_shown">
            Показано {{firstOfPage}} - {{lastOfPage}} из {{total}}
        </div>
    </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            userPerPage: 10,
        };
    },
    props: {
        "pathname": String,
        "filter": {
            type: Object
        },
        "total":{
            type: Number
        }
    },
    computed: {
        ...mapGetters('index',['userFilter',]),
        firstOfPage() {
            return (1 + (this.filter.page * this.filter.limit));
        },
        pages(){
            if (this.pathname === "TasksList") {
                return Math.ceil(this.total / this.filter.limit);
            }
             if (this.pathname === "Users"){
                return Math.ceil(this.total / this.filter.limit);
             }
        },
        lastOfPage() {
            if ((this.filter.page + 1) === this.pages) {
                return this.total;
            }
            else {
                return this.filter.limit * (this.filter.page + 1);
            }
        },

    },
    mounted() {
    },
    methods: {
         ...mapActions('task',[ 'filterTasks', 'setFilter']),
         ...mapActions('index',['filterUser']),
        nextPage() {
            this.filter.page = this.filter.page + 1;
            if (this.pathname === "TasksList") {
                this.$emit('pag', this.filter.page)
            }
            if (this.pathname === "Users") {
                this.$emit('pag', this.filter.page)
            }
        },
        prevPage() {
            this.filter.page = this.filter.page - 1;
            if (this.pathname === "TasksList") {
            this.$emit('pag', this.filter.page)
            }
            if (this.pathname === "Users") {
                this.$emit('pag', this.filter.page)
            }
            
        },
        paginate(item) {
            this.filter.page = (item - 1);
            if (this.pathname === "TasksList") {
                this.$emit('pag', this.filter.page)
            }
            if (this.pathname === "Users") {
                this.$emit('pag', this.filter.page)
            }
        }
    },
}
</script>

<style lang="scss" scoped>
@import "../scss/inject.scss";
.pagination{
    margin-top: 20px;
    @include flex (flex, row, space-between, center, nowrap);
    width: 100%;
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
&_wrapper{
    width: 50%;
    height: 24px;
    @include flex (flex, row, normal, center, nowrap);
    }
&_item{
    padding: 2.5px 7.5px;
    margin-right: 5px;
    }
&_shown{
    @include font("Roboto", 14px, 16px, 400, $inner-shadow);
    }
&_prev_next{
    margin-right: 5px;
    padding: 2.5px 10px;
}
}
.button{
    display: block;
    background-color: $white;
    text-align: center;
    border: 1px solid $text;
    border-radius: 5px;
    height: 25px;
    white-space: nowrap;
    @include font('Roboto', 16px, 19px, 400, $text);
    &:hover{
        background-color: #E1E1E1;
    }
    &:focus{
        background-color: #CFCFCF;
    }
    &_disabled{
        background-color: $inner-shadow;
        border-color: $inner-shadow;
        color: $label-text;
        &:hover{
            background-color: $inner-shadow;
            border-color: $inner-shadow;
        }
        &:focus{
            background-color: $inner-shadow;
            border-color: $inner-shadow;
        }
    }
}
</style>
