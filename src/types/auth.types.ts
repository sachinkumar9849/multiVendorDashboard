export interface RegisterPayload {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  password: string;
  current_role: "customer" | "vendor";
}

export interface RegisterResponse {
  data: {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    profile_image: string;
    user_type: string;
    is_active: boolean;
    is_blacklisted: boolean;
    reset_password_code: string;
    reset_expires_at: string;
    created_at: string;
    updated_at: string;
  };
  message: string;
}
export interface ActivateUserPayload {
  phone: string;
  code: string;
}

export interface ActivateUserResponse {
  message: string;
}
export interface SignInPayload {
  phone: string;
  password: string;
}

export interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  profile_image: string;
  is_active: boolean;
  is_blacklisted: boolean;
  current_role: "customer" | "vendor";
  created_at: string;
  updated_at: string;
  phone: string;
}

export interface SignInResponse extends User {
  token: string;
}
