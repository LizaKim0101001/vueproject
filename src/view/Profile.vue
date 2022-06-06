<template>
    <div>
        <Header :authorized="authorized"/>
            <section className="board">
                <Boardheader/>
                <ProfileBoard/>
            </section>
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import Boardheader from '../components/Boardheader.vue';
import ProfileBoard from '../components/ProfileBoard.vue';
export default {
    data() {
        return {
           authorized: true,
           userData:{
                id: "6273dca5d09b551dca87629c",
                login: "SPB_Alexey_Kutilov",
                password: "123",
                username: "Алексей Кутилов",
                about: "Много работаю, так что очень мало времени на учёбу(",
                photoUrl: "https://coolsen.ru/wp-content/uploads/2022/01/44-20220120_161816.jpg"
            }
        };
    },
    props: {},
    computed: {
    },
    mounted() {
    },
    methods: {
    
    },
    watch:{

    },
    components: { Header, Boardheader, ProfileBoard }
}
</script>

<style lang="scss" scoped>
.board{
    width: 100%;
    max-width: 1280px;
    padding: 30px 80px;
    box-sizing: border-box;
    @include flex(flex, column, center, center, no-wrap);
}
.erase{
    text-decoration: none;
}
</style>