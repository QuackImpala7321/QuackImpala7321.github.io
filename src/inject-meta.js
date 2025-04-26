/**
 * @param {string} title 
 */
export function injectHead(title) {
    const { href, origin } = document.location
    document.head.insertAdjacentHTML("beforeend", `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>

    <meta name="theme-color" content="#354d24">
    <meta property="og:type" content="website">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="Showcases my mods">
    <meta property="og:url" content="${href}">
    <meta property="og:image" content="${origin}/pfp.png"></meta>
    `)
}