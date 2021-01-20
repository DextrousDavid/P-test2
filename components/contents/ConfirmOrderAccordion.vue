<template>
  <div>
    <v-app style="background-color: #fafafa">
      <!-- index -->
      <div class="xs:mx-2 mt-2">
        <v-expansion-panels
          class="ml-4"
          style="z-index: 0; min-width: 650px"
          accordion
          hover
        >
          <v-expansion-panel v-for="app in apps" :key="app.id">
            <v-expansion-panel-header>
              <v-row>
                <v-col cols="6" xs="6" sm="6" md="6" lg="6">
                  <span class="font-semibold">{{ app.heading }}</span>
                </v-col>
                <v-col cols="6" xs="6" sm="6" md="6" lg="6" class="-ml-8">
                  <span class="font-semibold">{{ app.appSelected }}</span>
                </v-col>
              </v-row>
              <template v-slot:actions>
                <v-icon color="primary">$expand</v-icon>
              </template>
            </v-expansion-panel-header>

            <v-expansion-panel-content color="grey lighten-4">
              <v-row>
                <v-col cols="6" xs="6" sm="6" md="6" lg="6">
                  <div href="app.name">
                    <div class="divtextColor mt-2">{{ app.appName }}</div>
                    <div class="divtextColor mt-2">{{ app.appName2 }}</div>
                  </div>
                </v-col>
                <v-col cols="6" xs="6" sm="6" md="6" lg="6">
                  <div>
                    <div class="divtextColor mt-2 appSelectedMarginLeft">
                      <no-ssr>
                        <!-- make sure to check out the docs subsequently || JayeshLab / vue-numeric-input -->
                        <vue-numeric-input
                          style="width: 102px"
                          :min="1"
                          :max="30"
                          :step="1"
                        ></vue-numeric-input>
                      </no-ssr>
                    </div>
                    <div class="divtextColor mt-2 appSelectedMarginLeft">
                      <no-ssr>
                        <!-- make sure to check out the docs subsequently || JayeshLab / vue-numeric-input -->
                        <vue-numeric-input
                          style="width: 102px"
                          :min="1"
                          :max="30"
                          :step="1"
                        ></vue-numeric-input>
                      </no-ssr>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </v-app>
  </div>
</template>

<script>
import VueNumericInput from 'vue-numeric-input'
export default {
  components: {
    VueNumericInput,
  },
  data() {
    return {
      paymentsValue: 0,
      paymentsValue2: 0,
      apps: [
        {
          id: 1,
          heading: 'Optima',
          appSelected: '2 Products',
          appName: 'CRM',
          appName2: 'Purchase',
        },
        {
          id: 2,
          heading: 'Humanar',
          appSelected: '2 Products',
          appName: 'Payments',
          appName2: 'Benefits',
        },
      ],
    }
  },
}
</script>

<style scoped>
.appSelectedMarginLeft {
  margin-left: -3rem;
}
</style>
