import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export enum AuthFormState {
  Login,
  Register
}

export const useCounterStore = defineStore('auth', () => {
  const formState = ref(AuthFormState.Login)
  const loading = ref(false)
  const loggedIn = ref(false)

  function showRegisterForm() {
    formState.value = AuthFormState.Register
  }

  function showLoginForm() {
    formState.value = AuthFormState.Login
  }

  function logIn() {
    loading.value = true

    setTimeout(() => {
      loggedIn.value = true
      loading.value = false
    }, 2000)
  }

  function logOut() {
    loading.value = true

    setTimeout(() => {
      loggedIn.value = false
      loading.value = false
    }, 500)
  }

  return { formState, showRegisterForm, showLoginForm, logIn, logOut }
})
