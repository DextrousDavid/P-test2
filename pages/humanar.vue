<template>
  <div>
    <no-ssr>
      <PricingTabs />
      <div>
        <!--<AppHeader /> -->
        <v-app class="pt-6" style="background-color: #f5f5f5 !important">
          <!-- <section class="banner">
          <div class="content-center mr-3 ml-3">
            <h1 class="banner-h1 font-bold">Cloudenly Pricing</h1>
            <div style="max-width: 550px; margin: auto">
              <p class="banner-p font-normal">
                Flexible pricing options, from personal projects to enterprise
                applications, and everything in between
              </p>
            </div>
          </div>
        </section> -->
          <!-- <PricingTabs /> -->

          <div class="mx-12">
            <!-- <div class="mt-16">
            <h3 class="mb-4" style="color: #000">Choose to select Users</h3>
            <div>
              <div class="d-flex">
                <v-col cols="3" sm="2" md="1">
                  <v-text-field
                    id="input-20"
                    v-model="users"
                    min="1"
                    type="number"
                    required="required"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="3" sm="2" md="1">
                  <v-btn
                    class="text-capitalize -ml-8"
                    color="primary"
                    style="
                      cursor: not-allowed;
                      pointer-events: none;
                      padding: 28px 15px;
                    "
                    >Users</v-btn
                  >
                </v-col>
                <v-col cols="5" sm="5" md="5">
                  <del style="color: #495057">{{
                    costStrikeThrough.toLocaleString()
                  }}</del
                  ><span style="color: #000; margin-left: 10px">{{
                    cost.toLocaleString()
                  }}</span>
                  <span class="block" style="font-size: 12px"
                    ><sup>(1)</sup> A 25% discount on the initial number of
                    Users purchased</span
                  >
                </v-col>
              </div>
            </div>
          </div> -->

            <!-- Choose your apps starts here -->
            <div>
              <div>
                <v-row>
                  <!-- <v-col class="lg:mt-20" cols="12" sm="12" md="8" lg="8"> -->
                  <v-col
                    class="lg:mt-1 lg:mb-5"
                    cols="12"
                    sm="12"
                    md="8"
                    lg="8"
                  >
                    <div class="mt-2">
                      <!-- <h3 class="mt-4 mb-2">Choose your apps</h3> -->
                    </div>
                    <v-row>
                      <v-col cols="12" sm="6" md="6" lg="6">
                        <div>
                          <v-card
                            max-width="90%"
                            height="200"
                            flat
                            color="light"
                          >
                            <!-- @click="append('640')" -->
                            <v-list-item three-line>
                              <v-list-item-avatar tile size="50">
                                <img
                                  src="~assets/humanarApps/organization-and-people.svg"
                                  alt="organization-and-people icon"
                                />
                              </v-list-item-avatar>

                              <v-list-item-content
                                style="margin-top: -10px"
                                class="text-capitalize black--text"
                              >
                                Organization and People
                                <!-- <v-list-item-subtitle
                                style="margin-top: -30px; font-size: 13px"
                                class="black--text"
                                >₦{{ crm.toLocaleString() }} /
                                Month</v-list-item-subtitle
                              > -->
                              </v-list-item-content>

                              <v-list-item-content>
                                <no-ssr>
                                  <!-- make sure to check out the docs subsequently || JayeshLab / vue-numeric-input -->
                                  <vue-numeric-input
                                    v-model="crmValue"
                                    :min="1"
                                    :max="30"
                                    :step="1"
                                  ></vue-numeric-input>
                                </no-ssr>
                                <div style="margin-left: 25px; font-size: 13px">
                                  No. of Users
                                </div>
                              </v-list-item-content>
                            </v-list-item>
                            <div class="ml-5 mt-4">
                              <span class="font-semibold">NGN 4,999</span>/ User
                              /Monthly
                              <span class="ml-5 border border-solid"
                                >Monthly</span
                              >
                            </div>
                            <div class="ml-5">
                              <span class="font-semibold"> NGN 3,999</span>/
                              User /Monthly
                              <span class="ml-5 border border-solid"
                                >Annually</span
                              >
                            </div>
                          </v-card>
                        </div>
                      </v-col>

                      <v-col cols="12" sm="6" md="6" lg="6">
                        <div>
                          <v-card
                            max-width="90%"
                            height="200"
                            flat
                            color="light"
                          >
                            <!-- @click="append('640')" -->
                            <v-list-item three-line>
                              <v-list-item-avatar tile size="50">
                                <img
                                  src="~assets/humanarApps/payroll.svg"
                                  alt="payroll icon"
                                />
                              </v-list-item-avatar>

                              <v-list-item-content
                                style="margin-top: -10px"
                                class="text-capitalize black--text"
                              >
                                Payroll (PAYE and Pension)
                                <!-- <v-list-item-subtitle
                                style="margin-top: -30px; font-size: 13px"
                                class="black--text"
                                >₦{{ crm.toLocaleString() }} /
                                Month</v-list-item-subtitle
                              > -->
                              </v-list-item-content>

                              <v-list-item-content>
                                <no-ssr>
                                  <!-- make sure to check out the docs subsequently || JayeshLab / vue-numeric-input -->
                                  <vue-numeric-input
                                    v-model="purchaseValue"
                                    :min="1"
                                    :max="30"
                                    :step="1"
                                  ></vue-numeric-input>
                                </no-ssr>
                                <div style="margin-left: 25px; font-size: 13px">
                                  No. of Users
                                </div>
                              </v-list-item-content>
                            </v-list-item>
                            <div class="ml-5 mt-4">
                              <span class="font-semibold">NGN 4,999</span>/ User
                              /Monthly
                              <span class="ml-5 border border-solid"
                                >Monthly</span
                              >
                            </div>
                            <div class="ml-5">
                              <span class="font-semibold"> NGN 3,999</span>/
                              User /Monthly
                              <span class="ml-5 border border-solid"
                                >Annually</span
                              >
                            </div>
                          </v-card>
                        </div>
                      </v-col>

                      <v-col cols="12" sm="6" md="6" lg="6">
                        <div>
                          <v-card
                            max-width="90%"
                            height="200"
                            flat
                            color="light"
                          >
                            <!-- @click="append('640')" -->
                            <v-list-item three-line>
                              <v-list-item-avatar tile size="50">
                                <img
                                  src="~assets/humanarApps/benefits.svg"
                                  alt="benefits icon"
                                />
                              </v-list-item-avatar>

                              <v-list-item-content
                                style="margin-top: -10px"
                                class="text-capitalize black--text"
                              >
                                Benefits
                                <!-- <v-list-item-subtitle
                                style="margin-top: -30px; font-size: 13px"
                                class="black--text"
                                >₦{{ crm.toLocaleString() }} /
                                Month</v-list-item-subtitle
                              > -->
                              </v-list-item-content>

                              <v-list-item-content>
                                <no-ssr>
                                  <!-- make sure to check out the docs subsequently || JayeshLab / vue-numeric-input -->
                                  <vue-numeric-input
                                    v-model="salesValue"
                                    :min="1"
                                    :max="30"
                                    :step="1"
                                  ></vue-numeric-input>
                                </no-ssr>
                                <div style="margin-left: 25px; font-size: 13px">
                                  No. of Users
                                </div>
                              </v-list-item-content>
                            </v-list-item>
                            <div class="ml-5 mt-4">
                              <span class="font-semibold">NGN 4,999</span>/ User
                              /Monthly
                              <span class="ml-5 border border-solid"
                                >Monthly</span
                              >
                            </div>
                            <div class="ml-5">
                              <span class="font-semibold"> NGN 3,999</span>/
                              User /Monthly
                              <span class="ml-5 border border-solid"
                                >Annually</span
                              >
                            </div>
                          </v-card>
                        </div>
                      </v-col>
                      <v-col cols="12" sm="6" md="6" lg="6">
                        <div>
                          <v-card
                            max-width="90%"
                            height="200"
                            flat
                            color="light"
                          >
                            <!-- @click="append('640')" -->
                            <v-list-item three-line>
                              <v-list-item-avatar tile size="50">
                                <img
                                  src="~assets/humanarApps/performance-management.svg"
                                  alt="performance-management icon"
                                />
                              </v-list-item-avatar>

                              <v-list-item-content
                                style="margin-top: -10px"
                                class="text-capitalize black--text"
                              >
                                Performance Management
                                <!-- <v-list-item-subtitle
                                style="margin-top: -30px; font-size: 13px"
                                class="black--text"
                                >₦{{ crm.toLocaleString() }} /
                                Month</v-list-item-subtitle
                              > -->
                              </v-list-item-content>

                              <v-list-item-content>
                                <no-ssr>
                                  <!-- make sure to check out the docs subsequently || JayeshLab / vue-numeric-input -->
                                  <vue-numeric-input
                                    v-model="inventoryValue"
                                    :min="1"
                                    :max="30"
                                    :step="1"
                                  ></vue-numeric-input>
                                </no-ssr>
                                <div style="margin-left: 25px; font-size: 13px">
                                  No. of Users
                                </div>
                              </v-list-item-content>
                            </v-list-item>
                            <div class="ml-5 mt-4">
                              <span class="font-semibold">NGN 4,999</span>/ User
                              /Monthly
                              <span class="ml-5 border border-solid"
                                >Monthly</span
                              >
                            </div>
                            <div class="ml-5">
                              <span class="font-semibold"> NGN 3,999</span>/
                              User /Monthly
                              <span class="ml-5 border border-solid"
                                >Annually</span
                              >
                            </div>
                          </v-card>
                        </div>
                      </v-col>

                      <v-col cols="12" sm="6" md="6" lg="6">
                        <div>
                          <v-card
                            max-width="90%"
                            height="200"
                            flat
                            color="light"
                          >
                            <!-- @click="append('640')" -->
                            <v-list-item three-line>
                              <v-list-item-avatar tile size="50">
                                <img
                                  src="~assets/humanarApps/payments.svg"
                                  alt="payments icon"
                                />
                              </v-list-item-avatar>

                              <v-list-item-content
                                style="margin-top: -10px"
                                class="text-capitalize black--text"
                              >
                                Payments
                                <!-- <v-list-item-subtitle
                                style="margin-top: -30px; font-size: 13px"
                                class="black--text"
                                >₦{{ crm.toLocaleString() }} /
                                Month</v-list-item-subtitle
                              > -->
                              </v-list-item-content>

                              <v-list-item-content>
                                <no-ssr>
                                  <!-- make sure to check out the docs subsequently || JayeshLab / vue-numeric-input -->
                                  <vue-numeric-input
                                    v-model="analyticsValue"
                                    :min="1"
                                    :max="30"
                                    :step="1"
                                  ></vue-numeric-input>
                                </no-ssr>
                                <div style="margin-left: 25px; font-size: 13px">
                                  No. of Users
                                </div>
                              </v-list-item-content>
                            </v-list-item>
                            <div class="ml-5 mt-4">
                              <span class="font-semibold">NGN 4,999</span>/ User
                              /Monthly
                              <span class="ml-5 border border-solid"
                                >Monthly</span
                              >
                            </div>
                            <div class="ml-5">
                              <span class="font-semibold"> NGN 3,999</span>/
                              User /Monthly
                              <span class="ml-5 border border-solid"
                                >Annually</span
                              >
                            </div>
                          </v-card>
                        </div>
                      </v-col>

                      <v-col cols="12" sm="6" md="6" lg="6">
                        <div>
                          <v-card
                            max-width="90%"
                            height="200"
                            flat
                            color="light"
                          >
                            <!-- @click="append('640')" -->
                            <v-list-item three-line>
                              <v-list-item-avatar tile size="50">
                                <img
                                  src="~assets/humanarApps/analytics.svg"
                                  alt="analytics icon"
                                />
                              </v-list-item-avatar>

                              <v-list-item-content
                                style="margin-top: -10px"
                                class="text-capitalize black--text"
                              >
                                Analytics
                                <!-- <v-list-item-subtitle
                                style="margin-top: -30px; font-size: 13px"
                                class="black--text"
                                >₦{{ crm.toLocaleString() }} /
                                Month</v-list-item-subtitle
                              > -->
                              </v-list-item-content>

                              <v-list-item-content>
                                <no-ssr>
                                  <!-- make sure to check out the docs subsequently || JayeshLab / vue-numeric-input -->
                                  <vue-numeric-input
                                    v-model="paymentsValue"
                                    :min="1"
                                    :max="30"
                                    :step="1"
                                  ></vue-numeric-input>
                                </no-ssr>
                                <div style="margin-left: 25px; font-size: 13px">
                                  No. of Users
                                </div>
                              </v-list-item-content>
                            </v-list-item>
                            <div class="ml-5 mt-4">
                              <span class="font-semibold">NGN 4,999</span>/ User
                              /Monthly
                              <span class="ml-5 border border-solid"
                                >Monthly</span
                              >
                            </div>
                            <div class="ml-5">
                              <span class="font-semibold"> NGN 3,999</span>/
                              User /Monthly
                              <span class="ml-5 border border-solid"
                                >Annually</span
                              >
                            </div>
                          </v-card>
                        </div>
                      </v-col>

                      <v-col cols="12" sm="6" md="6" lg="6">
                        <div>
                          <v-card
                            max-width="90%"
                            height="200"
                            flat
                            color="light"
                          >
                            <!-- @click="append('640')" -->
                            <v-list-item three-line>
                              <v-list-item-avatar tile size="50">
                                <img
                                  src="~assets/humanarApps/employee.svg"
                                  alt="employee self service icon"
                                />
                              </v-list-item-avatar>

                              <v-list-item-content
                                style="margin-top: -10px"
                                class="text-capitalize black--text"
                              >
                                Employee Self Service
                                <!-- <v-list-item-subtitle
                                style="margin-top: -30px; font-size: 13px"
                                class="black--text"
                                >₦{{ crm.toLocaleString() }} /
                                Month</v-list-item-subtitle
                              > -->
                              </v-list-item-content>

                              <v-list-item-content>
                                <no-ssr>
                                  <!-- make sure to check out the docs subsequently || JayeshLab / vue-numeric-input -->
                                  <vue-numeric-input
                                    v-model="paymentsValue"
                                    :min="1"
                                    :max="30"
                                    :step="1"
                                  ></vue-numeric-input>
                                </no-ssr>
                                <div style="margin-left: 25px; font-size: 13px">
                                  No. of Users
                                </div>
                              </v-list-item-content>
                            </v-list-item>
                            <div class="ml-5 mt-4">
                              <span class="font-semibold">NGN 4,999</span>/ User
                              /Monthly
                              <span class="ml-5 border border-solid"
                                >Monthly</span
                              >
                            </div>
                            <div class="ml-5">
                              <span class="font-semibold"> NGN 3,999</span>/
                              User /Monthly
                              <span class="ml-5 border border-solid"
                                >Annually</span
                              >
                            </div>
                          </v-card>
                        </div>
                      </v-col>
                    </v-row>
                  </v-col>

                  <!-- choose your apps ends here -->
                  <!-- Second Col -->

                  <!-- tab table begins here -->
                  <v-col cols="12" sm="12" md="4" lg="4">
                    <v-app
                      style="background-color: #f5f5f5 !important"
                      class="tab-table"
                    >
                      <v-card elevation="3">
                        <template>
                          <v-tabs centered light>
                            <label>
                              <v-tab
                                style="color: #1976d2"
                                @click="userPerAnnual"
                              >
                                <input
                                  type="radio"
                                  class="form-radio text-indigo-600"
                                  name="radio"
                                  value="1"
                                  checked
                                /><span style="margin-left: 4px">Annually</span>
                              </v-tab>
                            </label>
                            <label>
                              <v-tab
                                style="color: #1976d2"
                                @click="userPerMonth"
                              >
                                <input
                                  style="color: #1976d2"
                                  type="radio"
                                  class="form-radio radio-bg"
                                  name="radio"
                                  value="1"
                                /><span style="margin-left: 4px"
                                  >Monthly</span
                                ></v-tab
                              >
                            </label>
                            <v-tab-item>
                              <v-card flat>
                                <v-card-text
                                  class="text-padding"
                                  style="color: #000; font-weight: 500"
                                >
                                  {{ users.toLocaleString() }}
                                  <span style="color: #000">{{
                                    userToUsersText()
                                  }}</span
                                  ><span class="float-right" style="color: #000"
                                    >₦{{
                                      annualTimesUser.toLocaleString()
                                    }}</span
                                  >
                                </v-card-text>

                                <v-card-text
                                  class="text-padding grey lighten-5"
                                  style="color: #0b1eff96"
                                >
                                  User Discount<sup style="color: #0b1eff96">
                                    (1)</sup
                                  ><span
                                    style="color: #ff0000"
                                    class="float-right"
                                    >(₦{{
                                      annualUserDiscountOnInitialPurchase.toLocaleString()
                                    }})</span
                                  >
                                </v-card-text>

                                <v-card-text
                                  class="text-padding grey lighten-3"
                                  style="color: #000"
                                >
                                  {{ products.length.toLocaleString() }}
                                  {{ appToAppsText()
                                  }}<span
                                    class="float-right"
                                    style="color: #000"
                                    >₦{{
                                      appsValueAnnually.toLocaleString()
                                    }}</span
                                  >
                                </v-card-text>

                                <v-card-text
                                  v-if="users < 20"
                                  class="text-padding grey lighten-5"
                                  style="color: #0b1eff96"
                                >
                                  App Discount<span
                                    class="float-right"
                                    style="color: #ff0000"
                                    >(₦{{
                                      appDiscountAnnualCalculator().toLocaleString()
                                    }})</span
                                  >
                                </v-card-text>

                                <v-card-text
                                  class="text-padding green lighten-4"
                                  style="color: #ff0000"
                                >
                                  Special Discount<span
                                    class="float-right"
                                    style="color: #ff0000"
                                    >(₦{{
                                      specialDiscountAnnualCalculator.toLocaleString()
                                    }})</span
                                  >
                                </v-card-text>

                                <v-card-text
                                  class="text-padding grey lighten-3"
                                  style="color: #000"
                                >
                                  Total / Month<sup> (2)</sup
                                  ><span class="float-right" style="color: #000"
                                    ><span
                                      class="float-right"
                                      style="color: #000"
                                      >₦{{
                                        totalPerMonthAnnualForAnnual.toLocaleString()
                                      }}</span
                                    ></span
                                  >
                                </v-card-text>

                                <div class="grey lighten-5">
                                  <v-card-text class="text-padding text-center"
                                    ><span
                                      class="font-weight-thin"
                                      style="
                                        color: #000;

                                        font-size: 12px;
                                        margin-right: 10px;
                                      "
                                    >
                                      <sup>(2)</sup> Billed Annually:
                                      <span
                                        ><span
                                          style="color: #000; margin-left: 12px"
                                          >₦{{
                                            billedAnnualTimesUser.toLocaleString()
                                          }}</span
                                        ></span
                                      >
                                    </span>
                                  </v-card-text>

                                  <v-card-text
                                    class="grey lighten-3 text-padding"
                                    style="color: #000"
                                  >
                                    VAT<span
                                      class="float-right"
                                      style="color: #000"
                                      ><span
                                        class="float-right"
                                        style="color: #000"
                                        >₦{{ annualVat.toLocaleString() }}</span
                                      ></span
                                    >
                                  </v-card-text>
                                  <v-card-text
                                    class="grey lighten-5 text-padding"
                                    style="color: #000"
                                  >
                                    Payment Due<span
                                      class="float-right"
                                      style="color: #000; font-weight: 600"
                                      >₦{{
                                        paymentDueAnnual.toLocaleString()
                                      }}</span
                                    >
                                  </v-card-text>
                                  <v-card-text
                                    class="grey lighten-3 text-padding text-center"
                                    style="
                                      color: #000;
                                      font-size: 12px;
                                      margin-right: 10px;
                                    "
                                  >
                                    <span>
                                      <sup style="color: #000">(3) </sup>Total
                                      Discount (NGN): </span
                                    ><span
                                      style="color: #000; margin-left: 10px"
                                      >₦{{
                                        totalAnnualDiscount.toLocaleString()
                                      }}</span
                                    >
                                  </v-card-text>
                                  <div class="my-2 d-flex justify-center">
                                    <v-btn
                                      class="px-8"
                                      color="warning"
                                      dark
                                      style="text-transform: none"
                                    >
                                      TRY NOW

                                      <br />
                                      15 days Free trial
                                    </v-btn>
                                  </div>
                                  <div class="my-2 d-flex justify-center">
                                    <v-btn
                                      to="/confirm-order"
                                      class="px-15"
                                      color="success"
                                      dark
                                    >
                                      BUY NOW
                                    </v-btn>
                                  </div>
                                  <!-- <div class="border border-gray-500"> -->
                                  <p class="mx-1 text-sm">
                                    <sup>(3) </sup>New Customers get a discount
                                    on initial purchases
                                  </p>
                                  <!-- </div> -->
                                </div>
                              </v-card>
                            </v-tab-item>
                            <v-tab-item>
                              <v-card flat>
                                <v-card-text
                                  class="text-padding grey lighten-3"
                                  style="color: #000"
                                >
                                  {{ users.toLocaleString() }}
                                  <span style="color: #000">{{
                                    userToUsersText()
                                  }}</span
                                  ><span class="float-right" style="color: #000"
                                    >₦{{
                                      monthlyTimesUser.toLocaleString()
                                    }}</span
                                  >
                                </v-card-text>

                                <v-card-text
                                  class="text-padding grey lighten-5"
                                  style="color: #0b1eff96"
                                >
                                  User Discount<sup style="color: #0b1eff96">
                                    (1)</sup
                                  ><span
                                    style="color: #ff0000"
                                    class="float-right"
                                    >(₦{{
                                      monthlyUserDiscountOnInitialPurchase.toLocaleString()
                                    }})</span
                                  >
                                </v-card-text>

                                <v-card-text
                                  class="text-padding grey lighten-3"
                                  style="color: #000; font-weight: 500"
                                >
                                  {{ products.length.toLocaleString() }}
                                  {{ appToAppsText()
                                  }}<span
                                    class="float-right"
                                    style="color: #000"
                                    >₦{{
                                      appsValueMonthly.toLocaleString()
                                    }}</span
                                  >
                                </v-card-text>

                                <v-card-text
                                  v-if="users < 20"
                                  class="text-padding grey lighten-5"
                                  style="color: #0b1eff96"
                                >
                                  App Discount<span
                                    class="float-right"
                                    style="color: #ff0000"
                                    >(₦{{
                                      appDiscountMonthlyCalculator().toLocaleString()
                                    }})</span
                                  >
                                </v-card-text>

                                <v-card-text
                                  class="text-padding green lighten-4"
                                  style="color: #ff0000"
                                >
                                  Special Discount<span
                                    class="float-right"
                                    style="color: #ff0000"
                                    >(₦{{
                                      specialDiscountMonthlyCalculator.toLocaleString()
                                    }})</span
                                  >
                                </v-card-text>

                                <v-card-text
                                  class="text-padding grey lighten-3"
                                  style="color: #000"
                                >
                                  Total / Month<span class="float-right"
                                    ><span
                                      class="float-right"
                                      style="color: #000"
                                      >₦{{
                                        totalPerMonthAnnualForMonthly.toLocaleString()
                                      }}</span
                                    ></span
                                  >
                                </v-card-text>

                                <div class="grey lighten-5">
                                  <!-- <v-card-text
                                  ><p
                                    class="font-weight-thin"
                                    style="color: #000"
                                  >
                                    Billed Monthly<span
                                      class="float-right"
                                      style="color: #000"
                                      >₦{{ billedMonthlyTimesUser.toLocaleString() }}</span
                                    >
                                  </p>
                                </v-card-text> -->
                                  <v-card-text
                                    class="grey lighten-5 text-padding"
                                    style="color: #000"
                                  >
                                    VAT<span
                                      class="float-right"
                                      style="color: #000"
                                      ><span
                                        class="float-right"
                                        style="color: #000"
                                        >₦{{
                                          monthlyVat.toLocaleString()
                                        }}</span
                                      ></span
                                    >
                                  </v-card-text>
                                  <v-card-text
                                    class="grey lighten-3 text-padding"
                                    style="color: #000"
                                  >
                                    Payment Due<span
                                      class="float-right"
                                      style="color: #000; font-weight: 600"
                                      >₦{{
                                        paymentDueMonthly.toLocaleString()
                                      }}</span
                                    >
                                  </v-card-text>
                                  <v-card-text
                                    class="grey lighten-3 text-padding text-center"
                                    style="
                                      color: #000;
                                      font-size: 12px;
                                      margin-right: 10px;
                                    "
                                  >
                                    <span>
                                      <sup style="color: #000">(2) </sup>Total
                                      Discount (NGN): </span
                                    ><span
                                      style="color: #000; margin-left: 10px"
                                      >₦{{
                                        totalMonthlyDiscount.toLocaleString()
                                      }}</span
                                    >
                                  </v-card-text>
                                  <div class="my-2 d-flex justify-center">
                                    <v-btn
                                      class="px-8"
                                      color="warning"
                                      dark
                                      style="text-transform: none"
                                    >
                                      TRY NOW

                                      <br />
                                      15 days Free trial
                                    </v-btn>
                                  </div>
                                  <div class="my-2 d-flex justify-center">
                                    <v-btn class="px-15" color="success" dark>
                                      BUY NOW
                                    </v-btn>
                                  </div>
                                  <!-- <div class="border border-gray-500"> -->
                                  <p class="mx-1 text-sm">
                                    <sup>(2) </sup>New Customers get a discount
                                    on initial purchases
                                  </p>
                                </div>
                              </v-card>
                            </v-tab-item>
                          </v-tabs>
                        </template>
                      </v-card>
                    </v-app>
                    <!-- tab table ends here -->
                  </v-col>
                </v-row>
              </div>
            </div>
          </div>
        </v-app>
      </div>
    </no-ssr>
  </div>
