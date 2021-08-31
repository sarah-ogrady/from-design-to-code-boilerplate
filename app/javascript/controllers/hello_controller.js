import { Controller } from 'stimulus';

export default class extends Controller {
  static targets = [ 'button' ]
  connect() {
    console.log(this.buttonTarget)
  }

  updateText() {
    console.log(this.buttonTarget)
    this.buttonTarget.innerText = 'clicked!'
  }
}
