import { _post } from "../client";
import { AdminLoginDto } from "../types/dto/admin-login.type";
import { ClientLoginDto } from "../types/dto/client-login.type";

const loginUser = async (loginData: ClientLoginDto) => {
  const response = await _post<unknown, ClientLoginDto>(
    "/api/auth/login/user",
    loginData
  );
  return response.data;
};

const loginAdmin = async (loginData: AdminLoginDto) => {
  const response = await _post<unknown, AdminLoginDto>(
    "/api/auth/login/admin",
    loginData
  );
  return response.data;
};

export { loginUser, loginAdmin };
