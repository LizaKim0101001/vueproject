<template> 
<div>
    <section class="card-header">
        <div class="card-wrapper_left">
            <h3 class="card-header_title">{{title}}</h3>
        </div>
        <div class="card-wrapper">
            <Button class="button button_primary card-wrapper_btn" type="submit" @click.native="Form">Сохранить</Button>
            <Button class="button card-wrapper_btn" type="reset">Отмена</Button>
        </div>
    </section>
    <section class="task-information">
            <form class="task-about">
                <ul class="task-about_list">
                    <li class="task-about_item">
                        <SelectOne :options="typeOptions"  v-model="selectedType">
                            Тип запроса
                        </SelectOne>
                     </li>
                        <li class="task-about_item">
                         <SelectOne :options="usersOptions"   v-model="selectedUser">
                            Исполнитель
                        </SelectOne> 
                    </li> 
                    <li class="task-about_item">
                        <SelectOne :options="rankOptions" v-model="selectedRank">
                            Приоритет
                        </SelectOne>
                    </li>
                </ul>
            </form>
            <p class="task-information_divide"></p>
            <div class="task-description">
                <Input placeholder="Введите название" v-model="taskCreateEdit.title">Название</Input>
                <Textarea class="task-edit" placeholder="Введите описание" v-model="taskCreateEdit.description">Описание</Textarea>
             </div>
            <p class="task-information_divide"></p>
            <div class="task-comment"></div>
    </section>
</div>
</template>

<script>
import SelectOne from './SelectOne.vue';
import Input from './Input.vue';
import Textarea from './Textarea.vue';
import {typeOptions, rankOptions, typeEnum, rankEnum} from "../common/const";
import Button from './Button.vue';
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            taskCreateEdit: {
                    id: "",
                    userId: "",
                    assignedId: "",
                    title: "",
                    description: "",
                    type: "",
                    rank: ""
                },
            usersOptions:[]
        };
    },
    props: {},
    computed: {
        ...mapGetters('index', ['users', 'userData']),
        ...mapGetters('task', ['task', 'adTaskToUser']),


         typeOptions(){
            return typeOptions
        },
        rankOptions(){
            return rankOptions
        },
        typeEnum(){
            return typeEnum
        }, 
        id(){
            return this.$route.params.id
        },
        title(){
            if (this.id) {
                return "Редактировать"
            } else {
               return "Сохранить"
            }
        },
        selectedRank(){
            if (this.id) {
                return rankEnum[this.taskCreateEdit.rank]
            } else {
                return {text:"Выберите приоритет", value: ""}
            }
        },
        selectedType(){
            if (this.id) {
                return typeEnum[this.taskCreateEdit.type]
            } else {
                return {text:"Выберите тип", value: ""}
            }
        },
        selectedUser(){
            if (this.id) {
                if (this.users.find(user => user.id === this.task.assignedId) === undefined) {
                    return {text:"Выберите исполнителя", value: ""}
                } else {
                    return {text:`${this.users.find(user => user.id === this.task.assignedId).username}`, value: `${this.task.assignedId}`}
                }
            } else {
                return this.adTaskToUser
            }
        },



    },
    mounted() {
        if (this.id){
            this.oneTask(this.id)
            .then((data)=>{
                this.taskCreateEdit = data
            })
        }
        this.fetchUsers()
        .then((data)=>{
            for (let i = 0; i < data.length; i++) {
				let obj = {text:data[i].username, value:data[i].id}
				this.usersOptions.push(obj)
				}
        })
    },
    methods: {
        ...mapActions('task',[ 'commentWorkTime', 'addEditTask', 'oneTask']),
        ...mapActions('index',['fetchUsers', ]),
        isType(value){
            this.taskCreateEdit.type = value
        },
        isRank(value){
            this.taskCreateEdit.rank = value
        },
        Form(){
            this.taskCreateEdit.type = this.selectedType.value
            this.taskCreateEdit.rank = this.selectedRank.value
            this.taskCreateEdit.assignedId = this.selectedUser.value
            if (this.id === null || this.id === undefined) {
                this.taskCreateEdit.userId = this.userData.id
            }
            this.addEditTask(this.taskCreateEdit)
        }
    },
    watch:{

    },
    components: { SelectOne, Input, Textarea, Button }
}
</script>

<style lang="scss" scoped>
.card{
    &-header{
        @include flex (flex, row, space-between, flex-start, no-wrap);
        max-width: 1280px;
        width: 100%;
        margin-bottom: 20px;
        &_title{
            @include font("Roboto", 24px, 28px, 300, $text);
            margin-right: 10px;
            max-width: 60%;
            margin-right: 10px;
        }
    }
    &-wrapper{
        margin-top: 5px;
        @include flex (flex, row, flex-end, flex-start, no-wrap);
        width: 33.5%;
        &_btn{
            margin-left: 10px;
        }
    }
        &_left{
            width: 66.5%;
            @include flex(flex, row, flex-start, flex-start, no-wrap);
        }
}
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
.erase{
    text-decoration: none;
}
</style>