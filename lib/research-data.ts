export type ResearchStep = {
    id: string;
    actTitle?: string;
    heading: string;
    body: string;
    citationIds?: string[];
    vizState: string;
};

export const citations = {
    "jurca-2021": "Jurca et al. (2021) - Analysis of 90,000 3D foot scans vs shoe sizes.",
    "activation-paradox": "Recent dynamic studies revealing increased intrinsic muscle activation in cushioned shoes.",
    "pressure-threshold": "Clinical threshold for ischemic injury (30-50 mmHg).",
    "dtml-function": "Deep Transverse Metatarsal Ligament (DTML) proprioceptive function studies.",
    "material-mvtr": "Moisture Vapor Transmission Rate comparison: Mesh vs Synthetic Leather.",
    "lacoste-design": "Lacoste L003 Neo Tech design specifications and material composition."
};

export const narrativeSteps: ResearchStep[] = [
    // --- ACT I: THE DYNAMIC FOOT ---
    {
        id: "1-intro",
        actTitle: "Act I: The Dynamic Foot",
        heading: "The Kinetic Symbiosis",
        body: "The relationship between the human foot and footwear represents one of the most complex interfaces in modern ergonomics. It involves continuous exchange of kinetic energy, thermal regulation, and structural support.",
        vizState: "gait-neutral",
    },
    {
        id: "1-gait",
        heading: "Gait Phase Kinematics",
        body: "The foot is not a static structure. Walking involves a continuous 'double support' phase (VGRF 1.1–1.5x BW), while running introduces a 'flight phase' with impacts reaching 3x body weight within 50ms.",
        vizState: "gait-impact",
    },
    {
        id: "1-expansion",
        heading: "Volumetric Expansion",
        body: "During sustained activity, the foot undergoes dynamic expansion due to vasodilation and gravitational fluid pooling. This expansion is most pronounced in the forefoot and midfoot, requiring the shoe to adapt in real-time.",
        citationIds: ["jurca-2021"],
        vizState: "gait-expansion",
    },
    {
        id: "1-paradox",
        heading: "The Activation Paradox",
        body: "Contrary to the belief that supportive shoes weaken feet, cushioned shoes actually *increase* intrinsic muscle activation (Flexor digitorum brevis +60%) to stabilize the arch against the unstable foam interface.",
        citationIds: ["activation-paradox"],
        vizState: "gait-muscle",
    },

    // --- ACT II: THE CONSTRAINT ---
    {
        id: "2-last",
        actTitle: "Act I: The Constraint",
        heading: "The Geometry Mismatch",
        body: "A profound 'fit crisis' exists: only 60% of shoe models fit true to size. Brands prioritize length and ball width but often ignore volumetric accuracy, leading to compression.",
        citationIds: ["jurca-2021"],
        vizState: "pressure-last",
    },
    {
        id: "2-threshold",
        heading: "The 55mmHg Threshold",
        body: "Normal compartment pressure is 8–15 mmHg. When external shoe pressure exceeds 30 mmHg, venous return is impaired. Above 50 mmHg, axonal injury (nerve damage) begins, creating 'Miniature Compartment Syndrome'.",
        citationIds: ["pressure-threshold"],
        vizState: "pressure-warning",
    },
    {
        id: "2-thermal",
        heading: "The Thermal Feedback Loop",
        body: "Synthetic leathers have an MVTR of 0.84 g/m²·h (45x worse than mesh). This traps heat, accelerating swelling, which increases tightness, further restricting circulation—a self-perpetuating cycle.",
        citationIds: ["material-mvtr"],
        vizState: "pressure-thermal",
    },

    // --- ACT III: CASE STUDY ---
    {
        id: "3-intro",
        actTitle: "Act III: Case Study",
        heading: "Puma Rider vs. Lacoste L003",
        body: "An integrated biomechanical analysis of two distinct design philosophies: The 'Forgiving' Retro-Runner (Puma) vs. The 'Structured' Tech-Shoe (Lacoste).",
        vizState: "shoe-comparison",
    },
    {
        id: "3-lacoste",
        heading: "The Elastic Trap",
        body: "The Lacoste L003 features an elasticated tongue adjustment system. While ergonomic in theory, it creates a constant baseline tension that cannot be relieved by loosening laces. As the foot swells, this 'spring-loaded' constraint directs pressure into the forefoot.",
        citationIds: ["lacoste-design"],
        vizState: "shoe-exploded-lacoste",
    },
    {
        id: "3-result",
        heading: "Cumulative Damage",
        body: "The combination of the elastic constraint, low-breathability ripstop upper, and tapered toe box creates a 'Pressure-Time Integral' that exceeds nerve tolerance, resulting in progressive numbness.",
        vizState: "shoe-pti-graph",
    },

    // --- ACT IV: SOLUTIONS ---
    {
        id: "4-intro",
        actTitle: "Act IV: Solutions",
        heading: "Biomechanical Diagnostics",
        body: "Resolving fit issues requires identifying the specific constraint mechanism. Numbness isn't just 'tightness'—it's a specific nerve compression signal.",
        vizState: "diagnostics-intro",
    },
    {
        id: "4-window",
        heading: "Window Lacing",
        body: "By skipping an eyelet pair over the pressure hotspot, you create a 'window' of reduced tension. This can bypass the dorsal nerve compression caused by elastic tongue systems.",
        vizState: "diagnostics-window-lacing",
    },
];
