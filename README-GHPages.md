# 东莞创江电子 · 营销站（静态化，适配 GitHub Pages）

本分支/版本已移除后端（Prisma/Socket.IO/API 等），改为 **纯静态** 的 Next.js App Router 站点，支持 `next export`。
已内置 GitHub Actions 自动部署到 GitHub Pages。

## 本地开发
```bash
npm install
npm run dev
```

## 构建导出（静态）
```bash
npm run build
# 构建产物在 ./out 目录，可直接发布
```

## 部署到 GitHub Pages（自动）
1. 推送到 `main` 分支，工作流会自动：`npm install` → `next build` → `next export` → 发布 `./out` 到 Pages。
2. 非 `user.github.io` 仓库会自动设置 `BASE_PATH=/<repoName>`，确保链接与静态资源路径正确。

## 目录说明
- `src/app/`：营销站页面（Home / Products / About / Contact）
- `src/app__backup_for_marketing/`：原有 `app` 目录备份（如需迁回可自行拷贝）
- `next.config.ts`：`output: 'export'` + `images.unoptimized` + `trailingSlash` + `basePath`
- `.github/workflows/deploy-gh-pages.yml`：部署工作流

---
> 如果你后续需要把「后台/交互」能力加回去（聊天、看板、下单等），建议后端独立部署，前端通过 HTTPS 调用后端 API，继续保持前端静态化以兼容 GitHub Pages。
