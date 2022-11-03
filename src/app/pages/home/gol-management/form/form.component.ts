import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GolProfilesComponent } from 'src/app/components/gol-profiles/gol-profiles.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  component_name: 'add_golForm';
  img_url: string;
  constructor(private dialog: MatDialog) {
    this.img_url = 'https://i.ibb.co/nQ3G9SV/image-blank.png';
  }

  ngOnInit(): void {}

  onSelectProfile() {
    const dialogRef = this.dialog.open(GolProfilesComponent, {
      maxHeight: '85vh',
      maxWidth: '95vw',
      data: {
        title: 'add img-gol',
        body: null,
        component: this.component_name,
        id: 0,
        response: this.img_url,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result != undefined && result != null) this.img_url = result;
    });
  }
}
