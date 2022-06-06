  <template>
    <div>
        <Header :authorized="authorized"/>
        <Authorizemodal/>
    </div>
  </template>

  <script>
import Header from "../components/Header.vue";
import Authorizemodal from "../components/Authorizemodal.vue";

export default {
    data() {
        return {
            authorized: false,
        };
    },
    props: {},
    computed: {},
    mounted() {
    },
    methods: {},
    components: { Header, Authorizemodal }
}
</script>

<style lang="scss" scoped>
@import "../scss/inject.scss";
</style>