<template>
<div>
    <section class="card-header">
            <div class="card-wrapper_left">
                <h3 class="card-header_title">{{profileData.username}}</h3>
            </div>
            <div class="card-wrapper">
                <Button class="button"><div @click="toAdd">Добавить задачу</div></Button>
                <Button class="button button_primary" v-show="isYou" @click.native="toggle"> Редактировать</Button>
            </div>
    </section>
    <section class="profile">
        <div class="task-about">
            <img :src="profileData.photoUrl" alt="" class="profile_avatar" />
                <ul class="profile_user-about">
                    <li class="profile_title"> О себе
                    </li>
                    <li key={aboutArray} class="profile_text">{{profileData.about}}</li>
                </ul>
             </div>
            <p class="task-information_divide"></p>
            <div class="profile-tasks">
                <p class="profile_title">Задачи</p>
                <table class="table">
                    <TaskItem1 :taskItem="item" v-for="item in data" :key="item.id" />
                </table>
                <Paging 
                :total="total" 
                pathname="TasksList" 
                :filter="taskFilter" 
                @pag="pag"
                 />
            </div>
            </section>
            <section class="notion-work" v-if="isActive">
            <div class="notion-work_wrapper">
                <h3 class="notion-work_title">Редактирование пользователя</h3>
                <form action="" class="notion-work_form">
                    <ul class="notion-work_list">
                        <li class="notion-work_item">
                            <Input class="modal" v-model="editProfile.username" placeholder="Введите имя пользователя" >Имя пользователя</Input>
                        </li>
                        <li class="notion-work_item">
                            <Input class="modal" v-model="editProfile.photoUrl" placeholder="URL фотографии">URL фотографии</Input>
                        </li>
                        <li class="notion-work_item">
                            <Textarea placeholder="Введите описание"  class="modal" v-model="editProfile.about">Комментарий</Textarea>
                        </li>
                    </ul>
                </form>
                <div class="buttons-wrapper">
                    <Button type="submit" class="button button_primary notion-work_button"><div v-on:click="subEditProfile">Добавить</div> </Button>
                    <Button type="reset" class="button notion-work_button"><div @click="close">Отмена</div> </Button>
                </div>
            </div>
    </section>
</div>

</template>

<script>
import Input from './Input.vue';
import Button from './Button.vue';
import TaskItem from './TaskItem.vue';
import Paging from './Paging.vue';
import TaskItem1 from './TaskItem.vue';
import Textarea from './Textarea.vue';
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            isActive: false,
            editProfile : {
                id: "",
                login: "",
                username: "",
                about: "",
                photoUrl: "",
                password: ""
            },
            total: "",
            data: {
                },
            taskFilter : {
                filter: {
                query: "",
                assignedUsers: [
                ],
                userIds: [
                ],
                type: [
                ],
                status: [
                ],
                rank: [
                ]
                },
                page: 0,
                limit: 10,
            },
            profileData: {},
            taskToUser: {},
            users: {}
        };
    },
    props: {},
    computed: {
        ...mapGetters('index', ['oneUser','userData']),
        ...mapGetters('task', ['filteredData', 'totalTask', 'adTaskToUser']),
        id(){
            return this.$route.params.id
        },
        isYou(){
            if (this.id === this.userData.id) {
                this.editProfile.id = this.userData.id
                this.editProfile.username = this.userData.username
                this.editProfile.login = this.userData.login
                this.editProfile.about = this.userData.about
                this.editProfile.photoUrl = this.userData.photoUrl
                return true
            } else {
                return false
            }
        },
        toggle(){
            this.isActive = !this.isActive
        },
        

    },
    mounted() {
        this.taskToUser = this.adTaskToUser
        this.taskFilter.filter.assignedUsers = this.id
        this.filterTasks(this.taskFilter)
        .then((data)=>{
            this.data = data.data
            this.total = data.total
        })
        this.getOne(this.id)
        .then(({data})=>{
            this.profileData = data
        })
        this.fetchUsers()
        .then((data)=>{
            this.users = data
        })
    },
    methods: {
        ...mapActions('task',[ 'filterTasks', 'setAdTaskToUser']),
        ...mapActions('index',['fetchUsers', 'getOne', 'editProfileUser', 'fetchUsers']),
        subEditProfile(){
            console.log(this.editProfile);
            this.editProfileUser(this.editProfile)
            this.isActive = !this.isActive
        },
        close(){
            this.isActive = !this.isActive
        },
         pag(value){
            this.taskFilter.page = value
            this.filterTasks(this.taskFilter)
            .then((data)=>{
                this.total = data.total
            })
        },
        toAdd(){
            this.taskToUser.text = this.users.find(user => user.id === this.id).username
            this.taskToUser.value = this.id
            this.setAdTaskToUser(this.taskToUser)
            this.$router.push({name: "TaskAdd"})
        },
    },
    watch:{

    },
    components: { Input, Button, TaskItem, Paging, TaskItem1, Textarea }
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
}
.profile{
    width: 100%;
    padding: 20px;
    @include flex(flex, row, space-between, flex-start, no-wrap);
    box-sizing: border-box;
    &_avatar{
        border-radius: 50%;
        width: 186px;
        height: 186px;
        margin-bottom: 125px;
        background-position: center;
        background-repeat: no-repeat;
    }
    &-tasks{
        width: 72.5%;
    }
    &_title{
        @include font("Roboto", 16px, 19px, 400, $label-text);
    }
    &_text{
        @include font("Roboto", 16px, 19px, 400, $text);
    }
}
.notion-work{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(181, 181, 181, 0.35);
    z-index: 2;
    &_wrapper{
        position: relative;
        top: 200px;
        left: 33%;
        width: 430px;
        background-color: $white;
        border: 1px solid rgba(181, 181, 181, 0.35);
        border-radius: 5px;
        @include flex(flex, column, space-between, center, no-wrap);
    }
    &_title{
        height: 63px;
        box-sizing: border-box;
        padding: 20px;
        @include font("Roboto", 20px, 23px, 400, black);
    }
    &_item{
        margin-bottom: 20px;
        width: 100%;
        @include flex(flex, column, flex-start, flex-start, no-wrap);
        &:last-of-type{
            margin-bottom: 0;
        }
        & .dropdown_btn{
            width: 100%;
        }
        & .task-comment_input{
            width: 100%;
            margin-bottom: 0;
        }
    }
    &_label{
        @include font("Inter", 14px, 14px, 400, $text);
        width: 100%;
        padding-left: 10px;
    }
    &_form{
        box-sizing: border-box;
        width: 100%;
        border-top: 1px solid $inner-shadow;
        border-bottom: 1px solid $inner-shadow;
        padding: 20px 30px;
        margin-bottom: 20px;
    }
    &_input{
        width: 100%;
        margin-bottom: 0;
    }
    &_comment{
        width: 100%;
        height: 76px;
    }
    &_button{
        padding: 2.5px 10px;
        margin-right: 10px;
    }
}

.buttons-wrapper{
    width: 100%;
    padding-left: 30px;
    padding-bottom: 20px;
    box-sizing: border-box;
    @include flex(flex, row, flex-start, center, no-wrap);
}
.erase{
    text-decoration: none;
}
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
    }
}
</style>