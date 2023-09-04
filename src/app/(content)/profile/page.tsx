import { LogInButton } from "@/components/Profile/LogInButton";
import { getAuthSession } from "@/lib/auth";

const Profile = async () => {
  const session = await getAuthSession();

  return (
    <main className="container h-screen flex items-center">
      <LogInButton isLogged={!!session} />
    </main>
  );
};
export default Profile;
