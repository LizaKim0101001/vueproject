<template>
    <section class="authorize">
        <div class="authorize_wrapper">
            <h2 class="authorize_title">Авторизация</h2>
            <form action="" class="authorize_form" >
                <Input  class="authorize_input" placeholder="login" v-model="data.login">Логин</Input>
                <Input  class="authorize_input" placeholder="********"  v-model="data.password">Пароль</Input>
                <router-link class="erase" :to="tasks">
                    <Button type="submit" class="authorize_btn button_success" v-on:click.prevent.native="sub" >Вход</Button>
                </router-link> 
            </form>
        </div>
    </section>
</template>

<script>
import Input from './Input.vue';
import Button from './Button.vue';
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            data:{login:"Sloth123", password:"123"},
            tasks:{
                name: "TasksList"
            }
        };
    },
    props: {},
    computed: {
        ...mapGetters('index',['loginData', 'userData']),
    },
    mounted() {
        //this.data = this.loginData
    },
    methods: {
         ...mapActions('index',['login']),
        sub(){
            this.login(this.data)
            this.$router.push({name:"TasksList"})
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