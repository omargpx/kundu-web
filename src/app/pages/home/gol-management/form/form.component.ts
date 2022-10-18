import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GolProfilesComponent } from 'src/app/components/gol-profiles/gol-profiles.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  onSelectProfile(){
    this.dialog.open(GolProfilesComponent,{
      width:'250px',
      data:'right click '
    });
  }

}
