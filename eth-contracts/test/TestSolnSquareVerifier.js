const SquareVerifier = artifacts.require("Verifier")
var SolnSquareVerifier = artifacts.require("SolnSquareVerifier")

let a = [
  "0x29d88baf2213f4fe3a4de56f7535493a642c89a37924d1769bc27a700da6c5c7",
  "0x0513f54f9ecb3ba65712b525b8becac23d2d400da0610b28943b7f622fa38ed7",
]
let b = [
  [
    "0x01b538db2f9e10b1325de08f1b6c01e9eb5b75c0f1a10caf8510c5f50576b415",
    "0x09f565b29e9bb4e2b079fbff19e2bb17050fe2d04206d64067f30274f113c107",
  ],
  [
    "0x1cb14041e010153dd2b6366450b136627f0c4a4de8de53db73a3a88bcb311617",
    "0x11481f34a2e2b47bbe910fcae877dacf0380faad5f035f09bceae3f1200c899d",
  ],
]
let c = [
  "0x300f5f0f0535288259341879126bd48db4cbe569b7ca739b422865e90cdc7a34",
  "0x074467f61cbe85506a9ecfd2e44e69c2b1d33dc23457207d419dcc9bd1f2e3e6",
]
let inputs = [
  "0x0000000000000000000000000000000000000000000000000000000000000009",
  "0x0000000000000000000000000000000000000000000000000000000000000001",
]

contract("TestSolnSquareVerifier", async (accounts) => {
  beforeEach(async function () {
    this.verifier = await SquareVerifier.new({ from: accounts[0] })
    this.solnSquareVerifier = await SolnSquareVerifier.new(
      this.verifier.address,
      {
        from: accounts[0],
      }
    )
  })

  // Test if a new solution can be added for contract - SolnSquareVerifier
  it("added new solution for contract", async function () {
    let addedSolution = await this.solnSquareVerifier.addSolution(
      a,
      b,
      c,
      inputs,
      1,
      accounts[1],
      { from: accounts[0] }
    )

    let verification = await this.verifier.verifyTx.call(a, b, c, inputs, {
      from: accounts[0],
    })

    let owner = await this.solnSquareVerifier.ownerOf(1)
    console.log(owner)
    console.log(verification)
    let event = addedSolution.logs[0].event
    console.log(event)
    assert.equal(event, "AddedSolution", "Solution not added.")
  })

  //   // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
  it("should mint tokens for contract", async function () {
    let mint = await this.solnSquareVerifier.mintNewNFT(
      a,
      b,
      c,
      inputs,
      2,
      accounts[2],
      {
        from: accounts[0],
      }
    )

    let verification = await this.verifier.verifyTx.call(a, b, c, inputs, {
      from: accounts[0],
    })
    console.log(verification)

    let owner = await this.solnSquareVerifier.ownerOf(2)
    console.log(owner + "owner")
    console.log(accounts[2])
    //console.log(mint)
    let event = mint.logs[1].event
    console.log(event)
    assert.equal(event, "Transfer", "Not minted")
  })
})
