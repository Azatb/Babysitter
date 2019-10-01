import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Sitter } from '../entities/sitter';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { } // hvorfor private 

  getAllSitters(){
    return this.http.get(environment.apiUrl1 + "/getall")
  }

  createSitter(sitter: Sitter){
    sitter.dataFrom = "azat";
    sitter.type = "sitter";
    return this.http.post(environment.apiUrl1 + "/create", sitter, {responseType: 'text'}) // hvad returner den 
  }

  deleteSitter(sitter){
    return this.http.delete(environment.apiUrl2 + "/" + sitter._id, {responseType: 'text'});
  }

  getSitter(sitterId: string){
    return this.http.get(environment.apiUrl1 + "/" + sitterId)
  }

  updateSitter(sitter: Sitter){
    sitter.dataFrom = "azat";
    sitter.type = "sitter";

    return this.http.post(environment.apiUrl1 + "/update/" + sitter._id, sitter, {responseType: 'text'});
  }
}
