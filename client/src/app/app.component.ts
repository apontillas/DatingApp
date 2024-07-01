import { Component, NgModule, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { AccountService } from './_services/account.service';
import { User } from './_models/user';
import { HomeComponent } from "./home/home.component";



@Injectable()
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CommonModule, NavComponent, FormsModule, BsDropdownModule, HomeComponent]
})
export class AppComponent implements OnInit {
  title = 'Dating App';

  constructor(private accountService: AccountService) {}
  
  ngOnInit(): void {
    this.setCurrentUser();
  }

  setCurrentUser() {
    const userString = window.localStorage.getItem('user');
    if (!userString) return;
    const user : User = JSON.parse(userString);
    this.accountService.setCurrentUser(user);
  }

  
}
