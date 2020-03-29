(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{606:function(a,t,s){"use strict";s.r(t);var e=s(3),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"git常见命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git常见命令"}},[a._v("#")]),a._v(" Git常见命令")]),a._v(" "),s("h2",{attrs:{id:"配置name和email"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置name和email"}},[a._v("#")]),a._v(" 配置name和email")]),a._v(" "),s("h4",{attrs:{id:"设置name和email"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置name和email"}},[a._v("#")]),a._v(" 设置name和email")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ git config --global user.name 'xxxx'\n$ git config --global user.email 'xxxx@xxxx'\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h4",{attrs:{id:"获取name和email"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取name和email"}},[a._v("#")]),a._v(" 获取name和email")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ git config user.name\n$ git config user.email\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h2",{attrs:{id:"初始化仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初始化仓库"}},[a._v("#")]),a._v(" 初始化仓库")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",[a._v("可以在空目录初始化仓库，也能是已有的项目初始化仓库")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ git init\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"添加文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加文件"}},[a._v("#")]),a._v(" 添加文件")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",[a._v("可以添加一个或者多个文件")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ git add readme.txt\n$ git add file1.txt file2.txt\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h2",{attrs:{id:"提交文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提交文件"}},[a._v("#")]),a._v(" 提交文件")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",[a._v("-m '说明注释' 代表本次提交的说明注释信息")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ git commit -m '说明注释'\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"时光穿梭机"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#时光穿梭机"}},[a._v("#")]),a._v(" 时光穿梭机")]),a._v(" "),s("h3",{attrs:{id:"获取当前仓库的状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取当前仓库的状态"}},[a._v("#")]),a._v(" 获取当前仓库的状态")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ git status\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"查看修改的内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看修改的内容"}},[a._v("#")]),a._v(" 查看修改的内容")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ git diff\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"版本回退"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#版本回退"}},[a._v("#")]),a._v(" 版本回退")]),a._v(" "),s("h4",{attrs:{id:"查看提交日志"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看提交日志"}},[a._v("#")]),a._v(" 查看提交日志")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",[s("code",[a._v("HEAD")]),a._v("：代表当前版本"),s("br"),a._v(" "),s("code",[a._v("HEAD^")]),a._v("：代表上一个版本"),s("br"),a._v(" "),s("code",[a._v("HEAD^^")]),a._v("：代表上上一个版本")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ git log\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h4",{attrs:{id:"查看命令日志"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看命令日志"}},[a._v("#")]),a._v(" 查看命令日志")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",[s("code",[a._v("$ git reflog")]),a._v("查看的是每一次的命令的记录，头部有版本号")])]),a._v(" "),s("h4",{attrs:{id:"版本回退-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#版本回退-2"}},[a._v("#")]),a._v(" 版本回退")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",[a._v("--hard 后面接HEAD或者具体的版本号"),s("br"),a._v("\n例如："),s("code",[a._v("$ git reset --hard HEAD^")]),a._v("回退到上一个版本"),s("br"),a._v("\n例如："),s("code",[a._v("$ git reset --hard 48e56e")]),a._v("回退到指定版本"),s("br"),a._v("\n注：回退后，"),s("code",[a._v("$ git log")]),a._v("命令不会输出该版本往后的版本记录，这时可以使用"),s("code",[a._v("$ git reflog")]),a._v("命令先找到版本号")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ git reset --hard HEAD^\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"管理修改"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#管理修改"}},[a._v("#")]),a._v(" 管理修改")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",[a._v("git 管理的是修改而不是文件")])]),a._v(" "),s("h4",{attrs:{id:"管理修改示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#管理修改示例"}},[a._v("#")]),a._v(" 管理修改示例")]),a._v(" "),s("ul",[s("li",[a._v("修改文件")]),a._v(" "),s("li",[a._v("添加文件到暂存区")]),a._v(" "),s("li",[a._v("继续修改文件")]),a._v(" "),s("li",[a._v("提交文件到仓库")])]),a._v(" "),s("p",[s("strong",[a._v("结果")]),a._v("：git只会提交暂存区的内容，即只提交了第一次修改的内容，第二次修改的内容没有提交。")]),a._v(" "),s("h4",{attrs:{id:"办法一"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#办法一"}},[a._v("#")]),a._v(" 办法一")]),a._v(" "),s("ul",[s("li",[a._v("先"),s("code",[a._v("$ git commit")]),a._v("提交第一次修改")]),a._v(" "),s("li",[a._v("再"),s("code",[a._v("$ git add")]),a._v("添加第二次修改")]),a._v(" "),s("li",[a._v("最后"),s("code",[a._v("$ git commit")]),a._v("提交第二次修改")])]),a._v(" "),s("h4",{attrs:{id:"办法二"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#办法二"}},[a._v("#")]),a._v(" 办法二")]),a._v(" "),s("ul",[s("li",[a._v("先不提交第一次修改")]),a._v(" "),s("li",[s("code",[a._v("$ git add")]),a._v("添加第二次修改到暂存区")]),a._v(" "),s("li",[s("code",[a._v("$ git commit")]),a._v("一起提交第一次、第二次的修改")])]),a._v(" "),s("h3",{attrs:{id:"撤销修改"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#撤销修改"}},[a._v("#")]),a._v(" 撤销修改")]),a._v(" "),s("p",[a._v("撤销修改分三种情况")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("$ git add")]),a._v("之前")]),a._v(" "),s("li",[s("code",[a._v("$ git commit")]),a._v("之前")]),a._v(" "),s("li",[s("code",[a._v("$ git commit")]),a._v("之后")])]),a._v(" "),s("h4",{attrs:{id:"情况一解决办法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#情况一解决办法"}},[a._v("#")]),a._v(" 情况一解决办法")]),a._v(" "),s("p",[a._v("直接使用"),s("code",[a._v("$ git checkout -- xxx")]),a._v("命令，丢掉当前工作区的修改")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ git checkout -- readme.txt\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h4",{attrs:{id:"情况二解决办法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#情况二解决办法"}},[a._v("#")]),a._v(" 情况二解决办法")]),a._v(" "),s("ul",[s("li",[a._v("首先使用"),s("code",[a._v("$ git reset HEAD xx")]),a._v("命令，撤销暂存区的修改")]),a._v(" "),s("li",[a._v("随后使用"),s("code",[a._v("$ git checkout -- xx")]),a._v("命令，丢弃工作区的修改")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ git reset HEAD readme.txt\n$ git checkout -- readme.txt\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h4",{attrs:{id:"情况三解决办法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#情况三解决办法"}},[a._v("#")]),a._v(" 情况三解决办法")]),a._v(" "),s("p",[a._v("使用版本回退")]),a._v(" "),s("h3",{attrs:{id:"删除文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除文件"}},[a._v("#")]),a._v(" 删除文件")]),a._v(" "),s("ul",[s("li",[a._v("确定删除某一个文件")]),a._v(" "),s("li",[a._v("误删了某一个文件")])]),a._v(" "),s("h4",{attrs:{id:"情况一解决办法-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#情况一解决办法-2"}},[a._v("#")]),a._v(" 情况一解决办法")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ git rm test.txt\n$ git commit -m 'sure remove test.txt'\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h4",{attrs:{id:"情况二解决办法-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#情况二解决办法-2"}},[a._v("#")]),a._v(" 情况二解决办法")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ git reset HEAD test.txt\n$ git checkout -- test.txt\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h2",{attrs:{id:"远程仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#远程仓库"}},[a._v("#")]),a._v(" 远程仓库")]),a._v(" "),s("h3",{attrs:{id:"添加远程仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加远程仓库"}},[a._v("#")]),a._v(" 添加远程仓库")]),a._v(" "),s("h4",{attrs:{id:"关联一个远程仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关联一个远程仓库"}},[a._v("#")]),a._v(" 关联一个远程仓库")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ git remote add origin git@github.com:xxxxx/xxx\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h4",{attrs:{id:"第一次推送内容到master分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第一次推送内容到master分支"}},[a._v("#")]),a._v(" 第一次推送内容到master分支")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",[s("code",[a._v("-u")]),a._v("参数不仅把本地master分支的内容推送到远程仓库的master分支上，而且和远程仓库相关联起来"),s("br"),a._v("\n随后的远程推送内容，只需要"),s("code",[a._v("$ git push origin master")]),a._v("命令即可")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ git push -u origin master\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"克隆远程仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#克隆远程仓库"}},[a._v("#")]),a._v(" 克隆远程仓库")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",[s("code",[a._v("git")]),a._v("协议是SSH协议，大部分克隆可以使用这种协议"),s("br"),a._v(" "),s("code",[a._v("https")]),a._v("协议是口令协议，是针对只开发了https协议的网络")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ git clone git@github.com:xxx/xxx\n$ git clone https://github.com/xxx/xxx\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h2",{attrs:{id:"分支管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分支管理"}},[a._v("#")]),a._v(" 分支管理")]),a._v(" "),s("h3",{attrs:{id:"创建分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建分支"}},[a._v("#")]),a._v(" 创建分支")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ git branch xxx\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"切换分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#切换分支"}},[a._v("#")]),a._v(" 切换分支")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ git checkout xxx\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h4",{attrs:{id:"创建并切换分支的简写"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建并切换分支的简写"}},[a._v("#")]),a._v(" 创建并切换分支的简写")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ git checkout -b xxx\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"查看所有分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看所有分支"}},[a._v("#")]),a._v(" 查看所有分支")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",[a._v("带"),s("code",[a._v("*")]),a._v("号的表示当前分支")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ git branch\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"合并分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#合并分支"}},[a._v("#")]),a._v(" 合并分支")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ git merge xxx\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"删除分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除分支"}},[a._v("#")]),a._v(" 删除分支")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ git branch -d xxx\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"解决冲突"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决冲突"}},[a._v("#")]),a._v(" 解决冲突")]),a._v(" "),s("p",[a._v("当合并分支出现冲突时，可以利用"),s("code",[a._v("git status")]),a._v("查看冲突的位置"),s("br"),a._v("\n在"),s("code",[a._v("cat xxx")]),a._v("命令，查看各分支的内容，手动编辑成相同的"),s("br"),a._v("\n最后提交，删除分支")]),a._v(" "),s("h3",{attrs:{id:"bug分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bug分支"}},[a._v("#")]),a._v(" Bug分支")]),a._v(" "),s("p",[a._v("工作做一半，突然接到一个任务解决bug，该怎样进行合理的git操作")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("git stash")]),a._v("命令隐藏当前工作区")]),a._v(" "),s("li",[s("code",[a._v("git checkout -b xx")]),a._v("命令创建并切换到bug分支")]),a._v(" "),s("li",[s("code",[a._v("git add xx")]),a._v(" "),s("code",[a._v("git commit -m xx")]),a._v("修复提交bug分支")]),a._v(" "),s("li",[s("code",[a._v("git checkout master")]),a._v("切换到主分支")]),a._v(" "),s("li",[s("code",[a._v("git merge xxx")]),a._v("合并bug分支到主分支")]),a._v(" "),s("li",[s("code",[a._v("git branch -d xx")]),a._v("删除bug分支")]),a._v(" "),s("li",[s("code",[a._v("git stash pop")]),a._v("恢复隐藏的工作现成")])]),a._v(" "),s("h3",{attrs:{id:"feature分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#feature分支"}},[a._v("#")]),a._v(" Feature分支")]),a._v(" "),s("p",[a._v("开发一个新功能mask1，但不保证后续这个新功能需不需要。")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("git checkout -b mask1")]),a._v("创建mask1分支")]),a._v(" "),s("li",[s("code",[a._v("git add xx")]),a._v(" "),s("code",[a._v("git commit -m xxx")]),a._v("开发完毕并提交到当前mask1分支上")])]),a._v(" "),s("p",[a._v("上级通知，此功能砍掉，不需要了")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("git checkout dev")]),a._v("切换到开发分支")]),a._v(" "),s("li",[s("code",[a._v("git branch -D mask1")]),a._v("删除mask1分支的内容")])]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",[s("code",[a._v("-d")]),a._v("小写的参数d，再删除时会被提示，改分支没有合并，无法删除"),s("br"),a._v(" "),s("code",[a._v("-D")]),a._v("大写的参数D，代表强制删除")])])])}),[],!1,null,null,null);t.default=r.exports}}]);