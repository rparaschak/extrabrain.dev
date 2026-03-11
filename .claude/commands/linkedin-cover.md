---
allowed-tools: Read, Write, Edit, Glob, Bash
description: 'Create a LinkedIn post cover image (SVG). Read the post first, then generate a cover.'
argument-hint: [post file name or topic]
---

# LinkedIn Cover Creation Workflow

1. Read the LinkedIn post to understand its core message
2. Identify one key visual idea or metaphor for the cover
3. Design and create an SVG following the theme below
4. Save it to `src/blog-drafts/li/media/<post-slug>/<post-slug>-cover.svg`

---

## SVG Specifications

- **Dimensions**: `viewBox="0 0 1080 1080"` with `width="1080" height="1080"`
- **Format**: Self-contained SVG, no external dependencies
- **Save path**: `src/blog-drafts/li/media/<post-slug>/<post-slug>-cover.svg`

---

## Visual Theme: "Clean Dark Minimal"

All LinkedIn covers share a simple, professional, dark aesthetic. Content changes per post but the overall feel stays the same.

### Background

- Solid dark charcoal: `#2d3748`
- Optional subtle rounded-rect card inset with slightly lighter fill `#374151` and 24px border-radius
- No gradients, no grids, no decorative patterns — keep it flat and clean

### Color Palette

| Role               | Color     | Usage                                  |
| ------------------ | --------- | -------------------------------------- |
| Background         | `#2d3748` | Main background fill                   |
| Card / surface     | `#374151` | Optional card panels, code blocks      |
| Card border        | `#4b5563` | Subtle borders on cards if needed      |
| Text primary       | `#ffffff` | Headings, main text                    |
| Text secondary     | `#94a3b8` | Subtitles, labels, muted text          |
| Accent teal        | `#2dd4bf` | Primary accent — highlights, key words |
| Accent teal muted  | `#5eead4` | Lighter teal for secondary accents     |
| Positive / success | `#4ade80` | Checkmarks, success states             |
| Warning            | `#fbbf24` | Attention, caution                     |
| Negative / error   | `#f87171` | Errors, removals                       |

### Typography

- **Font stack**: `system-ui, -apple-system, 'Segoe UI', sans-serif`
- **Title**: 48-64px, font-weight 700, color `#ffffff`, centered or left-aligned
- **Subtitle**: 24-32px, font-weight 400, color `#94a3b8`
- **Labels / tags**: 18-22px, font-weight 600
- **Code text**: `'SF Mono', 'Fira Code', 'Consolas', monospace`, 20-24px

### Layout Principles

- **Center-weighted**: Main content in the center of the 1080x1080 canvas
- **One idea only**: Each cover communicates a single concept — do not overcrowd
- **Generous whitespace**: At least 80px padding from edges
- **Hierarchy**: Title at top or center, supporting visual below
- **Max 2 visual elements**: e.g., a title + one diagram, or a title + one code snippet
- **Flat design**: No shadows, no 3D effects, no glow filters

### Visual Elements (use sparingly)

**Text cards** — For highlighting key phrases or code:

- Rounded rect (`rx="16"`) with `#374151` fill
- Optional thin border in `#4b5563`
- Text inside in white or teal

**Simple icons** — Line-art style only:

- Thin strokes (`stroke-width="2-3"`) in white or teal
- No filled shapes, keep it minimal

**Arrows / connectors** — For flow diagrams:

- Simple straight lines or gentle curves
- `stroke-width="2-3"` in `#94a3b8` or teal
- Small triangle arrowheads

**Dividers / separators**:

- Thin lines in `#4b5563` when needed to separate sections

### Do NOT

- Use raster images or external references
- Add complex illustrations or photographic elements
- Use more than 2 accent colors per cover
- Add text longer than 5-6 words per line
- Use gradients, glows, or shadows
- Make it busy — extreme simplicity is the goal
- Use emojis or decorative icons
