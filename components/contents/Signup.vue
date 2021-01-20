<template>
  <v-form
    ref="form"
    lazy-validation
    class="pa-0"
    autocomplete
    style="background-color: #fff"
  >
    <h2 align="left" class="create-account mb-2">Create an Account</h2>
    <!-- Sign up component starts here. with multisteps component-->
    <v-row>
      <v-col cols="12" md="12" sm="12" xs="12">
        <v-row>
          <v-col cols="12" sm="12" md="6" lg="6">
            <v-text-field
              ref="fname"
              persistent-hint
              label="First Name"
              autocomplete
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="12" md="6" lg="6">
            <v-text-field
              ref="lname"
              outlined
              persistent-hint
              label="Last Name"
              autocomplete
              :rules="nameRules"
            >
            </v-text-field>
          </v-col>
        </v-row>

        <!-- Phone input goes here -->
        <no-ssr>
          <vue-tel-input
            style="padding: 10px; margin-bottom: 29px; background-color: #fff"
            required
            placeholder="Mobile Number"
          ></vue-tel-input>
        </no-ssr>

        <!-- Phone input ends here -->

        <v-text-field
          ref="email"
          outlined
          label="Work Email Address"
          autocomplete
          :rules="emailRules"
          required
          persistent-hint
        ></v-text-field>

        <v-text-field
          ref="referrerCode"
          persistent-hint
          label="Reference Code"
          autocomplete
          :rules="nameRules"
          outlined
          required
        >
        </v-text-field>
      </v-col>
      <v-col>
        <v-row>
          <v-col class="-mt-6" cols="6" xs="12" sm="12" md="12" lg="12">
            <p style="font-size: 12px">
              By clicking on Continue, you accept our
              <span class="terms">Terms of service</span>
              and
              <span class="terms">Privacy Policy</span>
            </p>
            <p style="font-size: 12px">
              Already have an account?
              <span class="terms">Sign in</span>
            </p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-form>

  <!-- Sign up component ends here -->
</template>

<script>
export default {
  data() {
    return {
      nameRules: [(v) => !!v || ''],
      domainRules: [(v) => !!v || ''],
      emailRules: [
        (v) => !!v || '',
        (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || '',
      ],
    }
  },
}
</script>

<style scoped>
.terms {
  color: #16b271;
}
</style>
