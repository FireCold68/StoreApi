import express from "express";
const router = express.Router();
import bcryptjs from 'bcryptjs';
import Accounts from '../models/account.js';

//create new account
router.post('/create_new_account', async(req,res) => {

    //get user data
    const {firstName,lastName,email,password} = req.body;

    // Check if user exist
    Accounts.findAll({where: {email: email}})
    .then(async accounts =>{

        if(accounts.length == 0){
            
            //crpt username password
            const hash = await bcryptjs.hash(password,10);
            // create new account
            Accounts.create({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: hash,
                isApproved: false
            })
            .then(account_created =>{

            })
            .catch(error => {
                return res.status(200).json({
                    message: account_created
                })
            })
        } else {
            return res.status(200).json({
                message: 'Account not available'
            })
        }

    })
    .catch(error =>  {
        return res.status(500).json({
            message: error.message
        })
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