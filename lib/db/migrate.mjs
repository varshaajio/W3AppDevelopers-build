import { config } from "dotenv";
import { resolve } from "path";
// .env is at workspace root — two levels up from lib/db
config({ path: resolve(process.cwd(), "../../.env"), override: true });

import pg from "pg";
const { Pool } = pg;

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

async function migrate() {
  console.log("[migrate] Connecting to:", process.env.DATABASE_URL?.replace(/:[^:@]+@/, ":***@") ?? "unknown");

  const tables = [
    [`blogs`, `
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
    `],
    [`contacts`, `
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      subject TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT NOW() NOT NULL
    `],
    [`leads`, `
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
    `],
    [`clients`, `
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
    `],
    [`projects`, `
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
    `],
    [`quotes`, `
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
    `],
    [`activity_logs`, `
      id SERIAL PRIMARY KEY,
      user_id TEXT,
      user_email TEXT,
      action TEXT NOT NULL,
      module TEXT NOT NULL,
      description TEXT,
      ip_address TEXT,
      created_at TIMESTAMP DEFAULT NOW() NOT NULL
    `],
    [`products`, `
      id SERIAL PRIMARY KEY,
      slug TEXT NOT NULL UNIQUE,
      title TEXT NOT NULL,
      short_desc TEXT NOT NULL,
      icon TEXT NOT NULL,
      category TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT NOW() NOT NULL,
      updated_at TIMESTAMP DEFAULT NOW() NOT NULL
    `],
    [`services`, `
      id SERIAL PRIMARY KEY,
      slug TEXT NOT NULL UNIQUE,
      title TEXT NOT NULL,
      service_desc TEXT NOT NULL,
      long_desc TEXT,
      img TEXT,
      created_at TIMESTAMP DEFAULT NOW() NOT NULL,
      updated_at TIMESTAMP DEFAULT NOW() NOT NULL
    `],
  ];

  for (const [name, cols] of tables) {
    await pool.query(`CREATE TABLE IF NOT EXISTS ${name} (${cols})`);
    console.log(`[migrate] ${name}: ok`);
  }

  console.log("[migrate] All tables ready.");
  await pool.end();
}

migrate().catch((err) => {
  console.error("[migrate] FAILED:", err.message);
  process.exit(1);
});
