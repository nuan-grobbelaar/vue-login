<script>
  export default {
    data: () => ({
      valid: false,
      email: '',
      emailRules: [
        value => {
          if (value) return true

          return 'E-mail is requred.'
        },
        value => {
          if (/.+@.+\..+/.test(value)) return true

          return 'E-mail must be valid.'
        },
      ],
      password: '',
      passwordRules: [
        value => {
          if (value) return true

          return 'Name is required.'
        },
        value => {
          if (value?.length <= 10) return true

          return 'Name must be less than 10 characters.'
        },
      ],
    }),
  }
</script>

<template>
  <v-form v-model="valid" class="form">
    <v-container>
      <v-row class="form__input">
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="form__input">
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Password"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="form__input">
        <v-col 
          cols="6"
          offset="3"
          md="4">
          <v-btn class="button" :disabled="!valid">
            Button
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<style>
  .form {
    width: 100%;
  }

  .button {
    width: 100%;
  }
</style>