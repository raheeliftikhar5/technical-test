module.exports = {

"[project]/src/pages/posts.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
const cardStyle = {
    background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.1)',
    padding: '24px',
    marginBottom: '20px',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    border: '1px solid rgba(226, 232, 240, 0.8)',
    position: 'relative',
    overflow: 'hidden'
};
const cardStyleHover = {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)',
    borderColor: 'rgba(59, 130, 246, 0.3)'
};
const buttonStyle = {
    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    color: '#ffffff',
    border: 'none',
    borderRadius: '12px',
    padding: '16px 32px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '16px',
    marginBottom: '32px',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)',
    position: 'relative',
    overflow: 'hidden'
};
const buttonStyleHover = {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 30px rgba(59, 130, 246, 0.4)',
    background: 'linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)'
};
const containerStyle = {
    maxWidth: '800px',
    margin: '60px auto',
    padding: '40px',
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    borderRadius: '24px',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1), 0 8px 24px rgba(0, 0, 0, 0.06)',
    border: '1px solid rgba(226, 232, 240, 0.8)'
};
const titleStyle = {
    textAlign: 'center',
    marginBottom: '32px',
    color: '#1e293b',
    fontSize: '2.5rem',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    letterSpacing: '-0.025em'
};
const loadingStyle = {
    textAlign: 'center',
    marginTop: '80px',
    fontSize: '1.5rem',
    color: '#64748b',
    fontWeight: '500'
};
const postsListStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0
};
const postTitleStyle = {
    fontWeight: '600',
    fontSize: '1.1rem',
    color: '#1e293b',
    lineHeight: '1.6',
    margin: 0
};
const postMetaStyle = {
    fontSize: '0.875rem',
    color: '#64748b',
    marginTop: '8px',
    fontWeight: '500'
};
const Posts = ()=>{
    const [posts, setPosts] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const [showPosts, setShowPosts] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const [buttonHover, setButtonHover] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [cardHovers, setCardHovers] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({});
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>res.json()).then((data)=>{
            setPosts(data);
            setLoading(false);
        }).catch(()=>setLoading(false));
    }, []);
    const handleCardHover = (postId, isHovering)=>{
        setCardHovers((prev)=>({
                ...prev,
                [postId]: isHovering
            }));
    };
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        style: loadingStyle,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: '16px'
                },
                children: "✨"
            }, void 0, false, {
                fileName: "[project]/src/pages/posts.tsx",
                lineNumber: 128,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            "Loading posts..."
        ]
    }, void 0, true, {
        fileName: "[project]/src/pages/posts.tsx",
        lineNumber: 127,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        style: containerStyle,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                style: titleStyle,
                children: "Posts"
            }, void 0, false, {
                fileName: "[project]/src/pages/posts.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                style: {
                    ...buttonStyle,
                    ...buttonHover ? buttonStyleHover : {}
                },
                onMouseEnter: ()=>setButtonHover(true),
                onMouseLeave: ()=>setButtonHover(false),
                onClick: ()=>setShowPosts((prev)=>!prev),
                children: showPosts ? 'Hide Posts' : 'Show Posts'
            }, void 0, false, {
                fileName: "[project]/src/pages/posts.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            showPosts && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                style: postsListStyle,
                children: posts.slice(0, 5).map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                        style: {
                            ...cardStyle,
                            ...cardHovers[post.id] ? cardStyleHover : {}
                        },
                        onMouseEnter: ()=>handleCardHover(post.id, true),
                        onMouseLeave: ()=>handleCardHover(post.id, false),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                style: postTitleStyle,
                                children: post.title
                            }, void 0, false, {
                                fileName: "[project]/src/pages/posts.tsx",
                                lineNumber: 159,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: postMetaStyle,
                                children: [
                                    "Post #",
                                    post.id,
                                    " • ",
                                    new Date().toLocaleDateString()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/posts.tsx",
                                lineNumber: 160,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, post.id, true, {
                        fileName: "[project]/src/pages/posts.tsx",
                        lineNumber: 150,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/pages/posts.tsx",
                lineNumber: 148,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/pages/posts.tsx",
        lineNumber: 134,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Posts;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__a2101301._.js.map