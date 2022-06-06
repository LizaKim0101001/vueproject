<template>
    <div class="dropdown_wrapper">
        <div @click="toggle" >
            <slot name="header" ></slot>
            <div v-if="button" class="dropdown_button" :class="{'dropdown_button-open': isActive}"></div>
        </div>
        <div class="dropdown_menu" v-if="isActive">
            <slot name="list"></slot>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isActive: false,
        };
    },
    props: {
        "button":{
            type: String,
        }
    },
    computed: {},
    mounted() {
    },
    methods: {
        toggle(){
            this.isActive = !this.isActive
        }
    },
}
//:class="{'dropdown_button-open': isActive}"
</script>

<style lang="scss" scoped>
@import "../scss/inject.scss";
    .dropdown{
        &_wrapper{
        width: 100%;
        position: relative;
        }
        &_button{
            width: 20px;
            height: 20px;
            background-color: transparent;
            border: none;
            background-repeat: no-repeat;
            background-size: 20px 20px;
            background-position: right;
            background-image: url("../assets/images/burger.svg");
            &-open{
            background-image: url("../assets/images/burger-open.svg");
            }
        }
        &_menu{
            position: absolute;
            padding: 5px;
            width: 100%;
            z-index: 10;
            top: 20px;
            left: 0px;
            border: 1px solid $primary;
            background-color: $white;
            box-shadow: 0px 0px 2px 2px rgba(123, 97, 255, 0.5);
            border-radius: 5px;
            background-color: $white;
            }

        &-item{
                width: 100%;
                background-color: $white;
                margin-bottom: 2px;
                height: 18px;
                @include font("Inter", 12px, 14px, 400, $text);
                border: none;
                background-color: $white;
            &_er{
            background-color: $white;
            color: $error;
            }
        }
        }
        .head{
            width: 136px;
            & .dropdown_menu{
                top: 40px;
                right: 0px;
            }
        }
</style>