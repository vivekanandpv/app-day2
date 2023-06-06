import { Component, OnInit } from '@angular/core';
import { Observable, filter, from, map } from 'rxjs';
import { RestService } from '../rest.service';
import { environment } from 'src/environments/environment';

export interface TodoViewModel {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss'],
})
export class PlaygroundComponent implements OnInit {
  todos$: Observable<TodoViewModel[]>;

  constructor(private restService: RestService) {
    this.todos$ = this.restService.get(
      `${environment.baseUrl}todos`
    ) as Observable<TodoViewModel[]>;
  }

  ngOnInit(): void {}
}
