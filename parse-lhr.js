const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '.lighthouseci');
const files = fs.readdirSync(dir)
  .filter(f => f.endsWith('.json') && f.startsWith('lhr-'))
  .map(f => ({ name: f, path: path.join(dir, f), mtime: fs.statSync(path.join(dir, f)).mtime }))
  .sort((a, b) => b.mtime - a.mtime);

if (files.length === 0) {
  console.log("No LHR JSON files found.");
  process.exit(1);
}

const latestFile = files[0];
const data = JSON.parse(fs.readFileSync(latestFile.path, 'utf8'));

// Scores are typically 0 to 1, multiply by 100 for percentage
const scores = {
  Performance: data.categories.performance?.score * 100,
  Accessibility: data.categories.accessibility?.score * 100,
  BestPractices: data.categories['best-practices']?.score * 100,
  SEO: data.categories.seo?.score * 100,
};

// Core Web Vitals
const audits = data.audits;
const fcp = audits['first-contentful-paint']?.displayValue;
const lcp = audits['largest-contentful-paint']?.displayValue;
const cls = audits['cumulative-layout-shift']?.displayValue;

// Top 3 diagnostics / opportunities
const allAudits = Object.values(audits)
  .filter(a => a.details && (a.details.type === 'opportunity' || Object.keys(a.details).includes('items')))
  .filter(a => a.score !== null && a.score < 1) // Only failed/warning ones
  .sort((a, b) => {
    // Sort by savings if available, then by score
    const savingA = a.details?.overallSavingsMs || 0;
    const savingB = b.details?.overallSavingsMs || 0;
    if (savingB !== savingA) return savingB - savingA;
    return a.score - b.score;
  })
  .slice(0, 3)
  .map(a => `${a.title}: ${a.description.split('.')[0]}`);

console.log('--- SCORES ---');
console.log(`Performance: ${scores.Performance}`);
console.log(`Accessibility: ${scores.Accessibility}`);
console.log(`Best Practices: ${scores.BestPractices}`);
console.log(`SEO: ${scores.SEO}`);

console.log('\n--- CORE WEB VITALS ---');
console.log(`FCP: ${fcp}`);
console.log(`LCP: ${lcp}`);
console.log(`CLS: ${cls}`);

console.log('\n--- TOP 3 DIAGNOSTICS/OPPORTUNITIES ---');
if (allAudits.length === 0) {
    console.log("No major opportunities found! Excellent!");
} else {
    allAudits.forEach((a, i) => console.log(`${i+1}. ${a}`));
}
