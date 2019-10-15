import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SensorApi } from './services/sensorApi';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TrainingComponent } from './training/training.component';
import { CurrentTrainingComponent } from './training/current-training/current-training.component';
import { NewTrainingComponent } from './training/new-training/new-training.component';
import { PastTrainingsComponent } from './training/past-trainings/past-trainings.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { StopTrainingComponent } from './training/current-training/stop.training.component';
import { AuthService } from './auth/auth.service';
import { TrainingService } from './training/training.service';
import { SensorsComponent } from './sensors/card-add/sensors.component';
import { TableSensorsComponent } from './sensors/table-sensors/table-sensors.component';
import { CardSensorsComponent } from './sensors/card-sensors/card-sensors.component';
import { CardEditComponent } from './sensors/card-edit/card-edit.component';
import { UIService } from './services/ui.service';
import { CardDeleteDialogComponent } from './sensors/card-sensors/card-delete-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    TrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingsComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent,
    StopTrainingComponent,
    SensorsComponent,
    TableSensorsComponent,
    CardSensorsComponent,
    CardEditComponent,
    CardDeleteDialogComponent
  ],
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule, AppRoutingModule, FlexLayoutModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [AuthService, TrainingService, SensorApi, UIService],
  bootstrap: [AppComponent],
  entryComponents: [StopTrainingComponent, CardDeleteDialogComponent]
})
export class AppModule {}
