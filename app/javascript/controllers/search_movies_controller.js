// import { Controller } from "stimulus"

// export default class extends Controller {
//   static targets = ['form', 'input', 'list'];
//   connect() {
//     console.log(this.formTarget);
//     console.log(this.inputTarget);
//   }

//   updateList(event) {
//     // console.log('send request in AJAX');
//     const url = this.formTarget.action
//     // console.log(url) -> shows us where the form is being sent
//     // for us here page is being re-rendered: movies_path
//     fetch(`${url}?query=${this.inputTarget.value}`, { headers: { 'Accept': 'text/plain'} })
//       // { headers: { 'Accept': 'text/plain'} } -> WHAT DOES THIS DO????
//       .then(response => response.text())
//       .then((data) => {
//         this.listTarget.outerHtml = data;
//       });
//   }
// }

import { Controller } from 'stimulus';

export default class extends Controller {
  static targets = ['form', 'input', 'list'];

  connect() {
    console.log(this.formTarget);
    console.log(this.inputTarget);
  }
  updateList(event) {
    const url = this.formTarget.action;
    fetch(`${url}?query=${this.inputTarget.value}`, { headers: { 'Accept': 'text/plain' } })
      .then(response => response.text())
      .then((data) => {
        this.listTarget.outerHTML = data;
      });
  }
}
