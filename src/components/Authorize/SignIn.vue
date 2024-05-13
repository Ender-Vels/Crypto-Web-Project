<script >

</script>

<template>
<div class="container-fluid row d-flex mt-5">
  <div class="  container col mt-5 ms-5">
    <div class="mt-5">
        <img src="../../assets/TopNav/logo.png" alt="logo">
    </div>
    <div>
      <h1>Sign in to Coinbank</h1>
      <p class="text-muted">We’re glad you are back</p>
    </div>
    <div>
      <form action="">

        <h3>Email</h3>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
        <h3>Password</h3>
        <input type="password" class="form-control" id="exampleFormControlInput1" >
        <div class="mt-3">
          <RouterLink class="text-primary text-decoration-none" to="/">Forgot password?</RouterLink>
        </div>
        <div class="mt-5">
            <button class="btn btn-primary container-fluid p-2" type="submit">Sign In</button>
              <button class=" google fs-5 container-fluid border border-color-primary rounded p-2 mt-4" ><img src="../../assets/ContentBlock/social/google.png" alt="google">Sign in with Google</button>
          <button class=" google fs-5 container-fluid border border-color-primary rounded p-2 mt-4" ><img src="../../assets/ContentBlock/social/facebook.png" alt="google">Sign in with facebook</button>
        </div>
        <div class="text-center mt-3">
          <p class="text-muted">Don’t have an account already? <RouterLink class="text-primary text-decoration-none fw-bold" to="/SignUp" >Sign up now</RouterLink></p>
        </div>
      </form>

    </div>
  </div>

  <div class="present anim container col mt-5 ms-4 text-end">
      <img  class="mt-4" src="../../assets/ContentBlock/Right.png" alt="screen">
  </div>
</div>
</template>

<style>
@import '../../style/Authorize/Authorize.css';
</style>