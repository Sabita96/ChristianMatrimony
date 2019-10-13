import { Component, OnInit, SimpleChanges  } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  modal: HTMLElement;
  btn: HTMLElement;
  span: Element;
  isPopup: boolean = false;
  loginForm: FormGroup;
  isLogin: boolean = false;
  isSignup: boolean = true;
  constructor(private formBuilder: FormBuilder ) {
      // Get the modal

  }
  get formControls() { return this.loginForm.controls; }
  ngOnInit() {

    this.loginForm  =  this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]

    });
    // // Get the button that opens the modal
    //  this.btn = document.getElementById("myBtn");

    // // Get the <span> element that closes the modal
    //  this.span = document.getElementsByClassName("close")[0];
  }

  // openPopup(){
  //   console.log('sssssssssssssssssssssssssss')
  // }
  openPopup() {
    document.getElementById("myModal").style.display = "block";
    this.isPopup=true
    // let popup = document.getElementById("myPopup");
    // popup.classList.toggle("show");
  }
  close(){
    console.log('close!!!');
    document.getElementById("myModal").style.display = "none";
  }
  getBannerImg(){
    return "backgroun"
  }
}
