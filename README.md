# X11 - Team allocation tooling

To install x11:

1. Clone the code base.

2. Install the application and dependencies:

```sh
npm install
```

3. Install prisma packages:

```sh
npm install --save-dev prisma
npm install @prisma/client
```

4. Push the database:

```sh
npx prisma db push
```

5. Set your database URL in .env to:

```sh
DATABASE_URL="file:./dev.db"
```

6. Copy the database schema into schema.prima:

```sh
model TeamMember {
  id         String   @id @default(uuid())
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt
  firstName  String
  lastName   String
}
```

7.  Run dev:

```sh
npm run dev
```

8. install bcryptjs

```sh
npm install bcryptjs
```

This is work in progress, but have fun....
