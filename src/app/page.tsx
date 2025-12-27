import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center" }}>
      <div className="card" style={{ maxWidth: 480, width: "100%" }}>
        <h1 style={{ marginTop: 0 }}>NTA Factory</h1>
        <p style={{ color: "#374151" }}>
          Portal interno para subir música, revisar y exportar paquetes de entrega.
        </p>
        <div style={{ display: "flex", gap: "0.75rem", marginTop: "1rem" }}>
          <Link className="btn" href="/login">
            Iniciar sesión
          </Link>
          <Link className="link" href="/register">
            Registrarse
          </Link>
        </div>
      </div>
    </main>
  );
}
