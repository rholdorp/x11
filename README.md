# X11 - Team allocation tooling

A javascript Remix application for team allocation using:

- Prisma as ORM
- SQLite database
- bcryptjs for password hashing
- Cypress.io for e2e testing

To install x11:

1. Clone the code base.

2. Install the application and dependencies:

   ```sh
    npm install
   ```

3. Configure database path in .env

   ```sh
    DATABASE_URL="file:./dev.db"
   ```

4. Push the database:

   ```sh
    npx prisma db push
   ```

5. Copy the database schema into schema.prima:

   ```sh
    model User {
    id           String   @id @default(uuid())
    createdAt    DateTime @default(now())
    updatedAt    DateTime @updatedAt
    username     String   @unique
    passwordHash String
    teammember   TeamMember[]
    }

    model TeamMember {
    id         String   @id @default(uuid())
    createdAt  DateTime @default(now())
    updatedAt  DateTime @updatedAt
    firstName  String
    lastName   String
    }
   ```

6. Run dev:
   ```sh
    npm run dev
   ```

This is work in progress, but have fun....

When changing the dbase schema:

- adjust seed.js and seed and deploy:
  ```sh
    npx prisma db seed
  ```
