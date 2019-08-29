<template>
 <section class="container">
     <div>
       <b-form>
         <b-form-group  description="Let us know your Email." label="Enter your Email" label-for="username">
           <b-form-input id="username" v-model="email" type="email" required></b-form-input>
         </b-form-group>
         <b-form-group  description="Let us know your Password." label="Enter your Password" label-for="pw">
           <b-form-input id="pw" v-model="password" type="password"> </b-form-input>
         </b-form-group>
         <b-button-group size="sm">
             <b-button @click="facebook" variant="outline-success">Facebook</b-button>
             <b-button @click="login" variant="outline-success">Login</b-button>
             <b-button @click="google" variant="outline-success">Google</b-button>
             <b-button @click="logout" variant="outline-success">Logout</b-button>
             <b-button @click="check" variant="outline-success">Check</b-button>
             <b-button to="/callback" variant="outline-success">Callback</b-button>
           </b-button-group>
       </b-form>
     </div>
    </section>
</template>
<script>
    export default {

        methods: {
            postLogin() {
                setTimeout(() => { // we simulate the async request with timeout.
                    const auth = {
                        accessToken: 'someStringGotFromApiServiceWithAjax'
                    }
                    this.$store.commit('setAuth', auth) // mutating to store for client rendering
                    Cookie.set('auth', auth) // saving token in cookie for server rendering
                    this.$router.push('/')
                }, 1000)
            }
        },
        data() {
            return {
                email: '',
                password: ''
            }
        },
        mounted() {},
        watch: {},
        components: {},
        methods: {
            google() {},
            facebook() {},
            login() {},
            logout() {},
            check() {},
        }
    }
</script>
<style>
    .container {
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
</style>