import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  ngOnInit(){
    firebase.initializeApp({
      apiKey: 'AIzaSyAnC7HenyoUy-fYmBkJcF1Oxo2EFbAbXI8',
      authDomain: 'ng-recipe-book-64311.firebaseapp.com'
    });
  }
}
