This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## URL Shorty

- This project used Next.js serverless style with a remote DB hosted on MongoDB Atlas (I simply chose this hosting service because I am familiar with it and it is easy to integrate)

- I used [nanoid](https://github.com/ai/nanoid) to generate random ids, and a unique index on the database collection to enforce no collisions

- The standart Next.js folder structure is used, there is only one page: pages/index.js

- API routes are found under pages/api/

- one hangup is that to run this locally you would need to set up your own mongoDB instance, let me know if I can help with that

- there is no check for duplicate original urls, that might be something to add in a future version, but I know bit.ly and other shorteners allow duplicates for tracking purposes, etc

Thank you for looking it over

To run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

