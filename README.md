# Next.js Full-Stack Blog

A professional blog showcase project featuring Markdown-based content management and a local SQLite database for contact inquiries.

## 🚀 Key Features

* **Markdown Content Engine**: Write posts in Markdown; the app automatically parses them into beautiful, responsive pages.
* **Optimized Image Handling**: Utilizes `next/image` for automatic lazy loading and image optimization.
* **Syntax Highlighting**: Beautiful code snippets powered by `react-syntax-highlighter`.
* **Local Data Persistence**: A functional contact form that stores user messages in a local SQLite database using `better-sqlite3`.

## 🛠️ Tech Stack

* **Framework**: Next.js 13
* **Styling**: CSS Modules
* **Database**: SQLite (via better-sqlite3)
* **Content**: Markdown (parsed with react-markdown)

## 🏁 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/oleksandrivanyshyn/next-blog-app.git
cd next-blog-app
````

### 2\. Install dependencies

```bash
npm install
```

### 3\. Run the development server

```bash
npm run dev
```

The app will automatically create a local `data.db` file the first time you interact with the contact form. No external database setup is required\!

Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) to see the result.

## 📁 Project Structure

  * `/posts`: Place your Markdown (`.md`) files here.
  * `/lib`: Contains the logic for fetching posts and database utilities.
  * `/components`: Modular React components for UI, layout, and post details.
  * `/pages/api`: Server-side API route for handling contact form submissions.

