import LoginForm from "@/components/LoginForm";
import Link from "next/link";

export default function Login() {
  return (
    <main className="flex-col text-center">
      <div className="text-3xl flex justify-start flex-col mt-12 mb-16 ">
        <h1>Iniciar sesión</h1>
        <Link className="text-sm text-sky-500" href="/signup">
          ¿Aun no tienes cuenta?
        </Link>
      </div>
      <LoginForm />
    </main>
  );
}
