import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';

function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mb-14 md:mb-16">
      <h2 className="text-2xl md:text-3xl text-white mb-5" style={{ fontWeight: 700 }}>
        {title}
      </h2>
      <div className="text-gray-400 space-y-4 leading-relaxed">{children}</div>
    </section>
  );
}

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="mt-3 p-4 rounded-xl bg-black/40 border border-white/10 text-sm text-gray-300 overflow-x-auto whitespace-pre-wrap font-mono">
      {children}
    </pre>
  );
}

export function AiPosCaseStudyPage() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#120a1a] to-[#0a0a0f] min-h-full" />

      <article className="relative z-10 max-w-3xl mx-auto px-6 pt-28 pb-32">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors text-sm mb-10"
            style={{ fontWeight: 600 }}
          >
            <ArrowLeft className="w-4 h-4" />
            All projects
          </Link>

          <p className="text-sm uppercase tracking-wider text-fuchsia-400 mb-3" style={{ fontWeight: 600 }}>
            Founder · Product owner
          </p>
          <h1 className="text-4xl md:text-5xl text-white mb-4" style={{ fontWeight: 700 }}>
            UpLevo POS
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed mb-2">
            Multi-tenant POS and inventory platform with an AI-assisted <strong className="text-gray-300 font-semibold">invoice image → inventory entry</strong> workflow.
          </p>
          <p className="text-gray-500 text-sm md:text-base">
            By <span className="text-gray-400">Vikash Dangi</span> — architecture and ownership across app, API, and AI services.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 space-y-4 text-gray-400 leading-relaxed"
        >
          <Section title="Product overview">
            <p>
              UpLevo POS is organized as <strong className="text-gray-300 font-semibold">three repositories</strong> (separate folders in development):
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-400">
              <li>
                <strong className="text-gray-300 font-semibold">Dashboard app</strong> — React + Vite SPA (POS UI, inventory, invoice upload, admin).
              </li>
              <li>
                <strong className="text-gray-300 font-semibold">Backend API</strong> — Laravel 12 modular API, JWT auth, InvoiceAI orchestration.
              </li>
              <li>
                <strong className="text-gray-300 font-semibold">AI invoice reader</strong> — FastAPI, Mistral OCR, Redis/RQ workers, callback to Laravel.
              </li>
            </ul>
          </Section>

          <Section title="What we built">
            <ul className="list-disc pl-5 space-y-3">
              <li>
                <strong className="text-gray-300 font-semibold">POS</strong> — Cart and checkout, barcode scanning (camera / keyboard wedge), pricing and availability from API.
              </li>
              <li>
                <strong className="text-gray-300 font-semibold">Inventory</strong> — Manual entries, bulk CSV validate + commit, AI invoice upload (JPG/PNG), preview extracted dealer/items, map products, commit to inventory.
              </li>
              <li>
                <strong className="text-gray-300 font-semibold">Products</strong> — CRUD, categories and brands, barcode generation/lookup/printing (API PDF).
              </li>
              <li>
                <strong className="text-gray-300 font-semibold">Dealers / suppliers</strong> — CRUD and selection components.
              </li>
              <li>
                <strong className="text-gray-300 font-semibold">Purchase orders</strong> — Create/edit POs, receive into inventory.
              </li>
              <li>
                <strong className="text-gray-300 font-semibold">Reports &amp; analytics</strong> — Dashboard summaries, alerts, activity, business reports, reorder and growth insights.
              </li>
              <li>
                <strong className="text-gray-300 font-semibold">Admin (super_admin)</strong> — Business verification, audit log, platform reports.
              </li>
            </ul>
          </Section>

          <Section title="Architecture (high level)">
            <div className="space-y-6 not-prose">
              <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10">
                <h3 className="text-lg text-purple-300 mb-2" style={{ fontWeight: 700 }}>
                  Dashboard app
                </h3>
                <p className="text-sm text-gray-400 mb-2">
                  Vite + React Router + React Query. Feature folders under <code className="text-purple-200/90 text-xs">src/features/*</code>. API base defaults to{' '}
                  <code className="text-purple-200/90 text-xs">http://127.0.0.1:8000</code>; override with <code className="text-purple-200/90 text-xs">VITE_API_BASE_URL</code>.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10">
                <h3 className="text-lg text-cyan-300 mb-2" style={{ fontWeight: 700 }}>
                  Backend API
                </h3>
                <p className="text-sm text-gray-400">
                  Laravel 12 modular routes under <code className="text-cyan-200/90 text-xs">/api</code>. JWT via{' '}
                  <code className="text-cyan-200/90 text-xs">Authorization: Bearer</code>. Roles (e.g. <code className="text-cyan-200/90 text-xs">super_admin</code>). InvoiceAI stores uploads, dispatches parsing, resolves dealer/product matches, commits inventory.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10">
                <h3 className="text-lg text-fuchsia-300 mb-2" style={{ fontWeight: 700 }}>
                  AI microservice
                </h3>
                <p className="text-sm text-gray-400">
                  <code className="text-fuchsia-200/90 text-xs">POST /process</code> enqueues Redis/RQ work. Worker fetches the invoice image via a{' '}
                  <strong className="text-gray-300 font-semibold">signed Laravel URL</strong>, runs Mistral OCR in JSON Schema mode, validates and scores confidence, then callbacks to Laravel{' '}
                  <code className="text-fuchsia-200/90 text-xs">POST …/api/invoice-ai/callback</code> with <code className="text-fuchsia-200/90 text-xs">X-Invoice-AI-Secret</code>.
                </p>
              </div>
            </div>
          </Section>

          <Section title="AI invoice upload (end-to-end)">
            <ol className="list-decimal pl-5 space-y-4">
              <li>
                <strong className="text-gray-300 font-semibold">Upload</strong> — UI route <code className="text-gray-500 text-xs">/inventory/invoice</code>; API{' '}
                <code className="text-gray-500 text-xs">POST /api/inventory/invoice/upload</code> (multipart field <code className="text-gray-500 text-xs">file</code>). JPG/PNG only; PDF rejected in UI and API.
              </li>
              <li>
                <strong className="text-gray-300 font-semibold">Processing</strong> — Laravel stores file, creates <code className="text-gray-500 text-xs">invoice_uploads</code> with{' '}
                <code className="text-gray-500 text-xs">status=processing</code> and <code className="text-gray-500 text-xs">job_id</code>, queues job to AI with{' '}
                <code className="text-gray-500 text-xs">job_id</code>, <code className="text-gray-500 text-xs">file_url</code>, <code className="text-gray-500 text-xs">business_id</code>.
              </li>
              <li>
                <strong className="text-gray-300 font-semibold">Callback</strong> — AI posts <code className="text-gray-500 text-xs">job_id</code>, parsed JSON, confidence, raw OCR, status/error. Laravel persists results, match resolution, marks upload <code className="text-gray-500 text-xs">parsed</code>.
              </li>
              <li>
                <strong className="text-gray-300 font-semibold">Preview + commit</strong> — UI polls <code className="text-gray-500 text-xs">GET /api/inventory/invoice/{'{id}'}/preview</code>. User corrects dealer/items and maps products.{' '}
                <code className="text-gray-500 text-xs">POST /api/inventory/invoice/{'{id}'}/commit</code> creates dealer/products as needed, inventory entry, and learning signals for future mappings.
              </li>
            </ol>
          </Section>

          <Section title="Local development">
            <p>
              <strong className="text-gray-300 font-semibold">Prerequisites:</strong> Node.js, PHP 8.3 + Composer, DB (SQLite or MySQL), Redis, Mistral API key.
            </p>

            <h3 className="text-lg text-white mt-8 mb-2" style={{ fontWeight: 600 }}>
              Laravel API
            </h3>
            <p className="text-sm">Copy <code className="text-gray-500 text-xs">.env.example</code> → <code className="text-gray-500 text-xs">.env</code>. Set DB, <code className="text-gray-500 text-xs">AI_SERVICE_URL</code>, <code className="text-gray-500 text-xs">AI_WEBHOOK_SECRET</code>.</p>
            <CodeBlock>{`composer install
php artisan key:generate
php artisan migrate
php artisan serve
php artisan queue:listen`}</CodeBlock>

            <h3 className="text-lg text-white mt-8 mb-2" style={{ fontWeight: 600 }}>
              AI invoice reader
            </h3>
            <p className="text-sm">
              Set <code className="text-gray-500 text-xs">MISTRAL_API_KEY</code>, <code className="text-gray-500 text-xs">CALLBACK_BASE_URL</code> (Laravel origin),{' '}
              <code className="text-gray-500 text-xs">CALLBACK_WEBHOOK_SECRET</code> (matches Laravel), <code className="text-gray-500 text-xs">REDIS_URL</code>.
            </p>
            <CodeBlock>{`uvicorn app.main:app --host 0.0.0.0 --port 8001
rq worker invoice --url redis://localhost:6379/0`}</CodeBlock>
            <p className="text-sm text-gray-500">Example: Laravel <code className="text-xs">AI_SERVICE_URL=http://localhost:8001</code>.</p>

            <h3 className="text-lg text-white mt-8 mb-2" style={{ fontWeight: 600 }}>
              Dashboard app
            </h3>
            <CodeBlock>{`npm i
# optional: VITE_API_BASE_URL=http://127.0.0.1:8000
npm run dev`}</CodeBlock>
          </Section>

          <Section title="Where to look (repos)">
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>
                <strong className="text-gray-300 font-semibold">App:</strong> <code className="text-gray-500">src/app/routes.tsx</code>, <code className="text-gray-500">src/lib/api.ts</code>,{' '}
                <code className="text-gray-500">src/features/inventory/pages/InvoiceUploadPage.tsx</code>
              </li>
              <li>
                <strong className="text-gray-300 font-semibold">API:</strong> <code className="text-gray-500">routes/api.php</code>, <code className="text-gray-500">app/Modules/InvoiceAI/</code> (routes, controllers, services)
              </li>
              <li>
                <strong className="text-gray-300 font-semibold">AI:</strong> <code className="text-gray-500">app/main.py</code>, <code className="text-gray-500">app/routes/process.py</code>,{' '}
                <code className="text-gray-500">app/workers/tasks.py</code>, <code className="text-gray-500">app/services/mistral_ocr.py</code>, <code className="text-gray-500">app/services/callback.py</code>
              </li>
              <li>
                Postman: API repo <code className="text-gray-500">postman/collections/</code> — auth → dealers/products → inventory → InvoiceAI (upload → preview → commit).
              </li>
            </ul>
          </Section>

          <Section title="Security notes">
            <ul className="list-disc pl-5 space-y-2">
              <li>Do not commit <code className="text-gray-500 text-xs">.env</code> files or API keys.</li>
              <li>InvoiceAI callback uses a shared secret header (e.g. <code className="text-gray-500 text-xs">X-Invoice-AI-Secret</code>).</li>
              <li>AI worker downloads invoice files via <strong className="text-gray-300 font-semibold">signed URLs</strong> from Laravel.</li>
            </ul>
          </Section>

          <div className="pt-8 border-t border-white/10">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:shadow-lg hover:shadow-purple-500/40 transition-all text-sm"
              style={{ fontWeight: 600 }}
            >
              Back to portfolio
            </Link>
          </div>
        </motion.div>
      </article>
    </div>
  );
}
