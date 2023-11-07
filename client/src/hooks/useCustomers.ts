import { useQuery } from '@apollo/client'
import { GET_CUSTOMERS } from '../gql/customers.gql'

export const useCustomers = (page: number, limit: number) => {
  return useQuery(GET_CUSTOMERS, {
    variables: {
      limit,
      page,
    },
  })
}
