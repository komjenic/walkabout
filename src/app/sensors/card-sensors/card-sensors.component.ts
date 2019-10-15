import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { SensorApi } from '../../services/sensorApi';
import { Router } from '@angular/router';
import { UIService } from 'src/app/services/ui.service';
import { MatDialog } from '@angular/material';
import { CardDeleteDialogComponent } from './card-delete-dialog.component';

@Component({
  selector: 'app-card-sensors',
  templateUrl: './card-sensors.component.html',
  styleUrls: ['./card-sensors.component.scss']
})
export class CardSensorsComponent implements OnInit {
  dataSource;
  private imageLoop() {
    this.dataSource.forEach(data => {
      this.matIconRegistry.addSvgIcon(data.image, this.domSanitizer.bypassSecurityTrustResourceUrl(`../../../assets/${data.image.replace(/^.*[\\\/]/, '')}`));
    });
  }
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private router: Router,
    private uiService: UIService,
    private sensorApi: SensorApi,
    private dialog: MatDialog
  ) {}

  async ngOnInit() {
    this.dataSource = await this.sensorApi.getSensors();
    this.imageLoop();
  }

  async onEdit(sensorId) {
    const sensor = await this.sensorApi.getSensor(sensorId);
    await this.router.navigate(['/editCard'], { state: { example: sensor } });
  }

  onDelete(sensorId) {
    const dialogRef = this.dialog.open(CardDeleteDialogComponent, { data: { card: sensorId } });
    dialogRef.afterClosed().subscribe(async result => {
      if (result) {
        try {
          await this.sensorApi.deleteSensor(sensorId);
          await this.ngOnInit();
          await this.uiService.showSnackbar('Card deleted successfully !!!', null, 3000, 'red-snackbar');
        } catch (error) {
          this.uiService.showSnackbar(error, null, 3000, 'red-snackbar');
        }
      }
    });
  }
}
