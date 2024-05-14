<script>
export default {
  data(){
    return{
      ResetMail:''
    }
  },

  methods:{
    CheckMail(){
      this.$router.push('/CheckMail')
      this.$emit('getMail',this.ResetMail)
  },
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

        <h1 class="mt-3">Lookup your profile</h1>
        <p class="mt-3">Enter the username,
          email address, or phone number linked to your account
          so we can give you a link to reset your password.</p>

        <form class=" mt-5">
          <input type="email"  class="form-control mb-3" id="exampleFormControlInput1" placeholder="Write your Email" v-model="ResetMail">
          <button class="btn btn-primary p-3 mt-3 container-fluid rounded " @click="CheckMail" >Reset Password</button>
        </form>
        </div>
      </div>

    </div>
  </div>
  </div>
</template>

<style>
@import '../../style/Authorize/Authorize.css';
</style>