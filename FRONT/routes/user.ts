import axios from "axios";
import IUser from "./../../shared/interfaces/IUser";
import dotenv from 'dotenv';


dotenv.config();
async function GetUsers() {
  const res = await axios.get(`${process.env.REACT_APP_API_URL}/users`);
  return res.data;
}

export async function GetUserById(userId: String): Promise<String> {
  const res = await axios.get(`${process.env.REACT_APP_API_URL}/users/${userId}`);
  const user: IUser = res.data as IUser;
  return user.userId ;
}

async function createUser(user: IUser): Promise<IUser> {
  try {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/users`, user);
    const newUser: IUser = res.data as IUser;
    return newUser;
  } catch (error) {
    console.error(error);
    return error;
  }
}

async function connectUser(userId: String, password: String): Promise<Boolean> {
  try {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/users/login`, {
      userId,
    });

    console.log("Réponse du serveur :", res.data);

    // Vérifier si la requête s'est bien déroulée (statut 200)
    if (res.status === 200) {
      const token = res.data.token;

      // Conditionnellement stocker le token en fonction de l'environnement
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem("authToken", token);
      } else {
        console.error("localStorage n'est pas disponible dans cet environnement.");
      }

      // Retourner true pour indiquer que la connexion a réussi
      return true;
    } else {
      // Retourner false ou gérer l'erreur en conséquence
      return false;
    }
  } catch (error) {
    console.error("Erreur lors de la connexion de l'utilisateur :", error);

    // Retourner false ou gérer l'erreur en conséquence
    return false;
  }
}

async function deleteUser(id: String) {
  try {
    const res = await axios.delete(`${process.env.REACT_APP_API_URL}/users/${id}`);
    return true;
  } catch (error) {
    console.error("Erreur lors de la connexion de l'utilisateur :", error);
    return false;
  }
}

async function updateUser(user: IUser): Promise<IUser> {
  try {
    const res = await axios.patch(
      `${process.env.REACT_APP_API_URL}/users/${user._id}`,
      user
    );
    const updatedUser = res.data;
    return updatedUser;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to update user");
  }
}

export default {
  GetUsers,
  GetUserById,
  connectUser,
  deleteUser,
  updateUser,
  createUser,
};

