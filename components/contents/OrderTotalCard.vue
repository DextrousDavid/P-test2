<template>
  <div>
    <h3 align="left" class="create-account mb-2">Order Total</h3>
    <v-divider></v-divider>
    <div>
      <v-row class="mt-2">
        <v-col cols="6" lg="6" md="6" sm="6"> Subtotal </v-col>
        <v-col cols="6" lg="6" md="6" sm="6">
          <span class="d-flex justify-end">#1,500 </span>
        </v-col>
      </v-row>
      <v-row class="mb-3 mt-2">
        <v-col cols="6" lg="6" md="6" sm="6"> Total </v-col>
        <v-col cols="6" lg="6" md="6" sm="6">
          <div align="right">
            <span class="d-flex justify-end"> #1,500 </span>
          </div>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row class="mt-10 mb-3">
        <v-col cols="6" lg="6" md="6" sm="6">
          <span class="font-semibold">Total</span>
        </v-col>
        <v-col cols="6" lg="6" md="6" sm="6">
          <span align="right" class="font-semibold d-flex justify-end"
            >#XXX
          </span>
        </v-col>
      </v-row>
      <div class="mt-4 mb-3 text-center">
        <p class="text-sm">I have a Promo code</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
