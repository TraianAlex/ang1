import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({ selector: 'app-room', templateUrl: './room.component.html', standalone: false })
export class RoomComponent implements OnInit {
  roomId!: string | null;
  roomId$!: Observable<string | null>;

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    // this.roomId = this.router.snapshot.params['id']; // never update
    // this.router.params.subscribe((params) => {
    //   this.roomId = params['id'];
    // });
    // this.roomId$ = this.router.params.pipe(map((params) => params['id']));
    // this.router.paramMap.subscribe((params) => {
    //   this.roomId = params.get('id');
    // });
    this.roomId$ = this.router.paramMap?.pipe(map((params) => params.get('id')));
  }
}
