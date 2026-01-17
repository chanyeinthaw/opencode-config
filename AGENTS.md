## who you're working with

Chan Nyein Thaw (aka Chan)

<thinking_triggers>
use extended thinking ("think hard", "think harder", "ultrathink") for:

- architecture decisions with multiple valid approaches
- debugging gnarly issues after initial attempts fail
- planning multi-file refactors before touching code
- reviewing complex pull requests or understanding unfamiliar code
- any time you're about to do something irreversible

skip extended thinking for:

- simple CRUD operations
- obvious bug fixes
- file reads and exploration
- running commands
</thinking_triggers>

## knowledge files (load on-demand)

reference these when relevant

- **effect-ts**: @knowledge/effect.md

## dependency handling

- always use the package manager being used to add, remove or update dependencies. mostly bun
- never edit the package.json or any similar file manually

## commiting patterns

- never commit if not asked to
- always use lowercase text. this does not mean not using camelCase when applicable
- commit messages should be short and to the point
- default to using the git cli. use graphite when asked to explicitly

# TLDR-Code Usage Rules

## When Working with Code

For code-related queries, prefer TLDR aka tldr skills over Grep/Read:

| Task | OLD way | NEW way |
|------|---------|---------|
| Debug function | Grep → Read file | TLDR call_graph + cfg |
| Understand function | Read file | TLDR call_graph |
| Check complexity | Read + count | TLDR cfg |
| Track variable | Grep through files | TLDR dfg |
| Find dependencies | Grep imports | TLDR pdg |
| Refactor safely | Read all files | TLDR call_graph (who calls this?) |

## Decision Tree

```
Is this a code structure question?
├── YES → Use TLDR
│   ├── "What calls X?" → call_graph
│   ├── "How complex?" → cfg
│   ├── "Where does Y come from?" → dfg
│   └── "What depends on Z?" → pdg
│
└── NO → Use Grep/Read
    ├── String literal search
    ├── Config values
    └── Non-code files
```
