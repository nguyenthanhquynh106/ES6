// Bài 1
// Hãy tạo 2 ô input nhập số, và 1 button "Tính tổng". Hãy tính tổng của 2 số nhập vào khi click nút "Tính tổng"
const calculateSum = () => {
  const firstNum = parseInt(document.getElementById('firstNumber').value)
  const secondNum = parseInt(document.getElementById('secondNumber').value)
  const total = firstNum + secondNum
  document.getElementById('result').value = total
}
  