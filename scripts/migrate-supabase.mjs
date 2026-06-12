import { config } from "dotenv";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
config({ path: resolve(__dirname, "../.env"), override: true });
// DATABASE_URL from .env must be the Supabase URL; log the host to confirm


import pg from "pg";
const { Pool } = pg;

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

async function migrate() {
  console.log("[migrate] Connecting to:", process.env.DATABASE_URL?.split("@")[1] ?? "unknown host");

  await pool.query(`
    CREATE TABLE IF NOT EXISTS blogs (
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      slug TEXT NOT NULL UNIQUE,
      excerpt TEXT,
      content TEXT NOT NULL,
      featured_image TEXT,
      category TEXT,
      tags TEXT,
      status TEXT NOT NULL DEFAULT 'draft',
      seo_title TEXT,
      seo_description TEXT,
      author TEXT,
      created_at TIMESTAMP DEFAULT NOW() NOT NULL,
      updated_at TIMESTAMP DEFAULT NOW() NOT NULL
    )
  `);
  console.log("[migrate] blogs table: ok");

  await pool.query(`
    CREATE TABLE IF NOT EXISTS contacts (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      subject TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT NOW() NOT NULL
    )
  `);
  console.log("[migrate] contacts table: ok");

  await pool.query(`
    CREATE TABLE IF NOT EXISTS leads (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      company TEXT,
      service TEXT,
      budget TEXT,
      message TEXT,
      status TEXT NOT NULL DEFAULT 'new',
      source TEXT DEFAULT 'website',
      created_at TIMESTAMP DEFAULT NOW() NOT NULL,
      updated_at TIMESTAMP DEFAULT NOW() NOT NULL
    )
  `);
  console.log("[migrate] leads table: ok");

  await pool.query(`
    CREATE TABLE IF NOT EXISTS clients (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      company TEXT,
      address TEXT,
      website TEXT,
      status TEXT NOT NULL DEFAULT 'active',
      notes TEXT,
      is_active BOOLEAN DEFAULT true,
      created_at TIMESTAMP DEFAULT NOW() NOT NULL,
      updated_at TIMESTAMP DEFAULT NOW() NOT NULL
    )
  `);
  console.log("[migrate] clients table: ok");

  await pool.query(`
    CREATE TABLE IF NOT EXISTS projects (
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      client_name TEXT,
      client_email TEXT,
      description TEXT,
      service_type TEXT,
      status TEXT NOT NULL DEFAULT 'pending',
      priority TEXT DEFAULT 'medium',
      budget TEXT,
      deadline TIMESTAMP,
      progress INTEGER DEFAULT 0,
      notes TEXT,
      created_at TIMESTAMP DEFAULT NOW() NOT NULL,
      updated_at TIMESTAMP DEFAULT NOW() NOT NULL
    )
  `);
  console.log("[migrate] projects table: ok");

  await pool.query(`
    CREATE TABLE IF NOT EXISTS quotes (
      id SERIAL PRIMARY KEY,
      client_name TEXT NOT NULL,
      client_email TEXT NOT NULL,
      client_phone TEXT,
      service_requested TEXT NOT NULL,
      requirements TEXT,
      estimated_amount TEXT,
      status TEXT NOT NULL DEFAULT 'pending',
      valid_until TIMESTAMP,
      notes TEXT,
      created_at TIMESTAMP DEFAULT NOW() NOT NULL,
      updated_at TIMESTAMP DEFAULT NOW() NOT NULL
    )
  `);
  console.log("[migrate] quotes table: ok");

  await pool.query(`
    CREATE TABLE IF NOT EXISTS activity_logs (
      id SERIAL PRIMARY KEY,
      user_id TEXT,
      user_email TEXT,
      action TEXT NOT NULL,
      module TEXT NOT NULL,
      description TEXT,
      ip_address TEXT,
      created_at TIMESTAMP DEFAULT NOW() NOT NULL
    )
  `);
  console.log("[migrate] activity_logs table: ok");

  await pool.query(`
    CREATE TABLE IF NOT EXISTS products (
      id SERIAL PRIMARY KEY,
      slug TEXT NOT NULL UNIQUE,
      title TEXT NOT NULL,
      short_desc TEXT NOT NULL,
      icon TEXT NOT NULL,
      category TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT NOW() NOT NULL,
      updated_at TIMESTAMP DEFAULT NOW() NOT NULL
    )
  `);
  console.log("[migrate] products table: ok");

  await pool.query(`
    CREATE TABLE IF NOT EXISTS services (
      id SERIAL PRIMARY KEY,
      slug TEXT NOT NULL UNIQUE,
      title TEXT NOT NULL,
      service_desc TEXT NOT NULL,
      long_desc TEXT,
      img TEXT,
      created_at TIMESTAMP DEFAULT NOW() NOT NULL,
      updated_at TIMESTAMP DEFAULT NOW() NOT NULL
    )
  `);
  console.log("[migrate] services table: ok");

  console.log("[migrate] All tables ready.");
  await pool.end();
}

migrate().catch((err) => {
  console.error("[migrate] FAILED:", err.message);
  process.exit(1);
});
