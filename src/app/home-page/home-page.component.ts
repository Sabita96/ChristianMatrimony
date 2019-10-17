import { Component, OnInit, SimpleChanges  } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
// import {assets } from
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

  imageUrlArray: string[];
  user: any = {};
  constructor(private formBuilder: FormBuilder ) {
      // Get the modal
      this.imageUrlArray=[
     'https://img2.shaadi.com/assests/2019/images/60-lakh-home-banner-v3.jpg','../../assets/img/banner1.jpg']
    //  'https://vakilsearch.com/advice/wp-content/uploads/2018/07/o-indian-wedding-gold-facebook.jpg'

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
