import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable, shareReplay, Subject } from 'rxjs';

import { AppConfig } from 'src/app/app-config/app-config.interface';
import { APP_SERVICE_CONFIG } from 'src/app/app-config/app-config.service';

import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  headers = new HttpHeaders({ token: '123456' });
  // getRooms$ = this.http
  //   .get<RoomList[]>(`${this.config.apiEndpoint}/rooms`, { headers: this.headers })
  //   .pipe(shareReplay(1));
  roomAdded = new Subject<RoomList>();
  roomDeleted = new Subject<RoomList>();

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig, private http: HttpClient) {
    console.log(this.config.apiEndpoint);
  }

  getRooms(): Observable<RoomList[]> {
    return this.http.get<RoomList[]>(`${this.config.apiEndpoint}/rooms`, { headers: this.headers });
  }

  addRoom(room: Omit<RoomList, 'id'>) {
    return this.http.post<RoomList>(`${this.config.apiEndpoint}/rooms`, room, {
      headers: this.headers,
    });
  }

  editRoom(room: RoomList | Partial<RoomList>): Observable<RoomList> {
    return this.http.patch<RoomList>(`${this.config.apiEndpoint}/rooms/${room.id}`, room);
  }

  delete(room: RoomList) {
    return this.http.delete(`${this.config.apiEndpoint}/rooms/${room.id}`);
  }

  delete2(id: number | string) {
    return this.http.delete(`${this.config.apiEndpoint}/rooms/${id}`);
  }

  getPhotos() {
    const request = new HttpRequest('GET', 'http://jsonplaceholder.typicode.com/photos', {
      reportProgress: true,
    });
    return this.http.request(request);
  }
}
