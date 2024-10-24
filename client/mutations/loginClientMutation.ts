import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { ClientLoginDto } from "../types/dto/client-login.type";
import { loginAdmin, loginUser } from "../services/loginService";
import { AdminLoginDto } from "../types/dto/admin-login.type";

export const useLoginClient = (
  mutationOptions: UseMutationOptions<
    unknown,
    Error,
    { loginData: ClientLoginDto }
  >
) =>
  useMutation({
    mutationFn: ({ loginData }) => loginUser(loginData),
    ...mutationOptions,
  });

export const useLoginAdmin = (
  mutationOptions: UseMutationOptions<
    unknown,
    Error,
    { loginData: AdminLoginDto }
  >
) =>
  useMutation({
    mutationFn: ({ loginData }) => loginAdmin(loginData),
    ...mutationOptions,
  });
