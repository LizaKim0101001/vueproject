<template>
    <div>
        <Header authorized=""/>
        <router-view></router-view>
    </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
    data() {
        return {
            authorized:true,
        };
    },
    computed: {


    },
    mounted() {


    },
    methods: {

    },
    watch:{
    },
    components: { Header }
}
/*
		            
                    
        */
</script>

<style lang="scss" scoped>
@font-face {
    font-family: "Inter";
    src: local("Inter-Regular"),
    url("./assets/fonts/Inter-Regular.woff") format("woff"),
    url("./assets/fonts/Inter-Regular.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
}
@font-face {
    font-family: "Open Sans";
    src: local("OpenSans-Regular"),
    url("./assets/fonts/OpenSans-Regular.woff") format("woff"),
    url("./assets/fonts/OpenSans-Regular.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: "Roboto";
    src: local("Roboto-Regular"),
    url("./assets/fonts/Roboto-Regular.woff") format("woff"),
    url("./assets/fonts/Roboto-Regular.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: "Roboto";
    src: local("Roboto-Light"),
    url("./assets/fonts/Roboto-Light.woff") format("woff"),
    url("./assets/fonts/Roboto-Light.woff2") format("woff2");
    font-weight: 300;
    font-style: normal;
}
</style>

