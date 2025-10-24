import { api } from "../services/api";

export interface User {
  id: number;
  name: string;
}

// Sample users API call for testing
export const getUsers = async (): Promise<User[]> => {
  try {
    const users = await api.get<User[]>("/users");
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};
