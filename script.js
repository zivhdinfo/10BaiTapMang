console.log ("Thời GIan Làm: 11:00 | 03/10/2023 ")
console.log ("Thời GIan Xong: 03:45 | 04/10/2023 ")
var numberArr = [];
function themSo() {
    var number = document.getElementById("number").value * 1;
    numberArr.push(number);
    var message = `${numberArr}`;
    document.getElementById("list-number").innerHTML = message;
}
function tongSoDuong() {
    var number = 0;
    for (var i = 0; i < numberArr.length; i++) {
        if (numberArr[i] > 0) {
            number = number + numberArr[i];
        }
    }
    Swal.fire(`Tổng Số Dương Là  ${number}`);
}
function demSoDuong() {
    var number = 0;
    for (var i = 0; i < numberArr.length; i++) {
        if (numberArr[i] > 0) {
            number++;
        }
    }
    Swal.fire(`Các Số Dương Là  ${number}`);
}
function timSoNhoNhat() {
    if (numberArr.length === 0) {
        return Swal.fire(`Bạn Chưa Thêm Số `);
    }

    var minNumber = numberArr[0];

    for (var i = 1; i < numberArr.length; i++) {
        if (numberArr[i] < minNumber) {
            minNumber = numberArr[i]; // Đoạn này sẽ update minNumber hiện tại thành numberArr nhỏ hơn minNumber Hiện Tại
        }
    }

    return Swal.fire(`Số nhỏ nhất trong mảng là: ${minNumber}`);
}
function soDuongNhoNhat() {
    if (numberArr.length === 0) {
        return Swal.fire(`Bạn Chưa Thêm Số `);
    }

    var minNumber = numberArr[0];

    for (var i = 1; i < numberArr.length; i++) {
        if (numberArr[i] > 0) {
            if (numberArr[i] < minNumber) {
                minNumber = numberArr[i];
            }
        }
    }

    return Swal.fire(`Số dương nhỏ nhất trong mảng là: ${minNumber}`);
}
function timSoChanCuoiCung() {
    var cacSoChan = [];
    for (var i = 0; i < numberArr.length; i++) {
        if (numberArr[i] % 2 == 0) {
            cacSoChan = numberArr[i];
        }
    }

    Swal.fire(` Số Chẵn Cuối Cùng Là:  ${cacSoChan}`);
}
function doiCho() {
    Swal.fire({
        title: "Nhập thông tin vị trí cần đổi",
        html:
            '<input id="position1" class="swal2-input" placeholder="Vị trí 1">' +
            '<input id="position2" class="swal2-input" placeholder="Vị trí 2">',
        confirmButtonText: "Xác nhận",
        showCancelButton: true,
        cancelButtonText: "Hủy",
        preConfirm: () => {
            var numberArrNew = numberArr;
            // lấy giá trị vị trí nhập vào
            var position1 = Swal.getPopup().querySelector("#position1").value;
            var position2 = Swal.getPopup().querySelector("#position2").value;
            if (position1 >= numberArr.length || position2 >= numberArr.length) {
                Swal.fire(
                    `Vui lòng nhập vị trí ít hơn so với độ dài mảng từ 0 đến ${numberArr.length - 1
                    } `
                );
            } else {
                // Lấy giá trị từ mảng tại vị trí position1
                var numberArr1 = numberArr[position1];
                var numberArr2 = numberArr[position2];
                numberArrNew[position1] = numberArr2;
                numberArrNew[position2] = numberArr1;
                Swal.fire({
                    title: "Mảng sau khi đổi",
                    html: `${numberArrNew}`,
                });
            }
        },
    });
}
function tangDan() {
    newNumberArr = numberArr.sort((a, b) => a - b);
    Swal.fire(`Mảng sau khi sắp xếp là: ${newNumberArr}`);
}

function soNguyenTo(num) {
    if (num <= 1) {
        return false;
    }
    if (num <= 3) {
        return true;
    }
    if (num % 2 === 0 || num % 3 === 0) {
        return false;
    }
    for (var i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}
// Tìm số nguyên tố đầu tiên trong mảng
function SoNguyenToDauTien(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (soNguyenTo(arr[i])) {
            return arr[i];
        }
    }
    return null; // Trả về null nếu không tìm thấy số nguyên tố
}
function timSoNguyenToDauTien(){
    var firstPrime = SoNguyenToDauTien(numberArr);
    if (firstPrime !== null) {
        Swal.fire("Số nguyên tố đầu tiên trong mảng: " + firstPrime);
        
    } else {
        Swal.fire("Không có số nguyên tố trong mảng.");
    }
}
function demSoNguyen (){
    var count = 0;
    for (var i = 0; i < numberArr.length; i++) {
        if (Number.isInteger(numberArr[i])) {
            count++;
        }
    }
    Swal.fire("Số lượng số nguyên trong mảng là: " + count);
}
function soSanhDuongAm(){
    var soDuong = 0;
    var soAm = 0
    for (var i = 0; i < numberArr.length; i++) {
        if (numberArr[i] > 0) {
            soDuong++;
        } else {
            soAm++;
        }
    }
    if (soAm>soDuong){
        Swal.fire("Số Âm Lớn Hơn Số Dương.");
    } else if (soAm == soDuong) {
        Swal.fire("Số Âm Và Số Dương Bằng Nhau.");
    } else {
        Swal.fire("Số Âm Nhỏ Hơn Số Dương.");
    }
}





