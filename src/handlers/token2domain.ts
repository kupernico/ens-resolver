// Implements https://docs.ens.domains/dapp-developer-guide/ens-as-nft
import { ethers } from "ethers";
import GetJSON from "../util/json-request";

const Token2Domain = async request => {
    const token = request.params.token

    const BigNumber = ethers.BigNumber
    const labelHash = BigNumber.from(token).toHexString()

    const owner = await fetchENSDomain(labelHash);

    const body = JSON.stringify(owner)
    const headers = { 'Content-type': 'application/json' }
    return new Response(body, { headers })
  }
  
export default Token2Domain

async function fetchENSDomain(labelHash: string): Promise<Array<string>> {
  const theGraph = "https://api.thegraph.com/subgraphs/name/ensdomains/ens";

  const GET_LABEL_NAME = `{
    domains(first:1, where:{labelhash:"${labelHash}"}){
      labelName
    }
  }`;

  const result = await GetJSON(theGraph, GET_LABEL_NAME);
  return result.data;
}


