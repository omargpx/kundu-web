import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { ModalComponent } from './modal/modal.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';
import { UserManagementComponent } from './user-management.component';

const routes: Routes = [
  {
    path: '',
    component: UserManagementComponent,
    children: [
      { path: '', component: ListComponent },
      { path: 'add', component: FormComponent },
    ],
  },
];

@NgModule({
  declarations: [ListComponent, FormComponent, ModalComponent],
  imports: [RouterModule.forChild(routes), ComponentsModule, CommonModule],
  exports: [RouterModule],
})  
export class UsersRoutingModule {}
