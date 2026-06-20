# HTML to Markdown Converter MCP

An MCP server optimized for LLM token efficiency, converting raw HTML into clean, well-formatted Markdown.

This tool is especially useful for AI agents because parsing raw HTML consumes a massive amount of tokens and often causes hallucination or context window exhaustion. By converting HTML to Markdown, you save up to 80% on tokens and provide the LLM with a highly structured, readable format.

If you don't want to run this locally, you can use the hosted version for free on Vinkius Edge: [HTML Markdown Converter MCP on Vinkius](https://vinkius.com/mcp/html-to-markdown-converter).

## Tools Available

- `convert_html_to_markdown`: Converts raw HTML strings into clean Markdown deterministically without LLM truncation or data loss. Preserves headings, links, lists, and code blocks.

## Why Use This MCP?

1. **Token Efficiency**: LLMs struggle with the noise of raw HTML tags. Markdown is their native language and is far more token-efficient.
2. **Deterministic Processing**: Bypasses LLM hallucinations when extracting data from complex DOM structures.
3. **Data Preservation**: Accurately maintains headings, lists, links, images, and code blocks during the conversion.

## How to use

### 1. Free Edge Hosting (Recommended)
You do not need to host this yourself! **Vinkius provides FREE, highly available edge hosting for MCP servers.** You can connect directly via the [Vinkius Edge Marketplace](https://vinkius.com/mcp/html-to-markdown-converter).

Alternatively, you can deploy this exact server to our secure V8 isolate cloud in seconds:
```bash
npx mcpfusion deploy
```
*This command bundles your code and instantly deploys it to the Vinkius Edge, providing you with a live, DDoS-protected URL ready to be consumed by your AI agents.*

### 2. Run Locally

1. Install dependencies:
```bash
npm install
```

2. Build the server:
```bash
npm run build
```

3. Run the development server:
```bash
npm run dev
```

## Built with MCP Fusion
This server was built using the [MCP Fusion](https://www.npmjs.com/package/@mcpfusion/core) framework, ensuring high stability, typesafe models, and strict adherence to the Model Context Protocol.
