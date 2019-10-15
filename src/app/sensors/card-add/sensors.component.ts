import { Component, OnInit, OnDestroy } from '@angular/core';
import { SensorApi } from '../../services/sensorApi';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UIService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.css']
})
export class SensorsComponent implements OnInit, OnDestroy {
  exercises = [{ id: 'ALARM', name: 'ALARM' }, { id: 'ACTUATOR', name: 'ACTUATOR' }, { id: 'FEED', name: 'FEED' }];
  isLoading = false;
  private loadingSubs: Subscription;

  constructor(private router: Router, private uiService: UIService, private sensorApi: SensorApi) {}

  ngOnInit() {
    this.loadingSubs = this.uiService.loadingStateChanged.subscribe(isLoading => (this.isLoading = isLoading));
  }

  async onSubmit(form: NgForm) {
    try {
      this.uiService.loadingStateChanged.next(true);
      await this.sensorApi.postSensor({
        name: form.value.name,
        image: 'images/ico_temperature.svg',
        path: 'path/string',
        unitSymbol: '°C',
        value: true,
        lastUpdate: 123456,
        type: form.value.type
      });
      this.uiService.loadingStateChanged.next(false);
      await this.router.navigate(['/']);
      this.uiService.showSnackbar('Card added successfully !!!', null, 3000, 'green-snackbar');
    } catch (error) {
      this.uiService.loadingStateChanged.next(false);
      this.uiService.showSnackbar(error, null, 3000, 'red-snackbar');
    }
  }

  ngOnDestroy() {
    this.loadingSubs.unsubscribe();
  }
}
