import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/model/client.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientpanel',
  templateUrl: './clientpanel.component.html',
  styleUrls: ['./clientpanel.component.css']
})
export class ClientpanelComponent implements OnInit {

  //Attributes
  clients:Client[];
  client:Client;
  balance:number = 0;
  constructor(private clientService:ClientService , private router:Router) { }

  ngOnInit(): void {
    this.getAll();
  }

  //Methods
  getAll(){
     this.clientService.getAllClients().subscribe(data => {
       this.clients = data;
       this.getBalance();
     });
     
  }

  getBalance(){
    this.clients.forEach(element => {
      this.balance+=element.balance;
    });
  }

  getClient(id:number){
    sessionStorage.setItem("id" , id+'');
    this.router.navigate([`/client/${id}`]);
  }

}
