export const getNFTsScript = `
import MyNFT from 0x77843dcd06310709
import NonFungibleToken from 0x631e88ae7f1d7c20

pub fun main(account: Address): [&MyNFT.NFT] {
  let collection = getAccount(account).getCapability(/public/TestCollection)
                    .borrow<&MyNFT.Collection{NonFungibleToken.CollectionPublic, MyNFT.CollectionPublic}>()
                    ?? panic("Can't get the User's collection.")

  let returnVals: [&MyNFT.NFT] = []

  let ids = collection.getIDs()
  for id in ids {
    returnVals.append(collection.borrowEntireNFT(id: id))
  }

  return returnVals
}
`



