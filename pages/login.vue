<template>
  <section class="container">
    <div id="logreg-forms">
      <b-form class="form-signin" method="post" @submit.prevent="login">
        <h1 class="h3 mb-3 font-weight-normal" style="text-align:center">Sign in</h1>
        <div class="social-login">
          <button class="btn facebook-btn social-btn" type="button">
            <span>
              <i class="fab fa-facebook-f"></i> Sign in with Facebook
            </span>
          </button>
          <b-button @click="google" variant="outline-success">
            <span>
              <i class="fab fa-google-plus-g"></i> Sign in with Google+
            </span>
          </b-button>
          <button class="btn google-btn social-btn" type="button">
            <span>
              <i class="fab fa-google-plus-g"></i> Sign in with Google+
            </span>
          </button>
        </div>
        <p style="text-align:center">OR</p>
        <Notification :message="error" v-if="error" />
        <b-form-group label-for="email">
          <b-form-input
            id="email"
            v-model="email"
            type="email"
            required
            placeholder="Email address"
          ></b-form-input>
        </b-form-group>
        <b-form-group label-for="pw">
          <b-form-input id="pw" v-model="password" type="password" placeholder="Password"></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="success btn-block">
          <i class="fas fa-sign-in-alt"></i> Sign in
        </b-button>
        <a href="#" id="forgot_pswd">Forgot password ?</a>
        <hr />
        <!-- <p>Don't have an account!</p>  -->
        <b-button type="button" variant="primary btn-block white" to="/register">
          <i class="fas fa-user-plus"></i> Sign up New Account
        </b-button>
      </b-form>
    </div>
  </section>
</template>
<script>
import Notification from "~/components/Notification";

export default {
  middleware: "guest",
  /*headers: {
    "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
  },*/
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  mounted() {},
  watch: {},
  components: {
    Notification
  },
  methods: {
    async google() {
      await this.$auth.loginWith("google").catch(e => {
        this.$toast.show("Error", { icon: "fingerprint" });
      });
    },
    async login() {
      try {
        this.$toast.show("Logging in...", { icon: "fingerprint" });
        await this.$auth
          .loginWith("local", {
            headers: [
              { "Access-Control-Allow-Origin": "*" },
              { "X-Requested-With": "XMLHttpRequest" }
            ],
            data: {
              email: this.email,
              password: this.password
            }
          })
          .catch(e => {
            this.$toast.error("Failed Logging In", { icon: "error_outline" });
          });
        if (this.$auth.loggedIn) {
          this.$toast.success("Successfully Logged In", { icon: "done" });
        }
      } catch (e) {
        console.log(e);
        this.$toast.error("Username or Password wrong", { icon: "error" });
      }
    },
    check() {
      console.log(this.$auth.loggedIn);
    },
    logout() {
      this.$toast.show("Logging out...", { icon: "fingerprint" });
      this.$auth.logout();
    }
  }
};
</script>
<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

/* sign in FORM */
#logreg-forms {
  width: 412px;
  margin: 10vh auto;
  background-color: #f3f3f3;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
#logreg-forms form {
  width: 100%;
  max-width: 410px;
  padding: 15px;
  margin: auto;
}
#logreg-forms .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
#logreg-forms .form-control:focus {
  z-index: 2;
}
#logreg-forms .form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
#logreg-forms .form-signin input[type="password"] {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

#logreg-forms .social-login {
  width: 390px;
  margin: 0 auto;
  margin-bottom: 14px;
}
#logreg-forms .social-btn {
  font-weight: 100;
  color: white;
  width: 190px;
  font-size: 0.9rem;
}

#logreg-forms a {
  display: block;
  padding-top: 10px;
  color: lightseagreen;
}

#logreg-form .lines {
  width: 200px;
  border: 1px solid red;
}

#logreg-forms button[type="submit"] {
  margin-top: 10px;
}

#logreg-forms .facebook-btn {
  background-color: #3c589c;
}

#logreg-forms .google-btn {
  background-color: #df4b3b;
}

#logreg-forms .form-reset,
#logreg-forms .form-signup {
  display: none;
}

#logreg-forms form-signup.social-btn {
  width: 210px;
}
#logreg-forms .form-signup input {
  margin-bottom: 2px;
}

.form-signup .social-login {
  width: 210px !important;
  margin: 0 auto;
}

/* Mobile */

@media screen and (max-width: 500px) {
  #logreg-forms {
    width: 300px;
  }

  #logreg-forms .social-login {
    width: 200px;
    margin: 0 auto;
    margin-bottom: 10px;
  }
  #logreg-forms .social-btn {
    font-size: 1.3rem;
    font-weight: 100;
    color: white;
    width: 200px;
    height: 56px;
  }
  #logreg-forms .social-btn:nth-child(1) {
    margin-bottom: 5px;
  }
  #logreg-forms .social-btn span {
    display: none;
  }
  #logreg-forms .facebook-btn:after {
    content: "Facebook";
  }

  #logreg-forms .google-btn:after {
    content: "Google+";
  }
}
</style>
