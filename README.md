# 星光影集 · 后台管理指南

## 访问后台
- 地址：`https://zhouxingxing.xyz/admin`
- 登录方式：使用 Netlify Identity 账号

## 新增作品流程

### 方式一：后台直接添加（推荐）
1. 访问 `https://zhouxingxing.xyz/admin/#/collections/portfolio`
2. 点击 "New 摄影作品"
3. 填写表单：
   - **标题**：作品名称
   - **分类**：选择 "风光" / "人像" / "街拍"
   - **图片**：点击选择或上传图片（会自动保存到 `images/portfolio/`）
   - **描述**：可选，简短描述
4. 点击 "Publish" 保存

### 方式二：本地编辑后推送
1. 在 `data/` 文件夹创建新 `.md` 文件
2. 格式：
   ```
   ---
   title: "作品标题"
   category: "风光"
   image: "images/portfolio/图片名.jpg"
   description: "描述文字"
   ---
   ```
3. 提交到 GitHub：
   ```bash
   git add .
   git commit -m "添加新作品"
   git push
   ```

## 现有作品管理
- 在后台列表中点击作品标题编辑
- 修改后点击 "Publish" 保存
- 删除作品：点击 "Delete" 按钮

## 图片管理
- 图片自动保存到 `images/portfolio/` 文件夹
- 支持 JPG/PNG 等格式
- 建议图片大小：压缩到 1MB 以内

## 常见问题
- **后台打不开**：检查 Netlify Identity 和 Git Gateway 是否开启
- **图片不显示**：确认路径正确，刷新浏览器缓存
- **修改没生效**：等待 Netlify 部署完成（通常 1-2 分钟）

## 技术支持
- GitHub 仓库：`https://github.com/Chow9527/zhouxingxing-photo`
- Netlify 后台：`https://app.netlify.com/sites/mellow-tulumba-7f9c12`