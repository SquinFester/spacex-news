import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { z } from "zod";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const session = await getAuthSession();
    if (!session) return new Response("Unauthorized", { status: 401 });
    const { limit, page } = z
      .object({
        limit: z.string(),
        page: z.string(),
      })
      .parse({
        limit: url.searchParams.get("limit"),
        page: url.searchParams.get("page"),
      });
    const articles = await db.article.findMany({
      where: {
        userId: session?.user.id,
      },
      take: parseInt(limit),
      skip: (parseInt(page) - 1) * parseInt(limit),
    });
    return new Response(JSON.stringify(articles));
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response("error", { status: 422 });
    }
    return new Response("error", { status: 500 });
  }
}
