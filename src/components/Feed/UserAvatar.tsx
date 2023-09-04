import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { User } from "lucide-react";

export const UserAvatar = async () => {
  const session = await getAuthSession();
  const user = await db.user.findFirst({
    where: {
      id: session?.user.id,
    },
  });

  return (
    <Avatar>
      {user?.image ? (
        <AvatarImage src={user?.image} alt="user avatar" />
      ) : (
        <AvatarFallback className="bg-secondLightGray">
          <User />
        </AvatarFallback>
      )}
    </Avatar>
  );
};
