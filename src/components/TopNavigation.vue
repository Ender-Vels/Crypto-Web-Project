<script>

</script>

<template>
<div class="container">
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid row-cols-3">
      <RouterLink to="/" class="navbar-brand"><img src="../assets/TopNav/logo.png" alt="logo"></RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"  ><span class="navbar-toggler-icon"></span></button>

      <div class="collapse navbar-collapse" id="navbarNav">

          <ul class="navbar-nav col">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="featuresDrop" role="button" data-bs-toggle="dropdown" aria-expanded="false" to="/">Features</a>
                  <div class="dropdown-menu " aria-labelledby="featuresDrop">
                      <div class="">
                         <span class="text-muted text-uppercase ms-4 mt-3 pt-3">Features</span>
                        <ul class="list-unstyled p-1">
                          <li class="d-flex mt-3">
                            <img class="mx-2" src="../assets/TopNav/1.png" alt="ico">
                            <RouterLink class="ms-4 text-decoration-none text-dark fw-bold" to="/">Funding</RouterLink>
                          </li>
                          <li class="d-flex mt-3">
                            <img class="mx-2" src="../assets/TopNav/2.png" alt="ico">
                            <RouterLink class="ms-4 text-decoration-none text-dark fw-bold" to="/">Staking</RouterLink>
                          </li>
                          <li class="d-flex mt-3">
                            <img class="mx-2" src="../assets/TopNav/3.png" alt="ico">
                            <RouterLink class="ms-4 text-decoration-none text-dark fw-bold" to="/">Liquidity</RouterLink>
                          </li>
                          <li class="d-flex mt-3  ">
                            <img class="mx-2" src="../assets/TopNav/4.png" alt="ico">
                            <RouterLink class="ms-3 text-decoration-none text-dark fw-bold" to="/">Margin Trading</RouterLink>
                          </li>
                        </ul>

                      </div>
                  </div>
              </li>
            <li class="nav-item ms-3">
              <RouterLink class="nav-link" to="/">Prices</RouterLink>
            </li>
            <li class="nav-item dropdown ms-3">
              <a class="nav-link dropdown-toggle "  id="dropCompany" role="button" data-bs-toggle="dropdown" aria-expanded="false" href="#">Company</a>

              <div class="dropdown-menu " aria-labelledby="dropCompany">
                <div class="">
                  <span class="text-muted text-uppercase ms-4 mt-3 pt-3">Features</span>
                  <ul class="list-unstyled p-1">
                    <li class="d-flex mt-3">
                      <img class="mx-2" src="../assets/TopNav/5.png" alt="ico">
                      <RouterLink class="ms-4 text-decoration-none text-dark fw-bold" to="/">About</RouterLink>
                    </li>
                    <li class="d-flex mt-3">
                      <img class="mx-2" src="../assets/TopNav/6.png" alt="ico">
                      <RouterLink class="ms-4 text-decoration-none text-dark fw-bold" to="/">Blog</RouterLink>
                    </li>
                    <li class="d-flex mt-3">
                      <img class="mx-2" src="../assets/TopNav/7.png" alt="ico">
                      <RouterLink class="ms-4 text-decoration-none text-dark fw-bold" to="/">FAQs</RouterLink>
                    </li>
                    <li class="d-flex mt-3  ">
                      <img class="mx-2" src="../assets/TopNav/8.png" alt="ico">
                      <RouterLink class="ms-4 text-decoration-none text-dark fw-bold" to="/">Support</RouterLink>
                    </li>
                  </ul>

                </div>
              </div>

            </li>
            <li class="nav-item ms-3">
              <RouterLink class="nav-link" to="/">Developers</RouterLink>
            </li>
          </ul>
        <div class="">
          <RouterLink to="/SignIn"  class="btn btn-outline-dark p-2 ps-4 px-4"> Sign In</RouterLink>
          <RouterLink to="/SignUp" class="btn btn-outline-primary fw-bold ms-5 p-2 ps-3 px-3"  > Get Started</RouterLink>

        </div>
      </div>



    </div>
  </nav>
</div>
</template>

<style>
@import "../style/TopNav/TopNav.css";

</style>