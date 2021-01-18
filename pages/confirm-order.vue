<template>
  <div>
    <!-- confirm order stepper component starts here -->
    <div id="app">
      <v-app id="inspire">
        <v-stepper v-model="e1">
          <v-stepper-header>
            <v-stepper-step color="green" :complete="e1 > 1" step="1">
              Sign up
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="e1 > 2" step="2" color="green">
              Confirm order
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="3" color="green"> Checkout </v-stepper-step>
          </v-stepper-header>

          <v-stepper-items class="mx-8">
            <v-stepper-content step="1">
              <h2 class="mb-1">Sign Up</h2>
              <v-divider class="mb-1"></v-divider>

              <v-row class="mt-3 mb-3">
                <v-col cols="12" sm="12" md="8" lg="8">
                  <Signup />
                  <v-btn color="primary" @click="e1 = 2"> Continue </v-btn>
                </v-col>
                <v-col cols="12" sm="12" md="4" lg="4">
                  <v-row><Accordion /></v-row>
                </v-col>
              </v-row>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-card
                class="mb-12"
                color="grey lighten-1"
                height="200px"
              ></v-card>

              <v-btn color="primary" @click="e1 = 3"> Continue </v-btn>
            </v-stepper-content>

            <v-stepper-content step="3">
              <v-card
                class="mb-12"
                color="grey lighten-1"
                height="200px"
              ></v-card>

              <v-btn color="primary" @click="e1 = 1"> Continue </v-btn>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-app>
    </div>
  </div>
</template>

<script>
import Signup from '.././components/contents/Signup'
import Accordion from '../components/contents/Accordion.vue'
export default {
  components: { Signup, Accordion },
  data() {
    return {
      e1: 1,
    }
  },
}
</script>

<style></style>
