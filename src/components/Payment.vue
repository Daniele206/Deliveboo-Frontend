<script>
import dropin from 'braintree-web-drop-in';
import axios from 'axios';

import { store } from '../data/store';

export default {
  props:{
    data: Object
  },

  data() {
    return {
      instance: null,
    };
  },
  methods: {
    submitPayment() {
      if (!this.instance) {
        console.error('Braintree instance not created');
        return;
      }
      this.instance.requestPaymentMethod((err, payload) => {
        if (err) {
          console.error(err);
          return;
        }
        // Submit payload.nonce to your server
        console.log('Payment_method_nonce:', payload.nonce);
        axios.post(this.store.apiUrl, this.data)
              .then( result => {
                console.log(result.data);
              })
              .catch( error => {
                console.log(error);
              })
      });
    }
  },
  mounted() {
    dropin.create({
      authorization: 'sandbox_g42y39zw_348pk9cgf3bgyw2b',
      selector: '#dropin-container'
    }, (err, instance) => {
      if (err) {
        console.error(err);
        return;
      }
      this.instance = instance;
    });
  },
};
</script>

<template>
  <div>
    <div id="dropin-container"></div>
    <button id="submit-button" class="button button--small button--green" @click="submitPayment">Purchase</button>
  </div>
</template>

<style lang="scss" scoped>
  .button {
    cursor: pointer;
      font-weight: 500;
      left: 3px;
      line-height: inherit;
      position: relative;
      text-decoration: none;
      text-align: center;
      border-style: solid;
      border-width: 1px;
      border-radius: 3px;
      -webkit-appearance: none;
      -moz-appearance: none;
      display: inline-block;
  }

    .button--small {
      padding: 10px 20px;
      font-size: 0.875rem;
    }

    .button--green {
      outline: none;
      background-color: #64d18a;
      border-color: #64d18a;
      color: white;
      transition: all 200ms ease;
    }

    .button--green:hover {
      background-color: #8bdda8;
      color: white;
    }
</style>