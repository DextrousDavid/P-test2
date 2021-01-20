<template>
  <div>
    <!-- confirm order stepper component starts here-->
    <div id="app">
      <v-app id="inspire">
        <v-stepper v-model="e1" style="background-color: #fafafa">
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
            <!-- SIGN UP -->
            <v-stepper-content step="1">
              <h2 class="mb-1 ml-2">Sign Up</h2>
              <v-divider class="mb-1"></v-divider>

              <v-row class="mt-3 mb-3">
                <v-col cols="12" sm="12" md="7" lg="7">
                  <div v-if="!show1" class="mr-8">
                    <v-card
                      elevation="2"
                      class="mx-auto pa-6 pt-9 pb-12 push-center ml-2"
                      min-width="42vw"
                      style=""
                    >
                      <Signup />
                      <v-btn color="primary" @click="show1 = !show1">
                        Continue
                      </v-btn>
                    </v-card>
                  </div>

                  <div v-if="show1" class="mr-8">
                    <v-card
                      elevation="2"
                      class="mx-auto pa-6 pt-9 pb-12 push-center ml-2"
                      min-width="42vw"
                      style=""
                    >
                      <VerificationCode />
                      <!-- -->
                      <v-btn
                        v-if="show2"
                        color="primary"
                        @click="show2 = !show2"
                      >
                        Verify
                      </v-btn>
                      <div v-if="!show2" class="mt-2">
                        <Password />
                        <div>
                          <v-btn align="right" color="primary" @click="e1 = 2">
                            Continue
                          </v-btn>
                        </div>
                      </div>
                    </v-card>
                  </div>
                </v-col>
                <v-col cols="12" sm="12" md="5" lg="5">
                  <v-row><Accordion /></v-row>
                </v-col>
              </v-row>
            </v-stepper-content>
            <!-- SIGN UP ENDS HERE-->

            <v-stepper-content step="2">
              <h2 class="mb-1 ml-2">Confirm Order</h2>
              <v-divider class="mb-1"></v-divider>

              <v-row class="mt-3 mb-3">
                <v-col cols="12" sm="12" md="7" lg="7">
                  <v-row><ConfirmOrderAccordion /></v-row>
                </v-col>
                <v-col cols="12" sm="12" md="5" lg="5">
                  <v-card
                    elevation="2"
                    class="mx-auto pa-6 pt-9 pb-12 push-center ml-2"
                    min-width="42vw"
                    style=""
                  >
                    XXX
                    <v-btn color="primary" to="/"> XXX </v-btn>
                  </v-card>
                </v-col>
              </v-row>
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
import ConfirmOrderAccordion from '../components/contents/ConfirmOrderAccordion.vue'
import Password from '../components/contents/Password.vue'
import VerificationCode from '../components/contents/VerificationCode.vue'
export default {
  components: {
    Signup,
    Accordion,
    VerificationCode,
    Password,
    ConfirmOrderAccordion,
  },
  data() {
    return {
      e1: 1,
      show1: false,
      show2: true,
    }
  },
}
</script>

<style></style>
