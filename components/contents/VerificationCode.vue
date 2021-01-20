<template>
  <v-form
    ref="form"
    lazy-validation
    autocomplete
    style="background-color: #fff"
  >
    <h2 align="left" class="create-account mb-2">
      Enter your verification Code
    </h2>
    <!-- Sign up component starts here. with multisteps component-->
    <v-row>
      <v-col cols="12" md="12" sm="12" xs="12">
        <CodeInput :loading="false" class="input" type="number" />
        <p style="font-size: 12px" class="mt-2">
          Didn't get the email?
          <span class="terms">Click here</span>
        </p>
      </v-col>
    </v-row>
  </v-form>

  <!-- Sign up component ends here -->
</template>

<script>
export default {
  methods: {},
}
</script>

<style scoped>
.terms {
  color: #16b271;
}
</style>
