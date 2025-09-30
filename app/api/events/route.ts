import { headers } from "next/headers";

export async function GET(request: Request) {
  console.log(request)
  const headersList = headers();
  const host = headersList.get("host");
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";

  const baseUrl = `${protocol}://${host}/`;

  return Response.json({ baseUrl });
}
