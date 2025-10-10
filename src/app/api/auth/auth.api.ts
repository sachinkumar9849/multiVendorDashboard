import axios from "axios";
import {
  ActivateUserPayload,
  ActivateUserResponse,
  RegisterPayload,
  RegisterResponse,
} from "@/types/auth.types";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://api.kapilstore.com.np/api/v1";

export const authAPI = {
  register: async (payload: RegisterPayload): Promise<RegisterResponse> => {
    const { data } = await axios.post<RegisterResponse>(
      `${API_BASE_URL}/register-user`,
      payload,
    );
    return data;
  },
  activateUser: async (
    payload: ActivateUserPayload,
  ): Promise<ActivateUserResponse> => {
    const { data } = await axios.post<ActivateUserResponse>(
      `${API_BASE_URL}/activate-user`,
      payload,
    );
    return data;
  },
};
