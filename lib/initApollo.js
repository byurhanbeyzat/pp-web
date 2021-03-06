import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { WebSocketLink } from 'apollo-link-ws'
import { SubscriptionClient } from 'subscriptions-transport-ws'
import fetch from 'isomorphic-unfetch'

let apolloClient = null

if (!process.browser) {
  global.fetch = fetch
}

function create(initialState, { getToken }) {
  const httpLink = createHttpLink({
    uri:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:4000/graphql'
        : 'http://api.pokerplanning.me/graphql',
    credentials: 'include',
  })

  const authLink = setContext((_, { headers }) => {
    const token = getToken()
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    }
  })

  // const wsClient = SubscriptionClient({
  //   uri: 'ws://localhost:4000/graphql',
  //   options: {
  //     reconnect: true,
  //   },
  // })

  // const wsLink = new WebSocketLink(wsClient)

  // const Links = wsLink.concat(authLink.concat(httpLink))

  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser,
    link: authLink.concat(httpLink),
    cache: new InMemoryCache().restore(initialState || {}),
  })
}

export default function initApollo(initialState, options) {
  if (!process.browser) {
    return create(initialState, options)
  }

  if (!apolloClient) {
    apolloClient = create(initialState, options)
  }

  return apolloClient
}
