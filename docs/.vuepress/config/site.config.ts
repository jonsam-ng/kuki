/*****************************************************************************************
 *                                 页面配置【建站自定义】
 ******************************************************************************************/

export const siteName = "Kuki";

export const siteDesc =
  "Magic and common used javascript code snippets.有趣、通用的 JavaScript 代码片段。";

// 是否使用 github pages 的自定义域名
export const useCustomDomainName = true;
export const customDomainName = "kuki.jonsam.site";

export const siteKeywords = "javascript代码片段";

// 同时修改 `docs/.vuepress/styles/palette.styl` 中 `$accentColor`
export const siteThemeColor = "#033643";

export const siteIconFont = "//at.alicdn.com/t/font_3314748_9xij1pv3h4i.css";

export const siteRepo = "kuki";

export const siteLicense = "MIT";

export const personalLink = "https://www.jonsam.site";

export const siteAuthor = {
  name: "jonsam",
  link: "https://github.com/jonsam-ng",
};

export const siteBlogger = {
  avatar:
    "https://www.jonsam.site/wp-content/uploads/2019/10/c1fbc401c64937aaec6cb53359e7c57eabd8e477-e1570649725791.gif",
  name: "Jonsam NG",
  slogan: "如何让一滴水不干涸，那就是让它融入大海",
};

export const siteFooter = {
  createYear: 2022,
  copyrightInfo: `${siteName} | Template by <a href="https://jonsam-ng.github.io/fancy-note-starter/">Fancy Note Starter</a> | Made by <a href=${personalLink} target="_blank">${siteAuthor.name}</a> with ❤`,
};

export const siteBase = useCustomDomainName ? "/" : `/${siteRepo}/`;
export const siteHost = useCustomDomainName
  ? `https://${customDomainName}`
  : siteAuthor.link;
export const siteUrl = siteHost + siteBase;
