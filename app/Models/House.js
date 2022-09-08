import { generateId } from '../Utils/generateId.js'

export class House {
  /**
   * @param {{bedrooms: number, bathrooms: number, levels: number, imgUrl: string, year: number, price: number, description: string, id?: string}} data
   */
  constructor(data) {
    this.id = data.id || generateId()
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description
  }

  get HouseCardTemplate() {
    return /*html*/`
    <div class="col-md-4 col-lg-3 mb-3">
      <div class="card">
        <img src="${this.imgUrl}" alt="" class="img-fluid">
        <div class="card-body">
          <h5 class="text-uppercase">
            ${this.bedrooms} Bed | ${this.bathrooms} Bath
            ${this.levels} Levels
          </h5>
          <p>Year Built: ${this.year}</p>
          <p>
            <strong>$${this.price}</strong>
          </p>
          <p>${this.description}</p>
        </div>
      </div>
    </div>
    `
  }
}