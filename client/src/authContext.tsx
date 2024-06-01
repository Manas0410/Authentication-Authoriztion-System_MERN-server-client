import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { accessTokenKey, baseUrl } from "../envconfig";
import axios from "axios";

// Define the user type
export interface User {
  name: string;
  email: string;
  role: string;
}

// Define the context type
interface UserContextType {
  user: User | null;
  accessToken: string | null;
  setUser: Dispatch<SetStateAction<User | null>>;
  setAccessToken: Dispatch<SetStateAction<string | null>>;
  FetchingUserData: boolean;
}

// Create the context with a default value of null
const UserContext = createContext<UserContextType | null>(null);

interface UserContextProviderProps {
  children: ReactNode;
}

const UserContextProvider: React.FC<UserContextProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [FetchingUserData, setFetchingUserData] = useState<boolean>(false);

  useEffect(() => {
    const accessToken = localStorage.getItem(accessTokenKey);
    if (!accessToken) return;

    const getDataFromAccessToken = async () => {
      try {
        setFetchingUserData(true);
        const res = await axios.get(
          `${baseUrl}/user/getUserInfoByToken/${accessToken}`
        );
        const { decoded } = res.data;
        const { name, email, role } = decoded;
        if (!email || !name || !role) return;
        setUser({
          name: name,
          email: email,
          role: role,
        });
        console.log({ name, email, role }, "userdata");
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setFetchingUserData(false);
      }
    };

    getDataFromAccessToken();
  }, []);

  return (
    <UserContext.Provider
      value={{ user, accessToken, setUser, setAccessToken, FetchingUserData }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };

// axios.get("ur_url_here/",data,{withCredentials:true})
