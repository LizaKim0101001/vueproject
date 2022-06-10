<template>
<div>
    <section class="card-header" v-show="this.pathname===this.path.TasksList">
        <h3 class="card-header_title">Задачи</h3>
        <Button class="button button_primary"><div @click="toAdd">Добавить задачу</div> </Button>
    </section>
    <section class="card-header"  v-show="this.pathname===this.path.Task">
        <div class="card-wrapper_left">
            <h3 class="card-header_title">{title}</h3>
            <Button class="status_inProgress">{text}</Button>
        </div>
        <div class="card-wrapper">
            <Button id={statusArray.status} class="button">{btn}</Button>
            <Button class="button button_primary" ><div @click="toEdit">Редактировать</div> </Button>
            <Button class="button button_error" >Удалить</Button>
        </div>
    </section>
        <section class="card-header" v-show="this.pathname===this.path.TaskEdit">
        <div class="card-wrapper_left">
            <h3 class="card-header_title">Редактировать</h3>
        </div>
        <div class="card-wrapper">
            <Button class="button button_primary card-wrapper_btn-primary" onClick={handlerSaveEdit}>Сохранить</Button>
            <Button class="button card-wrapper_btn">Отмена</Button>
        </div>
    </section>
   
    
    <section class="card-header" v-show="this.pathname===this.path.Users">
            <div class="card-wrapper_left">
                <h3 class="card-header_title">Пользователи</h3>
            </div>
    </section>
</div>
</template>

<script>
import Button from './Button.vue';
export default {
    data() {
        return {
            path: {
                "TasksList": '/list',
				'Task' : '/task/:id', 
                'TaskEdit': '/edit/:id',
                'TaskAdd':'/add',
                'Users': '/users',
                'Profile': '/profile/:id',
            }
        };
    },
    props: {},
    computed: {
        pathname(){
            return this.$route.matched[0].path
        }
    },
    mounted() {
        },
    methods: {
        toAdd(){
            this.$router.push({name: "TaskAdd"})
        },
        toEdit(){
            this.$router.push({path: `/edit/${this.$route.params.id}`})
        } 
    },
    watch: {
    },
    components: { Button }
}
</script>

<style lang="scss" scoped>
.card{
    &-header{
        margin-bottom: 20px;
        width: 100%;
        max-width: 1280px;
        box-sizing: border-box;
        @include flex(flex, row, space-between, flex-start, no-wrap);
        &_title{
            @include font("Roboto", 24px, 28px, 300, $text);
            margin-right: 10px;
            max-width: 60%;
            margin-right: 10px;
        }
        & .status{
            width: 78px;
        }
        & .button_primary{
            width: 169px;
        }
    }
    &-wrapper{
        margin-top: 5px;
        @include flex(flex, row, space-between, center, no-wrap);
        & .button{
           padding: 2px 10px;
            margin-right: 10px;
            &:last-of-type{
                margin-right: 0;
            }
            &.button_primary{
                width: 155px;
            }
            &.button_error{
                width:103px;
            }
        }
        &_left{
            width: 66.5%;
            @include flex(flex, row, flex-start, flex-start, no-wrap);
        }
        & .card-wrapper_btn{
            width: 98px;
            &-primary{
            width: 228px;
            }
        }
    }
}
</style>