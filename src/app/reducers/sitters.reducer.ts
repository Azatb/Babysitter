import { SittersActions } from '../actions/sitters.actions';
import { SittersState } from '../stores/store';
import { tassign } from 'tassign';
import { Sitter } from '../entities/sitter';
import { TempTestingDataService } from '../services/temp-testing-data.service';

const INITIAL_STATE: SittersState = TempTestingDataService.getTestInitialSitterState();

export function sittersReducer(state: SittersState = INITIAL_STATE, action: any) {
    switch (action.type) {

        case SittersActions.CREATE_SITTER:
            var sitters: Array<Sitter> = state.sitters;
            sitters.push(action.payload)
            return tassign(state, { sitters: sitters });


        case SittersActions.DELETE_SITTER:
            var sitters: Array<Sitter> = state.sitters;
            var updatedSitters = sitters.filter(sitter => sitter._id !== action.payload._id);

            return tassign(state, { sitters: updatedSitters });


        case SittersActions.GET_ALL_SITTERS:
            var sitters: Array<Sitter> = action.payload;
            return tassign(state, { sitters: sitters });


        case SittersActions.UPDATE_SITTER:
            var sitters: Array<Sitter> = state.sitters;
            var sitter = sitters.find(sitter => sitter._id == localStorage.getItem("editSitterId"));
            sitter.address = action.payload.address;
            sitter.birthDate = action.payload.birthDate;
            sitter.city = action.payload.city;
            sitter.gender = action.payload.gender;
            sitter.hourlyWage = action.payload.hourlyWage;
            sitter.name = action.payload.name;
            sitter.noChildRecord = action.payload.noChildRecord;
            sitter.noCriminalRecord = action.payload.noCriminalRecord;
            sitter.password = action.payload.password;
            sitter.username = action.payload.username;
            sitter.zipcode = action.payload.zipcode;
            console.log("FIN_Edited_Sitter = " + sitter);
            console.log("FIN_Edited_State_Sitters = " + state.sitters);
            return tassign(state, { sitters: sitters });


        default:
            return state;
    }
}
