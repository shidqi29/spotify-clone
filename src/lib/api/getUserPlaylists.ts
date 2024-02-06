import { axiosInstance } from "@/lib/axios";
import { getAccessToken } from "./getAccessToken";

export const getUsersPlaylists = async (refresh_token: string) => {
  const { access_token } = await getAccessToken(refresh_token);
  return await axiosInstance.get("/me/playlists", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};
