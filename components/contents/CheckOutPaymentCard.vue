<template>
  <div>
    <v-form
      ref="form"
      lazy-validation
      class="pa-0"
      autocomplete
      style="background-color: #fff"
    >
      <v-row>
        <v-col cols="12" md="12" sm="12" xs="12">
          <v-text-field
            ref="Number"
            persistent-hint
            label="Card Number"
            outlined
            required
          >
            <template v-slot:append>
              <img src="~assets/master-card.png" />
            </template>
          </v-text-field>
          <v-row>
            <v-col cols="12" sm="12" md="6" lg="6">
              <v-text-field
                ref="Expiry Date"
                persistent-hint
                label="Expiry Date"
                autocomplete
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="6" lg="6">
              <v-text-field
                ref="CVV"
                outlined
                persistent-hint
                label="Cvv"
                autocomplete
              >
              </v-text-field>
            </v-col>
          </v-row>

          <v-text-field
            ref="Card Verification Code"
            persistent-hint
            label="Card Verification Code"
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
                <span class="terms">Sign in </span>
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.terms {
  color: #16b271;
}
</style>
