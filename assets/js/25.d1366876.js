(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{547:function(s,a,e){"use strict";e.r(a);var n=e(3),l=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("关于dedecms服务器部署教程")]),s._v(" "),e("p",[s._v("本教程服务器以contOS7.6为例，购买服务器（阿里and腾讯），购买成\n后记者公网IP，账号，密码，然后需要准备环境配置nginx+mysql+php")])]),s._v(" "),e("h4",{attrs:{id:"_1-0-登录服务器更新"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-0-登录服务器更新"}},[s._v("#")]),s._v(" 1.0 登录服务器更新")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("yum -y update\n// 升级所有包，改变软件设置和系统设置,系统版本内核都升级\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("div",{staticClass:"custom-block tip"},[e("p",[s._v("等待更新完毕，linux系统安装软件包说明：软件包放在 /usr/local/src/目录下，\n软件安装在 /usr/local/ 目录下面。")])]),s._v(" "),e("h4",{attrs:{id:"_2-0-安装nginx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-0-安装nginx"}},[s._v("#")]),s._v(" 2.0 安装nginx")]),s._v(" "),e("ul",[e("li",[s._v("2.1 下载nginx包到/usr/local/src/")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("weget nginx-1.9.9.tar.gz\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("2.2 解压 nginx包到/usr/local/src/")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("tar -zxvf nginx-1.9.9.tar.gz\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("2.3 编译安装nginx，需要提前在/usr/local/下创建文件夹nginx")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("ls\n//查看目录下的文件\ncd nginx-1.9.9\n// 切换到下一级目录\n./configure --prefix=/usr/local/nginx \n//编译安装到/usr/local/nginx \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("ul",[e("li",[s._v("2.4 安装报错，说明缺少C的环境")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("yum install gcc gcc-c++ ncurses-devel perl\nyum -y install make gcc gcc-c++ ncurses-devel\nyum -y install zlib zlib-devel\nyum -y install openssl openssl--devel\nyum install -y pcre-devel\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("ul",[e("li",[s._v("2.5 C语言环境安装好后，执行")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("./configure --prefix=/usr/local/nginx\nmake && make install \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ul",[e("li",[s._v("2.6 等待上一步安装成功，建立软连接")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("ln –s /usr/local/nginx/sbin/nginx /usr/local/bin/nginx\n//查看版本 nginx -v 有就说明成功了\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ul",[e("li",[s._v("2.7 启动nginx")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("cd /usr/local/nginx/sbin/\nls\n./nginx\n//如果建立了软连接。就直接 nginx，此时的nginx是全局的\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("ul",[e("li",[s._v("2.8 浏览器查看是否代理成功，以我的公网IP为例")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("122.152.192或者122.152.192:80\n//默认80端口，如果出现了nginx的欢迎界面，说明环境配置成功。\n//服务器一定要关闭防火墙\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("ul",[e("li",[s._v("2.9 服务器防火墙")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("systemctl status firewalld\n//查看状态\nsystemctl stop firewalld\n//关闭\nsystemctl start firewalld\n//启动\nsystemctl disable firewalld\n//开机禁用\nsystemctl enable firewalld\n//开机启用\n//防火墙关闭了就可以访问IP了，有条件可以把域名解析到服务器下\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("h4",{attrs:{id:"_3-0-安装php"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-0-安装php"}},[s._v("#")]),s._v(" 3.0 安装php")]),s._v(" "),e("ul",[e("li",[s._v("3.1 下载PHP包到 /usr/local/src/下")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("weget php-7.4.0.tar.gz\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("3.2 解压PHP包到 /usr/local/src/下")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("tar -zxvf php-7.4.0.tar.gz\ncd php-7.4.0\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ul",[e("li",[s._v("3.3  编译安装php，需要提前在/usr/local/下创建文件夹php")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("./configure --prefix=/usr/local/php --enable-opcache --with-config-file-path=/usr/local/php/etc --with-curl --enable-fpm  --enable-gd --with-iconv --enable-mbstring --with-mysqli=mysqlnd --with-openssl --enable-static --enable-sockets --enable-inline-optimization --with-zlib --disable-ipv6 --disable-fileinfo --disable-debug\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("3.4 编译错误 Package requirements (sqlite3 > 3.7.4) were not met No package 'sqlite3' found")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("yum install libsqlite3x-devel -y\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("3.5 编译错误 error: Package requirements (oniguruma) were not metNo package 'oniguruma' found")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("yum install oniguruma-devel -y\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("3.6 其他编译错误，复制错误百度即可解决，然后执行")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("./configure --prefix=/usr/local/php --enable-opcache --with-config-file-path=/usr/local/php/etc --with-curl --enable-fpm  --enable-gd --with-iconv --enable-mbstring --with-mysqli=mysqlnd --with-openssl --enable-static --enable-sockets --enable-inline-optimization --with-zlib --disable-ipv6 --disable-fileinfo --disable-debug\nmake && make install \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ul",[e("li",[s._v("3.7 等待安装完毕，然后配置php")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("cd /usr/local/php/etc/php-fpm.d\nls  //显示www.conf.default文件，用xftp将其复制到/usr/local/php/etc/下，重命名为php-fpm.conf\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ul",[e("li",[s._v("3.8 PHP建立软连接")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("ln -s /usr/local/php/sbin/php-fpm /usr/local/bin/php-fpm\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("3.9 php 启动")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("cd /usr/local/php/sbin\nls\n./php-fpm\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("测试php")]),s._v(" "),e("p",[s._v("在nginx的html下建立index.php，")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("<?php echo phpinfo();?>\n//访问IP/index.php，比如我的122.152.192.48/index.phh，看是否弹出php的界面，没有界面肯定是失败了\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h4",{attrs:{id:"_4-0-安装mysql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-0-安装mysql"}},[s._v("#")]),s._v(" 4.0 安装MySQL")]),s._v(" "),e("ul",[e("li",[s._v("4.1 检测系统是否自带安装 MySQL")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("rpm -qa | grep mysql\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("4.0 如果你系统有安装，那可以选择进行卸载")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("rpm -e mysql　　// 普通删除模式\nrpm -e --nodeps mysql　　// 强力删除模式，如果使用上面命令删除时，提示有依赖的其它文件，则用该命令可以对其进行强力删除\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ul",[e("li",[s._v("4.3 下载安装")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("wget http://repo.mysql.com/mysql-community-release-el7-5.noarch.rpm\nrpm -ivh mysql-community-release-el7-5.noarch.rpm\nyum update\nyum install mysql-server\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("ul",[e("li",[s._v("4.4 权限设置")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("chown mysql:mysql -R /var/lib/mysql\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("4.5 初始化 MySQL")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mysqld --initialize\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("4.6 启动MySQL")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("systemctl start mysqld\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("4.6 查看 MySQL 运行状态")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("systemctl status mysqld\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("4.7 验证 MySQL 安装")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(" mysqladmin --version\n //mysqladmin  Ver 8.23 Distrib 5.0.9-0, for redhat-linux-gnu on i386\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ul",[e("li",[s._v("4.8 进入MySQL数据库")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mysql\nshow databases; //查看所有的库\nCtrl+c //退出\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("ul",[e("li",[s._v("4.9 Mysql安装成功后，默认的root用户密码为空，你可以使用以下命令来创建root用户的密码")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('mysqladmin -u root password "password";\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("4.10 账户密码 连接到Mysql服务器")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mysql -u root -p\nEnter password:password //这里的密码是不显示的\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ul",[e("li",[s._v("4.11 MySQL 启动 关闭 重启命令")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("service mysqld start //启动\nservice mysqld stop //停止\nservice mysqld restart //重启\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("ul",[e("li",[s._v("5.1 下载dedecms到本地桌面")])]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",[s._v("下载dedecms(utf-8)到本地桌面，清空nginx目录下html里的所有文件，然后把刚刚dedecms网站下载的源\n码解压找到uploads内的所有内容通过xftp上传到服务器nginx的html目录下,等待上传完毕，然后访问IP/install/index.php或者IP+80/install/index.php端口")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("122.152.192.48/install/index.php或者122.152.192.48:80/install/index.php\n// 进入安装界面\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ul",[e("li",[e("p",[s._v("5.2 用xftp放开服务器nginx下html目录里所有文件的读写权限")])]),s._v(" "),e("li",[e("p",[s._v("5.3 剩下的可以百度安装了,附上百度地址")])])]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",[e("a",{attrs:{href:"https://jingyan.baidu.com/article/3aed632eaf125e30108091ec.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("dedecma安装教程"),e("OutboundLink")],1)])]),s._v(" "),e("ul",[e("li",[e("p",[s._v("5.4 说下线上数据库连接吧 ，locahost连接不上就用127.0.0.1连接就OK了")])]),s._v(" "),e("li",[e("p",[s._v("5.5 其他问题，自行百度吧，本人第一份工作是做dedecms网站的，然后就从头到尾部署了一套，\n又因为dedecms停更，也不是很中意这个东西，然后希望大家喜欢！")])]),s._v(" "),e("li",[e("p",[s._v("下期介绍doracms，后台基于node.js+vue.js+egg.js+mongodb")])])])])}),[],!1,null,null,null);a.default=l.exports}}]);