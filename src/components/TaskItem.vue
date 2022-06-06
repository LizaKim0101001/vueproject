<template>
    <tr class="table_list" >
        <td class="table_item type" @click="toTask">
            <p class="table-cell " :class="taskItem.type"></p>
        </td>
        <td class="table_item table-name-task" @click="toTask" >
            <p class="table-cell">{{taskItem.title}} </p>
        </td>
        <td class="table_item table-users"  >
            <p class="table-cell">{{taskItem.userId}}</p>
        </td>
        <td class="table_item table-status" >
            <Button class="status" :class="taskItem.status">{{statusEnum[taskItem.status].text}}</Button>
        </td>  
        <td class="table_item table-priority" >
            <p class="table-cell" :class="taskItem.rank">{{rankEnum[taskItem.rank].text}}</p>
        </td>
        <td class="table_item table-edit" id={id}>
            <Dropdown class="table-cell" button="true">
                <template v-slot:list>
                    <button class="dropdown-item" @click="toEdit">Редактировать</button>
                    <button class="dropdown-item dropdown-item_er" >Удалить</button>
                    <button class="dropdown-item" v-for="item in statusArray[taskItem.status]" :key="item.status">{{item.text}}</button>
                </template>
            </Dropdown>
        </td>
    </tr>
</template>

<script>
import Dropdown from './Dropdown.vue';
import Button from './Button.vue';

export default {
    data() {
        return {
            rankEnum:{
                low:{text: "Низкий"},
                medium:{text:"Средний"},
                high:{text:"Высокий"}
            },
            statusArray :{
                opened:[{status:"inProgress", text:"Взять в работу"}, {status:"complete", text:"Сделано"}], 
                inProgress:[{status:"opened", text:"Переоткрыть"}, {status:"testing", text:"На тестировании"}, {status:"complete", text:"Сделано"}],
                testing:[{status:"opened", text:"Переоткрыть"}, {status:"complete", text:"Сделано"}],
                complete:[{status:"opened", text:"Переоткрыть"}, {status:"complete", text:"Сделано"}],
            },
            statusEnum: {
                opened: {text:"Переоткрыть"},
                inProgress: {text:"Взять в работу"},
                testing :{text:"На тестировании"},
                complete :{text:"Сделано"}
            }
        };
    },
    props: {
        "taskItem":{
            type: Object,
        }
    },
    computed: {
        rank(){

        }
    },
    mounted() {
        },
    methods: {
        toEdit(){
            this.$router.push({name:"TaskEdit", path: `/edit/${this.taskItem.id}` })
        },
        toTask(){
            this.$router.push({path: `/task/${this.taskItem.id}` })
        }
    },
    watch:{

    },
    components: { Dropdown, Button }
}
</script>

<style lang="scss" scoped>
.table{
    &_list{
        width: 100%;
        height: 68px;
        @include flex(flex, row, space-between, flex-start, no-wrap);
        padding: 0 30px;
    }
    &_list:nth-child(2n){
        background-color: #F2F2F2;
    }
    &_item{
        display: block;
        padding: 22px 0;
    }
   
    &-edit{
        width: 100%;
        max-width: 95px;
        position: relative;
    }
    &-name-task{
        width: 100%;
        max-width: 527px;
    }
    &-users{
        width: 100%;
        max-width:180px;
    }
    &-priority{
        max-width: 120px;
        width: 100%;
        & .table-cell{
            position: relative;
            padding-left: 30px;
        }}
        .hight::after{
            content: "";
            top: 6px;
            left: 12px;
            width: 14px;
            height: 8px;
            position: absolute;
            box-sizing: border-box;
            background-image: url("../assets/images/hight.svg");
            background-repeat: no-repeat;
        }
        .medium::after{
            content: "";
            top: 7px;
            left: 12px;
            width: 14px;
            height: 6px;
            position: absolute;
            box-sizing: border-box;
            background-image: url("../assets/images/medium.svg");
            background-repeat: no-repeat;
        }
        .low::after{
            content: "";
            top: 6px;
            left: 12px;
            width: 14px;
            height: 8px;
            position: absolute;
            box-sizing: border-box;
            background-image: url("../assets/images/low.svg");
            background-repeat: no-repeat;
        }
    
}
 .type{
        width: 100%;
        max-width: 68px;
        height: 24px;
        & .bug{
            width: 24px;
            height: 24px;
            background-size: 24px 24px;
            background-repeat: no-repeat;
            background-position: center;
            background-image: url("../assets/images/error.svg");
        }
        & .task{            
            width: 24px;
            height: 24px;
            background-size: 24px 24px;
            background-repeat: no-repeat;
            background-position: center;
            background-image: url("../assets/images/task.svg");
        }
    }



.erase{
    text-decoration: none;
}
</style>