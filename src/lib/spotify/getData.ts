import { axiosInstance } from "@/lib/axios";
import { getAccessToken } from "./getAccessToken";

export const getData = async (url: string, refresh_token: string) => {
  const { access_token } = await getAccessToken(refresh_token);
  return await axiosInstance.get(`${url}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};
