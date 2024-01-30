import { Children, ReactNode, createContext } from "react";
import { AuthorizationContext, LoginFormInput } from "./types";
import { useNavigate } from "react-router";
import { loginUser } from "./api/postLogin";

export const Authorization = createContext<AuthorizationContext>({
  login: async () => {},
  logout: () => {},
});

const AuthContext = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const login = async ({ e_mail, password, client_type }: LoginFormInput) => {
    const response = await loginUser({ e_mail, password, client_type });

    if (response?.token) {
      localStorage.setItem("jwt", response?.token);
      localStorage.setItem("registraion_id", response?.registraion_id);
      localStorage.setItem("role", response?.client_type);
      navigate(`/${response?.client_type}-home`);
    }
  };
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <Authorization.Provider value={{ login, logout }}>
      {children}
    </Authorization.Provider>
  );
};

export default AuthContext;
