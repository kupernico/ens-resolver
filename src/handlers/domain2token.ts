// Implements https://docs.ens.domains/dapp-developer-guide/ens-as-nft
import { ethers } from "ethers";

const Domain2Token =  request => {
    const domain = request.params.domain

    const BigNumber = ethers.BigNumber
    const utils = ethers.utils

    const labelHash = utils.keccak256(utils.toUtf8Bytes(domain))
    const tokenId = BigNumber.from(labelHash).toString()

    const body = JSON.stringify({ domain: domain, erc721: tokenId })
    const headers = { 'Content-type': 'application/json' }
    return new Response(body, { headers })
  }
  
export default Domain2Token

