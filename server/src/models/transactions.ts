import mongoose from 'mongoose'

const transactionDetailSchema = new mongoose.Schema({
    date: Date,
    amount: Number,
    transaction_code: String,
    symbol: String,
    price: String,
    total: String,
})

const transactionSchema = new mongoose.Schema({
    account_id: {
        type: Number,
        required: true,
    },
    transaction_count: {
        type: Number,
        required: true,
    },
    bucket_start_date: {
        type: Date,
        required: true,
    },
    bucket_end_date: {
        type: Date,
        required: true,
    },
    transactions: {
        type: [transactionDetailSchema],
        required: true,
    },
})

const TransactionModel = mongoose.model('Transaction', transactionSchema)

export default TransactionModel
