import { storage } from "@/utils/storage";
import { User } from "@/types/auth.types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = storage.getToken();
    const userData = storage.getUser();

    if (token && userData) {
      setUser(userData);
    }
    setIsLoading(false);
  }, []);

  const logout = () => {
    storage.clearAll();
    setUser(null);
    router.push("/signin");
  };

  return {
    user,
    isAuthenticated: !!user,
    isLoading,
    logout,
  };
};
