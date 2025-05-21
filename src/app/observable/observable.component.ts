import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ObsUserService } from './obs-user.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss'],
  standalone: false,
})
export class ObservableComponent implements OnInit, OnDestroy {
  userActivated = false;
  private activatedSub!: Subscription;

  constructor(private userService: ObsUserService) {}

  ngOnInit(): void {
    this.activatedSub = this.userService.activatedEmitter.subscribe((didActivate) => {
      this.userActivated = didActivate;
    });
  }

  ngOnDestroy(): void {
    this.activatedSub.unsubscribe();
  }
}
