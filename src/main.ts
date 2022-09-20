import "@dotenv";
import { serve } from "@server";

const port = parseInt(Deno.env.get("PORT")!) || 8000;
const name = Deno.env.get("NAME") || "world";

const handler = (_req: Request): Response => {
  const body = `<!doctype html>
    <html>
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>hello ${name}</title>
      </head>
      <body>
        <p>hello ${name}</p>
      </body>
    </html>`;

  const res = new Response(body, {
    status: 200,
    headers: {
      "Content-type": "text/html",
    },
  });

  return res;
};

await serve(handler, { port });
