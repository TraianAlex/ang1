import { Component, OnInit } from '@angular/core';

type Servers = {
  type: string;
  name: string;
  content: string;
};

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent implements OnInit {
  serverElements: Servers[] = [];
  newServerName = '';
  newServerContent = '';

  constructor() {}

  ngOnInit(): void {}

  onAddServer() {
    this.serverElements.push({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent,
    });
  }

  onAddBlueprint() {
    this.serverElements.push({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent,
    });
  }
}
