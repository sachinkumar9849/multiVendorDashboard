import { User } from "@/types/auth.types";

export const storage = {
  setToken: (token: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("auth_token", token);
    }
  },
  getToken: (): string | null => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("auth_token");
    }
    return null;
  },
  removeToken: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("auth_token");
    }
  },
  setUser: (user: User) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("user", JSON.stringify(user));
    }
  },
  getUser: (): User | null => {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("user");
      return user ? JSON.parse(user) : null;
    }
    return null;
  },
  removeUser: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("user");
    }
  },
  setRememberMe: (remember: boolean) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("remember_me", remember.toString());
    }
  },
  getRememberMe: (): boolean => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("remember_me") === "true";
    }
    return false;
  },
  clearAll: () => {
    storage.removeToken();
    storage.removeUser();
  },
};
