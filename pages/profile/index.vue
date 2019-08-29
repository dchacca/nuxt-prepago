<template>
  <div class="container mt-3">
    <div class="row m-y-2">
      <div class="col-lg-8 push-lg-4">
        <b-tabs content-class="mt-3">
          <b-tab title="Perfil" active>
            <h4 class="m-y-2">User Profile</h4>
            <div class="row">
              <div class="col-md-6">
                <h6>About</h6>
                <p>
                  Web Designer, UI/UX Engineer
                </p>
                <h6>Hobbies</h6>
                <p>
                  Indie music, skiing and hiking. I love the great outdoors.
                </p>
              </div>
              <div class="col-md-6">
                <h6>Recent Tags</h6>
                <b-badge pill variant="info">html5</b-badge>
                <b-badge pill variant="info">react</b-badge>
                <b-badge pill variant="info">codeply</b-badge>
                <b-badge pill variant="info">angularjs</b-badge>
                <b-badge pill variant="info">css3</b-badge>
                <b-badge pill variant="info">jquery</b-badge>
                <b-badge pill variant="info">bootstrap</b-badge>
                <b-badge pill variant="info">responsive-design</b-badge>
                <hr>
                <span class="tag tag-primary"><i class="fa fa-user"></i> 900 Followers</span>
                <span class="tag tag-success"><i class="fa fa-cog"></i> 43 Forks</span>
                <span class="tag tag-danger"><i class="fa fa-eye"></i> 245 Views</span>
              </div>
              <div class="col-md-12">
                <h4 class="m-t-2"><span class="fa fa-clock-o ion-clock pull-xs-right"></span> Recent Activity</h4>
                <table class="table table-hover table-striped">
                  <tbody>
                    <tr>
                      <td>
                        <strong>Abby</strong> joined ACME Project Team in <strong>`Collaboration`</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Gary</strong> deleted My Board1 in <strong>`Discussions`</strong>
                      </td>

                    </tr>
                    <tr>
                      <td>
                        <strong>Kensington</strong> deleted MyBoard3 in <strong>`Discussions`</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>John</strong> deleted My Board1 in <strong>`Discussions`</strong>
                      </td>

                    </tr>
                    <tr>
                      <td>
                        <strong>Skell</strong> deleted his post Look at Why this is.. in <strong>`Discussions`</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </b-tab>

          <b-tab title="Mensajes">
            <div class="alert alert-info alert-dismissable">
              <a class="panel-close close" data-dismiss="alert">×</a> This is an <strong>.alert</strong>. Use this to show important messages to the user.
            </div>
          </b-tab>
          <b-tab title="Edit">
              <h4 class="m-y-2">Edit Profile</h4>
              <form role="form" @submit="update()">
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label form-control-label">First name</label>
                  <div class="col-lg-9">
                    <input class="form-control" type="text" value="Jane">
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label form-control-label">Last name</label>
                  <div class="col-lg-9">
                    <input class="form-control" type="text" value="Bishop">
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label form-control-label">Email</label>
                  <div class="col-lg-9">
                    <input class="form-control" type="email" value="email@gmail.com">
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label form-control-label">Company</label>
                  <div class="col-lg-9">
                    <input class="form-control" type="text" value="">
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label form-control-label">Website</label>
                  <div class="col-lg-9">
                    <input class="form-control" type="url" value="">
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label form-control-label">Address</label>
                  <div class="col-lg-9">
                    <input class="form-control" type="text" value="" placeholder="Street">
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label form-control-label"></label>
                  <div class="col-lg-6">
                    <input class="form-control" type="text" value="" placeholder="City">
                  </div>
                  <div class="col-lg-3">
                    <input class="form-control" type="text" value="" placeholder="State">
                  </div>
                </div>
                <!--div class="form-group row">
                  <label class="col-lg-3 col-form-label form-control-label">Time Zone</label>
                  <div class="col-lg-9">
                    <select id="user_time_zone" class="form-control" size="0">
                      <option value="Hawaii">(GMT-10:00) Hawaii</option>
                      <option value="Alaska">(GMT-09:00) Alaska</option>
                      <option value="Pacific Time (US &amp; Canada)">(GMT-08:00) Pacific Time (US &amp; Canada)</option>
                      <option value="Arizona">(GMT-07:00) Arizona</option>
                      <option value="Mountain Time (US &amp; Canada)">(GMT-07:00) Mountain Time (US &amp; Canada)</option>
                      <option value="Central Time (US &amp; Canada)" selected="selected">(GMT-06:00) Central Time (US &amp; Canada)</option>
                      <option value="Eastern Time (US &amp; Canada)">(GMT-05:00) Eastern Time (US &amp; Canada)</option>
                      <option value="Indiana (East)">(GMT-05:00) Indiana (East)</option>
                    </select>
                  </div>
                </div-->
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label form-control-label">Username</label>
                  <div class="col-lg-9">
                    <input class="form-control" type="text" >
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label form-control-label">Password</label>
                  <div class="col-lg-9">
                    <input class="form-control" type="password" >
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label form-control-label">Confirm password</label>
                  <div class="col-lg-9">
                    <input class="form-control" type="password" >
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label form-control-label"></label>
                  <div class="col-lg-9">
                    <input type="reset" class="btn btn-secondary" value="Cancel">
                    <input type="button" class="btn btn-primary" value="Save Changes">
                  </div>
                </div>
              </form>

          </b-tab>
        </b-tabs>


        <!--/row-->



      </div>
    </div>
    <div class="col-lg-4 pull-lg-8 text-xs-center">
      <img src="//placehold.it/150" class="m-x-auto img-fluid img-circle" alt="avatar">
      <h6 class="m-t-2">Upload a different photo</h6>
      <label class="custom-file">
        <input type="file" id="file" class="custom-file-input">
        <span class="custom-file-control">Choose file</span>
      </label>
    </div>
  </div>
</div>
</template>

<script>
    import {
        mapGetters
    } from 'vuex'

    export default {
        middleware: 'auth',
        layout: 'MyLayout',

        computed: {
            ...mapGetters(['loggedInUser'])
        }
    }
</script>