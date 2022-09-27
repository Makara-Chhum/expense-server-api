const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');


//create Expenseschema
const ExpenseSchema = mongoose.Schema({
    title: {
        require: [true, 'Title is require'],
        type: String,
    },
    description: {
        require: [true, 'Description is require'],
        type: String,
    },
    type: {
        type: String,
        default: "expense",
    },
    amount: {
        require: [true, 'Amount is require'],
        type: Number,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: [true, 'User ID is required'],
    },
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
        },
        toObject: {
            virtuals: true,
        },
    }
);

//paginate 
ExpenseSchema.plugin(mongoosePaginate);     

//compile the schema into the db
const Expense = mongoose.model('Expense', ExpenseSchema);

module.exports = Expense;
