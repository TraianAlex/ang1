import { AfterViewInit, Component, inject, OnInit, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { localStorageToken } from '../services/localstorage.token';
import { LoggerService } from '../services/logger.service';

type Servers = {
  type: string;
  name: string;
  content: string;
};

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
  standalone: false,
})
export class ServersComponent implements OnInit, AfterViewInit {
  serverElements: Servers[] = [{ type: 'server', name: 'Testserver', content: 'Just a test' }];
  // newServerName = '';
  // newServerContent = '';

  @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;
  private localStorage: Storage = inject(localStorageToken); // @Inject(localStorageToken) private localStorage: Storage
  serverCreationStatus = 'No server was created!';
  allowNewServer = false;
  serverName = 'Test server name';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  serverStatus = 'offline';
  serverId = 123;
  username = '';
  showSecret = false;
  log: Array<number | Date> = [];

  constructor(@Optional() private loggerService: LoggerService) {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
    this.loggerService?.log('ServerComponent.ngOnInit');
    this.localStorage.setItem('name', 'Hilton Hotel');
  }

  ngAfterViewInit(): void {
    // const componentRef = this.vcr.createComponent(RoomsComponent);
    // componentRef.instance.numberOfRooms = 11;
  }

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBlueprintAdded(blueprintData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changes';
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }

  // onAddServer() {
  //   this.serverElements.push({
  //     type: 'server',
  //     name: this.newServerName,
  //     content: this.newServerContent,
  //   });
  // }

  // onAddBlueprint() {
  //   this.serverElements.push({
  //     type: 'blueprint',
  //     name: this.newServerName,
  //     content: this.newServerContent,
  //   });
  // }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = `Server was created! Name is ${this.serverName}`;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  onRemoveServer(index: number) {
    this.servers.splice(index, 1);
  }

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    //this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}
