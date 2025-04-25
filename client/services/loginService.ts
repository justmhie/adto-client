import { ClientLoginDto } from "../types/dto/client-login.type";
import { BASE_URL } from "../config";

export const loginClientUser = async (loginData: ClientLoginDto) => {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  const data = await response.json();
  return data;
};
