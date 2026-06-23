import { cp, mkdir } from "node:fs/promises";
import { join } from "node:path";

const from = join("dist", "pagefind");
const to = join("public", "pagefind");

await mkdir("public", { recursive: true });
await cp(from, to, { recursive: true, force: true });
