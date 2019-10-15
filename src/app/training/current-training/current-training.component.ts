import { Component, OnInit } from '@angular/core';
import { setInterval, clearInterval } from 'timers';
import { MatDialog } from '@angular/material';
import { StopTrainingComponent } from './stop.training.component';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  progress = 0;
  int;
  constructor(private dialog: MatDialog, private trainingService: TrainingService) {}

  ngOnInit() {
    this.startOrResumeTimer();
  }

  startOrResumeTimer() {
    const step = (this.trainingService.getRuningExercise().duration / 100) * 1000;
    this.int = setInterval(() => {
      this.progress = this.progress + 1;
      if (this.progress >= 100) {
        this.trainingService.completeExercise();
        clearInterval(this.int);
      }
    }, step);
  }

  onStop() {
    clearInterval(this.int);
    const dialogRef = this.dialog.open(StopTrainingComponent, { data: { progress: this.progress } });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.trainingService.cancelExercise(this.progress);
      } else {
        this.startOrResumeTimer();
      }
    });
  }
}
