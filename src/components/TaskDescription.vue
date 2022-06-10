<template>
    <div>
        <section class="card-header">
            <div class="card-wrapper_left">
                <h3 class="card-header_title">{{taskItem.title}}</h3>
                <Button class="status" :class="taskItem.status">{{statusEnum[taskItem.status].text}}</Button>
            </div>
            <div class="card-wrapper">
                <Button  class="button" v-for="item in statusArray[taskItem.status]" :key="item.status">{{item.text}}</Button>
                <Button class="button button_primary" ><div @click="toEdit">Редактировать</div> </Button>
                <Button class="button button_error" >Удалить</Button>
            </div>
        </section>
        <section class="task-information">
            <div class="task-about">
                <ul class="task-about_list">
                    <li class="task-about_item">
                        <p class="task-information_title">Исполнитель</p>
                        <p class="task-information_text">{{executor}}</p>
                    </li>
                    <li class="task-about_item">
                        <p class="task-information_title">Автор задачи</p>
                        <p class="task-information_text">{{author}}</p>
                    </li>
                    <li class="task-about_item">
                        <p class="task-information_title">Тип запроса</p>
                        <p class="task-information_text">{{`${typeEnum[taskItem.type].text}`}}</p>
                    </li>
                    <li class="task-about_item">
                        <p class="task-information_title">Приоритет</p>
                        <p class="task-information_text">{{`${rankEnum[taskItem.rank].text}`}}</p>
                    </li>
                    <li class="task-about_item">
                        <p class="task-information_title">Дата создания</p>
                        <p class="task-information_text">{{dateOfCreation}}</p>
                    </li>
                    <li class="task-about_item">
                        <p class="task-information_title">Дата изменения</p>
                        <p class="task-information_text">{{dateUpdates}}</p>
                    </li>
                    <li class="task-about_item" >
                        <p class="task-information_title">Затрачено времени</p>
                        <p class="task-information_text"></p>
                    </li>
                </ul>
                <Button class="task-about_button button button_primary"> <div v-on:click="ol">Сделать запись о работе </div> </Button>
            </div>
            <div class="task-description">
                <p class="task-information_title">Описание</p>
                <p class="task-information_text">
                {{taskItem.description}}
                </p>
            </div>
            <div class="task-comment">
                <form action="" class="task-comment-form" onSubmit={handleSubmit}>
                    <Textarea placeholder="Текст комментария"  class="comment" v-model="comentForm.text">Комментарии({{totalComments}})</Textarea>
                    <Button type="submit" class="button button_success task-comment_button" @click.native.prevent="commentAdd">Добавить комментарий</Button>
                </form>
                <ul class="task-comment_list">
                    <div v-for="item in allComment" :key="item.id">
                        <li class="task-comment_item">
                            <div>
                                <p class="task-information_title">{{authorComment}}</p>
                                <p class="task-information_text">{{item.text}}</p>
                            </div>
                                <p class="task-information_text task-information_delete"  onClick={handelerDeleteComment}>Удалить</p>
                        </li>
                    </div>
                </ul>
            </div>
        </section>
        <section class="notion-work" v-if="isActive">
            <div class="notion-work_wrapper">
                <h3 class="notion-work_title">Запись о работе</h3>
                <form action="" class="notion-work_form" >
                    <ul class="notion-work_list">
                        <li class="notion-work_item">
                            <Input class="modal" v-model="amountOfTime">Затраченное время</Input>
                        </li>
                        <li class="task-about_item">
                            <SelectOne :options="timeOptions" @select="selectTime" selected="Выберите единицу измерения">
                               Единица измерения
                            </SelectOne>
                        </li>
                        <li class="notion-work_item">
                            <Textarea placeholder="placeholder"  class="modal" v-model="workTime.comment">Комментарий</Textarea>
                        </li>
                    </ul>
                </form>
                <div class="buttons-wrapper">
                    <Button type="submit" class="button button_primary notion-work_button" v-on:click.native="subWorkTime">Добавить</Button>
                    <Button class="button notion-work_button" @click.native="ol"> Отмена</Button>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Textarea from './Textarea.vue';
import Button from './Button.vue';
import Input from './Input.vue';
import SelectOne from './SelectOne.vue';
import {timeOptions} from "../common/const";
import { mapGetters, mapActions } from 'vuex'
import {rankEnum, statusArray, statusEnum, typeEnum} from "../common/const";

