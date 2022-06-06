<template>
    <label for="" class="label" >
        <slot></slot>
        <input type="text" class="input" :value="value" :placeholder="placeholder" v-on:input="onInput">
    </label>
</template>

<script>
export default {
	data() {
        return{
        }
	},
	props: {
        "placeholder":{
            type: String,
        },
        "value":{
            type: String,
        },
    },
	computed: {
	},
    watch:{
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
.authorize .input{
    width: 240px;
}
.task{
    width: 527px;
}
.task-edit{
    width: 400px;
}
.modal{
    width: 370px;
}

.label{
    @include font('Roboto', 16px, 19px, 400, $label-text);
    @include flex (flex, column, flex-start, flex-start, nowrap);
}
</style>
