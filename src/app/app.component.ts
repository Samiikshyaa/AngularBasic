import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularStart';
  name: string ="Samikshya";
  contact = "98";
  classname: string = "button clicked";

  onClick(){
    console.log("Button clicked");
  }

  handledOutputformChildren(message: String){
    console.log(message)
  }
}
