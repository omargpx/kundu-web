import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { People } from 'src/app/Models/Common/People';
import { PeopleService } from 'src/app/service/common/people.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  isLoading: boolean;
  hideData: boolean;
  people: Array<People>;
  totalPgs: any;
  constructor(private router: Router, private people$: PeopleService) {
    this.people = [];
    this.isLoading = false;
    this.hideData = false;
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  addUser() {
    this.router.navigate(['/home/users/add']);
  }

  getAllUsers(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.people$.getByPagination(1).subscribe((r) => {
        this.people = r.content;
        this.isLoading = false;
      });
    }, 1500);
  }
  searchPage(number: any) {
    console.log(number);
    this.isLoading = true;
    this.hideData = true;
    setTimeout(() => {
      this.people$.getByPagination(number).subscribe((r) => {
        this.people = r.content;
        this.isLoading = false;
        this.hideData = false;
      });
    }, 1500);
  }
  edit(id: number) {
    console.log(id);
  }
  deletePerson(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  }
}
