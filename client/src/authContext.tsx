import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

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

  return (
    <UserContext.Provider
      value={{ user, accessToken, setUser, setAccessToken }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };

// axios.get("ur_url_here/",data,{withCredentials:true})
