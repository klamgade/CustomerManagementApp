import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  storeName: string;
  isVisible: boolean;

  changeVisibility(){
    this.isVisible = !this.isVisible;
  }

  constructor() { }

  ngOnInit() {
    this.storeName = "Hamro Karobar";

  }

}
