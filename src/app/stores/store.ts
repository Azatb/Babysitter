import { routerReducer } from '@angular-redux/router';
import { combineReducers } from 'redux';
import { sittersReducer } from '../reducers/sitters.reducer';
import { Sitter } from '../entities/sitter';

export class SittersState {
    sitters: Sitter[];
}
export class IAppState {
    sitters?: SittersState;
}
export const rootReducer = combineReducers<IAppState>({
    sitters: sittersReducer,

// router: routerReducer
});
