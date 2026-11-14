import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, 'dist');
const tempIndex = path.resolve(__dirname, '.temp_ghpages_index');

console.log('📦 Preparando branch gh-pages limpa a partir de dist/ ...');

const env = { ...process.env, GIT_INDEX_FILE: tempIndex };

try {
  if (fs.existsSync(tempIndex)) {
    fs.unlinkSync(tempIndex);
  }

  execSync(`git --work-tree="${distDir}" add -f .`, { env, stdio: 'inherit' });
  const tree = execSync('git write-tree', { env }).toString().trim();
  const commit = execSync(`git commit-tree ${tree} -m "Deploy Pyramidle to GitHub Pages"`, { env }).toString().trim();
  execSync(`git update-ref refs/heads/gh-pages ${commit}`, { stdio: 'inherit' });

  console.log('🚀 Enviando branch gh-pages para o repositório remoto...');
  execSync('git push origin gh-pages --force', { stdio: 'inherit' });
  console.log('✅ Deploy concluído com sucesso!');
} finally {
  if (fs.existsSync(tempIndex)) {
    fs.unlinkSync(tempIndex);
  }
}
