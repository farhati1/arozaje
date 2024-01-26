import React from 'react'; 
import IPost from './IPost'; 

export default interface IUser {
    _id?: string;
    name: string; 
    lastName: string; 
    email: string; 
    userId: string; 
    password : string; 
    isBotaniste: boolean; 
    plantGuarded: Array<IPost>; 
}