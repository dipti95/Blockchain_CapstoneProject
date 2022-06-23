var ERC721MintableComplete = artifacts.require("ERC721MintableComplete")

contract("TestERC721Mintable", (accounts) => {
  const account_one = accounts[0]
  const account_two = accounts[1]

  describe("match erc721 spec", function () {
    beforeEach(async function () {
      this.contract = await ERC721MintableComplete.new({ from: account_one })

      // TODO: mint multiple tokens
      await this.contract.mint(account_one, 1)
      await this.contract.mint(account_one, 2)
      await this.contract.mint(account_one, 3)
      await this.contract.mint(account_one, 4)
    })

    it("should return total supply", async function () {
      let result = await this.contract.totalSupply()
      assert.equal(result, 4, "Incorrect minted tokens.")
    })

    it("should get token balance", async function () {
      let balance_one = await this.contract.balanceOf(account_one)
      assert.equal(balance_one, 4, "Account_one: Incorrect token balance.")
      let balance_two = await this.contract.balanceOf(account_two)
      assert.equal(balance_two, 0, "Account_two: Incorrect token balance.")
    })

    // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
    it("should return token uri", async function () {
      let tokenUri = await this.contract.tokenURI(1)
      assert.equal(
        tokenUri,
        "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1",
        "TokenUri Not found."
      )
    })

    it("should transfer token from one owner to another", async function () {
      try {
        await this.contract.transferFrom(account_one, account_two, 2, {
          from: account_one,
        })
      } catch (err) {
        console.log(err)
      }

      let owner = await this.contract.ownerOf(2)
      assert.equal(owner, account_two, "Owner Not changed.")
    })
  })

  describe("have ownership properties", function () {
    beforeEach(async function () {
      this.contract = await ERC721MintableComplete.new({ from: account_one })
    })

    it("should fail when minting when address is not contract owner", async function () {
      let error
      try {
        await this.contract.mint(account_one, 4, "baseURI4", {
          from: account_two,
        })
      } catch (e) {
        error = e
      }
      assert.notEqual(
        error,
        undefined,
        "Fail to mint. Address is not contract owner."
      )
    })

    it("should return contract owner", async function () {
      let address = await this.contract.get_owner.call()
      //console.log(address)
      assert.equal(address, account_one, "Not the owner.")
    })
  })
})
