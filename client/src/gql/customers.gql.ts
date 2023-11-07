import { gql } from '@apollo/client'

export const GET_CUSTOMERS = gql`
  query GetCustomers($limit: Int, $page: Int) {
    customers(limit: $limit, page: $page) {
      _id
      name
      email
      birthdate
      address
      accounts {
        account_id
        limit
        products
      }
    }
  }
`
