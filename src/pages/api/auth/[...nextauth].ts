import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

export const authOptions = {
  providers: [
    SpotifyProvider({
      authorization:
        "https://accounts.spotify.com/authorize?scope=user-read-email,playlist-read-private",
      clientId: process.env.SPOTIFY_CLIENT_ID || "",
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async jwt({ token, account }: any) {
      if (account) {
        token.accessToken = account.refresh_token;
      }
      return token;
    },
    async session({ session, token }: any) {
      session.user.accessToken = token.accessToken;

      return session;
    },
  },
};

export default NextAuth(authOptions);
