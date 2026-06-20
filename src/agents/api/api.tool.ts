import { f } from '../../mcpfusion.js';
import { TurndownResponsePresenter } from '../../views/index.js';
import { convertHtmlToMarkdown } from '../../engine/logic.js';

export const htmlToMarkdownTool = f.action('convert_html_to_markdown')
    .describe('Converts raw HTML strings into clean Markdown deterministically without LLM truncation or data loss.')
    .instructions('Use this tool to convert raw HTML into clean Markdown format. Pass the HTML string and receive properly formatted Markdown with headings, links, lists, and code blocks preserved.')
    .withString('htmlStr', 'The raw HTML text.')
    .returns(TurndownResponsePresenter)
    .handle(async (i) => await convertHtmlToMarkdown(i.htmlStr));
