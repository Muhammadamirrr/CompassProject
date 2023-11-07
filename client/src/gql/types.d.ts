export type Customer = {
  _id: ID
  username: string
  name: string
  address: string
  birthdate: Date
  email: string
  accounts: [Account]
  tier_and_details: JSON
}

export type GetCustomers = {
  customers: [Customer]
}
