---
allowed-tools: Read, Write, Edit, Glob
description: 'Create a blog post cover SVG. Read the post first, then generate a consistent cover image.'
argument-hint: [post file name or topic]
---

# Blog Cover Creation Workflow

1. Read the blog post to understand its core concept
2. Identify the key visual metaphor (the "one idea" the cover should communicate)
3. Design and create an SVG following the theme below
4. Save it to `src/assets/images/blog/` and update the post frontmatter `image:` field

---

## SVG Specifications

- **Dimensions**: `viewBox="0 0 900 506"` with `width="900" height="506"`
- **Format**: Self-contained SVG, no external dependencies
- **Save path**: `src/assets/images/blog/<post-slug>-cover.svg`

---

## Visual Theme: "Dark Tech Blueprint"

All covers share a consistent dark, developer-centric aesthetic. The content changes per post but the skeleton stays the same.

### Background

- Dark navy gradient from `#0d1117` to `#161b22` (diagonal, top-left to bottom-right)
- Subtle grid overlay: `#c9d1d9` lines at `opacity="0.04"`, 60px spacing
- Decorative corner brackets in `#30363d` at `opacity="0.3"` — thin L-shaped polylines in all four corners

### Color Palette

| Role                 | Color     | Usage                                        |
| -------------------- | --------- | -------------------------------------------- |
| Background primary   | `#0d1117` | Main background                              |
| Background secondary | `#161b22` | Gradient end, card fills                     |
| Border / muted       | `#30363d` | Borders, dividers, subtle lines              |
| Text primary         | `#c9d1d9` | Main text on dark background                 |
| Text muted           | `#8b949e` | Labels, secondary text                       |
| Accent purple        | `#7c3aed` | Primary accent — nodes, highlights           |
| Accent purple light  | `#c4b5fd` | Purple text, icon strokes                    |
| Accent green         | `#22c55e` | Success, checks, positive outcomes           |
| Accent green light   | `#86efac` | Green text, icon strokes                     |
| Accent amber         | `#f59e0b` | Warnings, feedback, attention                |
| Accent amber light   | `#fbbf24` | Amber text                                   |
| Terminal red         | `#f85149` | Window dot (close)                           |
| Terminal yellow      | `#f0c746` | Window dot (minimize)                        |
| Terminal green       | `#3fb950` | Window dot (maximize), terminal success text |

### Typography

- **Font stack**: `'SF Mono', 'Fira Code', 'Consolas', monospace` — monospace everywhere for dev feel
- **Title/header text**: 12px, uppercase, letter-spacing 3, color `#8b949e`, with a short accent line below in `#7c3aed`
- **Node labels**: 14px, font-weight 600, using the node's accent color
- **Sublabels**: 10px, color `#8b949e`
- **Flow labels**: 11px, color matching the flow's accent

### Visual Elements

**Nodes** — The main conceptual elements of the diagram. Each gets:

- A geometric container shape (hexagon, shield, rounded rect, circle — vary per post)
- Thin stroke in the accent color (`stroke-width="2"`)
- Very subtle fill of the same color at `opacity="0.08-0.1"`
- An ambient glow behind it: large circle with `filter="url(#softGlow)"` at `opacity="0.08"`
- A simple icon inside (drawn with strokes, not filled — clean line-art style)
- A dashed orbit or accent ring around it at `opacity="0.3"` using `stroke-dasharray`

**Connections** — Arrows/flows between nodes:

- Curved paths (`C` bezier curves) connecting nodes
- `stroke-width="2"`, with arrow markers
- Use `stroke-dasharray="6 4"` for secondary/output flows
- Solid lines for primary/feedback flows
- Labels along the flow in matching accent color

**Terminal snippet** (optional but encouraged) — grounds the abstract diagram:

- Rounded rect (`rx="8"`) with `#0d1117` fill and `#30363d` border
- Title bar with three colored dots (red/yellow/green)
- Monospace text showing a realistic command + success output
- Positioned at the bottom center of the image

### Glow Filters (defined in `<defs>`)

```xml
<filter id="glowPurple" x="-50%" y="-50%" width="200%" height="200%">
  <feGaussianBlur stdDeviation="8" result="blur"/>
  <feComposite in="SourceGraphic" in2="blur" operator="over"/>
</filter>
<filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
  <feGaussianBlur stdDeviation="18"/>
</filter>
```

### Layout Principles

- **Center-weighted composition**: Main diagram in the middle 60% of the canvas
- **2-3 main nodes max**: Don't overcrowd. Pick the 2-3 core concepts from the post
- **Horizontal flow preferred**: Left-to-right reading direction for the main concept
- **Vertical hierarchy**: Title at top, diagram in middle, terminal/output at bottom
- **Breathing room**: Keep generous margins (at least 80px from edges to main content)

### Do NOT

- Use raster images or external references
- Add photographic elements or complex illustrations
- Use more than 3 accent colors per cover
- Add text longer than 3-4 words per label
- Make it look busy — simplicity is key
