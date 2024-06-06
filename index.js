const { exec } = require('child_process');
const path = require('path');

// Đường dẫn tới thư mục C
const folderC = path.resolve(__dirname, '../tracks');

// Lệnh bạn muốn chạy trong thư mục C
const command = 'go run cmd/main.go start'; // Dùng 'dir' cho Windows, 'ls' cho Unix

exec(command, { cwd: folderC }, (error, stdout, stderr) => {
    if (error) {
        console.error(`Lỗi khi chạy lệnh: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Lỗi stderr: ${stderr}`);
        return;
    }
    console.log(`Kết quả: ${stdout}`);
});