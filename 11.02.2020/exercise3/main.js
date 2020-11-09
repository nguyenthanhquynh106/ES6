// Bài 3
// Hãy tạo 1 thẻ select có các mục là: Laptop, Điện thoại, Tivi
// Laptop bao gồm:
//     Macbook
//     Dell
//     Lenovo
//     Asus
// Điện thoại bao gồm:
//     Apple
//     Samsung
//     Nokia
// Tivi bao gồm:
//     LG
//     Sony
// Khi chọn 1 option (Laptop hoặc Điện thoại hoặc Tivi), hãy show các hãng của option đang chọn lên màn hình để người dùng có thể thấy được dưới dạng ul li hoặc ol li
const changeOption = () => {
  let value = document.getElementById("device").value
  if (value === 'laptop') {
    document.getElementById('laptopOptions').style.display = 'block'
    document.getElementById('phoneOptions').style.display = 'none'
    document.getElementById('tvOptions').style.display = 'none'
  } else if (value === 'phone') {
    document.getElementById('laptopOptions').style.display = 'none'
    document.getElementById('phoneOptions').style.display = 'block'
    document.getElementById('tvOptions').style.display = 'none'
  } else {
    document.getElementById('laptopOptions').style.display = 'none'
    document.getElementById('phoneOptions').style.display = 'none'
    document.getElementById('tvOptions').style.display = 'block'
  }
}
  