pragma solidity >=0.4.21 <0.6.0;


// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
import "./ERC721Mintable.sol";
import "./verifier.sol";

// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is ERC721MintableComplete{

    Verifier public verifier;

	
	constructor(address verifierContractAddress)  public{
        verifier = Verifier(verifierContractAddress);
    }



// TODO define a solutions struct that can hold an index & an address
struct Solution {
    uint256 idx;
    address addr;
}


// TODO define an array of the above struct
Solution[] solutions;


// TODO define a mapping to store unique solutions submitted
mapping (bytes32 => Solution)  submittedSolution;



// TODO Create an event to emit when a solution is added
event AddedSolution(uint256 idx , address addr);



// TODO Create a function to add the solutions to the array and emit the event
function addSolution(uint[2] memory a, uint[2][2] memory b, uint[2] memory c, uint[2] memory inputs, uint256 index, address solutionAddr)public{
        
        bytes32 solutionkey = keccak256(abi.encodePacked(a,b,c ,inputs));
        require(submittedSolution[solutionkey].addr == address(0), 'The solution has already been submitted');
        Solution memory currentSolution = Solution({idx: index, addr: solutionAddr});
 
        submittedSolution[solutionkey] = currentSolution;
        solutions.push(currentSolution);
        emit AddedSolution(index , solutionAddr);
}



// TODO Create a function to mint new NFT only after the solution has been verified
//  - make sure the solution is unique (has not been used before)
//  - make sure you handle metadata as well as tokenSuplly
  function mintNewNFT(uint[2] memory a, uint[2][2] memory b, uint[2] memory c, uint[2] memory inputs, uint256 tokenId, address addr)public returns(bool){
     
     bytes32 solutionkey = keccak256(abi.encodePacked(a,b,c ,inputs));
     require(verifier.verifyTx(a, b, c, inputs) == true,"Incorrect Proof");
    
     require(submittedSolution[solutionkey].addr != addr && submittedSolution[solutionkey].idx != tokenId, "solution is not unique." );

     addSolution(a,b,c,inputs, tokenId, addr);
     return mint( addr, tokenId);

  }

  
}


























