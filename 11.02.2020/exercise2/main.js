// Bài 2
// Tạo 1 thẻ div có kích thước 100px 100px, có màu nền là màu đỏ Hãy viết hàm click, sao cho khi click vào thẻ div vừa rồi, nếu màu nền đang màu đỏ sẽ chuyển thành màu xanh lá cây, nếu đang màu xanh lá cây sẽ chuyển sang màu đỏ
const changeBackground = event => {
  if (event.target.style.background === 'red') {
    event.target.style.background = 'lime'
  } else {
    event.target.style.background = 'red'
  }
}