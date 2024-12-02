import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { OnInit, OnDestroy } from '@angular/core';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
})
export class SideBarComponent {
  logOut() {
    this.sevice.logOut();
  }
  constructor(private sevice: AuthService) {}
  isLogged: boolean = this.sevice.isLoggedIn();
}
