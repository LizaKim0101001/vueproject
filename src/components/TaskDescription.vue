<template>
    <div>
        <section class="task-information">
            <div class="task-about">
                <ul class="task-about_list">
                    <li class="task-about_item">
                        <p class="task-information_title">Исполнитель</p>
                        <p class="task-information_text">{executor}</p>
                    </li>
                    <li class="task-about_item">
                        <p class="task-information_title">Автор задачи</p>
                        <p class="task-information_text">{author}</p>
                    </li>
                    <li class="task-about_item">
                        <p class="task-information_title">Тип запроса</p>
                        <p class="task-information_text">{taskType}</p>
                    </li>
                    <li class="task-about_item">
                        <p class="task-information_title">Приоритет</p>
                        <p class="task-information_text">{rankTask}</p>
                    </li>
                    <li class="task-about_item">
                        <p class="task-information_title">Дата создания</p>
                        <p class="task-information_text">{dateCreation}</p>
                    </li>
                    <li class="task-about_item">
                        <p class="task-information_title">Дата изменения</p>
                        <p class="task-information_text">{dateUpdates}</p>
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
                {description}
                </p>
            </div>
            <div class="task-comment">
                <form action="" class="task-comment-form" onSubmit={handleSubmit}>
                    <Textarea placeholder="Текст комментария"  class="comment" v-model="this.comentData.text">Комментарии({totalComment})</Textarea>
                    <Button type="submit" class="button button_success task-comment_button">Добавить комментарий</Button>
                </form>
                <ul class="task-comment_list">
                    <div id={id} commentId={allComments.id} authorCommentId={authorCommentId} key={allComments.id} text={allComments.text} userId={allComments.userId}>
                        <li class="task-comment_item">
                            <div>
                                <p class="task-information_title">{authorComment}</p>
                                <p class="task-information_text">{text}</p>
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
                            <SelectOne :options="options" @select="selectTime" selected="Выберите единицу измерения">
                               Единица измерения
                            </SelectOne>
                        </li>
                        <li class="notion-work_item">
                            <Textarea placeholder="placeholder"  class="modal" v-model="workTime.comment">Комментарий</Textarea>
                        </li>
                    </ul>
                </form>
                <div class="buttons-wrapper">
                    <Button type="submit" class="button button_primary notion-work_button"><div v-on:click="subWorkTime">Добавить</div> </Button>
                    <Button class="button notion-work_button" ><div v-on:click="ol" > Отмена</div></Button>
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
export default {
    data() {
        return {
            isActive: false,
            options:[{text:"Минуты", value:"minute"}, {text:"Часы", value:"hour"}, {text:"Дни", value:"day"}],
            selectedTime:"",
            amountOfTime: "",
            comentData: {
                id: "",
                taskId: "",
                userId: "",
                text: ""
            },
            workTime: {
                timeInMinutes: "",
                comment: "",
                currentUser: ""
            }     
        };
    },
    props: {},
    computed: {
        timeInMinutes(){
            
        }
    },
    mounted() {
    },
    methods: {
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
</style>