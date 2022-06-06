<template>
<div>
    <section class="profile">
        <div class="task-about">
            <img src={photoUrl} alt="" class="profile_avatar" />
                <ul class="profile_user-about">
                    <li class="profile_title"> О себе
                    </li>
                    <li key={aboutArray} class="profile_text">{aboutArray}</li>
                </ul>
             </div>
            <p class="task-information_divide"></p>
            <div class="profile-tasks">
                <p class="profile_title">Задачи</p>
                <table class="table">
                    <TaskItem1 :taskItem="data" />
                </table>
                <Paging total="42"/>
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
export default {
    data() {
        return {
            isActive: true,
            editProfile : {
                id: "",
                login: "",
                username: "",
                about: "",
                photoUrl: "",
                password: ""
            },
            data: {
                id: "sdsd",
                userId: "23iugi",
                assignedId: "sd7678",
                title: "task1",
                description: "skjfhlsfh ksdjhfkjsdhf",
                type: "task",
                dateOfCreation: "2022-06-05T12:59:58.859Z",
                dateOfUpdate: "2022-06-05T12:59:58.859Z",
                timeInMinutes: 0,
                status: "opened",
                rank: "low"
                }
        };
    },
    props: {},
    computed: {
    },
    mounted() {
    },
    methods: {
        subEditProfile(){
            console.log(this.editProfile);
            this.isActive = !this.isActive
        },
        close(){
            this.isActive = !this.isActive
        }
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
</style>