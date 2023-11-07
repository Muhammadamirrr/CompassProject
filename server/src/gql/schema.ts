import { gql } from 'apollo-server-express'

// GraphQL schema
export const typeDefs = gql`
    scalar Date
    scalar JSON

    type Account {
        account_id: Float
        limit: Float
        products: [String]
    }

    type Customer {
        _id: ID
        username: String
        name: String
        address: String
        birthdate: Date
        email: String
        accounts: [Account]
        tier_and_details: JSON
    }

    type TransactionDetail {
        date: Date
        amount: Float
        transaction_code: String
        symbol: String
        price: String
        total: String
    }

    type Transaction {
        _id: ID
        account_id: Float
        transaction_count: Float
        bucket_start_date: Date
        bucket_end_date: Date
        transactions: [TransactionDetail]
    }

    type Query {
        customers(page: Int, limit: Int): [Customer]
        transactionDetails(id: Float): [Transaction]
    }
`
