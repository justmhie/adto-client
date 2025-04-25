import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { ClientLoginDto } from "../types/dto/client-login.type";
import { loginClientUser } from "../services/loginService";

export const useLoginClient = (
  mutationOptions: UseMutationOptions<
    unknown,
    Error,
    { loginData: ClientLoginDto }
  >
) =>
  useMutation({
    mutationFn: ({ loginData }) => loginClientUser(loginData),
    ...mutationOptions,
  });
