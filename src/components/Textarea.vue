<template>
    <label class="label">
        <slot></slot>
        <textarea type="text" class="textarea"  :placeholder="placeholder" :value = "value" v-on:input="onInput"/> 
    </label>
</template>

<script>
export default {
	data() {
        return{

        }
	},
	props: {
        "title":{
            type: String,
        },
        "placeholder":{
            type: String,
        },
        "value":{
            type: String,
        },
        "classTextarea":{
            type: String,
        }
    },
	computed: {
	},
	mounted() {

	},
	methods: {
        onInput(e){
            this.$emit('input', e.target.value)
        }
	},
}
</script>

<style lang="scss" scoped>
@import "../scss/inject.scss";
.textarea{
    width: 100%;
    margin-top: 5px;
    border: 1px solid $inner-shadow;
    border-radius: 3px;
    box-shadow: inset 0px 0px 2px 1px $inner-shadow;
    background-color: $white;
    height: 24px;
    box-sizing: border-box;
    padding: 5px 10px;
    resize: none;
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
.comment{
    width: 100%;
    max-width: 458px;
    margin-bottom: 10px;
    & .textarea{
    height: 76px;
    }
}
.task-edit{
    width: 100%;
    max-width: 400px;
    & .textarea{
    height: 528px;
    }
}
.modal{
    width: 370px;
     & .textarea{
    height: 76px;
    }
}

.label{
    @include font('Roboto', 16px, 19px, 400, $label-text);
    @include flex (flex, column, flex-start, flex-start, nowrap);
}
</style>
