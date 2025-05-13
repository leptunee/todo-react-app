# 📝 ToDo App - 高级质感任务管理器

一个使用 React + Tailwind CSS 构建的 ToDo 应用，支持添加、删除、标记完成、筛选任务，具备玻璃拟态风格、亮暗主题切换和本地数据持久化，适合练手与部署上线。

![screenshot](https://source.unsplash.com/featured/?workspace,todo)

---

## ✨ 特性 Features

- 🎨 **高级 UI**：玻璃拟态（Glassmorphism）视觉风格，细致交互，自动适配亮/暗主题。
- 📋 **任务管理**：支持任务添加、删除、完成标记。
- 🔍 **任务筛选**：查看全部、未完成、已完成任务。
- 💾 **本地持久化**：使用 `localStorage` 保存任务，刷新页面数据不丢失。
- 🖼️ **背景美化**：引入 Unsplash 随机背景图片，保持界面清新自然。
- ⚡ **性能优化**：使用 React.memo 优化渲染。

---

## 🛠️ 技术栈 Tech Stack

- **React** 18+
- **Vite** 前端开发工具
- **Tailwind CSS** 快速构建 UI
- **Unsplash API** 随机图片背景
- **localStorage** 本地数据持久化

---

## 🚀 快速启动

确保本地已安装 Node.js 和 npm。

```bash
# 克隆项目
git clone https://github.com/your-username/your-repo.git
cd your-repo

# 安装依赖
npm install

# 本地开发运行
npm run dev
