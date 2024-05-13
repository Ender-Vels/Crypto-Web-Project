<script>
import dataCard from '../../data/dataHomeCard.js'
import dataUserComment from '../../data/dataUserComment.js'
import CTAFooter from "../Footer/CTAFooter.vue";
import Footer from "../Footer/Footer.vue";
export default {
  components: {CTAFooter,Footer},
  data(){
    return{
      dataCard:dataCard,
      dataComment:dataUserComment,
    }
  }
}
</script>

<template>
  <div class="container-fluid  p-5 mt-5">
  <div class="container-fluid row ">
    <div class="container-lg p-3 col-4">
      <div>
      <span class="text-primary text-uppercase fw-bolder">Sign in to your secure wallet!</span>
      </div>
      <div class="mt-4">
        <h1 class=" title fw-bold">The next-gen crypto wallet & trading platform</h1>
      </div>
      <div class="mt-3">
        <p>All of your cryptocurrency in one place — from Bitcoin and Ethereum to Litecoin and Ripple.</p>
      </div>
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Your email address" aria-label="Recipient's username" aria-describedby="button-addon2">
        <button class="btn btn-primary" type="button" id="button-addon2">Get Started</button>
      </div>
    </div>

    <div class="col d-flex justify-content-end mx-5">
      <img src="../../assets/ContentBlock/illustration.png" alt="content">
    </div>
  </div>
    <div class="container-fluid">
      <div class="container d-flex justify-content-between text-center mt-5 row">
        <div class="container col ">
              <h1>1 millions</h1>
              <p class="text-muted mt-3">Volume traded</p>
        </div>
      <div class="container col">
        <div class="">
           <h1 class="">50+</h1>
        </div>
        <p class="text-muted mt-3">Countries supported</p>
      </div>
      <div class="container col">
        <h1>1 platform</h1>
        <p class="text-muted mt-3">For crypto wallet & trading</p>
      </div>
    </div>
    </div>
    <div class="container-fluid d-flex justify-content-center mt-5 pt-5 flex-column">
        <div class="container text-center mt-5">
          <span class="text-primary mt-3">PARTNERS</span>
          <h1 class="mt-3">We’re backed by the best</h1>
          <p class="text-muted mt-5">We’re backed by the best</p>
        </div>

      <div class="container text-center row mt-5">
        <img class="col" src="../../assets/ContentBlock/back/1.png" alt="logo">
        <img class="col" src="../../assets/ContentBlock/back/2.png" alt="logo">
        <img class="col" src="../../assets/ContentBlock/back/3.png" alt="logo">
        <img class="col" src="../../assets/ContentBlock/back/4.png" alt="logo">
      </div>
    </div>
    <div class="backgroundBlock mt-5">
      <div class="container-fluid row  mt-5">
          <div class="container text-center mt-5 col-6">
              <span class="text-primary">Features</span>
            <h1>Get a bird’s eye view of your crypto investments</h1>
              <p>Keep up on all the latest trends in the crypto industry and stay ahead of the market.</p>
          </div>
        <div class="col-12">
        <div class="present text-center">
          <img class=''  src="../../assets/ContentBlock/features/present.png" alt="present">
        </div>
        </div>

      </div>
    </div>
    <div class=" backgroundBlock container-fluid mt-5 row">
      <div class="container text-center mt-5 col-5">
        <span class="text-primary text-uppercase">Features</span>
        <h1 class="mt-5 ">Many type of Blockchains</h1>
        <p class="text-muted mt-5">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
      </div>
      
      <div class="text-center col-12 row d-flex justify-content-center mt-5">
        <img class="anime col-1 ms-4" src="../../assets/ContentBlock/cryptologo/Dogecoin%20(DOGE).png" alt="logo">
        <img class="anime col-1 ms-4"  src="../../assets/ContentBlock/cryptologo/OGN.png" alt="logo">
        <img class="anime col-1 ms-4" src="../../assets/ContentBlock/cryptologo/Bitcoin%20(BTC).png" alt="logo">
        <img class="anime col-1 ms-4" src="../../assets/ContentBlock/cryptologo/ACT.png" alt="logo">
        <img class="anime col-1 ms-4" src="../../assets/ContentBlock/cryptologo/ETH.png" alt="logo">
        <img class="anime col-1 ms-4" src="../../assets/ContentBlock/cryptologo/Gemini%20Dollar%20(GUSD).png" alt="logo">
        <img class="anime col-1 ms-4" src="../../assets/ContentBlock/cryptologo/XRP.png" alt="logo">
      </div>

    </div>
  </div>
  <div class="container-fluid row mt-5" >
        <div class="container text-center col mt-5">
          <span class="text-primary mt-5">FEATURES</span>
          <h1 class="mt-5">Supercharge your trades with advanced features</h1>
        </div>

        <div class="row mt-5 d-flex justify-content-center"  >
        <div class="container-fluid col" v-for="data in dataCard" :key="data.id">
          <div class="  card text-center p-3">
            <img :src="data.img" alt="">
            <div class="card-body">
             <h3>{{data.title}}</h3>
              <p>{{data.description}}</p>
            </div>
          </div>
        </div>
        </div>


  </div>
  <div class="container-fluid row">
    <div class="container col-12">
      <div class="container mt-5">
          <span class="mt-5 text-primary">Features</span>
        <h1 class="mt-3">Seamless Trading</h1>
        <div class=" rewrite row mt-3">
          <p class="col">Amet minim mollit non deserunt ullamco
            est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim velit mollit.
            Exercitation veniam consequat sunt nostrud amet.
            Amet minim mollit non deserunt ullamco est sit aliqua
            dolor.</p>
          <p class="col">
            Amet minim mollit non deserunt ullamco est sit aliqua
            dolor do amet sint. Velit officia consequat duis enim velit mollit.
            Exercitation veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>

    </div>
    <div class="container col row">
      <div class=" present col">
        <img src="../../assets/ContentBlock/features/1.png" alt="ico">
      </div>
      <div class="present col">
        <img src="../../assets/ContentBlock/features/2.png" alt="ico">
      </div>
    </div>
  </div>
  <div class="container-fluid mt-5">
    <div class="container text-center mt-5">
        <span class="text-primary mt-5">TESTIMONIALS</span>
      <h1 class="mt-5">Trusted by more than 100K+ people</h1>
      <p class="text-muted mt-3">Hear what they say about us and why you should choose Coinbank</p>
    </div>
    <div class="container-fluid row mt-5">
        <div class="container mt-5 col" v-for="data in dataComment" :key="data.id">
          <div class="card">

              <div class="d-flex justify-content-center mt-5">
              <div v-for="star in data.star" :key="star">
                <img src="../../assets/ContentBlock/comments/uesrComent/star.png" alt="star">
              </div>
              </div>

            <div class="card-body text-center mt-5">
                <div>
                  <h3>{{data.comment}}</h3>
                </div>

              <div class="d-flex justify-content-center align-middle mt-5">
                  <div>
                    <img class="" :src="data.avatar" alt="avatar">
                  </div>
                <div>
                  <span class="fw-bold">{{data.name}}</span><br>
                  <span class="text-muted">{{data.role}}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
    </div>
  </div>
  <div class=" present container-fluid text-center mt-5">
      <img class="mt-5" src="../../assets/ContentBlock/treadeMore.png" alt="logo">
  </div>
  <CTAFooter/>
  <Footer/>
</template>

<style>
@import "../../style/Content/ContentBlock.css";
</style>