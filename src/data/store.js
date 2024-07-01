import { reactive } from "vue";

export const store = reactive({
  apiUrl: 'http://127.0.0.1:8000/api',
  typesSelected: {},
  originalRestaurants: [],
  restaurants: [],
  redyReedRestaurants: false,
  orderList: [],
  dishQuantity: [],
  cartList: [],
  subTotal: 0,
  cart: JSON.parse(localStorage.getItem('cart')),
  
  selectType() {
    const selectedTypes = Object.values(this.typesSelected);
    if (selectedTypes.length === 0) {
        this.restaurants = this.originalRestaurants;
    } else {
        this.restaurants = this.originalRestaurants.filter(restaurant => {
            // Verifica che ogni tipo selezionato sia presente nei tipi del ristorante
            return selectedTypes.every(selectedType =>
                restaurant.types.some(type => type.name === selectedType)
            );
        });
    }
  },

  getOrderList() {
    this.orderList = JSON.parse(localStorage.getItem('cart')) || [];
    this.cartList = [];
    this.subTotal = 0;
    this.orderList.forEach(orderItem => {
      this.subTotal = this.subTotal + parseFloat(orderItem.price);
      if (!this.cartList.some(item => JSON.stringify(item) === JSON.stringify(orderItem))) {
        this.cartList.push(orderItem)
      }
    });
    this.cartList.sort((a, b) => a.name.localeCompare(b.name));
  },

  getDishQuantity(){
    this.dishQuantity = JSON.parse(localStorage.getItem('dishQuantity')) || [];
  },

  checkCart(){
    this.cart = JSON.parse(localStorage.getItem('cart'));
    if(this.cart?.length > 0){
      return true
    }else{
      return false
    }
  },
})