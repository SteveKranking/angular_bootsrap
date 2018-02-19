import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  allowNewServer = false;
  serverCreationStatus = "No server was created";
  serverId = 10;
  serverStatus = "offline";
  serverName = 'TestServer';
  serverCreated = false;

  onCreateServer() {
    this.serverCreationStatus = "Server was created! Name is" + this.serverName;
    this.serverCreated = true;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
