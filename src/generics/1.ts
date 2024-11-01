import axios from "axios";

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}
interface UserData {
  id: number;
  name: string;
  email: string;
}

async function fetchUserData(): Promise<void> {
  try {
    const userData = await fetchData<UserData>("url");
    console.log("User data:", userData);
  } catch (error) {
    console.log("Error fetching user data");
  }
}
fetchUserData();

export {};
