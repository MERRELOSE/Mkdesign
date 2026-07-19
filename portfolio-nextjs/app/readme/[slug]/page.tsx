import { notFound } from "next/navigation";
import { promises as fs } from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Link from "next/link";
import type { Metadata } from "next";
import CopyMarkdownButton from "@/components/CopyMarkdownButton";

export const metadata: Metadata = {
  title: "Private README",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
};

const ALLOWED_SLUGS = [
  "clausub",
  "bourseiq",
  "tourism-booking",
  "saas-dashboard",
  "shopify-hub",
  "live-streaming",
  "portfolio",
];

export default async function ReadmePage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { admin?: string };
}) {
  if (searchParams.admin !== "1") {
    notFound();
  }

  if (!ALLOWED_SLUGS.includes(params.slug)) {
    notFound();
  }

  const filePath = path.join(process.cwd(), "readmes", `${params.slug}.md`);

  let markdown: string;
  try {
    markdown = await fs.readFile(filePath, "utf-8");
  } catch {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Private banner */}
        <div className="mb-8 rounded-xl border border-amber-200 dark:border-amber-900/50 bg-amber-50 dark:bg-amber-900/10 p-4">
          <div className="flex items-start gap-3">
            <div className="text-amber-600 dark:text-amber-400 text-xl">🔒</div>
            <div className="flex-1 text-sm">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <p className="font-semibold text-amber-900 dark:text-amber-200">
                  Private preview, internal use only
                </p>
                <CopyMarkdownButton markdown={markdown} />
              </div>
              <p className="mt-1 text-amber-800 dark:text-amber-300/80">
                This is a preview of the README for the <code className="font-mono text-xs bg-amber-100 dark:bg-amber-900/30 px-1.5 py-0.5 rounded">{params.slug}</code> project. Use <strong>Copy markdown</strong> above to grab the source for the GitHub repo. Screenshots referenced in the markdown will only render once the README is committed there.
              </p>
              <Link
                href="/"
                className="mt-3 inline-flex items-center gap-1 text-amber-700 dark:text-amber-300 hover:underline font-medium"
              >
                ← Back to portfolio
              </Link>
            </div>
          </div>
        </div>

        {/* Markdown content */}
        <article className="prose prose-lg dark:prose-invert max-w-none
          prose-headings:scroll-mt-24
          prose-h1:text-3xl sm:prose-h1:text-4xl prose-h1:font-bold
          prose-h2:text-2xl prose-h2:font-bold prose-h2:border-b prose-h2:border-gray-200 dark:prose-h2:border-gray-800 prose-h2:pb-2
          prose-h3:text-xl prose-h3:font-semibold
          prose-a:text-primary-600 dark:prose-a:text-primary-400 prose-a:no-underline hover:prose-a:underline
          prose-code:before:content-none prose-code:after:content-none prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono
          prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-xl prose-pre:overflow-x-auto
          prose-img:rounded-lg
          prose-table:text-sm
          prose-th:bg-gray-50 dark:prose-th:bg-gray-800/50
          prose-blockquote:border-l-primary-500 prose-blockquote:bg-primary-50/30 dark:prose-blockquote:bg-primary-900/10 prose-blockquote:rounded-r-lg prose-blockquote:py-1
        ">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              img: ({ src, alt }) => {
                const text = alt || "image";
                const isLocalScreenshot =
                  !!src && !src.startsWith("http") && !src.startsWith("//");

                if (isLocalScreenshot) {
                  return (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 my-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs font-mono not-prose">
                      🖼 {text}
                    </span>
                  );
                }

                // eslint-disable-next-line @next/next/no-img-element
                return <img src={src} alt={text} className="inline-block" />;
              },
              a: ({ href, children }) => {
                const isExternal = href?.startsWith("http");
                return (
                  <a
                    href={href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                  >
                    {children}
                  </a>
                );
              },
            }}
          >
            {markdown}
          </ReactMarkdown>
        </article>
      </div>
    </div>
  );
}
