import { Component } from '@angular/core';
import { RestService } from '../rest.service';
import { Observable, mergeMap } from 'rxjs';
import { TodoViewModel } from '../playground/playground.component';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
})
export class ExampleComponent {
  todo$: Observable<TodoViewModel>;

  constructor(private restService: RestService) {
    this.todo$ = this.restService
      .get('https://jsonplaceholder.typicode.com/todos/5')
      .pipe(
        mergeMap((t) => {
          const vm = t as TodoViewModel;
          return this.restService.get(
            `https://jsonplaceholder.typicode.com/todos/${vm.userId}`
          ) as Observable<TodoViewModel>;
        })
      );
  }
}
