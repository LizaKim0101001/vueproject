<template>
    <section class="authorize">
        <div class="authorize_wrapper">
            <h2 class="authorize_title">Авторизация</h2>
            <form action="" class="authorize_form" v-on:click.prevent="sub" >
                <Input  class="authorize_input" placeholder="login" v-model="login">Логин</Input>
                <Input  class="authorize_input" placeholder="********"  v-model="password">Пароль</Input>
                <router-link class="erase" :to="tasks">
                    <Button type="submit" class="authorize_btn button_success">Вход</Button>
                </router-link> 
            </form>
        </div>
    </section>
</template>

<script>
import Input from './Input.vue';
import Button from './Button.vue';
export default {
    data() {
        return {
            login: "",
            password: "",
            tasks:{
                name: "TasksList"
            }
        };
    },
    props: {},
    computed: {
    },
    mounted() {
    },
    methods: {
        sub(){
            console.log(this.login, this.password);
        }
    },
    components: { Input, Button }
}
</script>

<style lang="scss" scoped>
.authorize{
    padding-top: 197px;
    width: 100vw;
    @include flex(flex, row, center, center, nowrap);
    &_wrapper{
    width: 300px;
    height: 288px;
    padding: 30px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 3px $inner-shadow;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    }
    &_form{
        @include flex( flex, column, normal, center, wrap);
        width: 240px;
        height: 100%;
    }
    &_title{
        @include font('Roboto', 24px, 28px, 300, $text);
        margin-bottom: 30px;
    }
    &_btn{
        width: 240px;
        height: 24px;
    }
    &_input{
        margin-bottom: 20px;
    }
}
.erase{
    text-decoration: none;
}
</style>