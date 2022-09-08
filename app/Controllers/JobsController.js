import { setHTML } from "../Utils/Writer.js"
import { appState } from "../AppState.js"
import { getFormData } from "../Utils/FormHandler.js"
import { jobsService } from "../Services/JobsService.js"

function drawJobs() {
  let template = ''
  appState.jobs.forEach(job => template += job.JobCardTemplate)
  setHTML('job-listings', template)
}


export class JobsController {
  constructor() {
    appState.on('jobs', drawJobs)
  }

  showJobs() {
    drawJobs()
    document.getElementById('cars-hide').classList.add('d-none')
    document.getElementById('jobs-hide').classList.remove('d-none')
  }

  addJob() {
    try {
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      const form = window.event.target
      let formData = getFormData(form)

      jobsService.addJob(formData)

      // @ts-ignore
      form.reset()

    } catch (error) {
      console.error('addJob', error)
    }
  }
}