import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
    providers:[
        Providers.Facebook({
            clientId:process.env.FACEBOOK_CLIENT_ID,
            clientSecret:process.env.FACEBOOK_CLIENT_SECRET
        }),
        Providers.Google({
            clientId:process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_SECRET,
            authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
          })
    ],
    jwt:{
        encryption:true,
    },
    secret:process.env.secret,
    callbacks: {
        async jwt(token, account) {
          if (account?.accessToken) {
            token.accessToken=account.accessToken
          } 
          return token;
        },
      }
})