(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{621:function(s,a,t){"use strict";t.r(a);var e=t(3),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("h2",{attrs:{id:"全局安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#全局安装"}},[s._v("#")]),s._v(" 全局安装")]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("p",[s._v("如果你只是想做一个 Webpack 的 Demo 案例，那么全局安装方法可能会比较适合你。如果你是在实际生产开发中使用，那么推荐你使用本地安装方法。")])]),s._v(" "),t("h3",{attrs:{id:"全局安装命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#全局安装命令"}},[s._v("#")]),s._v(" 全局安装命令")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("参数说明")]),s._v(" "),t("p",[t("code",[s._v("webpack4.0+")]),s._v("的版本，必须安装"),t("code",[s._v("webpack-cli")]),s._v("，"),t("code",[s._v("-g")]),s._v("命令代表全局安装的意思")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" webpack webpack-cli -g\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"卸载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#卸载"}},[s._v("#")]),s._v(" 卸载")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("参数说明")]),s._v(" "),t("p",[s._v("通过"),t("code",[s._v("npm install")]),s._v("安装的模块，对应的可通过"),t("code",[s._v("npm uninstall")]),s._v("进行卸载")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" uninstall webpack webpack-cli -g\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"本地安装-推荐"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本地安装-推荐"}},[s._v("#")]),s._v(" 本地安装(推荐)")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("参数说明")]),s._v(" "),t("p",[s._v("本地安装的"),t("code",[s._v("Webpack")]),s._v("意思是，只在你当前项目下有效。而通过全局安装的"),t("code",[s._v("Webpack")]),s._v("，如果两个项目的"),t("code",[s._v("Webpack")]),s._v("主版本不一致，则可能会造成其中一个项目无法正常打包。本地安装方式也是实际开发中推荐的一种"),t("code",[s._v("Webpack")]),s._v("安装方式。")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" webpack webpack-cli -D 或者 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" webpack webpack-cli --save-dev\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"版本号安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#版本号安装"}},[s._v("#")]),s._v(" 版本号安装")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("参数说明")]),s._v(" "),t("p",[s._v("如果你对"),t("code",[s._v("Webpack")]),s._v("的具体版本有严格要求，那么可以先去github的"),t("code",[s._v("Webpack")]),s._v("仓库查看历史版本记录或者使用"),t("code",[s._v("npm view webpack versions")]),s._v("查看"),t("code",[s._v("Webpack")]),s._v("的"),t("code",[s._v("npm")]),s._v("历史版本记录")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("// 查看webpack的历史版本记录\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" view webpack versions\n\n// 按版本号安装\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" webpack@4.25.0 -D\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);