module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/blog/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogIndex,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
const metadata = {
    title: "iPhone, iPad & MacBook Repair Guides | Tech Medics Macon Blog",
    description: "Expert repair guides, tips, and cost breakdowns for iPhone, iPad, and MacBook repair in Macon GA. Learn about screen repair, battery replacement, and more.",
    alternates: {
        canonical: "https://techmedicsmacon.com/blog"
    }
};
const posts = [
    {
        slug: "iphone-screen-repair-macon-ga",
        title: "Complete iPhone Screen Repair Guide – Macon GA",
        desc: "Everything you need to know about iPhone screen repair costs, quality options, and what to expect at Tech Medics Macon.",
        category: "iPhone"
    },
    {
        slug: "iphone-battery-replacement-macon",
        title: "iPhone Battery Replacement in Macon – Signs & Costs",
        desc: "When to replace your iPhone battery, how much it costs, and why same-day service matters.",
        category: "iPhone"
    },
    {
        slug: "ipad-screen-repair-macon",
        title: "iPad Screen Repair in Macon GA – All Models",
        desc: "Complete guide to iPad screen repair for Pro, Air, Mini, and standard models. Pricing and turnaround.",
        category: "iPad"
    },
    {
        slug: "macbook-repair-macon-ga",
        title: "MacBook Repair Services in Macon GA",
        desc: "Screen, keyboard, battery, and logic board repair for MacBook Air and Pro models.",
        category: "MacBook"
    },
    {
        slug: "tech-medics-vs-apple-store-repair",
        title: "Tech Medics vs Apple Store – Repair Comparison",
        desc: "Compare costs, warranty, turnaround times, and convenience between local repair and Apple Store.",
        category: "General"
    },
    {
        slug: "water-damaged-iphone-repair",
        title: "Water Damaged iPhone? Here's What to Do",
        desc: "Emergency steps and professional water damage repair options in Macon GA.",
        category: "iPhone"
    },
    {
        slug: "iphone-dying-fast-after-charging",
        title: "iPhone Dying Fast After Charging? 11 Fixes",
        desc: "Proven solutions for iPhone battery draining too quickly after a full charge.",
        category: "iPhone"
    },
    {
        slug: "iphone-not-turning-on-fix",
        title: "iPhone Not Turning On? Troubleshooting Guide",
        desc: "Step-by-step fixes for an iPhone that won't power on, and when to seek professional repair.",
        category: "iPhone"
    },
    {
        slug: "oem-vs-aftermarket-iphone-screens",
        title: "OEM vs Aftermarket iPhone Screens Explained",
        desc: "Understanding the difference between screen types and which is right for your repair.",
        category: "iPhone"
    },
    {
        slug: "iphone-screen-repair-cost-macon",
        title: "iPhone Screen Repair Cost in Macon GA (2026)",
        desc: "Updated pricing guide for all iPhone models. Compare costs and find the best value.",
        category: "iPhone"
    },
    {
        slug: "iphone-repair-near-me-macon",
        title: "iPhone Repair Near Me in Macon GA",
        desc: "Why Tech Medics is Macon's top choice for local iPhone repair. Location, services, and more.",
        category: "iPhone"
    },
    {
        slug: "same-day-iphone-repair-macon",
        title: "Same-Day iPhone Repair in Macon",
        desc: "What repairs can be done while you wait and how our 30-minute service works.",
        category: "iPhone"
    },
    {
        slug: "choose-phone-repair-shop-macon",
        title: "How to Choose a Phone Repair Shop in Macon",
        desc: "Key factors to consider when selecting a repair shop for your device.",
        category: "General"
    },
    {
        slug: "swollen-iphone-battery-replacement-macon",
        title: "Swollen iPhone Battery? Get It Replaced Now",
        desc: "Warning signs of a swollen battery and why immediate replacement is critical.",
        category: "iPhone"
    },
    {
        slug: "macbook-screen-repair-cost-macon",
        title: "MacBook Screen Repair Cost in Macon GA",
        desc: "Pricing guide for MacBook Air and Pro screen replacement services.",
        category: "MacBook"
    },
    {
        slug: "iphone-vs-android-repair-costs-macon",
        title: "iPhone vs Android Repair Costs in Macon",
        desc: "How repair costs compare between Apple and Android devices locally.",
        category: "General"
    },
    {
        slug: "game-console-repair-macon-ga",
        title: "Game Console Repair in Macon GA",
        desc: "PS5 HDMI port repair, Xbox disc drive fix, Nintendo Switch Joy-Con drift and more.",
        category: "Console"
    },
    {
        slug: "data-recovery-macon-ga",
        title: "Data Recovery in Macon GA",
        desc: "Recover photos, contacts and files from broken, water-damaged or dead devices.",
        category: "General"
    }
];
function BlogIndex() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-16 md:py-24 px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center max-w-3xl mx-auto mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl md:text-6xl font-bold mb-6 text-foreground",
                                children: "Repair Guides & Resources"
                            }, void 0, false, {
                                fileName: "[project]/app/blog/page.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl text-muted-foreground",
                                children: "Expert advice on iPhone, iPad, and MacBook repair from Macon's trusted technicians"
                            }, void 0, false, {
                                fileName: "[project]/app/blog/page.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/blog/page.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                        children: posts.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: `/blog/${post.slug}`,
                                className: "bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-semibold text-primary uppercase tracking-wider",
                                        children: post.category
                                    }, void 0, false, {
                                        fileName: "[project]/app/blog/page.tsx",
                                        lineNumber: 44,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold mt-2 mb-3 text-foreground group-hover:text-primary transition-colors",
                                        children: post.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/blog/page.tsx",
                                        lineNumber: 45,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground text-sm",
                                        children: post.desc
                                    }, void 0, false, {
                                        fileName: "[project]/app/blog/page.tsx",
                                        lineNumber: 46,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, post.slug, true, {
                                fileName: "[project]/app/blog/page.tsx",
                                lineNumber: 43,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/blog/page.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/blog/page.tsx",
                lineNumber: 35,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/blog/page.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
}),
"[project]/app/blog/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/blog/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a3c9eedf._.js.map