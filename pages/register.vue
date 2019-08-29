<template>
  <section class="section">
    <div class="container">
      <div class="card bg-light">
        <article class="card-body mx-auto" style="max-width: 400px;">
          <h4 class="card-title mt-3 text-center"> Create Account
          </h4>
          <p class="text-center"> Get started with your free account
          </p>
          <p>
            <a href class="btn btn-block btn-twitter">
              <i class="fab fa-twitter">
              </i> Login via Twitter
            </a>
            <a href class="btn btn-block btn-facebook">
              <i class="fab fa-facebook-f">
              </i> Login via facebook
            </a>
          </p>
          <p class="divider-text">
            <span class="bg-light"> OR
            </span>
          </p>
          <Notification :message="error" v-if="error" />

          <form method="post" @submit.prevent="register()">
            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-user">
                  </i>
                </span>
              </div>
              <input name="name" v-model="name" class="form-control" placeholder="Full name" type="text" />
            </div>
            <!-- form-group// -->
            <div class="form-group input-group">
              <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fa fa-envelope"></i>
              </span>
            </div>
            <input name="email" v-model="email" class="form-control" placeholder="Email address" type="email" />
          </div>
          <!-- form-group// ->
            <
            div class = "form-group input-group" >
            <
            div class = "input-group-prepend" >
            <
            span class = "input-group-text" >
            <
            i class = "fa fa-phone" > < /i> <
            /span> <
            /div> <
            select class = "custom-select"
            style = "max-width: 120px;" >
            <
            option selected > +51 < /option> <
            option value = "1" > +52 < /option> <
            option value = "2" > +56 < /option> <
            option value = "3" > +57 < /option> <
            /select> <
            input name class = "form-control"
            placeholder = "Phone number"
            type = "text" / >
            <
            /div> <
            !-form-group // ->
            <
            div class = "form-group input-group" >
            <
            div class = "input-group-prepend" >
            <
            span class = "input-group-text" >
            <
            i class = "fa fa-building" > < /i> <
            /span> <
            /div> <
            select class = "form-control" >
            <
            option selected > Select job type < /option> <
            option > Designer < /option> <
            option > Manager < /option> <
            option > Accaunting < /option> <
            /select> <
            /div> <
            !-form-group end. // -->
            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
              <input name="password" v-model="password" class="form-control" placeholder="Create password" type="password" />
            </div>
            <!-- form-group// -->
            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-lock">
                  </i>
                </span>
              </div>
              <input name="password_confirmation" v-model="password_confirmation" class="form-control" placeholder="Repeat password" type="password" />
            </div>
            <!-- form-group// -->
            <div class="form-group">
              <button type="submit" class="btn btn-primary btn-block"> Create Account
              </button>
            </div>
            <!-- form-group// -->
            <p class="text-center">
              Have an account ?
              <nuxt-link to="/login"> Login
              </nuxt-link>
            </p>
          </form>
        </article>
      </div>
      <!-- card.// -->
    </div>
  </section>
</template>

<script>
    import Notification from "~/components/Notification";
    export default {
        layout: "MyLayout",
        middleware: "guest",
        components: {
            Notification
        },
        data() {
            return {
                name: "",
                email: "",
                password: "",
                password_confirmation: "",
                error: null
            };
        },
        methods: {
            async register() {
                try {
                    await
                    this.$axios.post("register", {
                        name: this.name,
                        email: this.email,
                        password: this.password,
                        password_confirmation: this.password_confirmation
                    });
                    await
                    this.$auth.loginWith("local", {
                        data: {
                            email: this.email,
                            password: this.password
                        }
                    });
                    this.$router.push("/");
                } catch (e) {
                    console.log(e)
                    this.error =
                        e.response.data.message;
                }
            }
        }
    };
</script>
<style>
    .divider-text {
        position: relative;
        text-align: center;
        margin-top: 15px;
        margin-bottom: 15px;
    }

    .divider-text span {
        padding: 7px;
        font-size: 12px;
        position: relative;
        z-index: 2;
    }

    .divider-text:after {
        content: "";
        position: absolute;
        width: 100%;
        border-bottom: 1px solid #ddd;
        top: 55%;
        left: 0;
        z-index: 1;
    }

    .btn-facebook {
        background-color: #405D9D;
        color: #fff;
    }

    .btn-twitter {
        background-color: #42AEEC;
        color: #fff;
    }
</style>
