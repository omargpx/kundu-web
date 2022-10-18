import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  users: number = 1375;
  user = {
    name: 'Danny',
    apP: 'Levano',
  };

  administrators: any[] = [
    {
      id: '1',
      firstname: 'Danny',
      lastname: 'Levano',
    },
    {
      id: '2',
      firstname: 'Joseph',
      lastname: 'Sanchez',
    },
    {
      id: '3',
      firstname: 'Claritza',
      lastname: 'Carrasco',
    },
    {
      id: '4',
      firstname: 'Manuel',
      lastname: 'Flores',
    },
    {
      id: '5',
      firstname: 'Rocio',
      lastname: 'Bernales',
    },
    {
      id: '6',
      firstname: 'Alejandra',
      lastname: 'Mendoza',
    },
    {
      id: '7',
      firstname: 'José',
      lastname: 'Macedo',
    },
    {
      id: '8',
      firstname: 'Pedro',
      lastname: 'Gallese',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
