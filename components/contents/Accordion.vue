<template>
  <div>
    <v-app>
      <div class="xs:mx-2 sm:mx-2 mt-12">
        <v-expansion-panels style="z-index: 0; maxwidth: 280px" accordion hover>
          <v-expansion-panel
            v-for="userGuide in userGuides"
            :key="userGuide.id"
          >
            <v-expansion-panel-header>
              {{ userGuide.heading }}
              <template v-slot:actions>
                <v-icon color="primary">$expand</v-icon>
              </template>
            </v-expansion-panel-header>

            <v-expansion-panel-content color="blue lighten-5">
              <div href="userGuide.url1">
                <div class="divtextColor mt-2">
                  {{ userGuide.content1 }}
                </div>
              </div>

              <div href="userGuide.url2">
                <div class="divtextColor mt-2">
                  {{ userGuide.content2 }}
                </div>
              </div>
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
      userGuides: [
        {
          id: 1,
          heading: 'Optima',
          content1: 'xx',
          content2: 'xx',
        },
        {
          id: 2,
          content1: 'xx',
          url1: 'xx',
          heading: 'Humanar',
          content2: 'xx',
          url2: 'xx',
          content3: 'xx',
        },
      ],
    }
  },
}
</script>

<style></style>
