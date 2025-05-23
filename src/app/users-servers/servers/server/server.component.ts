import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
// import { ServersService } from '../../services/servers.service';

@Component({ selector: 'app-server', templateUrl: './server.component.html', standalone: false })
export class ServerComponent implements OnInit {
  server!: { id: number; name: string; status: string };

  constructor(
    // private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.data?.subscribe((data: Data) => {
      this.server = data['server'];
    });
    // const id = +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(id);
    // this.route.params
    //   .subscribe(
    //     (params: Params) => {
    //       this.server = this.serversService.getServer(+params['id']);
    //     }
    //   );
  }

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve' });
  }
}
