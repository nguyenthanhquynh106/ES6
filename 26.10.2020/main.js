// Bài 1
// Viết 1 hàm trả về 1 array, nhận vào 2 tham số, tham số thứ 1 là ký tự cần lặp, tham số thứ 2 là số lần lặp
// Vd đầu vào là:
// ('ahihi', 3)
// Thì Kết quả là:
// ['ahihi', 'ahihi', 'ahihi']
// Yêu cầu, viết ít nhất 2 cách khác nhau
// C1
const getArray = (string, number) => {
  const arr = []
  for (let i = 1; i <= number; i++) {
    arr.push(string)
  }
  return arr
}
// C2
const showArray = (string, number) => {
  const arr = []
  for (let i = 0; i < number; i++) {
    arr.splice(i, 0, string)
  }
  return arr
}

// Bài 2
// Viết 1 hàm để đảo ngược 1 mảng, không được dùng hàm array.reverse()
// Vd input:
// ['a', 1, '9', 'apple']
// Thì output phải là:
// ['apple', '9', 1, 'a']
const reverseArray = array => {
  const newArray = []
  for (let i = 0; i < array.length; i++) {
    newArray.unshift(array[i])
  }
  return newArray
}

// Bài 3
// Xóa đi các giá trị được xem là sai
// Vd intput:
// [0, 1, false, 2, undefined, '', 3, null]
// Thì output là:
// [1, 2, 3]
const getTrueArray = array => array.filter(Boolean)

// Bài 4
// Tạo ra 1 array gồm các object có key và value tương ứng cặp array ban đầu
// Vd intput:
// const data = [['a', 1], ['b', 2]]
// Thì output là:
// { a: 1, b: 2 }
const convertArrayToObject = array => {
  const newObject = {}
  array.forEach(arr => {
    newObject[arr[0]] = arr[1]
  })
  return newObject
};

// Bài 5
// Sắp xếp mảng tăng dần
// Vd intput:
// [6, 4, 0, 3, -2, 1]
// Thì output là:
// [-2, 0, 1, 3, 4, 6]
const sortArray = array => array.sort((a, b) => a - b)

// Bài 6
// Kiểm tra input đầu vào có phải là object hay không?
// Vd input là:
// const data = { a: 1 }
// return true
// const data = [1, 2, 3]
// return false
const isObject = obj => {
  if (typeof obj === 'object' && !Array.isArray(obj)) {
    return true;
  }
  return false
}

// Bài 7
// Viết 1 hàm trả về các key (của 1 object) khác các key truyền vào Vd:
// const obj = { a: 1, b: 2, c: 3, d: 4 }
// Truyền vào a, c
// return { b: 2, d: 4 }
const getRestKeys = (object, array) => {
  for (let key in object) {
    array.forEach(arr => {
      if (key === arr) {
        delete object[key]
      }
    })
  }
  return object
}

// Bài 8
// Viết hàm nhập vào 1 array có nhiều hơn 5 phần tử Xóa phần tử số 2, 3 trong array 
// Return mảng sau khi đã xóa
const getArrayAfterDeleted = array => {
  if (array.length < 5) return
  array.splice(2, 2)
}

// Bài 9
// Viết hàm nhập vào 1 array có cấu trúc như ví dụ sau:
// const students = [
//     { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
//     { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
//     { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
//     { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
//     { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
//     { id: 6, name: 'Phí Duy Quân', score: 9.6 },
//     { id: 7, name: 'Trần Minh Minh', score: 6.1 }
// ]
// Hãy tạo 1 array mới, với cấu trúc sau:
// ['Pass', 'Fail', 'Fail', 'Pass', 'Pass', 'Fail', 'Pass']
// Điều kiện Pass:
// Điểm trên 5.0 và không có chữ Duy là tên đệm
const createArray = array => {
  var newArray = []
  array.forEach(student => {
    const {
      name,
      score
    } = student
    const indexName = name.indexOf('Duy')
    if (score <= 5 || (indexName > 0 && indexName < name.length - 3)) {
      newArray.push('Fail')
    } else {
      newArray.push('Pass')
    }
  })
  return newArray
}

// Bài 10
// Cho array có cấu trúc như input bài 9
// Hãy tìm các students có điểm là số mà tổng số nút của phần trước dấu thập phân và phần sau dấu thập phân cộng lại lớn hơn 5
// Vd: 6.9 -> 6 + 9 = 5 (không lấy)
// 3.7 -> 3 + 7 = 0 (không lấy) 5.2 -> 5 + 2 = 7 (lấy)
const findStudentsByScore = array => {
  var newArray = []
  array.forEach(student => {
    const score = String(student.score)
    const [firstScore, lastScore] = score.split('.')
    const total = Number(firstScore) + Number(lastScore)
    if (total % 10 > 5) {
      newArray.push(student)
    }
    return newArray
  });
}
  