</template>

<script>
// import AppHeader from './../components/header/AppHeader'
import VueNumericInput from 'vue-numeric-input'
import PricingTabs from './../components/contents/PricingTabs'

export default {
  components: {
    // AppHeader,
    PricingTabs,
    VueNumericInput,
  },
  data() {
    return {
      crmValue: 0,
      purchaseValue: 0,
      salesValue: 0,
      inventoryValue: 0,
      analyticsValue: 0,
      paymentsValue: 0,
      prices: {
        crm: 3499,
        purchase: 2699,
        sales: 2699,
        inventory: 5499,
      },
      products: [],
      show: false,
      users: 1,
      apps: 0,
      appsValueMonthly: 0,
      appsValueAnnually: 0,
      appDiscount: 0,
      valueOfVat: 0,
      // cost here being synanimous with choose your apps
      costStrikeThrough: '₦2,799',
      cost: '₦2,099.25 / User / Month',
      crm: 2799,
      purchase: 2159,
      sales: 2159,
      inventory: 4399,
      isActive: true,
      // appValue uses eightyTimesUser method value
    }
  },
  computed: {
    // ANNUAL SUBSCRIPTION CALCULATION STARTS HERE *******
    // multiplies 2799 with the total number of users
    annualTimesUser() {
      return this.users * 2799
      // .toLocaleString()
      // new Intl.NumberFormat().format(this.users * 2799)
    },

    // multiplies 2799 and total number number of users, then divides by 2
    annualUserDiscountOnInitialPurchase() {
      return this.users * 2799 * 0.25
    },

    // Total / Month multiplies annualTimesUser with annualUserDiscountOnInitialPurchase + appsvalueAnnually - appDiscount annual calculator functions!
    totalPerMonthAnnualForAnnual() {
      return (
        this.annualTimesUser -
        this.annualUserDiscountOnInitialPurchase +
        this.appsValueAnnually -
        this.appDiscountAnnualCalculator()
        // - this.specialDiscountAnnualCalculator
      )
    },
    // multiplies totalPerMonthAnual  by 12 (annual)
    billedAnnualTimesUser() {
      return this.totalPerMonthAnnualForAnnual * 12
    },
    // Billed annually * 7.5%
    annualVat() {
      return this.billedAnnualTimesUser * 0.075
    },
    paymentDueAnnual() {
      return this.billedAnnualTimesUser + this.annualVat
    },
    totalAnnualDiscount() {
      return (
        (this.appDiscountAnnualCalculator() +
          this.annualUserDiscountOnInitialPurchase) *
        // + this.specialDiscountAnnualCalculator
        12
      )
    },
    specialDiscountAnnualCalculator() {
      return (
        (this.annualTimesUser +
          this.appsValueAnnually -
          (this.annualUserDiscountOnInitialPurchase +
            this.appDiscountAnnualCalculator())) *
        0
      )
    },
    // MONTHLY SUBSCRIPTION CALCULATION STARTS HERE *******
    // multiplies 3499 with the total number of users

    monthlyTimesUser() {
      return this.users * 3499
    },
    // multiplies 3499 and total number number of users, then divides by 2
    monthlyUserDiscountOnInitialPurchase() {
      return this.users * 3499 * 0.25
    },

    // Total / Month multiplies annualTimesUser with annualUserDiscountOnInitialPurchase functions!
    totalPerMonthAnnualForMonthly() {
      return (
        this.monthlyTimesUser -
        this.monthlyUserDiscountOnInitialPurchase +
        this.appsValueMonthly -
        this.appDiscountMonthlyCalculator()
      )
    },
    // multiplies totalPerMonthAnual  by 12 (annual)
    billedMonthlyTimesUser() {
      return this.totalPerMonthAnnualForMonthly
    },
    monthlyVat() {
      return this.billedMonthlyTimesUser * 0.075
    },
    paymentDueMonthly() {
      return this.billedMonthlyTimesUser + this.monthlyVat
    },
    // totalPerMonthAnnualForAnnual
    totalMonthlyDiscount() {
      return (
        this.appDiscountMonthlyCalculator() +
        this.monthlyUserDiscountOnInitialPurchase
        // + this.specialDiscountAnnualCalculator
      )
    },
    specialDiscountMonthlyCalculator() {
      return (
        (this.monthlyTimesUser +
          this.appsValueMonthly -
          (this.monthlyUserDiscountOnInitialPurchase +
            this.appDiscountMonthlyCalculator())) *
        0
      )
    },
  },
  // Calculates the value of vat being 7.5% of billedMOnthly

  methods: {
    // adds a comma to thousand; giving NaN error
    // thousands seperator ends here
    // calculates the value of apps discount 1 - number of users * 1% * app fees per annual
    appDiscountAnnualCalculator() {
      if (this.users >= 20) {
        return 0
      } else {
        return (this.appDiscount =
          (1 - this.users * 0.05) * this.appsValueAnnually)
      }
    },
    // calculates the value of apps discount 1 - number of users * 1% * app fees per month
    appDiscountMonthlyCalculator() {
      if (this.users >= 20) {
        return 0
      } else {
        return (this.appDiscount =
          (1 - this.users * 0.05) * this.appsValueMonthly)
      }
    },
    checkSelected(value) {
      return this.products.includes(value)
    },
    addToAppsValue(value) {
      let products = this.products

      if (products.includes(value)) {
        products = products.filter((el) => el !== value)
        this.removePrice(value)
      } else {
        products.push(value)
        this.calculateApps(value)
      }
      this.products = products
    },
    calculateApps(value) {
      let appsValueMonthly = this.appsValueMonthly
      const appsValueAnnually = this.appsValueAnnually
      let valuePrice = 0

      const percentDisount = 0.2
      let discount = 0

      switch (value) {
        case 'crm':
          appsValueMonthly = appsValueMonthly + this.prices.crm
          this.appsValueMonthly = appsValueMonthly

          valuePrice = this.prices.crm
          discount = valuePrice * percentDisount
          valuePrice = valuePrice - discount
          this.appsValueAnnually = appsValueAnnually + valuePrice
          break
        case 'purchase':
          appsValueMonthly = appsValueMonthly + this.prices.purchase
          this.appsValueMonthly = appsValueMonthly

          valuePrice = this.prices.purchase
          discount = valuePrice * percentDisount
          valuePrice = valuePrice - discount
          this.appsValueAnnually = appsValueAnnually + valuePrice
          break
        case 'sales':
          appsValueMonthly = appsValueMonthly + this.prices.sales
          this.appsValueMonthly = appsValueMonthly

          valuePrice = this.prices.sales
          discount = valuePrice * percentDisount
          valuePrice = valuePrice - discount
          this.appsValueAnnually = appsValueAnnually + valuePrice
          break
        case 'inventory':
          appsValueMonthly = appsValueMonthly + this.prices.inventory
          this.appsValueMonthly = appsValueMonthly

          valuePrice = this.prices.inventory
          discount = valuePrice * percentDisount
          valuePrice = valuePrice - discount
          this.appsValueAnnually = appsValueAnnually + valuePrice
          break

        default:
          break
      }
    },
    removePrice(value) {
      let appsValueMonthly = this.appsValueMonthly
      let appsValueAnnually = this.appsValueAnnually
      let annualPrice = 0

      const percentDisount = 0.2
      let discount = 0

      switch (value) {
        case 'crm':
          appsValueMonthly = appsValueMonthly - this.prices.crm
          this.appsValueMonthly = appsValueMonthly

          annualPrice = this.prices.crm

          discount = annualPrice * percentDisount

          annualPrice = annualPrice - discount
          appsValueAnnually = appsValueAnnually - annualPrice
          this.appsValueAnnually = appsValueAnnually
          break
        case 'purchase':
          appsValueMonthly = appsValueMonthly - this.prices.purchase
          this.appsValueMonthly = appsValueMonthly

          annualPrice = this.prices.purchase

          discount = annualPrice * percentDisount

          annualPrice = annualPrice - discount
          appsValueAnnually = appsValueAnnually - annualPrice
          this.appsValueAnnually = appsValueAnnually
          break
        case 'sales':
          appsValueMonthly = appsValueMonthly - this.prices.sales
          this.appsValueMonthly = appsValueMonthly

          annualPrice = this.prices.sales

          discount = annualPrice * percentDisount

          annualPrice = annualPrice - discount
          appsValueAnnually = appsValueAnnually - annualPrice
          this.appsValueAnnually = appsValueAnnually
          break
        case 'inventory':
          appsValueMonthly = appsValueMonthly - this.prices.inventory
          this.appsValueMonthly = appsValueMonthly

          annualPrice = this.prices.inventory

          discount = annualPrice * percentDisount

          annualPrice = annualPrice - discount
          appsValueAnnually = appsValueAnnually - annualPrice
          this.appsValueAnnually = appsValueAnnually
          break
        default:
          break
      }
    },
    // changes user to users text
    userToUsersText() {
      if (this.users > 1) {
        return 'Users'
      } else {
        return 'User'
      }
    },
    appToAppsText() {
      if (this.products.length > 1) {
        return 'Apps'
      } else {
        return 'App'
      }
    },

    // 2799 user / month
    userPerAnnual() {
      this.costStrikeThrough = '₦2,799'
      this.cost = '₦2,099.25 / User / Month'
      this.crm = 2799
      this.purchase = 2159
      this.sales = 2159
      this.inventory = 4399
    },
    userPerMonth() {
      this.costStrikeThrough = '₦3,499'
      this.cost = '₦2,624.25 / User / Month'
      this.crm = 3499
      this.purchase = 2699
      this.sales = 2699
      this.inventory = 5499
    },
  },
  // methods: {
  //   eightyTimesUser() {
  //     this.appValue = this.users * 80
  //   },
  // },

  // data: () => ({
  //   currentItem: 'tab-Web',
  //   items: ['Web', 'Shopping', 'Videos', 'Images'],
  //   more: ['News', 'Maps', 'Books', 'Flights', 'Apps'],
  // }),

  head() {
    return {
      title: 'Cloudenly - Pricing',
      meta: [
        {
          hid: 'Cloudenly - Pricing',
          name: 'Cloudenly - Pricing',
          content:
            'Cloudenly - Flexible pricing options, from personal projects to enterprise applications, and everything in between',
        },
      ],
    }
  },
}
</script>
<style scoped>
.text-padding {
  padding-top: 8px;
  padding-bottom: 8px;
}

