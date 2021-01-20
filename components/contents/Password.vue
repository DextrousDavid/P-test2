<template>
  <div>
    <v-row>
      <v-col cols="8" lg="8" md="8" sm="12" xs="12">
        <v-text-field
          v-model="password"
          label="Password"
          name="password"
          :append-icon="show1 ? 'mdi-eye-off' : 'mdi-eye'"
          :type="show1 ? 'password' : 'text'"
          :rules="passwordRules"
          solo
          @click:append="show1 = !show1"
        />

        <v-text-field
          v-model="confirmPassword"
          label="Confirm Password"
          name="confirmPassword"
          :append-icon="show2 ? 'mdi-eye-off' : 'mdi-eye'"
          :type="show2 ? 'password' : 'text'"
          :rules="confirmPasswordRules"
          solo
          @click:append="show2 = !show2"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show1: true,
      show2: true,
      password: '',
      confirmPassword: '',
      passwordRules: [
        (value) => !!value || 'Please type password.',
        (value) => (value && value.length >= 6) || 'minimum 6 characters',
      ],
      confirmPasswordRules: [
        (value) => !!value || 'type confirm password',
        (value) =>
          value === this.password ||
          'The password confirmation does not match.',
      ],
    }
  },
}
</script>

<style></style>
