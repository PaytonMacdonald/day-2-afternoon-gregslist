import { ProxyState } from "../AppState.js";
import { jobsService } from "../Services/JobsService.js";

//Private
function _draw() {
  let jobs = ProxyState.jobs
  let template = ''
  jobs.forEach(job => { template += job.Template })
  console.log(template)
  document.getElementById('jobs').innerHTML = template
}


//Public
export default class JobsController {
  constructor() {
    ProxyState.on('jobs', _draw);


    this.getJobs()
  }
  async getJobs() {
    try {
      await jobsService.getJobs()
    } catch (error) {
      console.error(error)
    }
  }




}