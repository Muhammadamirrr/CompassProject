import mongoose from 'mongoose'

const accountSchema = new mongoose.Schema({
    account_id: Number,
    limit: Number,
    products: [String],
})

const AccountModel = mongoose.model('Accounts', accountSchema)
export default AccountModel
