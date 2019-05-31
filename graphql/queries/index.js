import gql from 'graphql-tag'

export const GET_USER = gql`
  query getUser {
    me {
      id
      name
      bio
      email
      avatar
      sessions {
        id
        name
        cardSet
        createdBy {
          id
          name
          avatar
        }
        members {
          id
          name
          avatar
        }
      }
      createdAt
    }
  }
`

export const GET_SESSIONS = gql`
  query getSessions {
    getSessions {
      id
      name
      cardSet
      createdBy {
        id
        name
      }
      members {
        id
        name
      }
      polls {
        id
        topic
        description
      }
      createdAt
      updatedAt
    }
  }
`

export const GET_SESSION = gql`
  query getSession($id: ID!) {
    getSession(id: $id) {
      id
      name
      cardSet
      createdBy {
        id
        name
        avatar
      }
      members {
        id
        name
        avatar
      }
      polls {
        id
        topic
        description
      }
      createdAt
    }
  }
`
