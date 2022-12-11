import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { ObsUserService } from '../obs-user.service';

@Component({
  selector: 'app-obs-user',
  templateUrl: './obs-user.component.html',
})
export class ObsUserComponent implements OnInit {
  id!: number;

  stream = new Observable<string>((observer) => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();
    // observer.error('error);
  });

  constructor(private route: ActivatedRoute, private userService: ObsUserService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
    });
    this.stream.subscribe((data) => console.log(data));
    this.stream.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('complete'),
      error: (err) => console.log(err),
    });
  }

  onActivate() {
    // this.userService.activatedEmitter.emit(true);
    this.userService.activatedEmitter.next(true);
  }
}
