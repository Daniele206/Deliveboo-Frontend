<script>
import dropin from "braintree-web-drop-in";
import axios from "axios";

import { store } from "../data/store";

export default {
  props: {
    data: Object,
  },

  data() {
    return {
      store,
      instance: null,
      sendData: {},
    };
  },
  methods: {
    submitPayment() {
      let button = document.getElementById("submit-button");

      if (!this.instance) {
        console.error("Braintree instance not created");
        return;
      }
      this.instance.requestPaymentMethod((err, payload) => {
        if (err) {
          console.error(err);

          return;
        }
        // Submit payload.nonce to your server
        console.log("Payment_method_nonce:", payload.nonce);
        button.classList.add("d-none");
        this.sendData = {
          name: this.data.name,
          mail: this.data.mail,
          address: this.data.address,
          telefon: this.data.telefon,
          subTotal: this.store.subTotal,
          cart: JSON.parse(localStorage.getItem("cart")),
          nonceToken: payload.nonce,
        };
        axios
          .post(this.store.apiUrl + "/sendOrders", this.sendData)
          .then((result) => {
            if (result.data.success === true) {
              this.$router.push("/Success");
              // this.store.cartList=[];
              this.$emit("closeCanvass1");
            } else {
              button.classList.remove("d-none");
              this.$router.push("/Notsuccess");
              this.$emit("closeCanvass2");
            }
            console.log(result.data);
            console.log(result.data.success);
          })
          .catch((error) => {
            console.log(error.message);
          });
      });
    },
  },
  mounted() {
    dropin.create(
      {
        authorization: "sandbox_mfcvg3gx_s3899v5228tdk746",
        selector: "#dropin-container",
      },
      (err, instance) => {
        if (err) {
          console.error(err);
          return;
        }
        this.instance = instance;
      }
    );
  },
};
</script>

<template>
  <div>
    <div id="dropin-container"></div>
    <button
      id="submit-button"
      class="button button--small button--green"
      @click="submitPayment()"
      :to="{ name: 'Success' }"
    >
      Acquista
    </button>
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
