
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const files = [
    'generic/_generic.scss',
    'generic/_media.scss',
    'generic/_button.scss',
    'elements/_document.scss',
    'objects/_container.scss',
    'objects/_icons.scss',
    'objects/_grid.scss',
    'components/_heading.scss',
    'components/_text.scss',
    'components/_button.scss',
    'components/_form.scss',
    'components/_header.scss',
    'components/_hero.scss',
    'components/_rail.scss',
    'components/_cascade.scss',
    'components/_section-heading.scss',
    'components/_tool.scss',
    'components/_features-grid.scss',
    'components/_sticky-heading.scss',
    'components/_list.scss',
    'components/_footer.scss',
    'components/_fadeInText.scss',
    'components/_preloader.scss',
    'utilities/_grid-column.scss',
    'utilities/_theme.scss',
    'utilities/_helpers.scss',
    'utilities/_spacing.scss'
];

const basePath = '/Users/arnvvd/Projects/locomotive-scroll/packages/landing/assets/styles';

files.forEach(file => {
    const filePath = path.join(basePath, file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Check if already has @use
        if (content.includes('@use "../core"')) {
            console.log(`Skipping ${file}, already has @use`);
            return;
        }

        // Try to find the header block
        const headerRegex = /^(\/\/ =+[\r\n]+(?:\/\/.*[\r\n]+)*\/\/ =+[\r\n]+)/;
        const match = content.match(headerRegex);

        if (match) {
            // Insert after header
            const header = match[1];
            const newContent = content.replace(header, header + '\n@use "../core" as *;\n');
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log(`Updated ${file}`);
        } else {
            // Prepend to top
            const newContent = '@use "../core" as *;\n\n' + content;
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log(`Updated ${file} (prepended)`);
        }
    } else {
        console.error(`File not found: ${filePath}`);
    }
});
