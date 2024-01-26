import React from 'react';
import IComment from './IComment';

export default interface IPost {
    id: string;
    title: String;
    date: Date;
    userId: string;
    comments: Array<IComment>;
    description?: string;
    adresse?: string;
    image: string;
    isGuarded?: string;
}