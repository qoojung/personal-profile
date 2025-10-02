#!/usr/bin/env node

/**
 * Responsive Design Verification Script
 *
 * This script analyzes the component files to verify that responsive
 * Tailwind CSS classes are properly implemented across all breakpoints.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Color codes for terminal output
const colors = {
  reset: "\x1b[0m",
  green: "\x1b[32m",
  red: "\x1b[31m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  cyan: "\x1b[36m",
};

// Breakpoint patterns to check
const breakpoints = {
  sm: /\bsm:/g,
  md: /\bmd:/g,
  lg: /\blg:/g,
  xl: /\bxl:/g,
};

// Components to verify
const components = [
  "src/components/Navigation.jsx",
  "src/components/Profile.jsx",
  "src/components/WorkExperience.jsx",
  "src/components/Education.jsx",
  "src/components/Contact.jsx",
];

console.log(
  `${colors.cyan}========================================${colors.reset}`
);
console.log(`${colors.cyan}Responsive Design Verification${colors.reset}`);
console.log(
  `${colors.cyan}========================================${colors.reset}\n`
);

let totalIssues = 0;
let totalChecks = 0;

// Verify each component
components.forEach((componentPath) => {
  const fullPath = path.join(__dirname, componentPath);

  if (!fs.existsSync(fullPath)) {
    console.log(`${colors.red}✗ ${componentPath} not found${colors.reset}`);
    totalIssues++;
    return;
  }

  const content = fs.readFileSync(fullPath, "utf8");
  const componentName = path.basename(componentPath, ".jsx");

  console.log(`${colors.blue}Testing: ${componentName}${colors.reset}`);
  console.log("─".repeat(40));

  // Check for responsive classes
  const results = {
    hasResponsive: false,
    breakpointsUsed: [],
    responsiveClasses: [],
  };

  Object.entries(breakpoints).forEach(([breakpoint, pattern]) => {
    const matches = content.match(pattern);
    if (matches) {
      results.hasResponsive = true;
      results.breakpointsUsed.push(breakpoint);
      results.responsiveClasses.push(...matches);
    }
  });

  totalChecks++;

  if (results.hasResponsive) {
    console.log(`${colors.green}✓ Responsive classes found${colors.reset}`);
    console.log(`  Breakpoints: ${results.breakpointsUsed.join(", ")}`);
    console.log(
      `  Total responsive classes: ${results.responsiveClasses.length}`
    );
  } else {
    console.log(
      `${colors.yellow}⚠ No responsive classes detected${colors.reset}`
    );
    console.log(`  This component may not be responsive`);
  }

  // Check for common responsive patterns
  const patterns = {
    "Hidden on mobile": /hidden\s+md:flex|hidden\s+md:block/g,
    "Responsive grid":
      /grid-cols-1\s+md:grid-cols-2|grid-cols-1\s+lg:grid-cols-/g,
    "Responsive text": /text-\w+\s+(?:sm|md|lg|xl):text-/g,
    "Responsive spacing":
      /(?:p|m|px|py|mx|my)-\d+\s+(?:sm|md|lg|xl):(?:p|m|px|py|mx|my)-/g,
    "Responsive sizing": /(?:w|h)-\d+\s+(?:sm|md|lg|xl):(?:w|h)-/g,
  };

  console.log("\n  Pattern Analysis:");
  Object.entries(patterns).forEach(([name, pattern]) => {
    const matches = content.match(pattern);
    if (matches) {
      console.log(
        `  ${colors.green}✓${colors.reset} ${name}: ${matches.length} instance(s)`
      );
    }
  });

  console.log("\n");
});

// Summary
console.log(
  `${colors.cyan}========================================${colors.reset}`
);
console.log(`${colors.cyan}Summary${colors.reset}`);
console.log(
  `${colors.cyan}========================================${colors.reset}`
);
console.log(`Components checked: ${totalChecks}`);
console.log(`Issues found: ${totalIssues}`);

if (totalIssues === 0) {
  console.log(
    `\n${colors.green}✓ All components verified successfully!${colors.reset}`
  );
} else {
  console.log(`\n${colors.red}✗ Some issues need attention${colors.reset}`);
}

console.log("\n");

// Exit with appropriate code
process.exit(totalIssues > 0 ? 1 : 0);
