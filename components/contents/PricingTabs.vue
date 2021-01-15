<template>
  <div>
    <no-ssr>
      <v-tabs
        fixed-tabs
        height="70"
        centered
        right
        light
        center-active
        background-color="grey lighten-3"
      >
        <!-- <v-tab>Guided <v-icon right>$expand</v-icon></v-tab> -->
        <!-- <v-tabs-slider color="teal lighten-3"></v-tabs-slider> -->

        <!-- <v-tab><img src="~assets/tabIcons/lite.png" /> Lite</v-tab> -->
        <v-tab to="/"
          ><img src="~assets/tabIcons/optima.svg" alt="optima icons" /><span
            style="color: #000"
            >Optima</span
          ></v-tab
        >
        <v-tab to="/humanar"
          ><img src="~assets/tabIcons/humanar.svg" alt="humanar icon" /><span
            style="color: #000"
            >HumanaR</span
          ></v-tab
        >
        <v-tab
          ><img src="~assets/tabIcons/dome.svg" alt="dome icon" /><span
            style="color: #000"
            >Dome</span
          ></v-tab
        >
        <v-tab><span style="color: #000">Product</span></v-tab>
        <!-- <v-tab><img src="~assets/tabIcons/ally.png" />Ally</v-tab>
        <v-tab><img src="~assets/tabIcons/quantum.png" />Quantum</v-tab> -->
        <v-tab style="background-color: #fff; color: #000">
          <p style="font-size: 11px; font-weight: 900">
            products selected<br /><span class="total-no"> </span></p
        ></v-tab>
        <v-tab class="flex" style="background-color: #16b271; color: #fff">
          <p class="buy-now-button">
            <span class="no-of" style="color: #fff">Payment Due</span><br />50,
            000 Billed Monthly
          </p>

          <v-btn x-medium elevation="2" style="color: #000">Checkout</v-btn>
        </v-tab>
      </v-tabs>
    </no-ssr>
  </div>
</template>

<script>
export default {
  name: 'PricingTabs',
}
</script>

<style scoped>
.total-no {
  font-weight: 900;
}
.exact-active-class {
  color: red;
}
* {
  font-family: GalanoGrotesque-Medium;
  color: #000;
}
.v-tab {
  align-items: center;
  display: flex;
  flex: 0 1 auto;
  font-size: 0.875rem;
  font-weight: 500;
  justify-content: center;
  letter-spacing: 0.0892857143em;
  line-height: normal;
  min-width: 90px;
  max-width: 360px;
  outline: none;
  padding: 0 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: capitalize;
  transition: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
img {
  margin-right: 5px;
}
.buy-now-button {
  font-size: 11px;
  color: #fff;
  margin-right: 8px;
  margin-bottom: 5px;
}
/* To fix tab width use this */
.v-tabs--fixed-tabs > .v-tabs-bar .v-tab {
  flex: 1 1 auto;
  width: unset;
}
.no-of {
  margin-left: -28px;
  font-size: 10px;
}
@media (max-width: 446px) {
  .buy-now-button {
    font-size: 8px;
  }
  .no-of {
    font-size: 7px;
    margin-left: -24px;
  }
}
</style>
