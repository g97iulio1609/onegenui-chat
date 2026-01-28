# AGENTS.md - @onegenui/chat

AI Chat component for OneGenUI. Provides a complete chat interface with streaming support.

## Purpose

This package provides:
- **Chat Panel**: Complete chat UI with message history
- **Question Form**: Input with file attachments and suggestions
- **Planning Status**: Multi-step task progress visualization
- **Message Components**: User/assistant message rendering with markdown

## File Structure

```
src/
├── index.ts              # Public exports
├── schema.ts             # Chat-related schemas
├── types/                # TypeScript types
├── components/
│   ├── ChatPanel.tsx     # Main chat container
│   ├── QuestionForm.tsx  # Input form (NEEDS REFACTORING)
│   ├── PlanningStatus.tsx # Plan progress (NEEDS REFACTORING)
│   ├── MessageBubble.tsx
│   └── ...
├── hooks/                # Chat-specific hooks
├── styles/               # CSS/styling
└── utils/                # Helper functions
```

## Key Exports

```typescript
export { ChatPanel } from './components/ChatPanel';
export { QuestionForm } from './components/QuestionForm';
export { useChatState } from './hooks/useChatState';
export type { ChatMessage, ChatConfig } from './types';
```

## Development Guidelines

- Support streaming responses with typing indicators
- Handle markdown rendering with code highlighting
- Support file/image attachments in messages
- Provide keyboard shortcuts (Enter to send, Shift+Enter for newline)
- Use Framer Motion for message animations
- Integrate with `@onegenui/react` for UI generation

## Refactoring Priorities (from toBeta.md)

| File | LOC | Priority | Action |
|------|-----|----------|--------|
| `PlanningStatus.tsx` | 533 | P1 | Split state, steps, progress, UI |
| `QuestionForm.tsx` | 491 | P1 | Extract input, attachments, suggestions |

## Tool Progress Standardization (from toBeta.md)

This package has `ToolProgressIndicator` that should be unified with `@onegenui/react`'s `ToolProgressOverlay`:

```typescript
// Unified Progress Types (to be implemented)
interface UnifiedProgress {
  id: string;
  type: 'tool' | 'generation' | 'streaming' | 'custom';
  status: 'pending' | 'running' | 'complete' | 'error';
  label: string;
  progress?: number;
  message?: string;
}
```

## Testing

```bash
pnpm --filter @onegenui/chat type-check
pnpm --filter @onegenui/chat build
```

## Dependencies

- `@onegenui/react` (workspace)
- `framer-motion` ^12.x
- `lucide-react` for icons
- `react-markdown`, `remark-gfm` for message rendering
- `zod` ^3.24.0 (note: should migrate to v4)
- React ^19.0.0 (peer)
