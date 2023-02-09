import { Component } from '@angular/core';

@Component({
  selector: 'app-create-publication',
  templateUrl: './create-publication.component.html',
})
export class CreatePublicationComponent {
  enteredValue = '';
  newPublication = 'Type your article here';


  onSavePublication() {
    this.newPublication = this.enteredValue;
  }
}
