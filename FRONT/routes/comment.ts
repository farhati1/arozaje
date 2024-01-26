import axios from 'axios';
import IComment from '../shared/interfaces/IComment'


const { REACT_APP_API_URL } = process.env;


async function GetComment(id: string): Promise<IComment> {
    const res = await axios.get(`${REACT_APP_API_URL}/comments/${id}`);
    const comment = res.data as IComment;
    return comment;
}

async function deleteComment(id: String) {
    try {
        const res = await axios.delete(`${process.env.REACT_APP_API_URL}/comment/${id}`);
        return true;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}

export default {
    GetComment,
    deleteComment
} 