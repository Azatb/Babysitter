import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../stores/store';
import { Sitter } from '../entities/sitter';
import { ApiService } from '../services/api.service';
import { templateJitUrl } from '@angular/compiler';
@Injectable({ providedIn: 'root'})
export class SittersActions {
constructor (
    private ngRedux: NgRedux<IAppState>, // ved hvor jeg er henne
    private apiService: ApiService) {} 
    
    static SET_REGISTER_BABYTYPE: string = 'SET_REGISTER_BABYTYPE'; 
    static CREATE_SITTER: string = 'CREATE_SITTER';
    static GET_ALL_SITTERS: string = 'GET_ALL_SITTERS'
    static DELETE_SITTER: string = 'DELETE_SITTER';
    static UPDATE_SITTER: string = 'UPDATE_SITTER';

    createSitter(sitter: Sitter): void{
        this.apiService.createSitter(sitter).subscribe(response => {
            console.log("1")
            this.ngRedux.dispatch({ 
                type: SittersActions.CREATE_SITTER,
                payload: sitter
            });
        }, error => {
            //ERROR 
        });
        console.log("2")

    }

  
    deleteSitter(sitter: Sitter): void{
        this.apiService.deleteSitter(sitter).subscribe(response => {
            this.ngRedux.dispatch({
                type: SittersActions.DELETE_SITTER,
                payload: sitter
            });
        }, error =>{ 
            console.log(error)
            console.log("FAILED");

        });
    }

    getAllSitters(): void{
        this.apiService.getAllSitters().subscribe((respons: any[]) => {
            var temp = respons.filter(sitter => sitter.dataFrom == "azat" && sitter.type == "sitter");
            console.log(temp);
            this.ngRedux.dispatch({
                type: SittersActions.GET_ALL_SITTERS,
                payload: temp
            })
        }, error => {
            //ERROR 
        }); 
    }

    updateSitter(sitter: Sitter): void{
        console.log(22222222222222);
        console.log(localStorage.getItem("editSitterId"));
        console.log(sitter);
        sitter._id = localStorage.getItem("editSitterId")

        this.apiService.updateSitter(sitter).subscribe((respons) => {
            console.log(33333333333333333)
            this.ngRedux.dispatch({
                type: SittersActions.UPDATE_SITTER,
                payload: sitter
            });
        }, error => {
                console.log(555555555);
                alert(error);
        });
    }

    getSitter(sitterId: string): Sitter{
        return this.ngRedux.getState().sitters.sitters.find(sitter => sitter._id == sitterId);
    }
}
