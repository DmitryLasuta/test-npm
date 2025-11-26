import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Get the most recent commit message
const commitMessage = execSync('git log -1 --format=%s').toString().trim();

const SCOPE_NAME = '@tests-npm-deploy';
// Define valid scopes and map them to actual package names
const packageMap = {
  core: `${SCOPE_NAME}/core`,
};

// Define regex patterns
const commitPatterns = {
  major: /^BREAKING CHANGE: (.+)/,
  minor: /^feat\(([^)]+)\): (.+)/,
  patch: /^fix\(([^)]+)\): (.+)/,
};

// Initialize
let packageName = null;
let changeType = null;
let description = null;

// Detect commit type and scope
if (commitPatterns.major.test(commitMessage)) {
  changeType = 'major';
  description = commitMessage.match(commitPatterns.major)?.[1]?.trim();
} else if (commitPatterns.minor.test(commitMessage)) {
  const scope = commitMessage.match(commitPatterns.minor)?.[1]?.trim();
  if (scope && packageMap[scope]) {
    changeType = 'minor';
    packageName = scope;
    description = commitMessage.match(commitPatterns.minor)?.[2]?.trim();
  }
} else if (commitPatterns.patch.test(commitMessage)) {
  const scope = commitMessage.match(commitPatterns.patch)?.[1]?.trim();
  if (scope && packageMap[scope]) {
    changeType = 'patch';
    packageName = scope;
    description = commitMessage.match(commitPatterns.patch)?.[2]?.trim();
  }
}

// Create changeset file if package is valid
if (packageName) {
  const pkgFullName = packageMap[packageName];

  // Ensure .changesets folder exists
  const changesetsDir = path.resolve('.changeset');
  if (!fs.existsSync(changesetsDir)) {
    fs.mkdirSync(changesetsDir);
  }

  const changesetContent = `---
'${pkgFullName}': ${changeType}
---
${description || 'No description provided.'}
`;

  const filename = path.join(changesetsDir, `auto-${Date.now()}.md`);
  fs.writeFileSync(filename, changesetContent);

  console.log(`✅ Changeset file created for package: ${pkgFullName}`);
} else {
  console.log(
    `⚠️ No valid package scope found in commit message. Valid scopes are: ${Object.keys(packageMap).join(', ')}`
  );
}

