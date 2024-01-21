import useSWR from "swr";
import { registerSchool } from "../api/SchoolApi";


export const useSchoolRegister =(reader:any)=>{
    const { mutate} = useSWR("/api/register-school",()=>{
        registerSchool(reader)
    });

    return {mutate}
};