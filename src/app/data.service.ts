import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  counter = 1;

  constructor() {
    console.log('constructor');
  }
}
