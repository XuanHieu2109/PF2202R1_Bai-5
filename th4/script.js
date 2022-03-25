//Khai báo các biến để nhận giá trị chiều cao và chiều rộng từ người dùng.
let inputWidth;
let inputHeight;

//chuyển kiểu dữ liệu từ chuỗi sang số nguyên
inputWidth = prompt("Enter the width");
inputHeight = prompt("Enter the height");

//Tính diện tích của hình chữ nhật và hiển thị ra màn hình
let width = parseInt(inputWidth);
let height = parseInt(inputHeight);
let area = width * height;
document.write("The area is: " + area);