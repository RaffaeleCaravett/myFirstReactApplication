import { useEffect,useState } from "react"


const useFetch = (enpoint) => {
    const[data,setData] = useState(null)
        const [isPending,setIsPending] = useState(true)
        const [error,setError] = useState(null)
    useEffect(()=>{
        console.log('use effect ran')
        fetch(enpoint)
        .then(res=>{
            if(!res.ok){
            throw Error('could not fetch the data for that resource')
            }
            return res.json();
        })
        .then(data=>{
            setTimeout(()=>{
            setData(data)
            setIsPending(false)
            setError(null)
        },1000)
        })
        .catch(err=>{
            setError(err.message)
            setIsPending(false)
            console.log(err.message)
        })
    },[enpoint])


    return {data,isPending,error}
}

export default useFetch;