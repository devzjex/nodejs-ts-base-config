#Khi thực hiện git commit, Husky sẽ tự động chạy ESLint để kiểm tra mã trước khi commit.

npx husky add .husky/pre-commit "yarn lint"
