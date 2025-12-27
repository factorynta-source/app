import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export default async function DashboardPage() {
  const supabase = createSupabaseServerClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center" }}>
      <div className="card" style={{ maxWidth: 560, width: "100%" }}>
        <h1 style={{ marginTop: 0 }}>Dashboard</h1>
        <p>Bienvenido, {session.user.email}.</p>
        <p style={{ color: "#374151" }}>
          Esta área estará protegida para la subida de música y administración
          interna.
        </p>
      </div>
    </main>
  );
}
