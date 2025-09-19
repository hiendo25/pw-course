# Tổng hợp kiến thức đã học từ lesson 03
## Git
1. Undo things
- Undo msg lúc commit  nhầm: git commit --amend -m "new msg"
- Restore lại file từ vùng staging area về lại vùng working directory nếu add nhầm: git restore --staged <file_name> ( chỉ định restore lại 1 file bất kỳ) hoặc git restore --staged . ( restore tất cả các file từ vùng staging area về lại vùng working directory)