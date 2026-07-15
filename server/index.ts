import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const staticRoutes = new Set([
  "/",
  "/about",
  "/cosmetics",
  "/ai-training",
  "/profile",
  "/news",
  "/news/2026-07-kokuhaku-cosmetics-supervision",
  "/news/2026-05-yamano-lecture",
  "/news/2026-04-reborn-beauty-summit",
  "/news/2025-12-imsi-branding",
  "/news/2025-11-branding-lecture-1500",
  "/news/2025-11-innovator-talk",
  "/news/2025-11-mirai-ai",
  "/news/2025-10-of-brand-debut",
  "/news/2025-10-new-brand",
  "/news/2025-09-care-ai",
  "/contact",
  "/company",
  "/privacy",
]);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath, { redirect: false }));

  app.get("*", (req, res) => {
    const requestedPath = req.path.length > 1 && req.path.endsWith("/") ? req.path.slice(0, -1) : req.path;

    if (!staticRoutes.has(requestedPath)) {
      res.status(404).sendFile(path.join(staticPath, "404.html"));
      return;
    }

    const routeIndex =
      requestedPath === "/"
        ? path.join(staticPath, "index.html")
        : path.join(staticPath, requestedPath, "index.html");
    res.sendFile(routeIndex);
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
