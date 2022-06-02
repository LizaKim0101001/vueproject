<template>
  <button  :class="[typeBtn, classButton]">{{titleBtn}}</button>
</template>

<script>
export default {
data() {
        return{

        }
	},
	props: {
        "titleBtn":{
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

	},
}
</script>

<style lang="scss" scoped>
@import "../scss/inject.scss";
.button{
    display: block;
    background-color: $white;
    text-align: center;
    border: 1px solid $text;
    border-radius: 5px;
    height: 25px;
    padding: 2.5px 20px;
    white-space: nowrap;
    box-sizing: border-box;
    @include font('Roboto', 16px, 19px, 400, $white);
    color: $text;
    &:hover{
        background-color: #E1E1E1;
    }
    &:focus{
        background-color: #CFCFCF;
    }
    &_primary{
        background-color: $primary;
        border-color: $primary;
        box-sizing: border-box;
        color: $white;
        &:hover{
            background-color: #8A73FF;
            border-color: #8A73FF;
        }
        &:focus{
            background-color: #715BE3;
            border-color: #715BE3;
        }
    }
    &_success{
        background-color: $success;
        border-color: $success;
        box-sizing: border-box;
        color: $white;
        &:hover{
            background-color: #80F0A6;
            border-color: #80F0A6;
        }
        &:focus{
            background-color: #4BD379;
            border-color: #4BD379;
        }
    }
    &_error{
        box-sizing: border-box;
        background-color: $error;
        border-color: $error;
        color: $white;
        &:hover{
            background-color: #FF8080;
            border-color: #FF8080;
        }
        &:focus{
            background-color: #D65D5D;
            border-color: #D65D5D;
        }
    }
    &_disabled{
        box-sizing: border-box;
        background-color: $inner-shadow;
        border-color: $inner-shadow;
        color: $label-text;
        &:hover{
            background-color: $inner-shadow;
            border-color: $inner-shadow;
        }
        &:focus{
            background-color: $inner-shadow;
            border-color: $inner-shadow;
        }
    }
}

.status{
    height: 19px;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 0 10px;
    margin-top: 5px;
    @include font('Roboto', 13px, 16px, 400, $text);
    &_opened{
        border: 1px solid $text;
        background-color: $label-text;
    }
    &_inProgress{
        border: 1px solid #846F00;
        background-color: #FFC700;
        color: #846F00;
    }
    &_complete{
        border: 1px solid #157536;
        color: #157536;
        background-color: #4BD379;
    }
    &_error{
        border: 1px solid #6D1313;
        color: #6D1313;
        background-color:#EB4F4F;
    }
}    

</style>