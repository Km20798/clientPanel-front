import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/model/client.model';
import { ClientService } from 'src/app/services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  //Attriburs
  client:Client={
    id:null ,
    firstname:'',
    lastname:'',
    email:'',
    phone:'',
    balance:0 
  }
  clients:Client[];

  constructor(private clientService:ClientService , private router:Router) { }

  ngOnInit(): void {
  }

  getAll(){
    this.clientService.getAllClients().subscribe(data => {
      this.clients  = data;
    })
  }
  onSubmit(t){
    this.clientService.addClient(this.client).subscribe(data  =>{
      this.router.navigate(['/']);
      console.log(data);
    }); 
    
  }

}
