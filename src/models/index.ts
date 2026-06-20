import { defineModel } from '@mcpfusion/core';

export const TurndownResponseModel = defineModel('TurndownResponse', (m) => {
    m.casts({
        success: m.boolean('Success flag'),
        count: m.number('Total chars converted'),
        result: m.string('Converted string result'),
        error: m.string('Optional error')
    });
});
