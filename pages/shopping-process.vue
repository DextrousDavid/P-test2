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

            <!-- CONFIRM ORDER STARTS HERE-->
            <v-stepper-content step="2">
              <h2 class="mb-1 ml-2">Confirm Order</h2>
              <v-divider class="mb-1"></v-divider>

              <v-row class="mt-3 mb-3">
                <v-col cols="12" sm="12" md="7" lg="7">
                  <v-row><ConfirmOrderAccordion /></v-row>
                </v-col>
                <v-col cols="12" sm="12" md="5" lg="5">
                  <v-row>
                    <v-card
                      elevation="2"
                      class="mx-auto pa-4 pt-4 -mt-1 pb-8 push-center ml-2 mr-2"
                      min-width="30vw"
                      style=""
                    >
                      <OrderTotalCard />
                      <div class="text-center">
                        <v-btn color="primary" @click="e1 = 3">
                          Proceed Checkout
                        </v-btn>
                      </div>
                    </v-card>
                    <v-card
                      elevation="2"
                      class="mx-auto pa-4 pt-4 mt-4 pb-8 push-center ml-2 mr-2"
                      max-width="30vw"
                      style=""
                    >
                      <SalesCondition />
                    </v-card>
                  </v-row>
                </v-col>
              </v-row>
            </v-stepper-content>
            <!-- CONFIRM ORDER ENDS HERE-->

            <!-- CHECK OUT STARTS HERE-->
            <v-stepper-content step="3">
              <div>
                <h2 class="mb-1 ml-2">Check Out</h2>
                <v-divider class="mb-1"></v-divider>
                <v-row justify="center">
                  <v-card
                    elevation="2"
                    class="mx-auto pa-4 pt-4 mt-4 pb-8 ml-2 mr-2"
                    width="61vw"
                    style=""
                  >
                    <CheckoutCard />
                  </v-card>
                </v-row>

                <v-row justify="center" class="mt-8 mb-3">
                  <v-card
                    width="61vw"
                    elevation="2"
                    class="mx-auto pa-8 pt-8 pb-8 ml-2 mr-2"
                    style=""
                  >
                    <CheckOutPaymentCard />
                    <div class="text-center">
                      <v-btn color="success py-4" block @click="e1 = 3">
                        Yes, I confirm my payment
                      </v-btn>
                      <div class="mt-3">
                        <img src="~assets/paystack.png" style="height: 30px" />
                      </div>
                    </div>
                  </v-card>
                </v-row>
              </div>
            </v-stepper-content>
            <!-- CONFIRM ORDER ENDS HERE-->
          </v-stepper-items>
        </v-stepper>
      </v-app>
    </div>
  </div>
</template>

<script>
import Signup from '.././components/contents/Signup'
import Accordion from '../components/contents/Accordion.vue'
import CheckoutCard from '../components/contents/CheckoutCard.vue'
import ConfirmOrderAccordion from '../components/contents/ConfirmOrderAccordion.vue'
import OrderTotalCard from '../components/contents/OrderTotalCard'
import Password from '../components/contents/Password.vue'
import SalesCondition from '../components/contents/SalesCondition.vue'
import VerificationCode from '../components/contents/VerificationCode.vue'
export default {
  components: {
    Signup,
    Accordion,
    VerificationCode,
    Password,
    ConfirmOrderAccordion,
    OrderTotalCard,
    SalesCondition,
    CheckoutCard,
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
