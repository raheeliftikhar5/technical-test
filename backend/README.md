# Test Upwork Backend API

## Setup Instructions

1. **Install dependencies**
   ```
   npm install
   ```

2. **Configure Database**
   - Ensure MySQL is running on `127.0.0.1:3306`.
   - Update database credentials in `src/db/index.ts` or use environment variables.

3. **Run the API**
   ```
   npm run dev
   ```

## Error Handling

- All database connection and query errors return HTTP 500 with a JSON error message.

## Database Setup

- Uses MySQL.
- Example table creation:
  ```
  CREATE DATABASE test001;
  USE test001;
  CREATE TABLE user_list (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255)
  );
  ```

## API Endpoint

- `GET /api/usercount` — Returns total user count.