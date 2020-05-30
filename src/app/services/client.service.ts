import { Injectable } from '@angular/core';
import { Client } from '../model/client.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  
  
  constructor(private http:HttpClient){

  }

   getAllClients():Observable<Client[]>{
    return this.http.get<Client[]>("http://localhost:8081/clients");
  }

  addClient(client:Client){
    return this.http.post("http://localhost:8081/clients" , client);
    
  }

  getClient(id:number):Observable<Client>{
    return this.http.get<Client>(`http://localhost:8081/clients/${id}`);
  }

  updateClient(id:number , client:Client){
    return this.http.put(`http://localhost:8081/clients/${id}` , client );
    
  }

  deleteClient(id:number){
    return this.http.delete(`http://localhost:8081/clients/${id}`);
     
  }



}
