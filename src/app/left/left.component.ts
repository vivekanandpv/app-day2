import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss'],
})
export class LeftComponent {
  constructor(public dataService: DataService) {
    console.log(this.dataService);
  }

  increment() {
    this.dataService.counter++;
  }
}
