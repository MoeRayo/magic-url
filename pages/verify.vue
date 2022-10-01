<template>
  <div class="bg-lightest-blue vh-100 pa3 tc">
    <h2 class="ttc">Magic URL with Appwrite</h2>
    <div class="br3 bg-navy ba near-white b--black-10 shadow-3 w-100 w-60-m w-30-l mw6 center mt5 ph4 pv3 h5">
      <p class="f3">Verify Magic URL</p>
      <p>To complete this session, please verify your magic URL by clicking the verification button.</p>
        <button class="link br3 pv2 ph2 mt3 dib black fw6 bg-white ba b--navy pointer inline-flex items-center hover-bg-lightest-blue" @click="verifyMagicURL">
          <span class="f4 ml2 pr2">Verify magic URL</span>
        </button>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {account} from '~/init'
  export default Vue.extend({
    methods: {
      verifyMagicURL: async function ()  {
        const urlParams = new URLSearchParams(window.location.search);
        const userId : any = urlParams.get('userId');
        const secret : any = urlParams.get('secret');
        try {
          await account.updateMagicURLSession(userId, secret);
          alert("Magic URL verified")
          window.location.href = '/dashboard'

        } catch (err){
          console.log(err)
        }

      }
    }
    // methods: {
    //   send: async function () {
    //     try {
    //       await account.createMagicURLSession(ID.unique(), 'moronfolu.motunrayo1@gmail.com', 'http://localhost:3000/view')
    //       alert('it works')
    //     } catch (error) {
    //       console.log(error)
    //     }
    //   }
    // }
  })
  </script>
  