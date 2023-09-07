import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter();
    useEffect (()=>{
        setTimeout(()=>{
            router.push("/");
        },3000)
    }, [])
    return ( 
        <div className="not-found">
            <h1> Ooooops...</h1>
            <h2> Essa página não foi encontrada.</h2>
            <p> Volte para a <Link href="/">página inicial</Link></p>
        </div>
     );
}
 
export default NotFound;