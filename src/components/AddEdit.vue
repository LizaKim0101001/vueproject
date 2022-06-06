<template>
  <section class="task-information">
                <form class="task-about">
                    <ul class="task-about_list">
                        <li class="task-about_item">
                            <SelectOne :options="typeOptions"  @select="isType" selected="Выберите исполнителя">
                                Исполнитель
                            </SelectOne>
                        </li>
                        <li class="task-about_item">
                            <SelectOne :options="typeOptions"  @select="isType" selected="Выберите тип">
                                Тип запроса
                            </SelectOne>
                        </li>
                        <li class="task-about_item">
                            <SelectOne :options="rankOptions"  @select="isRank" selected="Выберите приоритет">
                                Приоритет
                            </SelectOne>
                        </li>
                    </ul>
                </form>
                <p class="task-information_divide"></p>
                <div class="task-description">
                    <Input placeholder="Введите название" v-model="this.taskCreateEdit.title">Название</Input>
                    <Textarea class="task-edit" placeholder="Введите описание" v-model="this.taskCreateEdit.description">Описание</Textarea>
                </div>
                <p class="task-information_divide"></p>
                <div class="task-comment">
            </div>
        </section>
</template>

<script>
import SelectOne from './SelectOne.vue';
import Input from './Input.vue';
import Textarea from './Textarea.vue';

export default {
    data() {
        return {
            typeOptions:[{text:"Задача", value:"task"}, {text:"Ошибка", value:"error"}],
            rankOptions:[{text:"Высокий", value:"high"}, {text:"Средний", value:"mefium"}, {text:"Низкий", value:"low"}],
            taskCreateEdit: {
                    id: "",
                    userId: "",
                    assignedId: "",
                    title: "",
                    description: "",
                    type: "",
                    rank: ""
                }
        };
    },
    props: {},
    computed: {
    },
    mounted() {
    },
    methods: {
        isType(value){
            this.taskCreateEdit.type = value
        },
        isRank(value){
            this.taskCreateEdit.rank = value
        }
    },
    watch:{

    },
    components: { SelectOne, Input, Textarea }
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
.erase{
    text-decoration: none;
}
</style>