export default {
    data() {
        return {
            isActive: false,
            selectedTime:"",
            amountOfTime: "",
            comentForm: {
                id: "",
                taskId: "",
                userId: "",
                text: ""
            },  
                workTime : {
                timeInMinutes: 0,
                comment: "",
                currentUser: ""
		    },
            taskItem: {},
            users :[],
            allComment:[],
            totalComments: '',
        };
    },
    props: {
        "id":{
            type: String
        }
    },
    computed: {
        ...mapGetters('index', ['userData']),
        ...mapGetters('comment', ['allComments']),

        statusEnum(){
            return statusEnum
        },
        rankEnum(){
            return rankEnum
        },
        statusArray(){
            return statusArray
        },
        timeOptions(){
            return timeOptions
        },
        typeEnum(){
            return typeEnum
        },
        author(){
            if (this.users.find(user => user.id === this.taskItem.userId) === undefined) {
                return "Не задан"
            } else {
                return this.users.find(user => user.id === this.taskItem.userId).username
            }
        },
        executor(){
            if (this.users.find(user => user.id === this.taskItem.assignedId) === undefined) {
                return "Не задан"
            } else {
                return this.users.find(user => user.id === this.taskItem.assignedId).username
            }
        },
        dateOfCreation(){
            const arr = this.taskItem.dateOfCreation.split('T');
            const getDayInfo = function (strng) {
                let arr = strng.split('-')
                let allDate = (`${arr[2] + "." + arr[1] + "." +arr[0]}`);
            return allDate
            }
            return getDayInfo(arr[0])
        },
        dateUpdates(){
            if (this.taskItem.dateOfUpdate === null || this.taskItem.dateOfUpdate === undefined) {
                return "Не редактировалось"
            } else{
                const arr = this.taskItem.dateOfUpdate.split('T');
                const getDayInfo = function (strng) {
                    let arr = strng.split('-')
                    let allDate = (`${arr[2] + "." + arr[1] + "." +arr[0]}`);
                return allDate
                }
                return getDayInfo(arr[0])
            }
        },
        authorComment(){
            if (this.users.find(user => user.id === this.item.userId) === undefined) {
                return "Не задан"
            } else {
                return this.users.find(user => user.id === this.item.userId).username
            }
        },
    },
    mounted() {
        this.oneTask(this.id)
        .then((data)=>{
            this.taskItem = data
        })
        this.fetchUsers()
        .then((data)=>{
            this.users = data
        })
        this.getAll(this.id)
        .then(({data})=>{
                this.setComments(data)
                this.allComment = data
                this.totalComments = data.length
        })
        this.comentForm.userId = this.userData.id
        this.comentForm.taskId = this.id

    },
    methods: {
         ...mapActions('task',[ 'commentWorkTime', 'oneTask']),
         ...mapActions('index',['fetchUsers']),
         ...mapActions('comment',['getAll', 'addEditComment', 'deleteComment','setComments']),
        ol(){
            this.isActive = !this.isActive 
        },
        selectTime(value){
            this.selectedTime = value
        },
        subWorkTime(){
            if (this.selectedTime === "hour") {
                this.workTime.timeInMinutes = this.amountOfTime * 60
            }
            if (this.selectedTime === "day") {
                this.workTime.timeInMinutes=this.amountOfTime * 60 * 24

            }
            if (this.selectedTime === "minute") {
                this.workTime.timeInMinutes=this.amountOfTime
            }

            this.isActive = !this.isActive
        },
        toEdit(){
            const id = this.id
            this.$router.push({name: "TaskEdit", params:{id}})
        },
        commentAdd(){
            this.addEditComment(this.comentForm)
        }
    },
    watch:{

    },
    components: { Textarea, Button, Input, SelectOne }
}
</script>

<style lang="scss" scoped>
.task{
    &-information{
        width: 100%;
        max-width: 1280px;
        box-sizing: border-box;
        padding: 20px;
        box-shadow: 0px 0px 5px 3px #B5B5B5;
        border-radius: 5px;
        height: auto;
        @include flex(flex, row, space-between, flex-start, no-wrap);
        &_divide{
            width: 1px;
            
            min-height: 602px;
            height: 100%;
        }
        &_title{
            margin-bottom: 5px;
            @include font("Roboto", 16px, 19px, 400, $label-text);
        }
        &_text{
            @include font("Roboto", 16px, 19px, 400, $text);
        }
        &_delete{
            color: $error;
        }
    }
    &-about{
        box-sizing: border-box;
        width: 300px;
        padding-right: 20px;
        &_item{
            margin-bottom: 20px;
            &:last-of-type{
                margin-bottom: 5px;
            }
        }
        &_button{
            width: 228px;
            height: 24px;
        }
    }
    &-description{
        min-height: 602px;
        width: 400px;        
        border-right: 1px solid $inner-shadow;
        border-left: 1px solid $inner-shadow;
        padding-right: 20px;
        box-sizing: border-box;
        padding-left: 20px;
    }
    &-comment{
        padding-left: 20px;
        box-sizing: border-box;
        width: 458px;
        &-form{
            margin-bottom: 20px;
            @include flex (flex, column, flex-start, flex-start, no-wrap);
        }
        &_input{ 
            width: 100%;
            max-width: 458px;
            height: 76px;
            overflow: scroll;
            margin-bottom: 10px;
            &::placeholder{
                padding: 5px 10px;
                @include font("Roboto", 16px, 19px, 400, $label-text);
            }
        }
        &_item{
            margin-bottom: 20px;
            @include flex (flex, row, space-between, flex-start, no-wrap);
        }
        &_button{
            width: 221px;
            height: 24px;
        }
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