<script>
export default {

  data() {
    return {
      YouMail: ''
    }
  }

}
</script>

<template>
  <div class="">
    <div class=" animRes  container-fluid">
      <div class="container row mt-5 mb-5">

        <div class="  container-lg col-5   mt-5 mb-5">
          <div class="container-lg mt-5 reset p-5 text-center">

            <div class="container mt-3">
              <img src="../../assets/ContentBlock/Logo.png" alt="logo">
            </div>

            <h1 class="mt-3">Check your email</h1>
            <p class="mt-3">We emailed a link to reset your password</p>

              <button class="btn btn-primary p-3 mt-3 container-fluid rounded">Open Mail</button>
              <p class="text-muted mt-3">Continue to  <RouterLink class="text-primary text-decoration-none fw-bold" to="/SignIn">Sign in</RouterLink> </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style>

</style>