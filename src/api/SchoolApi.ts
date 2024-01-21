import axios from "axios";

const URL: string = "http://localhost:2244/api";

export const registerSchool = async(data:any)=>{
    try {
        return await axios.post(`${URL}/register-school`,{email:data}).then((res:any)=>{
            // console.log("this is res",res)
            return res?.data
        });
    } catch (error) {
        // console.log(error)
        return error
    }
};

export const loginSchool = async(data: {})=>{
    try {
        return await axios.post(`${URL}/login-school`,data,{withCredentials: true}).then((res:any)=>{
            return res?.data
        });
    } catch (error) {
        return error
    }
};

export const getSchoolCookie = async()=>{
    try {
        return await axios.get(`${URL}/read-school-cookie`).then((res:any)=>{
            return res?.data
        });
    } catch (error) {
        return error
    }
};

export const verifySchool = async(schoolID:string)=>{
    try {
        return await axios.get(`${URL}/verify-school/${schoolID}`).then((res:any)=>{
            return res?.data
        });
    } catch (error) {
        return error
    }
};

export const readSchool = async(schoolID:string)=>{
    try {
        return await axios.get(`${URL}/view-school/${schoolID}`).then((res:any)=>{
            return res?.data
        });
    } catch (error) {
        return error
    }
};

export const logoutSchool = async()=>{
    try {
        return await axios.delete(`${URL}/logout`).then((res:any)=>{
            return res?.data
        });
    } catch (error) {
        return error
    }
};