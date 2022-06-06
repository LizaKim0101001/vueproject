<template>
    <div class="select_wrapper"  :class="{'select-open': isActive}">
        <div class=" select_button" @click="toggle">
           <slot name="title"></slot>
        </div>
        <div v-if="isActive">
            <slot name="list"></slot>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            isActive: false,
        }
	},
	props: {
        "titleSelect":{
            type: String,
        },
        "classButton":{
            type: String,
        },
        "typeBtn":{
            type:String,
        }
    },
	computed: {
	},
	mounted() {

	},
	methods: {
        toggle(){
            this.isActive = !this.isActive
        }
	},
}
</script>

<style lang="scss" scoped>
@import "../scss/inject.scss";
.select{
    &_wrapper{
    width: 100%;
    border-radius: 3px;
    background-color: $white;
    position: relative;
    border: 1px solid transparent;
    box-sizing: border-box;
    padding-bottom: 5px; 
    }
    &_title{
        @include font("Roboto", 16px, 19px, 400, $label-text);
    }
    &_button{
        height: 24px;
        background-color: $white;
        border: 1px solid $inner-shadow;
        border-radius: 3px;
        box-shadow: inset 0px 0px 2px 1px $inner-shadow;
        background-color: $white;
        box-sizing: border-box;
        @include font("Inter", 14px, 14px, 400, $label-text);
        text-align: start;
        position: relative;
        padding: 5px 10px;
        margin: 5px;
        &:hover{
            border-color: $primary;
            box-shadow: inset 0px 0px 2px 1px #B5B5B5;
        }
        &:focus{
            box-shadow: 0px 0px 2px 2px rgba(123, 97, 255, 0.5);
        }
        &::after{
            content: "";
            top: 9px;
            right: 10px;
            width: 8px;
            height: 6px;
            position: absolute;
            background-image: url("../assets/images/v.svg");
        }
    }
    &-option{
        @include font('Inter', 14px, 14px, 400, $text);
        padding: 5px 10px;
        margin-top: 5px;
        &:hover, &:focus{
            background-color: #E6E1FF;
        }
        &:active{
            background-color: $primary;
            color: $white;
        }
    }
    &-open{
         &:hover{
            border: 1px solid $primary;
            box-shadow: inset 0px 0px 2px 1px #B5B5B5;
        }
        &:focus{
            box-shadow: 0px 0px 2px 2px rgba(123, 97, 255, 0.5);
        }
        & .select_button::after{
            content: "";
            top: 9px;
            right: 10px;
            width: 8px;
            height: 6px;
            position: absolute;
            background-image: url("../assets/images/v.svg");
            transform: rotate(180deg);
            }
        }
    }
</style>