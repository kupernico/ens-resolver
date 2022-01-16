import { ethers } from "ethers";

const Domain2Avatar = async request => {
    const domain = request.params.domain

    const avatar = await fetchENSAvatar(domain);

    const body = JSON.stringify({ domain: domain, avatar: avatar})
    const headers = { 'Content-type': 'application/json' }
    return new Response(body, { headers })
  }
  
export default Domain2Avatar

async function fetchENSAvatar(domain: string): Promise<string> {
  var url = 'YOUR_ETHEREUM_ENDPOINT'
  
  const provider = new ethers.providers.JsonRpcProvider(url);
  const resolver = await provider.getResolver(domain);
  const result = await resolver.getText("avatar");

  return result;
}

