<template>
<div>
        <Paging :param1="total"/>
		<Input :title = "title" :placeholder="placeholder" :type="type" :class="classInput" v-model="ap" />
        <Textarea :class="classTextarea" :placeholder="placeholder"  v-model="ap"/>
		<Button :titleBtn = "titleBtn" :class="classButton" :typeBtn="typeBtn"/>
		<Checkbox v-for="item in idCheckbox" :key="item.id" :value="item.id" :text="item.text" v-model="selectValue"/>
		<Dropdown style="width: 105px;">
            <p class="dropdown-item">g</p>
            <p class="dropdown-item dropdown-item_er">error</p>
        </Dropdown>
        <Select titleSelect="Приоритет"  style="width: 300px;">
            <Checkbox   value="high" text="Высокий" v-model="selectValue"></Checkbox>
            <Checkbox  value="medium" text="Средний" v-model="selectValue"></Checkbox>
            <Checkbox  value="low" text="Низкий" v-model="selectValue"></Checkbox>
        </Select>
</div>
</template>

<script>
import Input from "./components/Input.vue";
import Textarea from "./components/Textarea.vue";
import Paging from "./components/Paging.vue";
import Button from "./components/Button.vue";
import Checkbox from "./components/Checkbox.vue";
import Dropdown from "./components/Dropdown.vue";
import Select from "./components/Select.vue";
export default {
    data() {
        return {
            selectValue: [],
            total: 33,
            title: "Логин",
            titleBtn: "В работе",
            placeholder: "username@e.mail",
            type: "text",
            defValue: "Задача 1. тарам парам",
            classInput: "modal",
            classTextarea: "modal",
            classButton: "status_error",
            typeBtn: "status",
            ap: "ss",
            idCheckbox: [{id:0, text:"Александра"},{id:1, text:"Ал"}, {id:2, text:"Алd"}]

        };
    },
    computed: {},
    mounted() {
    },
    methods: {
        updateText(val) {
			this.app1 = val
		},
    },
    
    components: { Input, Textarea, Paging, Button, Checkbox, Dropdown, Select }
}
/*
		            
                    
        */
</script>

<style lang="scss" scoped>
	@import "./scss/inject.scss";
</style>

