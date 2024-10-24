import { _post } from "../client";
import { ClientLoginDto } from "../types/dto/client-login.type";

export const loginUser = async (loginData: ClientLoginDto) => {
  const response = await _post<unknown, ClientLoginDto>(
    "/api/auth/login/user",
    loginData
  );
  return response.data;
};
