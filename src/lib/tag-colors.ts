const colors = [
  "bg-rose-500/10 text-rose-400/80 hover:bg-rose-500/20",
  "bg-sky-500/10 text-sky-400/80 hover:bg-sky-500/20",
  "bg-amber-500/10 text-amber-400/80 hover:bg-amber-500/20",
  "bg-emerald-500/10 text-emerald-400/80 hover:bg-emerald-500/20",
  "bg-violet-500/10 text-violet-400/80 hover:bg-violet-500/20",
  "bg-teal-500/10 text-teal-400/80 hover:bg-teal-500/20",
  "bg-pink-500/10 text-pink-400/80 hover:bg-pink-500/20",
  "bg-indigo-500/10 text-indigo-400/80 hover:bg-indigo-500/20",
];

export function getTagColor(tag: string): string {
  let hash = 0;
  for (const char of tag) {
    hash = char.charCodeAt(0) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}
