import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RegisterComponent } from "../register/register.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CommonModule, RegisterComponent]
})
export class HomeComponent {
  registerMode = false;
  users: any;

  constructor() {}

  ngOnInit(): void {
  
  }
  
  registerToggle() {
    this.registerMode = !this.registerMode;
  }


  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }
}
