import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  name:string="Danny Levano";

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logOut(){
    this.router.navigate(['/auth']);
  }
}
