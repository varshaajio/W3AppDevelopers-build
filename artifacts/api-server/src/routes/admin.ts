import { Router, type IRouter } from "express";
import { db, blogsTable, contactsTable, leadsTable, clientsTable, projectsTable } from "@workspace/db";
import { eq, count } from "drizzle-orm";
import {
  AdminLoginBody,
  AdminLoginResponse,
  GetAdminStatsResponse,
} from "@workspace/api-zod";
import { generateToken, authenticateAdmin } from "../middleware/auth";
import { sendAdminLoginAlert } from "../services/emailService";

const router: IRouter = Router();

const getAdminCreds = () => ({
  email: process.env.ADMIN_EMAIL ?? "admin@w3appdevelopers.com",
  password: process.env.ADMIN_PASSWORD ?? "w3appdevelopers-2026-1.0",
});

const TOTAL_PRODUCTS = 24;
const TOTAL_SERVICES = 9;

router.post("/admin/login", async (req, res): Promise<void> => {
  const parsed = AdminLoginBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const { email, password } = parsed.data;
  const { email: adminEmail, password: adminPassword } = getAdminCreds();

  if (email !== adminEmail || password !== adminPassword) {
    res.status(401).json({ error: "Invalid credentials" });
    return;
  }

  const token = generateToken({ email, role: "admin" });

  const ip = (req.headers["x-forwarded-for"] as string)?.split(",")[0] || req.socket.remoteAddress;
  Promise.resolve(sendAdminLoginAlert(email, ip)).catch(() => {});

  res.json(AdminLoginResponse.parse({ token, message: "Login successful" }));
});

router.get("/admin/stats", authenticateAdmin, async (req, res): Promise<void> => {
  const [contactCount] = await db.select({ count: count() }).from(contactsTable);
  const [totalBlogCount] = await db.select({ count: count() }).from(blogsTable);
  const [publishedBlogCount] = await db
    .select({ count: count() })
    .from(blogsTable)
    .where(eq(blogsTable.status, "published"));
  const [draftBlogCount] = await db
    .select({ count: count() })
    .from(blogsTable)
    .where(eq(blogsTable.status, "draft"));

  let leadsCount = 0;
  let clientsCount = 0;
  let projectsCount = 0;
  try {
    const [lc] = await db.select({ count: count() }).from(leadsTable);
    const [cc] = await db.select({ count: count() }).from(clientsTable);
    const [pc] = await db.select({ count: count() }).from(projectsTable);
    leadsCount = Number(lc?.count ?? 0);
    clientsCount = Number(cc?.count ?? 0);
    projectsCount = Number(pc?.count ?? 0);
  } catch {
    req.log.warn("New tables not yet migrated; leads/clients/projects counts defaulting to 0");
  }

  res.json(
    GetAdminStatsResponse.parse({
      totalContacts: contactCount.count,
      totalBlogs: totalBlogCount.count,
      publishedBlogs: publishedBlogCount.count,
      draftBlogs: draftBlogCount.count,
      totalProducts: TOTAL_PRODUCTS,
      totalServices: TOTAL_SERVICES,
      totalLeads: leadsCount,
      totalClients: clientsCount,
      totalProjects: projectsCount,
    })
  );
});

export default router;
