import { RequestService } from '../src/request.service';
import { TokenService } from '../src/token.service';

describe('Import modules', function() {
  it('RequestService should be imported', function() {  
    var requestService = new RequestService();
    
    expect(requestService).not.toBeNull();
  });

  it('TokenService should be imported', function() { 
    var tokenService = new TokenService(); 

    expect(tokenService).not.toBeNull();
  });
});