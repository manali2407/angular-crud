import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-crud';
  @ViewChild('myModal') model : ElementRef | undefined;


  openModel(){
    const modal = document.getElementById("myModal");
    if(modal != null){
      modal.style.display = "block"
    }
   
  }
  closeModel(){
    if(this.model != null){
       this.model.nativeElement.style.display = 'none';
    }
  }
}
