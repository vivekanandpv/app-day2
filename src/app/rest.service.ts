import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(private httpClient: HttpClient) {}

  get(url: string) {
    const h = new HttpHeaders()
      .set('X-app-header', 'some value')
      .set('X-foo-header', 'foo');
    return this.httpClient.get(url, { headers: h });
  }

  post(url: string, body: any) {
    const h = new HttpHeaders()
      .set('X-app-header', 'some value')
      .set('X-foo-header', 'foo');
    return this.httpClient.post(url, body, { headers: h });
  }

  put(url: string, body: any) {
    return this.httpClient.put(url, body);
  }

  delete(url: string) {
    return this.httpClient.delete(url);
  }
}
