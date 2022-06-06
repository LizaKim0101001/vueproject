<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    data() {
        return {
            link1: {
                path: "/authorize",
			},
            titleBtn: "Открыть",
            currentPage: 0,
            vev: [],
        };
    },
    computed: {},
    mounted() {
    },
    methods: {
    },
    watch:{
    },
    components: {}
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

