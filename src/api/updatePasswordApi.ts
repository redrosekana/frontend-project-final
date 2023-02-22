//* import library
import axios, { AxiosError } from "axios";

//* declare instance
const url = import.meta.env.VITE_URL_DEV + "/password";

//* declare interface
interface errorResponse {
    message:string
}
interface bodyProps {
    password:string,
    token:string
}

export default async function UpdatePasswordApi(body:bodyProps) {
    try {
        await axios({
            url:url,
            method:"post",
            headers:{"content-type":"application/json"},
            data:body,
            timeout:10000
        })
        
        return "เปลี่ยนรหัสผ่านสำเร็จ"
    }catch(err: unknown | AxiosError) {
        if (axios.isAxiosError(err)) {
            console.log(err)
            const message = ( err.response?.data as errorResponse ).message

            if (message === "required password and token") {
                return "ข้อมูลไม่ถูกต้อง"
            }else if (message === "jwt expired token") {
                return "โทเคนหมดอายุแล้ว กรุณาทำการใหม่อีกครั้ง"
            }else if (message === "occurred error in server") {
                return "มีข้อผิดพลาดของเซิฟเวอร์"
            }
        }else {
            return "มีข้อผิดพลาดของบราวเซอร์"
        }
    }
}