<template>
    <label class="label">
        <input :name="name" type="checkbox" class="checkbox" :value="value" v-on:change="chek">
        <slot></slot>
    </label>
</template>

<script>
export default {
	data() {
        return{
          isChecked: false
        }
	},
  props: {
    "value":{
      type: String
    },
    "name":{
      type: String
    }
  },
  computed: {
  },
  methods: {
    chek(e){
      if (e.target.checked) {
        this.isChecked = true
        this.$emit('check', this.isChecked, e.target.value, e.target.name)
      } else{
        this.isChecked = false
        this.$emit('check', this.isChecked, e.target.value, e.target.name)
      }
    }
   /*  updateInput(event) {
      let isChecked = event.target.checked
      if (this.modelValue instanceof Array) {
        let newValue = [...this.modelValue]
        if (isChecked) {
          newValue.push(this.value)
        } else {
          newValue.splice(newValue.indexOf(this.value), 1)
        }
        this.$emit('change', newValue)
      } else {
        this.$emit('change', isChecked ? this.trueValue : this.falseValue)
      }
    } */
  }

}
</script>

<style lang="scss" scoped>
@import "../scss/inject.scss";
.checkbox{
            width: 24px;
            height: 24px;
            box-sizing: border-box;
            background-color: $white;
            border: 1px solid $text;
            border-radius: 5px;
            position: relative;
            margin-right: 5px;
            margin-left: 5px;
            &:hover, &:focus, &:active{
                border: 1px solid $primary;

            }
            &:checked::after{
                content: "";
                top: 0px;
                left: 0px;
                width: 24px;
                border-radius: 5px;
                height: 24px;
                position: absolute;
                box-sizing: border-box;
                background-color: $primary;
                background-image: url("../assets/images/сheck.svg");
            }
    }
.label{
        box-sizing: border-box;
        position: relative;
        height: 29px;
        padding-top: 2.5px;
        padding-bottom: 2.5px;
        @include font("Inter", 14px, 14px, 400, $text);
        @include flex (flex, row, flex-start, center, nowrap);
        &:hover, &:focus{
            background-color: #E6E1FF;
        }
        &:active{
            background-color: $primary;
            color: $white;
        }
    }
</style>
