import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output()callback=new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  goRecipe(){
    this.callback.emit("recipe");
  }

  goShopping(){
    this.callback.emit("shopping");
  }

}
