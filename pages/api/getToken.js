import { getAuth } from "@clerk/nextjs/server";

export default async function handler(req, res)  {
  const { sessionId, getToken } = getAuth(req);
  const token = await getToken({ template: "keel" });

  if (!sessionId) {
    return res.status(401).json({ id: null });
  }

  return res.status(200).json({ id: token });
}
