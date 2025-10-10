import { useMutation } from "@tanstack/react-query";
// import { authAPI } from "@/api/auth.api";
import { ActivateUserPayload } from "@/types/auth.types";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { authAPI } from "@/app/api/auth/auth.api";

export const useActivateUser = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (payload: ActivateUserPayload) => authAPI.activateUser(payload),
    onSuccess: (data) => {
      toast.success(data.message || "Account activated successfully!");
      // Redirect to login page
      setTimeout(() => {
        router.push("/signin");
      }, 1500);
    },
    onError: (error: any) => {
      const errorMessage =
        error?.response?.data?.message ||
        "Activation failed. Please check your code and try again.";
      toast.error(errorMessage);
    },
  });
};
