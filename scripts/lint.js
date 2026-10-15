import { ESLint } from 'eslint';

async function main() {
  const eslint = new ESLint({
    overrideConfigFile: 'eslint.config.mjs',
  });

  const results = await eslint.lintFiles(['src/**/*.{js,jsx}']);

  let totalErrors = 0;
  let totalWarnings = 0;

  for (const result of results) {
    if (result.messages.length > 0) {
      console.log(`\n${result.filePath}`);
      for (const msg of result.messages) {
        const type = msg.severity === 2 ? 'error' : 'warn';
        console.log(`  ${result.filePath}:${msg.line}:${msg.column} ${type} ${msg.message} (${msg.ruleId})`);
        if (msg.severity === 2) totalErrors++;
        else totalWarnings++;
      }
    }
  }

  console.log(`\n${totalErrors} error(s), ${totalWarnings} warning(s)`);

  if (totalErrors > 0) {
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});