import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PreloginLayoutComponent } from './prelogin-layout/prelogin-layout.component';

const routes: Routes = [
  {path: '', component: PreloginLayoutComponent,
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'register', component: SignupComponent},
      {path: '**', redirectTo: 'login'}
    ]
  },
  {path: '**', redirectTo: ''}
]

@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
    PreloginLayoutComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MatInputModule
  ]
})
export class PreloginModule { }
