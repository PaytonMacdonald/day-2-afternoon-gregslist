export default class Job {
  constructor(data) {
    this.company = data.company
    this.description = data.description
    this.id = data.id
    this.jobTitle = data.jobTitle
    this.length = data.length
    this.hours = data.hours
  }

  get Template() {
    return /*html*/`
    <div class="col-md-4 mb-3">
      <div class="card shadow">
          <img class="card-img-top" alt="">
          <div class="card-body">
              <h4 class="card-title">${this.jobTitle} | ${this.company} </h4>
              <p class="card-text">${this.description} - $}</p>
          </div>
          <div class="px-3 pb-3 d-flex justify-content-between">
              <button type="button" class="btn btn-danger" onclick="app.housesController.deleteHouse('${this.id}')">Delete</button>
              <button type="button" class="btn btn-info" onclick="app.housesController.bid('${this.id}')">Bid</button>
          </div>
      </div>
    </div>
    `
  }
}