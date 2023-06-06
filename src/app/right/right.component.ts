import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.scss'],
})
export class RightComponent {
  constructor(public dataService: DataService) {
    console.log(this.dataService);
  }

  increment() {
    this.dataService.counter++;
  }
}
