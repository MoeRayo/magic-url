<template>
  <div class="bg-lightest-blue vh-100 pa3 tc">
    <h2 class="ttc">Magic URL with Appwrite</h2>
    <div class="br3 bg-navy ba near-white b--black-10 shadow-3 w-100 w-60-m w-30-l mw6 center mt5 ph4 pv4 h5">
      <p class="f3">Click on this button to get the magic URL</p>
        <button class="link br3 pv2 ph2 mt4 dib black fw6 bg-white ba b--navy pointer inline-flex items-center hover-bg-lightest-blue" @click="sendMagicURL">
          <span class="f4 ml2 pr2">Get magic URL</span>
        </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {account} from '~/init'
import { ID } from 'appwrite';

export default Vue.extend({
  name: 'IndexPage',
  methods: {
    sendMagicURL: async function () {
      try {
        await account.createMagicURLSession(ID.unique(), 'moronfolu.motunrayo1@gmail.com', 'http://localhost:3000/verify')
        alert('Magic URL sent')
      } catch (error) {
        console.log(error)
      }
    }
  }
})
</script>
