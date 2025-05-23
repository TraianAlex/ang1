import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { Observable } from 'rxjs/internal/Observable';
import { ServersService } from './servers.service';

interface Server {
  id: number;
  name: string;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class ServerResolverService  {
  constructor(private serversService: ServersService) {}

  // Observable<Server> | Promise<Server> | Server
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.serversService.getServer(+route.params['id']);
  }
}
