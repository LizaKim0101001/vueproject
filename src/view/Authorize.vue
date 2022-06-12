  <template>
    <div>
        <Authorizemodal/>
    </div>
  </template>

  <script>
import Authorizemodal from "../components/Authorizemodal.vue";
import { mapGetters, mapActions } from 'vuex'

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
    methods: {
         ...mapActions('index',['fetchUsers']),

    },
    components: {Authorizemodal }
}
</script>

<style lang="scss" scoped>
@import "../scss/inject.scss";
</style>