<template>
    <div>
        <p class="select_title"><slot></slot></p>
        <div class="select" :class="{'select-open': isActive}">
            <p class="select-default select-text" @click="toggle">{{this.select}}</p>
            <p
            v-for="option in options"
            class="select-option select-text"
            :key="option.value"
            :value="option.value"
            v-if="isActive"
            @click="isSelected(option)"
            > {{option.text}}</p>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return{
            isActive: false,
            select: ""
        }
	},
	props: {
        "options":{
            type: Array,
        },
        "selected":{
            type: String,
            default: "",
        }
    },
	computed: {
        
	},
	mounted() {
        this.select = this.selected
        },
	methods: {
        toggle(){
            this.isActive = !this.isActive
        },
        isSelected(option){
            this.select = option.text
            this.$emit("select", option.value);
            this.isActive = !this.isActive
        }
	},
}
</script>

<style lang="scss" scoped>
@import "../scss/inject.scss";
.select{
      width: 100%;
    border: 1px solid $inner-shadow;
    border-radius: 3px;
    box-shadow: inset 0px 0px 2px 1px $inner-shadow;
    background-color: $white;
    position: relative;
    box-sizing: border-box;
    &_title{
        margin-bottom: 5px;
        @include font("Roboto", 16px, 19px, 400, $label-text);
    }
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

    &-text{
        @include font("Inter", 14px, 14px, 400, $text);
    }
    &-option{
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
    &-default{
        padding: 5px 10px;
        display: block;
        margin-top: 0;
    }
}
.select-open.select::after{
    content: "";
        top: 9px;
        right: 10px;
        width: 8px;
        height: 6px;
        position: absolute;
        background-image: url("../assets/images/v.svg");
        transform: rotate(180deg);
}
</style>