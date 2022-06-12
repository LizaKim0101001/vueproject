<template>
    <li class="task-comment_item">
        <div>
            <p class="task-information_title">{{authorComment}}</p>
            <p class="task-information_text">{{text}}</p>
        </div>
        <p class="task-information_text task-information_delete" v-show="btnDelete" @click="del">Удалить</p>
    </li>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import api from '@/api'

export default {
	data() {
        return{
            show: false
        }
	},
	props: {
        "itemData":{
            type: Object,
        },
    },
	computed: {
        ...mapGetters('index', ['userData', 'users', 'authorized',]),

         authorComment(){
             if (this.users.find(user => user.id === this.itemData.userId) === undefined) {
                return "Не задан"
            } else {
                return this.users.find(user => user.id === this.itemData.userId).username
            } 
        },
        btnDelete(){
            if (this.userData.id === this.itemData.userId) {
                return true
            } else {
                return false
            }
        },
        text(){
            return this.itemData.text
        }
	},
    watch:{
    },
	mounted() {
	},
	methods: {
        ...mapActions('comment', ['deleteComment', ]),
        del(){
            const id =this.itemData.id
            api.Comment.deleteComments(id)
        }
	},
}
</script>

<style lang="scss" scoped>
@import "../scss/inject.scss";
.input{
    width: 100%;
    margin-top: 5px;
    border: 1px solid $inner-shadow;
    border-radius: 3px;
    box-shadow: inset 0px 0px 2px 1px $inner-shadow;
    background-color: $white;
    height: 24px;
    box-sizing: border-box;
    padding: 5px 10px;
    &::placeholder{
        @include font('Inter', 14px, 14px, 400, $label-text);
    }
    &:hover{
        border-color: $primary;
        box-shadow: inset 0px 0px 2px 1px #B5B5B5;
    }
    &:focus{
        box-shadow: 0px 0px 2px 2px rgba(123, 97, 255, 0.5);
    }
}

.task{
    
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
</style>
