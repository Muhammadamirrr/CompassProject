import CustomerModel from '../models/customers'
import TransactionModel from '../models/transactions'

export const resolvers = {
    Query: {
        customers: async (_: string, { page = 1, limit = 10 }) => {
            const skip = (page - 1) * limit
            const data = await CustomerModel.aggregate([
                {
                    $unwind: '$accounts',
                },
                {
                    $lookup: {
                        from: 'accounts',
                        localField: 'accounts',
                        foreignField: 'account_id',
                        as: 'accountDetails',
                    },
                },
                {
                    $unwind: '$accountDetails',
                },
                {
                    $group: {
                        _id: '$_id',
                        name: { $first: '$name' },
                        address: { $first: '$address' },
                        birthdate: { $first: '$birthdate' },
                        email: { $first: '$email' },
                        tier_and_details: { $first: '$tier_and_details' },
                        accounts: {
                            $push: {
                                account_id: '$accountDetails.account_id',
                                limit: '$accountDetails.limit',
                                products: '$accountDetails.products',
                            },
                        },
                    },
                },
                {
                    $skip: skip,
                },
                {
                    $limit: limit,
                },
            ])

            return data
        },
        transactionDetails: async (_: any, { id }: { id: number }) => {
            return await TransactionModel.find({ account_id: id })
        },
    },
}
