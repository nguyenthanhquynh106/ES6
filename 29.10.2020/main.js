// Bài 1
// Chào mọi người, nhân vật chính hôm nay là Tèo. Má tèo là chủ của 1 đại lý vé số, sáng mới ngủ dậy chưa kịp làm gì đã bị má bắt kiểm tra đống vé số ở bên dưới
// Mỗi 1 array là 1 tờ vé số việt lốt, chứa các số khác nhau, thứ tự có thể không sắp xếp tăng dần. Hãy so sánh 2 vé số bất kì, và cho biết có trùng nhau hoàn toàn hay không
// VD:
// const arr1 = [1, 2, 3, 4]
// const arr2 = [1, 2, 3, 4]
// const arr3 = [1, 2, 3, 5]
// const arr4 = [1, 2, 3, 4, 5]
// isEqual(arr1, arr2) // true
// isEqual(arr1, arr3) // false
// isEqual(arr1, arr4) // false
const compareArrays = (array1, array2) => JSON.stringify(array1) === JSON.stringify(array2);

// Bài 2
// Nhà Tèo vừa bán vé số vừa bán đồ tạp hóa, ở trong kho, mặt hàng đồ chơi để không ngăn nắp cho lắm, mỗi 1 lần tìm đồ lại tốn rất nhiều thời gian. Má Tèo vừa mua các kệ để show mặt hàng đồ chơi cho dễ nhìn, dễ lựa.
// Nhìn xem, array data bên dưới chính là cách mà má Tèo sắp xếp đồ trước đây, không có quy luật gì cả, trong cái lọ lại chứa cái chai, trong cái chai lại có thể chứa cái gì đấy khác nữa
// Má Tèo muốn sắp xếp lại gọn gàng, đơn giản, dễ nhìn như ví dụ, giúp má Tèo nha
// VD:
// const data = [1, 2, [3, 4, [5]]]
// flatten(data) // [1, 2, 3, 4, 5]
const flattenArray = arr => arr.reduce((flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten), []);

// Bài 3
// Lại là Tèo, sau khi đã có array 1 chiều ở lần trước, Tèo muốn chia array ra thành nhiều đoạn nhỏ hơn, mỗi đoạn chứa n phần tử, giúp Tèo thêm lần nữa nha
// Lại là má Tèo, sau khi bày 1024 đồ hàng lên 1 cái kệ, má Tèo phát hiện ra rằng: mình nên đặt đồ theo từng kệ 1, chẳng hạn kệ 1 sẽ để bàn là + bàn chải đánh răng, kệ 2 sẽ để ô mô và bột giặt, ... nghĩ là làm, má Tèo gọi ngay Tèo ra sai việc vặt
// Kệ data chínhh là công sức lần trước của Tèo, việc bây giờ Tèo phải làm là vứt cái kệ cũ đi thay bằng những cái kệ mới.
// Mỗi 1 kệ sẽ chứa tối đa 1 hay 2 hay 3 hay ... bao nhiêu tùy Tèo cho phép, vì quá mệt mỏi, Tèo đã chạy sang nhờ bạn code hộ output bên dưới
// VD:
const data = [1, 2, 3, 4, 5, 6, 7];
// chunk(data, 2) // [[1, 2], [3, 4], [5, 6], [7]]
// chunk(data, 3) // [[1, 2, 3], [4, 5, 6], [7]]
const chunkArray = (arr, chunkSize) => {
  let newArr = []
  for (let i = 0; i < arr.length; i += chunkSize) {
    newArr.push(arr.slice(i, i + chunkSize))
  }
  return newArr
}

// Bài 4
// Không sống nổi với má, Tèo quyết định đi làm ở 1 công ty ở Thạch Thất, và đang phải phân tích dựa vào các data đã có sẵn, mỗi 1 array là thông tin của 1 cái gì đó mà Tèo cũng không biết nữa, nhiệm vụ của Tèo là tìm ra điểm chung của 2 array với nhau, Tèo đang khóc ra tiếng mán vì quá khó, hãy giúp Tèo
// VD:
const arr1 = [1, 2]
const arr2 = [2, 3]
const arr3 = ['a', 'b']
const arr4 = ['b', 'c']
const arr5 = ['b', 'e', 'c']
const arr6 = ['b', 'b', 'e']
const arr7 = ['b', 'c', 'e']
const arr8 = ['b', 'e', 'c']
// intersection(arr1, arr2) // [2]
// intersection(arr3, arr4, arr5) // ['b']
// intersection(arr6, arr7, arr8) // ['b', 'e']
const intersection = function () {
  const result = []
  let lists
  if (arguments.length === 1) {
    lists = arguments[0]
  } else {
    lists = arguments
  }
  for (let i = 0; i < lists.length; i++) {
    let currentList = lists[i]
    for (let j = 0; j < currentList.length; j++) {
      let currentValue = currentList[j]
      if (result.indexOf(currentValue) === -1) {
        let existsInAll = true
        for (let e = 0; e < lists.length; e++) {
          if (lists[e].indexOf(currentValue) === -1) {
            existsInAll = false
            break
          }
        }
        if (existsInAll) {
          result.push(currentValue)
        }
      }
    }
  }
  return result;
}

// Bài 5
// Không lâu sau, Tèo đã bị đuổi việc.Lần này Tèo đã nhờ ông chú Việt Theo giới thiệu vào tiki, công việc cũng không dễ dàng hơn là bao nhiêu.Sắp đến đợt sale sập sàn, mã giảm giá ngập tràn, mà mình Tèo làm không xuể.Mỗi một mã giảm giá chỉ có thời gian hiệu lực nhất định.
// Mỗi ngày Tèo đều làm quần quật, mà quên đi thời gian, chỉ nhớ là thời điểm cuối cùng được sale là lúc 12 giờ 30 phút 32 giây ngày 30 tháng 10 năm 2020. Trên màn hình là các đơn hàng, mà Tèo phải căng mắt tìm ra xem hóa đơn hiện tại có được sale hay không, hãy giúp Tèo viết 1 tool để Tèo đỡ mệt
const expirationDate = new Date(2020, 9, 30, 12, 30, 32)
const checkSale = (orderDate) => {
  if (Date.parse(orderDate) <= Date.parse(expirationDate)) return true
  return false
}

// Bài 6
// Vì nhờ vả quá nhiều, Tèo quyết định tự mình làm để vượt lên chính mình. Tèo tham gia khóa học lập trình của anh Trung, nhưng không vui cho Tèo. Lớp anh Trung đã đến gần với các buổi cuối, mọi người đang làm một tính năng đăng ký tài khoản trên siêu hệ thống của Nasa. Tèo chỉ ngơ ngác nhìn mọi người làm. Đâu đó Tèo nghe được, Nasa yêu cầu rằng để đăng ký được tài khoản thì phải có email và userName.
// Với email thì phải có định dạng email
// Với userName thì tối thiểu phải có 2 ký tự, tối đa 10 ký tự. Các ký tự được phép sử dụng là a-z (viết thường), các số từ 0-9 và dấu _. userName không được bắt đầu bằng số, và không được có 2 dấu _ đứng cạnh nhau.
// Hãy cho Tèo thấy bài toán trên dễ ẹc
const validate = (email, userName) => {
  const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g
  const regexUserName = /^([a-zA-Z]{1})([a-zA-Z0-9]|_(?!_)){1,9}$/g
  return (regexEmail.test(email) && regexUserName.test(userName))
}
 