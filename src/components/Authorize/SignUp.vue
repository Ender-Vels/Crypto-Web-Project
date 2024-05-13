<script>

</script>

<template>
<div class="container-fluid d-flex row mt-5">
  <div class="container col ms-4 mt-5">
    <div >
      <img src="../../assets/TopNav/logo.png" alt="logo">
    </div>
    <div>
      <h2> Create an account</h2>
      <p class="text-muted">Let's begin your 30-day risk-free trial.</p>
    </div>
    <div>
      <form>
        <div class="mt-3">
          <h3>Name</h3>
          <input type="text" class="form-control" placeholder="Name">
        </div>
        <div class="mt-3">
          <h3>Email</h3>
          <input type="email" class="form-control"  placeholder="Email">
        </div>
        <div class="mt-3">
          <h3>Password</h3>
          <input type="password" class="form-control"  placeholder="Password">
        </div>
        <div class="mt-5">
          <button class="btn btn-primary container-fluid p-2" type="submit">Sign In</button>
          <button class=" google fs-5 container-fluid border border-color-primary rounded p-2 mt-4" ><img src="../../assets/ContentBlock/social/google.png" alt="google">Sign in with Google</button>
          <button class=" google fs-5 container-fluid border border-color-primary rounded p-2 mt-4" ><img src="../../assets/ContentBlock/social/facebook.png" alt="google">Sign in with facebook</button>
        </div>
        <div class="text-center mt-5">
          <p class="text-muted">Have an account already? <RouterLink class="text-primary text-decoration-none fw-bold" to="/SignIn">Sign in</RouterLink> </p>
        </div>
      </form>
    </div>
  </div>

  <div class=" imgRight anim present col-7 mt-5 mb-2 ms-4">
    <img src="../../assets/ContentBlock/Right1.png" alt="">
  </div>
</div>
</template>

<style>
@import "../../style/Authorize/Authorize.css";
</style>