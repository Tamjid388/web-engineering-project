Sure! Here's your updated, **directly copyable `README.md`** with the folder name explicitly mentioned as `fitflex-backend`:

---

```markdown
# 🏋️ FitFlex Backend Setup Guide

This guide helps you set up the **FitFlex** backend project locally using **XAMPP**.

---

## 📁 1. Place the Project Folder in XAMPP `htdocs`

1. Make sure **XAMPP** is installed.
2. Clone or copy the folder named **`fitflex-backend`** into the following directory:
```

C:\xampp\htdocs\fitflex-backend

```

---

## 🛠️ 2. Start Apache & MySQL

1. Open **XAMPP Control Panel**
2. Click **Start** next to:
- Apache
- MySQL

---

## 🧾 3. Create and Import the Database

1. Open your browser and go to:
```

[http://localhost/phpmyadmin](http://localhost/phpmyadmin)

```
2. Click **New** to create a new database.
3. Name the database exactly as:
```

fitflex\_db

```
4. Go to the **Import** tab.
5. Select the SQL file:
```

fitflex-backend/database/fitflex\_db.sql

```
6. Click **Go** to import tables and data.

✅ This will set up all necessary tables and insert sample data.

---

## 🔌 4. Test the API Using Postman

You can test the API like this:

**Endpoint:**
```

[http://localhost/fitflex-backend/api/add\_review.php](http://localhost/fitflex-backend/api/add_review.php)

````



