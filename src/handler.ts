import { Router } from 'itty-router'

import Resolver from './handlers/resolver'
import Domain2Token from './handlers/domain2token'
import Domain2Avatar from './handlers/domain2avatar'
import Token2Domain from './handlers/token2domain'

const router = Router()

router
  .get('/ens/resolver', Resolver)
  .get('/ens/resolver/:domain/erc721', Domain2Token)
  // .get('/ens/resolver/:domain/avatar', Domain2Avatar)
  .get('/ens/resolver/:erc721/domain', Token2Domain)
  .get('*', () => new Response("Not found", { status: 404 }))

export const handleRequest = request => router.handle(request)