.v-btn:before {
  display: none;
}

.card-border {
  border: 2px solid;
  border-image-source: linear-gradient(
    45deg,
    rgb(84 219 241),
    rgb(250 159 66 / 85%)
  );
  border-image-slice: 1;
}
/* Choose the number of users css */
.v-btn:not(.v-btn--round).v-size--default {
  height: 42px;
  min-width: 64px;
  padding: 4 16px;
}

.tooltip-notification {
  font-size: 12px;
  color: #fff;
}

.container-alignment {
  margin-left: 2px;
  margin-right: 2px;
}
* {
  font-family: GalanoGrotesque-Medium;
  /* color: #828282; */
}

h1 {
  line-height: 26px;
  font-size: 22px;
  font-weight: 500;
  margin-top: -50px;
}

.banner-h1 {
  margin-top: -50px;
  margin-bottom: 10px;
  padding: 10px 0;
  font-size: 36px;
  vertical-align: top;
  color: #fff;
}

.banner-p {
  font-size: 17px;
  text-align: center;
  margin: auto;
  color: #fff;
}

.banner {
  max-width: 100%;
  /* padding: 11rem 0 9rem 0; */
  margin-top: 5rem;
  text-align: center;
  /* background-image: url('rectangle-banner.png'); */
  background-repeat: no-repeat;
  background-size: 100% 100%;
  color: white;
}

@media (max-width: 728px) {
  .banner-p {
    font-size: 16px;
  }

  .banner-h1 {
    font-size: 28px;
  }

  .banner {
    background-image: linear-gradient(
      268.51deg,
      #856fee 34.21%,
      #b894f6 73.36%
    );
  }
}
@media (min-width: 960px) {
  .tab-table {
    margin-top: 1rem;
  }
}

@media (min-width: 1024px) {
  .tab-table {
    margin-top: 1rem;
  }
}

@media (min-width: 1280px) {
  .tab-table {
    margin-top: 1rem;
  }
}
.v-tabs:not(.v-tabs--vertical) .v-tab {
  white-space: normal;
  margin-top: -6px;
  padding: 20px 15px;
}

@media (min-width: 1264px) {
  .col-lg-4 {
    flex: 0 0 33.3333333333%;
    max-width: 31.333333%;
  }
}
/* @media (min-width: 1264px) {
  .tab-table {
    margin-top: -1rem;
  }
} */

/* .v-application--wrap {
  min-height: 1px !important;
} */

/* @media (max-width: 480px) {
}
@media (max-width: 768px) {
}

@media (max-width: 1024px) {
}
@media (min-width: 1200px) {
} */
</style>
