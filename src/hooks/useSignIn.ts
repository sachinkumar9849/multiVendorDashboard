import { useMutation } from "@tanstack/react-query";
// import { authAPI } from "@/api/auth.api";
import { SignInPayload } from "@/types/auth.types";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { storage } from "@/utils/storage";
import { authAPI } from "@/app/api/auth/auth.api";

export const useSignIn = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (payload: SignInPayload) => authAPI.signIn(payload),
    onSuccess: (data) => {
      // Store token and user data
      storage.setToken(data.token);

      // Store user data without token
      const { token, ...userData } = data;
      storage.setUser(userData);

      toast.success("Sign in successful!");

      // Redirect based on user role
      if (data.current_role === "vendor") {
        // router.push("/vendor/dashboard");
        router.push("/");
      } else {
        router.push("/");
      }
    },
    onError: (error: any) => {
      const errorMessage =
        error?.response?.data?.message ||
        "Sign in failed. Please check your credentials.";
      toast.error(errorMessage);
    },
  });
};
