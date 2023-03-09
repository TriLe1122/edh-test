import { AppState } from "../AppState.js";
import { Card } from "../models/Card.js";
import { scryFallAPI } from "./AxiosService.js"

class CardsService{

  async getCards() {
    const res = await scryFallAPI.get("cards/search", {
      params: {
        q:'koma'
      }
    })
    console.log(res.data.data);
    AppState.cards = res.data.data.map(c => new Card(c))
    console.log(AppState.cards)
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
