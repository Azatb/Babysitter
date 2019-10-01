import { Sitter } from '../../entities/sitter';
import { TestBed, async } from '@angular/core/testing';
import {FilterSitters} from "./sitters.filter";
import { TempTestingDataService } from '../../services/temp-testing-data.service';

// unit testing med filt & pipe
// 1.0: Valid data: Search "Azat Baran" should give 1 result, Azat Baran

describe('App: Velkommen til KEA', () => {
       TestBed.configureTestingModule({
     declarations: [
       FilterSitters
     ]
   });

   it('1.0: Valid data: Search 1337 should give 3 results', () => {
    // Arrange
    const sitters: Sitter[] = TempTestingDataService.getTestInitialSitterState().sitters;
    const filter: FilterSitters = new FilterSitters();// til et object af filtersitters

    //Act
    const result = filter.transform(sitters, 1337);

    //Assert (expect)
    expect(result.length).toBe(2);
    expect(result[0].name).toBe('Azat Baran');
   });
 });

