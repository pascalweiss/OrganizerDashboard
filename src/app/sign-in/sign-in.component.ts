import { Component, OnInit } from '@angular/core';
import {  MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  user = {username: '', password: '', remember: false}

  constructor(
    public dialogRef: MatDialogRef<SignInComponent>,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.router.navigate(['dashboard']);
    this.dialogRef.close();
  }

}
