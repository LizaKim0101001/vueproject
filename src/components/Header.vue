  <template>
    <header class="header">
        <div class="wrapper-header">
                <p class="logo" alt="Логотип" @click="toAuthorize"/> 
                <ul class="navigation">
                    <li  class="navigation_item" @click="toTaskList">Задачи</li>
                    <li class="navigation_item" @click="toUserList">Пользователи</li>
                </ul>
                <div class="head">
                    <Dropdown  v-show="authorized">
                        <template v-slot:header>
                            <div class="user-profile" >
                                <p class="user-profile_name" >{{userData.username}}</p>
                                <img :src="userData.photoUrl" class="user-profile_img"/>
                            </div>
                        </template>
                        <template v-slot:list>
                            <button class="dropdown-item" @click="toProfile">Просмотреть профиль</button>
                            <button class="dropdown-item dropdown-item_er" @click="logoutUser">Выйти из системы</button>
                        </template>
                    </Dropdown>
                </div>
            </div>
        </header>
  </template>

  <script>
import Dropdown from './Dropdown.vue';
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            authorized : 'false',
            loginData: {login: '', password:""},
        };
    },
    props: {
    },
    computed: {
        ...mapGetters('index', ['userData'])
    },
    mounted() {
        if (localStorage.authorized === 'true') { 
            this.authorized = localStorage.authorized        
            if (localStorage.login) {
            this.loginData.login = localStorage.login 
            }
            if (localStorage.password) {
                this.loginData.password  = localStorage.password
            }
            this.login(this.loginData)
        } else {
            this.logout()
        }
        console.log(this.userData);
    },
    methods: {
        ...mapActions('index',['logout', 'login']),
        toTaskList(){
            this.$router.push({name:"TasksList"})
        },
        toAuthorize(){
            this.$router.push({name: "Authorize"})

        },
        toUserList(){
            this.$router.push({name: "Users"})
        },
        logoutUser(){
            localStorage.authorized = false
            localStorage.removeItem('login')
            localStorage.removeItem('password')
            this.logout()
        },
        toProfile(){
            this.$router.push({path:`/profile/${this.userData.id}`})
        }
    },
    components: { Dropdown }
}
</script>

<style lang="scss" scoped>
@import "../scss/inject.scss";
   .header{
    padding: 9px 20px;
    margin: 0 auto 10px auto;
    width: 100%;
    max-width: 1440px;
    box-sizing: border-box;
}
    .wrapper-header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .logo{
        width: 120px;
        height: 20px;
        background-image: url("../assets/images/Logo.png");
        background-position: center;
        background-repeat: no-repeat;
    }
    .navigation{
        list-style: none;
        @include flex(flex, row, center, center, wrap);

        &_item{
            margin-right: 10px;
            @include font("Open Sans", 24px, 33px, 400, $text);
        }
        &_item.active{
            box-sizing: border-box;
            border-bottom: 2px solid $primary;
        }
    }
    .user-profile{
        position: relative;
        background-color: transparent;
        border: none;
        @include flex(flex, row, space-between, center, wrap);
        &_name{
            @include font("Roboto", 16px, 19px, 400, $text);
            margin-right: 10px;
        }
        &_img{
            width: 42px;
            height: 42px;
            border-radius: 50%;
            border-bottom: none;
        }
    }

</style>