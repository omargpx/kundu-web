import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';
import { GolManagementComponent } from './gol-management.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { ModalComponent } from './modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';

const routes: Routes = [
  {
    path: '',
    component: GolManagementComponent,
    children: [
      { path: '', component: ListComponent },
      { path: 'add', component: FormComponent },
    ],
  },
];

@NgModule({
  declarations: [FormComponent, ListComponent, ModalComponent],
  imports: [RouterModule.forChild(routes), ComponentsModule, CommonModule,MatDialogModule],
  exports: [RouterModule],
})
export class GolRoutingModule {}
