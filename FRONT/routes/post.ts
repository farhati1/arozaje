import axios from 'axios';
import IComment from '../shared/interfaces/IComment';
import IPost from '../shared/interfaces/IPost'
import dotenv from 'dotenv';

async function getAllPosts(): Promise<IPost[]> {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/posts`);
    const posts = res.data as IPost[];
    return posts;
}

async function GetPostsByUser(idUser: string): Promise<IPost[]> {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/posts/${idUser}`);
    const posts = res.data as IPost[];
    return posts;
}

async function GetPostById(id: String): Promise<IPost> {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/posts/${id}`);
    const post: IPost = res.data as IPost;
    return post;
}

async function createPost(title: string, comments: Array<IComment>, image: string, idUser: String, description?: String, adresse?: String): Promise<IPost> {
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/posts`, {
            title,
            comments,
            image,
            idUser,
            adresse,
            description
        });
        const newPost: IPost = res.data as IPost;
        return newPost;
    }
    catch (error) {
        console.error(error);
        return error;
    }
}

async function deletePost(id: String) {
    try {
        const res = await axios.delete(`${process.env.REACT_APP_API_URL}/posts/${id}`);
        return true;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}

export default {
    GetPostById,
    GetPostsByUser,
    createPost,
    deletePost,
    getAllPosts
} 