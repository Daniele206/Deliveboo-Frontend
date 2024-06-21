import { reactive } from "vue";

export const store = reactive({
  apiUrl: 'http://127.0.0.1:8000/api',
  typesSelected: {},
  originalRestaurants: [],
  restaurants: [],
  redyReedRestaurants: false,
  
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

})