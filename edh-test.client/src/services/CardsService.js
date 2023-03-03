import { scryFallAPI } from "./AxiosService.js"

class CardsService{

  async getCards() {
    const res = await scryFallAPI.get("cards/search", {
      params: {
        q:'white'
      }
    })
    console.log(res.data);
  }
  async getSets() {
    const res = await scryFallAPI.get('sets', {
      params: {

      }
    })
    console.log(res.data);
}
}


export const cardsService = new CardsService()
