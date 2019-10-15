import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TrainingComponent } from './training/training.component';
import { AuthGuard } from './auth/auth.gard';
import { SensorsComponent } from './sensors/card-add/sensors.component';
import { CardEditComponent } from './sensors/card-edit/card-edit.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'editCard', component: CardEditComponent },
  { path: 'addCard', component: SensorsComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'training', component: TrainingComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
