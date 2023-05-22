![](logo.svg)

![](thumbnail.svg)



**👨‍💻 Technologies**

This project was developed with the following technologies:

- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- [Next.js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [Typescript](https://www.typescriptlang.org/)
- [Eslint](https://eslint.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Fastify](https://www.fastify.io/)

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**💻 Project**

Spacetime is a time capsule where the user can log in and add important events that happened in his life.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**🚀 How to run**

- Clone the repository `git clone https://github.com/matheusgomessouza/spacetime.git`

- Create a new OAuth app in Github: Settings > Developer Settings > New OAuth App
![](oauthapp.jpg)

There you should insert the **Authorization callback URL** that is YOUR_IP:PORT, after both OAuth are created we need to copy the Client ID and Client Secret,
MOBILE: exp://YOUR_IP:19000
WEB: http://localhost:3000/api/auth/callback

- Create an `.env` file on the root of `server` folder, and paste the Client ID and Client Secret from both OAuth apps and, the `DATABASE_URL="file:./dev.db"` ( you will have to comment one of the Github OAuth app depending on which application you are running ( web or mobile ) and then restart your server.

- Start the backend located on `\server` with `npm run dev`
- Start the frontend located on `\web` folder and run `npm run start`
- Or start the mobile located `\mobile` folder and run `npm run start` ( you can use ![Expo Go - App Store](https://apps.apple.com/br/app/expo-go/id982107779) / ![Expo Go - Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR) and run in your mobile device, or use Android / IOS emulator )

OBS: Use `npx expo start --clear` if you need to run with cleared cache.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**🧑🏾‍💻 Author**

**Matheus Gomes de Souza**

LinkedIn: https://www.linkedin.com/in/matheus-gomes-de-souza/ <br/>
E-mail: matheusg_souza@outlook.com
