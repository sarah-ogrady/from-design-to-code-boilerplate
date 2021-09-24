import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ['form', 'input'];
  connect() {
    console.log(this.formTarget);
    console.log(this.inputTarget);
  }

  updateList() {

  }
}
