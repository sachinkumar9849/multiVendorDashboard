import { useMutation } from "@tanstack/react-query";
// import { authAPI } from "@/api/auth.api";
import { RegisterPayload } from "@/types/auth.types";
import { useRouter } from "next/navigation";
import { toast } from "sonner"; // or your preferred toast library
import { authAPI } from "@/app/api/auth/auth.api";

export const useRegister = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (payload: RegisterPayload) => authAPI.register(payload),
    onSuccess: (data) => {
      toast.success(data.message || "Registration successful!");
      // Redirect to verification page or login
      router.push("/activate-user");
    },
    onError: (error: any) => {
      const errorMessage =
        error?.response?.data?.message ||
        "Registration failed. Please try again.";
      toast.error(errorMessage);
    },
  });
};
