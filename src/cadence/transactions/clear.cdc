import MyNFT from 0x40582f87fa3d66cb
import NFTMarketplace from 0x40582f87fa3d66cb


transaction() {

  prepare(acct: AuthAccount) {
    let collection <- acct.load<@MyNFT.Collection>(from: /storage/TestCollection)
                        ?? panic("This collection does not exist here")
    destroy collection

     let saleCollection <- acct.load<@NFTMarketplace.SaleCollection>(from: /storage/TestSaleCollection)
                        ?? panic("This collection does not exist here")
    destroy saleCollection

  }

  execute {
    log("Collection Destroyed")
  }
}