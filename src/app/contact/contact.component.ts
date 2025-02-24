import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  @Input() xyz = ""
  @Output() sentEvent = new EventEmitter<string>()
  sendSignal(){
    this.sentEvent.emit("mission successful")
  }


}
