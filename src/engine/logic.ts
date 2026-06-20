import TurndownService from 'turndown';

export async function convertHtmlToMarkdown(htmlStr: string) {
    try {
        const turndownService = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced' });
        const markdown = turndownService.turndown(htmlStr);
        return { success: true, count: markdown.length, result: markdown, error: '' };
    } catch (e: any) {
        return { success: false, count: 0, result: '', error: e.message };
    }
}
