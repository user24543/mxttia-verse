import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";

export const CATEGORIES = [
  "3D Art",
  "Motion Design",
  "VJ / Live Visuals",
  "Digital Experiments",
] as const;

export type Category = (typeof CATEGORIES)[number];

export type Work = {
  id: string;
  code: string;
  title: string;
  category: Category;
  date: string;
  medium: string;
  notes: string;
  image: string;
  alt: string;
};

export const WORKS: Work[] = [
  {
    id: "apparel",
    code: "xx",
    title: "apparel",
    category: "3D Art",
    date: "oct 2025",
    medium: "digital art",
    notes: "designed garments as part of american musician trippie redd's merchandise.",
    image: image1.url,
    alt: "Grid of graphic tees and longsleeves designed for Trippie Redd merchandise",
  },
  {
    id: "vinyls",
    code: "yy",
    title: "vinyls / cd",
    category: "Motion Design",
    date: "2024 — 2026",
    medium: "3d design (blender)",
    notes: "explored shapes and gradients to best represent music on vinyls and cds.",
    image: image2.url,
    alt: "Rendered vinyl records, cassette and CD packaging in marbled black and white",
  },
  {
    id: "misc",
    code: "zz",
    title: "misc",
    category: "Digital Experiments",
    date: "2025 — 2026",
    medium: "mixed medias",
    notes: "experiments, 3d renders, posters...",
    image: image3.url,
    alt: "Collage of posters, 3D renders and festival artwork",
  },
  {
    id: "live",
    code: "vj",
    title: "live visuals",
    category: "VJ / Live Visuals",
    date: "2025 — 2026",
    medium: "touchdesigner / realtime",
    notes: "realtime reactive systems projected in clubs and small venues around milan.",
    image: image3.url,
    alt: "Abstract glowing realtime visual render used for live projection",
  },
];

export const TOOLS = [
  "Houdini",
  "Maya",
  "TouchDesigner",
  "Cinema 4D",
  "Photoshop",
  "Substance",
  "After Effects",
  "DaVinci Resolve",
] as const;

export const TIMELINE = [
  { year: "2024", title: "first renders", note: "started shaping music into objects — vinyls, cds, covers." },
  { year: "2025", title: "apparel", note: "garments designed for trippie redd's merch line." },
  { year: "2025", title: "posters & festivals", note: "mixed media artwork, print experiments, event identities." },
  { year: "2026", title: "realtime", note: "touchdesigner systems, live visuals, an archive that never closes." },
];

export const EXPERIMENTS = [
  { id: "EXP-001", title: "chrome_liquid", tag: "houdini", state: "archived", size: "412 MB" },
  { id: "EXP-002", title: "scanline_portrait", tag: "touchdesigner", state: "live", size: "88 MB" },
  { id: "EXP-003", title: "gradient_vinyl_v7", tag: "blender", state: "archived", size: "1.2 GB" },
  { id: "EXP-004", title: "noise_cathedral", tag: "houdini", state: "wip", size: "3.4 GB" },
  { id: "EXP-005", title: "poster_dump_2025", tag: "photoshop", state: "archived", size: "640 MB" },
  { id: "EXP-006", title: "particle_choir", tag: "touchdesigner", state: "wip", size: "210 MB" },
  { id: "EXP-007", title: "melted_cd_case", tag: "cinema 4d", state: "archived", size: "96 MB" },
  { id: "EXP-008", title: "unhuman_face", tag: "mixed media", state: "live", size: "512 MB" },
];
