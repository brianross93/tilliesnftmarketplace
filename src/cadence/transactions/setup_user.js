export const setupUserTx = `
import MyNFT from 0x77843dcd06310709
import NonFungibleToken from 0x631e88ae7f1d7c20
import FungibleToken from 0x9a0766d93b6608b7
import FlowToken from 0x7e60df042a9c0868
import NFTMarketplace from 0x77843dcd06310709

transaction {

  prepare(acct: AuthAccount) {
    acct.save(<- MyNFT.createEmptyCollection(), to: /storage/TestCollection)
    acct.link<&MyNFT.Collection{MyNFT.CollectionPublic, NonFungibleToken.CollectionPublic}>(/public/TestCollection, target: /storage/TestCollection)
    acct.link<&MyNFT.Collection>(/private/TestCollection, target: /storage/TestCollection)
    
    let TestCollection = acct.getCapability<&MyNFT.Collection>(/private/TestCollection)
    let FlowTokenVault = acct.getCapability<&FlowToken.Vault{FungibleToken.Receiver}>(/public/flowTokenReceiver)

    acct.save(<- NFTMarketplace.createSaleCollection(MyNFTCollection: TestCollection, FlowTokenVault: FlowTokenVault), to: /storage/TestSaleCollection)
    acct.link<&NFTMarketplace.SaleCollection{NFTMarketplace.SaleCollectionPublic}>(/public/TestSaleCollection, target: /storage/TestSaleCollection)
  }

  execute {
    log("A user stored a Collection and a SaleCollection inside their account")
  }
}

`