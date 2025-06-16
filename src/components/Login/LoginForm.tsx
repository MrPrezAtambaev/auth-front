import { Button, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { z } from "zod";
import { zodResolver } from 'mantine-form-zod-resolver';

const loginSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string(),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

type Props = {
  onSubmit: (values: LoginFormValues) => void;
}

export const LoginForm = ({ onSubmit }: Props) => {
  const form = useForm<LoginFormValues>({
    initialValues: {
      email: '',
      password: '',
    },
    validate: zodResolver(loginSchema),
  });

  const handleSubmit = (values: LoginFormValues) => {
    onSubmit(values);
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <div className="flex flex-col mt-3 gap-3">
        <TextInput
          size="md"
          label="Email"
          placeholder="Введите email"
          {...form.getInputProps("email")}
          radius={12}
        />
        <PasswordInput
          size="md"
          label="Пароль"
          placeholder="Введите пароль"
          {...form.getInputProps("password")}
          radius={12}
        />

        <Button
          color="#722CCC"
          size="md"
          mt={9}
          radius={10}
          fullWidth
          type="submit"
        >
          Войти
        </Button>
      </div>
    </form>
  );
};