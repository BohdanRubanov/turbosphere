import {
    createContext,
    type ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";
import type { IUser } from "../shared/types/user";

interface LoginCredentials {
    email: string;
    password: string;
};
interface RegisterCredentials {
    username: string;
    email: string;
    password: string;
    avatar: string;

}
interface IUserContext {
    token: string;
    user: IUser | null;
    registration: (userData: RegisterCredentials) => Promise<void | string>;
    login: (userData: LoginCredentials) => Promise<void | string>;
}
const UserContext = createContext<IUserContext | null>(null);

export function useUserContext() {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("context not defined");
    }
    return context;
}

interface UserContextProviderProps {
    children: ReactNode;
}


export function UserContextProvider(props: UserContextProviderProps) {
    const { children } = props;

    const [token, setToken] = useState<string>("");
    const [user, setUser] = useState<IUser | null>(null);

    async function handleResponse(response: Response) {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
            return await response.json();
        }
        const text = await response.text();
        throw new Error(text || "Server error");
    }

    async function registration(userData: RegisterCredentials) {
        try {
            const response = await fetch("http://localhost:8000/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userData),
            });

            const result = await handleResponse(response);

            if (!response.ok) {
                return result.message || "Registration failed";
            }

            setToken(result.token);
            localStorage.setItem("token", result.token);
        } catch (error) {
            console.error(error);
            return "Registration error";
        }
    }

    async function login(userData: LoginCredentials) {
        try {
            const response = await fetch("http://localhost:8000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userData),
            });

            const result = await handleResponse(response);

            if (!response.ok) {
                return result.message || "Login failed";
            }

            setToken(result.token);
            localStorage.setItem("token", result.token);
        } catch (error) {
            console.error(error);
            return "Login error";
        }
    }

    async function me() {
        if (!token) return;
        try {
            const response = await fetch("http://localhost:8000/me", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.status === 401) {
                logout();
                return;
            }

            const result = await handleResponse(response);
            setUser(result);
        } catch (error) {
            console.error("Fetch me error:", error);
        }
    }

    const logout = () => {
        setToken("");
        setUser(null);
        localStorage.removeItem("token");
    };

    useEffect(() => {
        const localStorageToken = localStorage.getItem("token");
        if (localStorageToken) {
            setToken(localStorageToken);
        }
    }, []);

    useEffect(() => {
        if (token) {
            me();
        }
    }, [token]);

    return (
        <UserContext.Provider value={{ token, user, registration, login }}>
            {children}
        </UserContext.Provider>
    );
}
