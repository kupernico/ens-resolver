// Implements https://docs.ens.domains/dapp-developer-guide/ens-as-nft
import { ethers } from "ethers";

const Token2Domain = async request => {
    const token = request.params.token

    const BigNumber = ethers.BigNumber
    const labelHash = BigNumber.from(token).toHexString()

    const owner = await fetchEnsTokenOwner(labelHash);

    const body = JSON.stringify(owner)
    const headers = { 'Content-type': 'application/json' }
    return new Response(body, { headers })
  }
  
export default Token2Domain

async function getJson(endpoint: string, query: string): Promise<any> {
  const resp = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({query})
   });

  return resp.json();
}

async function fetchEnsTokenOwner(labelHash: string): Promise<Array<string>> {
  const theGraph = "https://api.thegraph.com/subgraphs/name/ensdomains/ens";
  const GET_LABEL_NAME = `{
    domains(first:1, where:{labelhash:"${labelHash}"}){
      labelName
    }
  }`;

  const res = await getJson(theGraph, GET_LABEL_NAME);
  return res.data;
}


