import { writeFileSync, readFileSync } from 'node:fs';

const FEED_URL = 'https://blog.rosmoscato.xyz/feed/';
const ALLOWED_ORIGIN = 'https://blog.rosmoscato.xyz/';
const OUT = 'blog-latest.json';

function extractItem(xml) {
    const start = xml.indexOf('<item>');
    const end = xml.indexOf('</item>', start);
    if (start === -1 || end === -1) throw new Error('no <item> found in feed');
    return xml.slice(start, end);
}

function extractTag(item, tag) {
    const match = item.match(new RegExp(`<${tag}>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?</${tag}>`));
    if (!match) throw new Error(`<${tag}> not found in first item`);
    return match[1].trim();
}

const res = await fetch(FEED_URL, { headers: { 'user-agent': 'rosmoscato-site-blog-banner' } });
if (!res.ok) throw new Error(`feed responded ${res.status}`);

const item = extractItem(await res.text());
const title = extractTag(item, 'title');
const url = extractTag(item, 'link');
const pubDate = extractTag(item, 'pubDate');

if (!title || !url.startsWith(ALLOWED_ORIGIN)) throw new Error('invalid item: title empty or link outside allowed origin');

const date = new Date(pubDate).toISOString().slice(0, 10);
const next = JSON.stringify({ title, url, date }, null, 2) + '\n';

let current = null;
try { current = readFileSync(OUT, 'utf8'); } catch {}

if (current === next) {
    console.log('unchanged: blog-latest.json already current');
} else {
    writeFileSync(OUT, next);
    console.log(`updated: ${title}`);
}
