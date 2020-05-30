import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/model/client.model';
import { ClientService } from 'src/app/services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  //Attributes
  client:Client={
    id:null ,
    firstname:'',
    lastname:'',
    email:'',
    phone:'',
    balance:0 
  }

  constructor(private clientService:ClientService , private router :Router) { }

  ngOnInit(): void {
    this.getClient();
    
  }

  getClient(){
    this.clientService.getClient(Number(sessionStorage.getItem("id"))).subscribe(data => {
      this.client = data;
      console.log(this.client);
    });
  }

  onSubmit(t){
    console.log(this.client.balance);
    this.clientService.updateClient(Number(sessionStorage.getItem("id")) , this.client).subscribe(data =>{
      this.router.navigate(['/client/${client.id}'])

    })
  }

}
