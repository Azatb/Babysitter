var deepFreeze = require('deep-freeze');
import { sittersReducer } from "./sitters.reducer";
import { TempTestingDataService } from "../services/temp-testing-data.service";
import * as types from '../actions/sitters.actions';
import { Sitter } from "../entities/sitter";


describe('Sitter reducer', () => {
    it('Should get initial state', () => {
        expect(sittersReducer(undefined, {})).toEqual(TempTestingDataService.getTestInitialSitterState());
    });

    it('Should delete sitter with _id = 1', () => {
        let startState = TempTestingDataService.getTestInitialSitterState();
        let deleteSitter = TempTestingDataService.getTestInitialSitterState().sitters.find(s => s._id == '2')

        let endState = TempTestingDataService.getTestInitialSitterState();
        endState.sitters = [
            {
                _id: '1', dataFrom: 'azat', type: 'sitter', username: 'azat', password: 'secret', name: 'Azat Baran', gender: 'male',
                birthDate: new Date(1995, 2, 16), noCriminalRecord: true, noChildRecord: true,
                hourlyWage: 1337, address: 'some', zipcode: '2600', city: 'Glostrup'
            },
            {
                _id: '3', dataFrom: 'azat', type: 'sitter', username: 'hans', password: 'secret3', name: 'hans', gender: 'male',
                birthDate: new Date(1995, 1, 1), noCriminalRecord: true, noChildRecord: true,
                hourlyWage: 100, address: 'some', zipcode: '2400', city: 'København NV'
            }]

        deepFreeze(startState);
        expect(sittersReducer(startState,
            {
                type: types.SittersActions.DELETE_SITTER,
                payload: deleteSitter
            })).toEqual(endState);
    });

    it('Should edit sitter with id = 1', () => {
        let startState = TempTestingDataService.getTestInitialSitterState();
        let endState = TempTestingDataService.getTestInitialSitterState();
        endState.sitters = [
            {
                _id: '1', dataFrom: 'azat', type: 'sitter', username: 'azatedit', password: 'secretedit', name: 'Azat Baranedit', gender: 'maleedit',
                birthDate: new Date(1992, 2, 16), noCriminalRecord: false, noChildRecord: false,
                hourlyWage: 1337, address: 'someedit', zipcode: '2222', city: 'Glostrupedit'
            },
            {
                _id: '2', dataFrom: 'azat', type: 'sitter', username: 'biran', password: 'secret', name: 'biran', gender: 'male',
                birthDate: new Date(1979, 0, 1), noCriminalRecord: true, noChildRecord: true,
                hourlyWage: 150, address: 'some', zipcode: '3400', city: 'Hillerød'
            },
            {
                _id: '3', dataFrom: 'azat', type: 'sitter', username: 'hans', password: 'secret3', name: 'hans', gender: 'male',
                birthDate: new Date(1995, 1, 1), noCriminalRecord: true, noChildRecord: true,
                hourlyWage: 100, address: 'some', zipcode: '2400', city: 'København NV'
            }]
            localStorage.setItem("editSitterId", '1')

        expect(sittersReducer(startState, {
            type: types.SittersActions.UPDATE_SITTER,
            payload: endState.sitters.find(s => s._id == '1') 
        })).toEqual(endState)
    })
});