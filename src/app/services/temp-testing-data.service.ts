import { Injectable } from '@angular/core';
import { SittersState } from '../stores/store';
import { Sitter } from '../entities/sitter';

@Injectable({
  providedIn: 'root'
})
export class TempTestingDataService {
  constructor() { }

  public static getTestInitialSitterState() : SittersState {
    return {sitters: [
      {_id: '1', dataFrom: 'azat', type: 'sitter', username: 'azat', password: 'secret', name: 'Azat Baran', gender: 'male',
      birthDate: new Date(1995, 2, 16), noCriminalRecord: true, noChildRecord: true,
      hourlyWage: 1337, address: 'some', zipcode: '2600', city: 'Glostrup' },
      
      {_id: '2', dataFrom: 'azat', type: 'sitter', username: 'biran', password: 'secret', name: 'biran', gender: 'male',
      birthDate: new Date(1979, 0, 1), noCriminalRecord: true, noChildRecord: true,
      hourlyWage: 150, address: 'some', zipcode: '3400', city: 'Hillerød' },
  
      {_id: '3', dataFrom: 'azat', type: 'sitter', username: 'hans', password: 'secret3', name: 'hans', gender: 'male',
      birthDate: new Date(1995, 1, 1), noCriminalRecord: true, noChildRecord: true,
      hourlyWage: 100, address: 'some', zipcode: '2400', city: 'København NV' }
    ]};
  };

  sittersInitialTestState: Sitter[] = [
    {_id: '1', dataFrom: 'azat', type: 'sitter', username: 'azat', password: 'secret', name: 'Azat Baran', gender: 'male',
    birthDate: new Date(1995, 2, 16), noCriminalRecord: true, noChildRecord: true,
    hourlyWage: 1337, address: 'some', zipcode: '2600', city: 'Glostrup' },
    
    {_id: '2', dataFrom: 'azat', type: 'sitter', username: 'biran', password: 'secret', name: 'biran', gender: 'male',
    birthDate: new Date(1979, 0, 1), noCriminalRecord: true, noChildRecord: true,
    hourlyWage: 150, address: 'some', zipcode: '3400', city: 'Hillerød' },

    {_id: '3', dataFrom: 'azat', type: 'sitter', username: 'hans', password: 'secret3', name: 'hans', gender: 'male',
    birthDate: new Date(1995, 1, 1), noCriminalRecord: true, noChildRecord: true,
    hourlyWage: 100, address: 'some', zipcode: '2400', city: 'København NV' }
  ]};

