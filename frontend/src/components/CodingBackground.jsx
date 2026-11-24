
const codeSnippets = [
  "const app = () => {",
  "function solve() {",
  "return response;",
  "useState(false)",
  "if (isValid) {",
  "import React",
  "console.log('Hello');",
  "async function fetchData()",
  "npm run dev",
  "git commit -m",
  "while (i < n)",
  "</>",
  "{ }",
  "=>",
  "01",
  "0101",
];

export default function CodingBackground() {
  return (
    <div className="coding-background" aria-hidden="true">
      {codeSnippets.map((snippet, index) => (
        <span
          key={index}
          className={`floating-code code-${index + 1}`}
        >
          {snippet}
        </span>
      ))}
      <div className="coding-glow coding-glow-green" />
      <div className="coding-glow coding-glow-yellow" />
    </div>
  );
}
