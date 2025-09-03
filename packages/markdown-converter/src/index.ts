import marked from "marked";

export async function convertMarkdownToHtml(markdown: string): Promise<string> {
  return await marked.parse(markdown);
}
