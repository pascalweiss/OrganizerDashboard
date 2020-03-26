import { Component, OnInit } from '@angular/core';
import { faUserPlus, faSignInAlt} from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { SignInComponent } from '../sign-in/sign-in.component';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  //icons
  faUserPlus = faUserPlus;
  faSignInAlt = faSignInAlt
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  signUpDialog() {
    this.dialog.open(SignUpComponent, {width:"350px", height:"450px"});
  }

  signInDialog() {
    this.dialog.open(SignInComponent, {width:"350px", height:"450px"});
  }

}
