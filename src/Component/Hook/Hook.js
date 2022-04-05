import { useEffect, useState } from "react"

const useReview = ()=>{
    const [user, setUser] = useState([]);
    useEffect(()=>{
        fetch("data.json")
        .then(res=> res.json())
        .then(data=> setUser(data))
    },[])
    return [user, setUser]
}
export default useReview

