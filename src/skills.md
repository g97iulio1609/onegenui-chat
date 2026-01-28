# Chat Components

AI-powered chat interface for natural language interaction with OneGenUI dashboards.

## Overview

The chat package provides a complete conversational interface that enables users to interact with the AI to create, modify, and manage dashboard components through natural language.

## Components

### Weather

A premium weather card component.

```tsx
<Weather
  location="Milan, IT"
  condition="sunny"
  temperature={24}
  humidity={45}
  windSpeed={12}
  forecast={[
    { day: "Mon", temp: 22, icon: "cloudy" },
    { day: "Tue", temp: 25, icon: "sunny" }
  ]}
/>
```

### ArticleCard

A card for news articles or search results.

```tsx
<ArticleCard
  title="Latest AI News"
  source="TechCrunch"
  date="2 hours ago"
  snippet="OpenAI releases new model..."
  url="https://example.com"
  thumbnail="https://example.com/img.jpg"
/>
```

### ChatPanel

Main chat orchestrator component. Handles conversation display, message input, and AI interactions.

```tsx
<ChatPanel
  conversation={conversation}
  isStreaming={isStreaming}
  onSend={handleSend}
  onEdit={handleEdit}
  onDelete={handleDelete}
  onAnswerQuestion={handleAnswer}
  onSuggestionClick={handleSuggestion}
/>
```

**Props:**
- `conversation`: Array of conversation turns with messages, questions, suggestions
- `isStreaming`: Whether AI is currently generating a response
- `onSend`: Callback when user sends a message
- `selectedElement`: Currently selected dashboard element for context

### QuestionForm

Renders interactive forms when AI needs structured input from user.

**Supported field types:**
- `text`: Single line text input
- `textarea`: Multi-line text input
- `number`: Numeric input with validation
- `select`: Dropdown selection
- `radio`: Single choice from options
- `checkbox`: Boolean toggle
- `date`: Date picker
- `slider`: Range slider

### SuggestionChips

Quick action buttons suggested by AI based on context.

```tsx
<SuggestionChips
  suggestions={[
    { id: "1", label: "Add chart", action: "add_chart" },
    { id: "2", label: "Modify colors", action: "modify_colors" },
  ]}
  onClick={handleSuggestion}
/>
```

## AI Integration Guidelines

### When to ask questions

Use `type: "form"` when collecting:
- Multiple related fields (3+ pieces of info)
- Structured options requiring select/radio/checkbox
- Data with validation (numbers, dates)
- Configuration or settings

Use `type: "quick-reply"` when:
- Offering predefined choices
- Confirming actions
- Navigation decisions

Use `type: "text"` when:
- Needing open-ended clarification
- Simple yes/no not covered by quick-reply

### Question schema

```json
{
  "op": "question",
  "question": {
    "id": "workout-details",
    "text": "Let me help you create a workout. What are your goals?",
    "type": "form",
    "fields": [
      {
        "id": "goal",
        "label": "Primary goal",
        "type": "select",
        "options": [
          { "value": "strength", "label": "Build strength" },
          { "value": "cardio", "label": "Improve cardio" }
        ]
      },
      {
        "id": "duration",
        "label": "Workout duration (minutes)",
        "type": "number",
        "validation": { "min": 15, "max": 120 }
      }
    ],
    "required": true
  }
}
```

### Suggestion chips schema

```json
{
  "op": "suggestion",
  "suggestions": [
    { "id": "edit", "label": "Edit component", "primary": true },
    { "id": "duplicate", "label": "Duplicate" },
    { "id": "delete", "label": "Delete" }
  ]
}
```

## Styling

The chat package uses a design token system for consistent styling:

- **Colors**: Glassmorphism backgrounds, gradient bubbles
- **Spacing**: Consistent padding and gaps
- **Typography**: Clear hierarchy with proper sizing
- **Animations**: Smooth transitions and micro-interactions

Tokens can be imported and customized:

```tsx
import { colors, spacing, radii } from "@onegenui/chat";
```

## Web Search Integration

> **CRITICAL**: When displaying web search results, ALWAYS use the `SearchResults` component.
> NEVER use `List` for search results - it lacks proper styling for URLs, favicons, and snippets.

When users ask for real-time information (news, prices, weather, etc.), you MUST:

### Mandatory Workflow

1. **FIRST** - Output JSONL to show BrowserAction with "searching" status
2. **THEN** - Call the `web-search` tool  
3. **AFTER** - Output JSONL to update BrowserAction to "complete" and add SearchResults

### Step 1: Show Search Starting

```jsonl
{"op":"add","path":"/elements/browser-action-1","value":{"key":"browser-action-1","type":"BrowserAction","props":{"action":"searching","target":"Bitcoin price","status":"loading","message":"Searching the web..."}}}
{"op":"set","path":"/root","value":"browser-action-1"}
```

### Step 2: Call web-search tool

The tool will return results with title, url, snippet, etc.

### Step 3: Show Results with SearchResults Component

```jsonl
{"op":"replace","path":"/elements/browser-action-1/props/status","value":"complete"}
{"op":"add","path":"/elements/search-results-1","value":{"key":"search-results-1","type":"SearchResults","props":{"query":"Bitcoin price","results":[{"title":"Bitcoin Price Today","url":"https://coinmarketcap.com/currencies/bitcoin/","snippet":"Live Bitcoin price, market cap, trading volume and more. BTC is currently trading at $98,500 with a 24h change of +2.3%.","favicon":"https://coinmarketcap.com/favicon.ico","source":"CoinMarketCap","date":"Just now"},{"title":"BTC/USD - Bitcoin US Dollar","url":"https://www.investing.com/crypto/bitcoin/btc-usd","snippet":"Get the latest Bitcoin price, BTC market cap, trading pairs, charts and data today from the world's number one cryptocurrency tracking website.","source":"Investing.com"}],"totalResults":1500000}}}
{"op":"add","path":"/elements/browser-action-1/children/-","value":"search-results-1"}
```

### WRONG Format (DO NOT USE)

```
<browser_action action="searching" />  ❌ WRONG - XML tags don't work
<BrowserAction action="searching" />   ❌ WRONG - JSX doesn't work
{"type":"List","props":{"items":[...]}} ❌ WRONG - Don't use List for search results
```

### Available Tools

| Tool | Use Case | Output Component |
|------|----------|------------------|
| `web-search` | Search engines for information | **SearchResults** |
| `web-scrape` | Extract content from specific URL | Document or custom |
| `search-flight` | Flight searches (Kiwi) | **Flight** |
| `search-hotel` | Hotel searches | **Hotel** |

## Best Practices

1. **Keep questions focused**: One logical group per question
2. **Provide meaningful labels**: Clear field labels
3. **Use appropriate field types**: Match data type to field type
4. **Add validation**: Prevent invalid input at the source
5. **Suggest next actions**: Use chips to guide user workflow
