import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ObsUserService } from '../obs-user.service';

@Component({
  selector: 'app-obs-user',
  templateUrl: './obs-user.component.html',
  styleUrls: ['./obs-user.component.scss'],
})
export class ObsUserComponent implements OnInit {
  id!: number;

  constructor(private route: ActivatedRoute, private userService: ObsUserService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
    });
  }

  onActivate() {
    // this.userService.activatedEmitter.emit(true);
    this.userService.activatedEmitter.next(true);
  }
}
