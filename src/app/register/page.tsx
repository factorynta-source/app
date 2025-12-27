"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/browser";

export default function RegisterPage() {
  const supabase = createSupabaseBrowserClient();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    });

    setLoading(false);

    if (signUpError) {
      setError(signUpError.message);
      return;
    }

    router.replace("/dashboard");
  };

  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center" }}>
      <div className="card" style={{ maxWidth: 420, width: "100%" }}>
        <h1 style={{ marginTop: 0 }}>Crear cuenta</h1>
        <form className="form-grid" onSubmit={handleSubmit}>
          <label className="form-grid">
            Correo
            <input
              className="input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label className="form-grid">
            Contraseña
            <input
              className="input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          {error && <p style={{ color: "#b91c1c" }}>{error}</p>}
          <button className="btn" disabled={loading} type="submit">
            {loading ? "Creando..." : "Registrarse"}
          </button>
        </form>
        <p style={{ marginTop: "1rem" }}>
          ¿Ya tienes cuenta?{" "}
          <Link className="link" href="/login">
            Inicia sesión
          </Link>
        </p>
      </div>
    </main>
  );
}
