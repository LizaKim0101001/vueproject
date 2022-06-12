<template>
    <div>
        <section class="card-header">
            <div class="card-header_wrapper">
                <h3 class="card-header_title">Задачи</h3>
                <Button class="button button_primary"><div @click="toAdd">Добавить задачу</div> </Button>
            </div>
        </section>
        <section class="task-list">
            <form action=""  class="form-task-list" @submit.prevent="sub">
                <div class="task-list_list">
                        <Select class="task-list_item type">
                            <template v-slot:title>Тип</template>
                            <template v-slot:list>
                                <Checkbox name="type" value="task" @check="isCheked">Задача</Checkbox>
                                <Checkbox name="type" value="bug"  @check="isCheked">Ошибка</Checkbox>
                            </template>
                        </Select>
                        <Input class="task-list_item task" v-model="taskFilter.filter.query" placeholder="Название задачи"></Input>
                        <Select class="task-list_item users">
                            <template v-slot:title>Пользователи</template>
                            <template v-slot:list>
                                <Checkbox name="assignedUsers" :value="user.id" @check="isCheked" v-for="user in users" :key="user.id">{{user.username}}</Checkbox>
                            </template>
                        </Select>
                        <Select class="task-list_item status">
                            <template v-slot:title>Статус</template>
                            <template v-slot:list>
                                <Checkbox name="status" value="opened" @check="isCheked">Открыто</Checkbox>
                                <Checkbox name="status" value="inProgress" @check="isCheked">В работе</Checkbox>
                                <Checkbox name="status" value="testing" @check="isCheked">Тестируется</Checkbox>
                                <Checkbox name="status" value="complete" @check="isCheked">Сделано</Checkbox>
                            </template>
                        </Select>
                        <Select class="task-list_item status">
                            <template v-slot:title>Приоритет</template>
                            <template v-slot:list>
                                <Checkbox name="rank" value="low" @check="isCheked">Низкий</Checkbox>
                                <Checkbox name="rank" value="medium" @check="isCheked">Средний</Checkbox>
                                <Checkbox name="rank" value="high" @check="isCheked">Высокий</Checkbox>
                            </template>
                        </Select>
                        <Button type="submit" class="button_primary" >Применить</Button>
                </div>
            </form>
        </section>
    </div>
</template>

<script>
import Dropdown from './Dropdown.vue';
import Checkbox from './Checkbox.vue';
import Select from './Select.vue';
import Input from './Input.vue';
import Button from './Button.vue';
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
           authorized: true,
        };
    },
    props: {
        "taskFilter":{
            type: Object
        }
    },
    computed: {
        ...mapGetters('index',['users',]),

    },
    mounted() {
    },
    methods: {
        ...mapActions('task',[ 'filterTasks']),

        sub(){
            this.$emit('sub', this.taskFilter)
        },
        isCheked(check, value, name){
            let filterItem =  this.taskFilter.filter[name]
            if (check) {
               filterItem.push(value)
            } else{
                let index = filterItem.indexOf(value)
                filterItem.splice(index, 1)
            }
        },
        toAdd(){
            this.$router.push({name: "TaskAdd"})
        },
    },
    watch:{
    },
    components: { Dropdown, Checkbox, Select, Input, Button }
}
</script>

<style lang="scss" scoped>
@import "../scss/blocks/card-header.scss";
.task-list{
    width: 100%;
    max-width: 1280px;
    padding-bottom: 20px;
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    &_list{
    width: 100%;
        height: 34px;
        box-sizing: border-box;
        position: relative;
        @include flex(flex, row, space-between, flex-start, no-wrap);
        & .button_primary{
            width: 125px;
            height: 24px;
            margin-top: 10px;
        }
    }
    &_item{
        position: absolute;
        top: 0px;
        left: 0;
        z-index: 3;
        padding: 5px;
        box-sizing: border-box;
        border: 1px solid transparent;
        position: relative;
        & .input{
            margin-bottom: 5px;
        }
    }
}
.type{
    width: 100%;
    max-width: 100px;
}
.name-task{
    width: 100%;
    max-width: 537px;
}
.users{
    width: 100%;
    max-width: 190px;
}
.status{
    width: 100%;
    max-width: 130px;
}
.priority{
    width: 100%;
    max-width: 130px;

}
.edit{
    position: relative;
    width: 100%;
    max-width: 105px;
}
.erase{
    text-decoration: none;
}

</style>