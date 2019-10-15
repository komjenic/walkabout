import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Sensor } from '../card-add/sensor.model';
import { SensorApi } from '../../services/sensorApi';

@Component({
  selector: 'app-table-sensors',
  templateUrl: './table-sensors.component.html',
  styleUrls: ['./table-sensors.component.css']
})
export class TableSensorsComponent implements OnInit, AfterViewInit {
  displayedColumns = ['id', 'name', 'image', 'path', 'value', 'unitSymbol', 'lastUpdate', 'type'];
  dataSource = new MatTableDataSource<Sensor>();

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  constructor(private sensorApi: SensorApi) {}

  async ngOnInit() {
    this.dataSource.data = await this.sensorApi.getSensors();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }
}
