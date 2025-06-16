import { z } from "zod"
import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { baseAxios } from "../lib/baseAxios"
import type { Tokens } from "../types"

export const signUpSchema = z.object({
  email: z.string().email('Invalid email'),
  newPassword: z.string(),
  passwordConfirm: z.string(),
  firstName: z.string().nullable(),
  lastName: z.string().nullable(),
})

export type SignUp = z.infer<typeof signUpSchema>

export const signUp = async (dto: SignUp) => {
  const { data } = await baseAxios.post<Tokens>('/sign-up', dto)
  return data
}

export const useSignUp = () => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: signUp,
    onSuccess(data) {
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      navigate("/");
    },
  });

  return [mutation.mutateAsync, mutation] as const;
}