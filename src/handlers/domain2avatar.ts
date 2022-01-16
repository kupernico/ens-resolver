import { ethers, providers } from "ethers";

const Domain2Avatar = async request => {
    const domain = request.params.domain

    const avatar = await fetchENSAvatar(domain)

    const body = JSON.stringify({ avatar: avatar})
    const headers = { 'Content-type': 'application/json' }
    return new Response(body, { headers })
  }
  
export default Domain2Avatar


async function fetchENSAvatar(domain: string): Promise<string> {
  // Connect to mainnet (homestead)
  const provider = new ethers.providers.CloudflareProvider( )

  const resolver = await provider.getResolver(domain)
  const avatar = await resolver.getText("avatar")

  return avatar;
}