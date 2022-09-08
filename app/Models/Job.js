import { generateId } from '../Utils/generateId.js'

export class Job {
  /**
   * @param {{company: string, jobTitle: string, hours: number, rate: number, description: string, id?: string}} data
   */
  constructor(data) {
    this.id = data.id || generateId()
    this.company = data.company
    this.jobTitle = data.jobTitle
    this.hours = data.hours
    this.rate = data.rate
    this.description = data.description
  }

  get JobCardTemplate() {
    return /*html*/`
    <div class="col-md-4 col-lg-3 mb-3">
      <div class="card">
        <div class="card-body">
          <h5 class="text-uppercase">
            Company: ${this.company}
          </h5>
          <h5 class="text-uppercase">
            Title: ${this.jobTitle}
          </h5>
          <p>
            Rate: <strong>$${this.rate}</strong>
          </p>
          <p>Hours: <strong>${this.hours}</strong></p>
          <p>${this.description}</p>
        </div>
      </div>
    </div>
    `
  }
}