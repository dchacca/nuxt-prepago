<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-brand to="/">PrepagosPeru</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Inicio</b-nav-item>
          <b-nav-item to="/blog">Galeria</b-nav-item>
          <b-nav-item to="/publicar">Anuncia Gratis</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!--b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
          </b-nav-item-dropdown-->

          <b-nav-item-dropdown right v-if="isAuthenticated">
            <!-- Using 'button-content' slot -->

            <template slot="button-content">
              <em>
                <a class="navbar-link">{{ loggedInUser.name }}</a>
              </em>
            </template>

<b-dropdown-item to="/user/profile">Profile</b-dropdown-item>
<b-dropdown-item @click="logout">Sign Out</b-dropdown-item>
</b-nav-item-dropdown>

<template v-else>
            <b-nav-item to="/login">Log In</b-nav-item>
            <b-nav-item to="/register">Register</b-nav-item>-
          </template>
</b-navbar-nav>
</b-collapse>
</b-navbar>
</div>
</template>

<script>
    import {
        mapGetters
    } from "vuex";
    export default {
        computed: {
            ...mapGetters(["isAuthenticated", "loggedInUser"])
        },
        methods: {
            async logout() {
                await this.$auth.logout();
            }
        }
    }
</script>

<style>

</style>
