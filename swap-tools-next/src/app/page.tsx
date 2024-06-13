import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession();
  if (!session) {
    redirect("/auth/signin");
  }
  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen bg-gray-100">
      <div>sla</div>
    </main>
  );
}
