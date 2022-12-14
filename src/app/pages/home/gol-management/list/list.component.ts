import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  menuRow = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  addGol() {
    this.router.navigate(['/home/goles/add']);
  }

  openMenu() {
    if (this.menuRow === false) {
      this.menuRow = true;
    } else {
      this.menuRow = false;
    }
  }
}
