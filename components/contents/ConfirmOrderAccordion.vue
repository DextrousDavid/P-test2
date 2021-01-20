<template>
  <div>
    <v-app style="background-color: #fafafa">
      <!-- index -->
      <div class="mt-2">
        <v-expansion-panels
          class="ml-10"
          style="z-index: 0; maxwidth: 500px"
          accordion
          hover
        >
          <v-expansion-panel v-for="app in apps" :key="app.id">
            <v-expansion-panel-header>
              <v-row>
                <v-col cols="6" xs="6" sm="6" md="6" lg="6">
                  {{ app.heading }}
                </v-col>
                <v-col cols="6" xs="6" sm="6" md="6" lg="6">
                  {{ app.appsSelected }}
                </v-col>
              </v-row>
              <template v-slot:actions>
                <v-icon color="primary">$expand</v-icon>
              </template>
            </v-expansion-panel-header>

            <v-expansion-panel-content color="grey lighten-4">
              <v-row>
                <v-col cols="6" xs="6" sm="6" md="6" lg="6">
                  <div href="app.url1">
                    <div class="divtextColor mt-2">
                      {{ app.content1 }}
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
export default {
  data() {
    return {
      apps: [
        {
          id: 1,
          heading: 'Optima',
          content1: 'XXX',
          content2: 'XXX',
          appsSelected: 'XXX',
        },
        {
          id: 2,
          heading: 'Humanar',
          content1: 'XXX',
          content2: 'XXX',
          content3: 'XXX',
          appsSelected: 'XXX',
        },
      ],
    }
  },
}
</script>

<style></style>
