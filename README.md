你是一名前端工程师。请**一次性**生成一个最小可运行、结构清晰且**精简**的个人主页项目，包含**三个文件**：

1. `index.html`
2. `styles.css`
3. `script.js`

## 目标与范围

* 覆盖实训要求：HTML5 语义化、CSS3、美化、Bootstrap 响应式、JavaScript 与 **jQuery** 基本交互、核心组件（导航条/个人简介/技能展示/项目展示/联系表单/页脚）、基础表单校验。
* 选做扩展：自动轮播图（Carousel）、项目卡片布局（含悬停动画）。
* 代码应**精简**、**可读**，在必要处添加少量注释（避免冗长注释）。
* **仅使用 CDN** 引入依赖，不依赖本地构建工具；可直接双击 `index.html` 运行。
* **浏览器：Firefox** 需正常显示与交互。
* 保持良好无障碍与语义化（语义标签、`alt`、`aria-*`、对比度、可聚焦元素）。

## 技术与版本（通过 CDN）

* Bootstrap 5（CSS & JS，含 Popper）
* jQuery 3.6+
* 字体与图标：可选用 Google Fonts 与 Bootstrap Icons（CDN）

## 页面信息架构（HTML5 语义化）

按以下区域构建并加 `container` 或 `container-fluid`：

1. **导航条（header/nav）**

   * 使用 Bootstrap 响应式导航（品牌、跳转锚点：About / Skills / Projects / Contact）。
   * 小屏折叠（汉堡菜单），链接滚动到对应区块。
2. **个人简介 About（section#about）**

   * 左侧头像占位（圆形占位图），右侧文字：姓名、一句话定位、简短自我介绍与“下载简历”按钮（占位 `href="#"`）。
3. **技能展示 Skills（section#skills）**

   * 使用语义化列表或网格（如 `ul` + 徽章 / 进度条），至少列出 6 项技能（示例：HTML/CSS/JS/Bootstrap/jQuery/Git）。
4. **项目展示 Projects（section#projects）**

   * **基础：** 至少 3 个项目条目。
   * **选做卡片布局：** 使用 Bootstrap Cards + 响应式网格（`row`/`col`），卡片含项目名、简述、标签徽章、“查看”按钮；添加**悬停动画**（CSS 过渡：轻微升起与阴影）。
5. **轮播图 Carousel（选做，可放在 About 与 Skills 之间或 Projects 顶部）**

   * 使用 Bootstrap Carousel，**自动播放**且可**手动控制**（左右箭头/指示点）。图像可用占位图。
6. **联系表单 Contact（section#contact）**

   * 字段：姓名、邮箱、消息内容、同意条款勾选；提交按钮。
   * **校验：** 原生 HTML5 约束 + jQuery 前端校验（邮箱格式、必填项）。
   * 成功/失败的**提示区域**（如 Bootstrap Alert），模拟提交（阻止默认提交，展示“已收到”提示）。
7. **页脚 footer**

   * 版权信息、社交图标占位（Bootstrap Icons），返回顶部按钮（平滑滚动）。

## 交互与功能（`script.js`）

* 导航链接点击后**平滑滚动**到对应区块。
* 小屏点击导航链接后自动收起折叠菜单。
* 轮播图**自动播放**（合理间隔），并可手动切换。
* **表单校验逻辑（使用 jQuery）**：

  * 校验姓名非空、邮箱格式正确、消息非空、勾选同意。
  * 未通过时在相应控件附近显示错误信息（用 Bootstrap 的 `is-invalid` / `invalid-feedback`）。
  * 通过时显示成功 Alert，并重置表单。
* 对错误做好**基础防护**：空值与异常 selector 的容错处理。

## 样式（`styles.css`）

* 轻量主题色（与 Bootstrap 主色协调），整体风格现代、留白适当。
* 卡片悬停动画（`transform: translateY(-4px)` + 阴影过渡）。
* 头像圆形裁切、导航条透明度/阴影（滚动后可微变）。
* 针对移动端做适当微调（段落间距、卡片间距）。

## 性能与可维护性

* 尽量**减少自定义 CSS/JS** 体量，复用 Bootstrap 组件类。
* 合理使用语义标签（`header`, `main`, `section`, `article`, `footer`, `nav`, `figure`, `time` 等）。
* 图片使用占位服务（如 `https://picsum.photos/`），限制尺寸与 `loading="lazy"`。
* 所有外链加 `rel="noopener noreferrer"`（如适用）。
* 关键元素加 `aria-label` 或 `aria-controls` 等（如导航折叠按钮）。
* 通过键盘可操作（Tab 可达、`:focus` 可见）。

## 目录结构（无需额外文件）

```
/ (根目录)
  index.html
  styles.css
  script.js
```

## 验收清单（请确保全部满足）

* [ ] 三个文件**完整输出**，且 `index.html` 正确引用 `styles.css` 与 `script.js`。
* [ ] 使用 **Bootstrap 5** 与 **jQuery** 的 **CDN**，无其它构建步骤。
* [ ] 导航条在窄屏可折叠且跳转正确，点击链接能平滑滚动；点击后自动收起。
* [ ] About/Skills/Projects/Contact/Carousel/页脚 均按要求存在。
* [ ] Projects 为 **卡片布局**，含**悬停动画**。
* [ ] Carousel 自动轮播 + 手动控制。
* [ ] 联系表单含 **HTML5 + jQuery** 校验并给出用户反馈（成功/失败提示）。
* [ ] 样式简洁现代，注释适度，语义化良好，无明显可访问性问题。
* [ ] 直接打开 `index.html` 即可使用；Firefox 下表现正常。

## 输出格式要求

* 请按以下顺序输出三个代码块，且**仅包含代码**：

  1. `index.html` 的完整内容
  2. `styles.css` 的完整内容
  3. `script.js` 的完整内容
* **不要** 输出额外解释性文字。
* **保证可直接复制粘贴成文件后运行**。
