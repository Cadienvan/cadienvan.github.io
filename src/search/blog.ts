import { create, insert } from "@orama/orama";
import * as inevitabot from "../pages/blog/inevitabot.md";
import * as asynchronousBatching from "../pages/blog/asynchronous-batching.md";
import * as asunchronousBatchingEn from "../pages/blog/en/asynchronous-batching.md";
import * as svalutazioneFrontend from "../pages/blog/svalutazione-frontend.md";
import * as svalutazioneFrontendEn from "../pages/blog/en/devaluing-frontend.md";
import * as ict from "../pages/blog/iterative-contract-testing.md";
import * as ictEn from "../pages/blog/en/iterative-contract-testing.md";

export default async function fill() {
  const blogDB = await create({
    id: "blog",
    schema: {
      title: "string",
      date: "string",
      content: "string",
      url: "string",
    } as const,
  });

  await insert(blogDB, {
    title: `Blog: ${inevitabot.frontmatter.title} 🇮🇹`,
    date: inevitabot.frontmatter.date,
    content: inevitabot.rawContent(),
    url: "/blog/inevitabot",
  });

  await insert(blogDB, {
    title: `Blog: ${asynchronousBatching.frontmatter.title} 🇮🇹`,
    date: asynchronousBatching.frontmatter.date,
    content: asynchronousBatching.rawContent(),
    url: "/blog/asynchronous-batching",
  });

  await insert(blogDB, {
    title: `Blog: ${svalutazioneFrontend.frontmatter.title} 🇮🇹`,
    date: svalutazioneFrontend.frontmatter.date,
    content: svalutazioneFrontend.rawContent(),
    url: "/blog/svalutazione-frontend",
  });

  await insert(blogDB, {
    title: `Blog: ${ict.frontmatter.title} 🇮🇹`,
    date: ict.frontmatter.date,
    content: ict.rawContent(),
    url: "/blog/iterative-contract-testing",
  });

  await insert(blogDB, {
    title: `Blog: ${asunchronousBatchingEn.frontmatter.title} 🇬🇧`,
    date: asunchronousBatchingEn.frontmatter.date,
    content: asunchronousBatchingEn.rawContent(),
    url: "/blog/en/asynchronous-batching",
  });

  await insert(blogDB, {
    title: `Blog: ${svalutazioneFrontendEn.frontmatter.title} 🇬🇧`,
    date: svalutazioneFrontendEn.frontmatter.date,
    content: svalutazioneFrontendEn.rawContent(),
    url: "/blog/en/devaluing-frontend",
  });

  await insert(blogDB, {
    title: `Blog: ${ictEn.frontmatter.title} 🇬🇧`,
    date: ictEn.frontmatter.date,
    content: ictEn.rawContent(),
    url: "/blog/en/iterative-contract-testing",
  });

  return {
    instance: blogDB,
    params: {
      tolerance: 3,
      limit: 5,
      boost: {
        title: 5,
        content: 0.1,
      },
    },
  };
}
