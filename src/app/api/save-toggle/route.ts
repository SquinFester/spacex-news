import { z } from "zod";
import { getAuthSession } from "@/lib/auth";
import { saveValidator } from "@/lib/saveValidator";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const session = await getAuthSession();
    if (!session) return new Response("Unauthorized", { status: 401 });
    const body = await req.json();
    const { id, type, category, date, title } = saveValidator.parse(body);
    const isSaved = await db.article.findFirst({
      where: {
        id: id,
        userId: session.user.id,
      },
    });
    if (isSaved) {
      await db.article.delete({
        where: {
          id: id,
          userId: session.user.id,
        },
      });
      return new Response("deleted", { status: 200 });
    } else {
      await db.article.create({
        data: {
          id: id,
          userId: session.user.id,
          type: type,
          category: category,
          date: date,
          title: title,
        },
      });
      return new Response("added", { status: 200 });
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response("error", { status: 422 });
    }
    return new Response("error", { status: 500 });
  }
}
