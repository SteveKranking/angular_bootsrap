import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = "No server was created";
  serverId = 10;
  serverStatus = "offline";
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['test', 'testserver2'];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';

  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = "Server was created! Name is" + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
    console.log(this.servers);
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

}
