import axios from "axios";
import {
  ActivateUserPayload,
  ActivateUserResponse,
  RegisterPayload,
  RegisterResponse,
  SignInPayload,
  SignInResponse,
} from "@/types/auth.types";
import axiosInstance from "@/lib/axios";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://api.kapilstore.com.np/api/v1";

export const authAPI = {
  register: async (payload: RegisterPayload): Promise<RegisterResponse> => {
    const { data } = await axiosInstance.post<RegisterResponse>(
      "/register-user",
      payload,
    );
    return data;
  },

  signIn: async (payload: SignInPayload): Promise<SignInResponse> => {
    const { data } = await axiosInstance.post<SignInResponse>(
      "/login",
      payload,
    );
    return data;
  },

  activateUser: async (
    payload: ActivateUserPayload,
  ): Promise<ActivateUserResponse> => {
    const { data } = await axiosInstance.post<ActivateUserResponse>(
      "/activate-user",
      payload,
    );
    return data;
  },
};
