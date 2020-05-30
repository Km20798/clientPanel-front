import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/model/client.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  //Attributes
  client:Client;
  updateBalance:boolean=false;
  balance:number ;
  del:boolean=false;

  constructor(private clientService:ClientService , private router:Router) { }

  ngOnInit(): void {
    this.getClient();
  }

  getClient(){
    this.clientService.getClient(Number(sessionStorage.getItem("id"))).subscribe(data => {
      this.client = data;
    });
  }

  update(){
    this.balance = this.client.balance;
    this.updateBalance = !this.updateBalance;
  }

  updateBala(){

    this.client.firstname = this.client.firstname ;
    this.client.lastname=this.client.lastname;
    this.client.email = this.client.email;
    this.client.phone = this.client.phone;
    this.client.balance = this.balance;
    this.clientService.updateClient(Number(sessionStorage.getItem("id")) , this.client).subscribe(data => {
      this.updateBalance = false;
    });
    
  }

  deleteClient(){
    console.log("done")
    this.clientService.deleteClient(Number(sessionStorage.getItem("id"))).subscribe(data => {
      this.router.navigate(['/']);
    });
      
    
    
  }

}
