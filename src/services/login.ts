import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { baseAxios } from "../lib/baseAxios"
import type { Tokens } from "../types"

export const login = async ({ email, password }: { email: string, password: string }) => {
  const { data } = await baseAxios.post<Tokens>('/login', { email, password })
  return data
}

export const useLogin = () => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: login,
    onSuccess(data) {
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      navigate("/marketplace");
    },
  });

  return [mutation.mutateAsync, mutation] as const;
}