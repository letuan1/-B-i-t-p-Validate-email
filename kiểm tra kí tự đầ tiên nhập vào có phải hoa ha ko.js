function email(src) {
    src = prompt("nhập 1 email để kiểm tra xem có hợp lệ hay không");
    regexp = /^[A-Za-z0-9]+@[A-Za-z0-9]+.[A-Za-z0-9]+$/;
    if (regexp.test(src)) {
        alert("email hợp lệ")
    } else {
        alert("email không hợp lệ")
    }
}
