import express from "express";
const router = express.Router();
import Accounts from '../models/account.js';

//create new account
router.post('/create_new_account', async(req,res) => {

    // Check if user exist
    

})
//get all accounts
router.get('/get_all_users', async(req, res) => {
    Accounts.findAll()
    .then(allusers => {
        return res.status(200).json({
            message: allusers
        })
    })
    .catch(error => {
        return res.status(500).json({
            message: error.message
        })
    })
})

export default router;