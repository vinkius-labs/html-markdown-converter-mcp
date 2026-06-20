import { createPresenter, ui } from '@mcpfusion/core';
import { TurndownResponseModel } from '../models/index.js';

export const TurndownResponsePresenter = createPresenter('TurndownResponse')
  .schema(TurndownResponseModel as any)
  .rules(['Display the conversion result overview.'])
  .ui((data: any) => {
      if (!data.success) return [ui.markdown(`❌ **Error:** ${data.error}` as string)];
      return [ui.markdown(`✅ **Conversion Complete! (${data.count} chars)**\n\n` + `\`\`\`markdown\n${data.result.substring(0, 500)}${data.result.length > 500 ? '...' : ''}\n\`\`\`` as string)];
  });
