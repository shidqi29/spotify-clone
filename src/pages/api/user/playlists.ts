import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

import { getData } from "@/lib/spotify";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    user: { accessToken },
  } = (await getSession({ req })) as any;
  const response = await getData("/me/playlists", accessToken);
  const data = await response.data;

  return res.status(200).json({ data });
};

export default handler;
