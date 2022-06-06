  <template>
    <header class="header">
        <div class="wrapper-header" v-if="authorized">
                <router-link class="erase" :to="authorize">
                    <p class="logo" alt="Логотип"/> 
                </router-link> 
                <ul class="navigation">
                    <li  class="navigation_item" @click="toTaskList">Задачи</li>
                    <li class="navigation_item" @click="toUserList">Пользователи</li>
                </ul>
                <Dropdown  class="head"  >
                    <template v-slot:header>
                        <div class="user-profile" >
                            <p class="user-profile_name" >{{username}}</p>
                            <img src="../assets/images/UserPhoto.png" class="user-profile_img" alt="аватар пользователя" />
                        </div>
                    </template>
                    <template v-slot:list>
                        <button class="dropdown-item">Просмотреть профиль</button>
                        <button class="dropdown-item dropdown-item_er">Выйти из системы</button>
                    </template>
                </Dropdown>
            </div>
            <div class="wrapper-header" v-else="authorized">
                <router-link class="erase" :to="authorize">
                    <p class="logo" alt="Логотип"/> 
                </router-link> 
            </div>
        </header>
  </template>

  <script>
import Dropdown from './Dropdown.vue';
export default {
    data() {
        return {
            username: "Liza Kim",
            authorize:{
                name: "Authorize"
            }
        };
    },
    props: {
        "authorized": {
            type: Boolean,
        }
    },
    computed: {},
    mounted() {
    },
    methods: {
        toggle() {
            this.isActive = !this.isActive;
        },
        toTaskList(){
            this.$router.push({path: "/list"})
        },
        toUserList(){
            this.$router.push({path: "/users"})
        }
    },
    components: { Dropdown }
}
</script>

<style lang="scss" scoped>
@import "../scss/inject.scss";
   .header{
    padding: 9px 20px;
    margin: 0 auto;
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
            background-image: url("../assets/images/UserPhoto.png");
            background-position: center;
            background-repeat: no-repeat;
        }
    }
    .popup{
        &-header{
        width: 136px;
        &-item{
        padding: 2px 0;
        width: 136px;
        height: 24px;
        }
    }
    }
</style>