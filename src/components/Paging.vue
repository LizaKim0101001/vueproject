<template>
    <section class="pagination">
        <div class="pagination_wrapper">
            <button class="pagination_prev_next" @click="prevPage">Назад</button>
            <button class="pagination_item button" v-for="item in arrNumbers" @click="paginate" :key="item">{{item}}</button>              
            <button class="pagination_prev_next" @click="nextPage">Вперед</button>
            </div>
        <div class="pagination_shown">
            Показано {{firstOfPage}} - {{lastOfPage}} из {{param1}}
        </div>
    </section>
</template>

<script>
export default {
	data() {
        return{
            currentPage : 1,
            userPerPage : 10,
            arrNumbers : [],
            pages: 0,
        }
	},
	props: {
        "param1": {
            type: Number,
            default:()=> 10
        }
    },
	computed: {

        firstOfPage(){
           return (1  + (this.currentPage  * this.userPerPage))
        },
        lastOfPage(){
            if ((this.currentPage + 1) === this.pages) {
            return this.param1
            } else {
                return this.userPerPage * (this.currentPage +1 )
            }
        }
	},
	mounted() {
        this.pages = this.param1/this.userPerPage
        this.pages = Math.ceil(this.param1/this.userPerPage)
        for (let i = 1; i <= this.pages ; i++) {
            this.arrNumbers.push(i)
            }
	},
	methods: {
        nextPage (){
        this.currentPage = this.currentPage +1
     },
        prevPage (){
            this.currentPage = this.currentPage -1
     },
        paginate (e){
        this.currentPage = (e.target.textContent -1 )
     }
	},
}
</script>

<style lang="scss" scoped>
@import "../scss/inject.scss";
.pagination{
    margin-top: 20px;
    @include flex (flex, row, space-between, center, nowrap);
    width: 100%;
&_wrapper{
    width: 50%;
    height: 24px;
    @include flex (flex, row, normal, center, nowrap);
    }
&_item{
    padding: 2.5px 7.5px;
    margin-right: 5px;
    }
&_shown{
    @include font("Roboto", 14px, 16px, 400, $inner-shadow);
    }
&_prev_next{
    margin-right: 5px;
    padding: 2.5px 10px;
}
}
.button{
    display: block;
    background-color: $white;
    text-align: center;
    border: 1px solid $text;
    border-radius: 5px;
    height: 25px;
    white-space: nowrap;
    @include font('Roboto', 16px, 19px, 400, $text);
    &:hover{
        background-color: #E1E1E1;
    }
    &:focus{
        background-color: #CFCFCF;
    }
    &_disabled{
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
</style>
