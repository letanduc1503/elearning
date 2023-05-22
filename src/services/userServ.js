import { https } from "./config"

export const userServ = {
    userLogin: (userInfo) => {
        return https.post("/api/QuanLyNguoiDung/DangNhap", userInfo)
    },
    getAccountInfo: () => {
        return https.post("/api/QuanLyNguoiDung/ThongTinTaiKhoan")
    },
    getUserList: () => {
        return https.get("/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01")
    },
    searchUser: (value) => {
        return https.get(`/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${value}`)
    },
    getListUnRegiteredCourses: (account) => {
        return https.post(`/api/QuanLyNguoiDung/LayDanhSachKhoaHocChuaGhiDanh?TaiKhoan=${account}`)
    },
    getCourseAwaitApproval: (account) => {
        return https.post(`/api/QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet`, account)
    },
    getCourseApprovaled: (account) => {
        return https.post(`/api/QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet`, account)
    },
    addUser: (userInfo) => {
        return https.post("/api/QuanLyNguoiDung/ThemNguoiDung", userInfo)
    },
    updateUser: (userInfo) => {
        return https.put("/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung", userInfo)
    },
    deleteUser: (user) => {
        return https.delete(`/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${user}`)
    },
    getUserListUnRegister: (idCourse) => {
        return https.post(`/api/QuanLyNguoiDung/LayDanhSachNguoiDungChuaGhiDanh`,idCourse)
    },
    getUserListWaitApproval: (idCourse) => {
        return https.post(`/api/QuanLyNguoiDung/LayDanhSachHocVienChoXetDuyet`,idCourse)
    },
    getCourseUserList: (idCourse) => {
        return https.post(`/api/QuanLyNguoiDung/LayDanhSachHocVienKhoaHoc`,idCourse)
    }
}
