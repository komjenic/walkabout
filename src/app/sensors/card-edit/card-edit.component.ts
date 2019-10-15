import { Component, OnInit } from '@angular/core';
import { SensorApi } from '../../services/sensorApi';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UIService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.css']
})
export class CardEditComponent implements OnInit {
  exercises = [{ id: 'ALARM', name: 'ALARM' }, { id: 'ACTUATOR', name: 'ACTUATOR' }, { id: 'FEED', name: 'FEED' }];
  obj;

  constructor(private router: Router, private uiService: UIService, private sensorApi: SensorApi) {
    this.obj = this.router.getCurrentNavigation().extras.state.example;
  }

  ngOnInit() {}

  async onSubmitEdit(form: NgForm) {
    try {
      await this.sensorApi.updateSensor({
        ...this.obj,
        name: form.value.name,
        type: form.value.type
      });
      await this.router.navigate(['/']);
      this.uiService.showSnackbar('Card edit successfully !!!', null, 3000, 'orange-snackbar');
    } catch (error) {
      this.uiService.showSnackbar(error, null, 3000, 'red-snackbar');
    }
  }
}
