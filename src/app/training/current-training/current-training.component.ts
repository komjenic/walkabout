import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { setInterval, clearInterval } from 'timers';
import { MatDialog } from '@angular/material';
import { StopTrainingComponent } from './stop.training.component';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  @Output() trainingExit = new EventEmitter();
  progress = 0;
  int;
  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.startOrResumeTimer();
  }

  startOrResumeTimer() {
    this.int = setInterval(() => {
      this.progress = this.progress + 10;
      if (this.progress >= 100) {
        clearInterval(this.int);
      }
    }, 1000);
  }

  onStop() {
    clearInterval(this.int);
    const dialogRef = this.dialog.open(StopTrainingComponent, { data: { progress: this.progress } });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.trainingExit.emit();
      } else {
        this.startOrResumeTimer();
      }
    });
  }
}
