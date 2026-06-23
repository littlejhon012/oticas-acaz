const fs = require('fs');

let code = fs.readFileSync('src/App.tsx', 'utf-8');

// 1. Text color #81a1c9 replacing text-brand-blue-50 globally
code = code.replace(/text-brand-blue-50/g, 'text-[#81a1c9]');

// 2. Yellow text / accents replacing text-brand-yellow-400/500/600/700 with text-[#d9bc06]
code = code.replace(/text-brand-yellow-400/g, 'text-[#d9bc06]');
code = code.replace(/text-brand-yellow-500/g, 'text-[#d9bc06]');
code = code.replace(/text-brand-yellow-600/g, 'text-[#d9bc06]');
code = code.replace(/text-brand-yellow-700/g, 'text-[#d9bc06]');

// 3. Yellow background replacing bg-brand-yellow-500 with bg-[#d9bc06]
code = code.replace(/bg-brand-yellow-500/g, 'bg-[#d9bc06]');

// 4. Icons with text-brand-blue-300 replacing with text-[#335b9d] - wait, brand-blue-300 IS #335b9d.
// Let's explicitly put text-[#335b9d] where requested if necessary, but text-brand-blue-300 is fine.
// I'll replace text-brand-blue-300 with text-[#335b9d] to be safe.
code = code.replace(/text-brand-blue-300/g, 'text-[#335b9d]');

// 5. Background color #152540 for specific icons in produtos-exclusivos.
// I already replaced some bg-brand-yellow-100 with bg-[#152540]. Let's replace the remaining bg-brand-blue-50 in that block:
// Specifically, <div className="w-10 h-10 rounded-xl bg-brand-blue-50 text-[#335b9d]...
code = code.replace(/bg-brand-blue-50( text-\[\#335b9d\] flex items-center justify-center shrink-0)/g, 'bg-[#152540]$1');

// 6. Fix the button (CSS 1) from bg-brand-blue-950 text-[#81a1c9] to bg-[#0c172a] text-white
// It originally was: className="bg-brand-blue-950 hover:bg-brand-blue-800 text-brand-blue-50...
// Now it is: bg-brand-blue-950 hover:bg-brand-blue-800 text-[#81a1c9]...
code = code.replace(/bg-brand-blue-950 hover:bg-brand-blue-800 text-\[\#81a1c9\]/g, 'bg-[#0c172a] hover:bg-[#152540] text-white');

// 7. Make sure any other yellow backgrounds are changed.
// e.g. bg-brand-yellow-150 in hero-tag? Let's leave it unless requested.
// Wait, CSS 68 said hero-tag -> color: #d9bc06. I did that with text-brand-yellow-700.

fs.writeFileSync('src/App.tsx', code);
console.log('Done');
