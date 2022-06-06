<template>
    <section class="table-wrapper">
        <table class="table">
            <tr class="table_list" v-for="user in data" :key="user.id" @click="toProfile(user)">
                <td class="table_item">
                    <p class="table-cell">{{user.username}}</p>
                </td>
            </tr>
        </table> 
    </section>
</template>

<script>
export default {
    data() {
        return {
            data: [
                {
                id: "6273dca5d09b551dca87629c",
                login: "SPB_Alexey_Kutilov",
                password: "123",
                username: "Алексей Кутилов",
                about: "Много работаю, так что очень мало времени на учёбу(",
                photoUrl: "https://coolsen.ru/wp-content/uploads/2022/01/44-20220120_161816.jpg"
                },
                {
                id: "6273dcb7d09b551dca87629d",
                login: "Alexius04",
                password: "123",
                username: "AlexDev04",
                about: "WTF is your Python? \nIt's JavaScript, Bro!",
                photoUrl: "https://as-ecars.ru/wp-content/uploads/2019/06/electric-scooter-super-soco-02_1157353144.jpg"
                },
                {
                id: "6273dcd2d09b551dca87629e",
                login: "maxigroove",
                password: "1Q2w3e4r5t",
                username: "Артем Сорокин",
                about: "Во славу Императору!",
                photoUrl: "https://avatars.mds.yandex.net/get-zen_doc/3994559/pub_6064c0224878ca659c8c08b6_6064cbccd5b01e21343bb760/scale_1200"
                },
                {
                id: "6273dce7d09b551dca87629f",
                login: "indie777",
                password: "123",
                username: "Николай Рубцов",
                about: "web developer (beginner)\nAbout me intro lorem\n",
                photoUrl: "https://www.nlb.by/upload/iblock/f9c/afisha.jpg"
                },
                {
                id: "6273dcf6d09b551dca8762a0",
                login: "COLDF1RE",
                password: "123",
                username: "Владимир",
                about: "Прррривет!",
                photoUrl: "https://enotovil.ru/wp-content/uploads/2019/09/M4L3I8dPpfU-900x400.jpg"
                }]
        }
            
    },

    props: {},
    computed: {
    },
    mounted() {
    },
    methods: {
        toProfile(user){
            this.$router.push({path:`/profile/${user.id}`})
        }
    },
    watch:{

    },
    components: {}
}
</script>

<style lang="scss" scoped>
.table{
    width: 100%;
    min-height: 684px;
    height: 100%;
    box-shadow: inset 0px 0px 2px 1px #B5B5B5;
    border-radius: 5px;
    background-color: $white;
    position: relative;
    z-index: 2;
    box-sizing: border-box;
    &-wrapper{
        width: 100%;
    }
    &_list{
        height: 68px;
        @include flex(flex, row, space-between, flex-start, no-wrap);
        padding: 0 30px;
    }
    &_list:nth-child(2n){
        background-color: #F2F2F2;
    }
    &_item{
        display: block;
        padding: 22px 0;
    }
   
}


.erase{
    text-decoration: none;
}
</style>