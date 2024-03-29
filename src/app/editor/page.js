'use client'
import React from 'react'
import {signIn} from 'next-auth/react'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

export default function page() {
    
    const router = useRouter();
    const session = useSession();
    
    const handleSignIn = async ()=>{
        await signIn("google");
        toast.success('Signed In..');
    }

    const handleNewWork = () =>{
        router.push("/newwork");
    }

    return (
        <section className="flex h-screen w-screen flex-col items-center  bg-zinc-100 px-14 py-5 text-base font-medium leading-6 max-md:px-5">
            <div className="flex items-center justify-between w-full text-white max-md:flex-wrap">
                <button className="px-4 py-2 rounded-lg bg-cyan-950 max-md:px-5">
                    Workspace &gt;
                </button>
                <img className='h-[50px] ml-3' src="/Ytblend.png" alt="" />
                <input type='text' className="px-4 py-1.5 text-xl grow mx-4 bg-white rounded-lg border border-solid border-neutral-200 text-ellipsis text-zinc-500" placeholder='search..'></input>
                {!session.data?.user.image && <button className="px-4 py-2 bg-cyan-900 rounded-lg" onClick={() => handleSignIn()}>
                    Sign Up / Login
                </button>}
                {session.data?.user.image && <img src={session.data?.user.image} className="ml-2 w-9 h-9 rounded-full" aria-label="Button"></img>}
            </div>
            <button onClick={()=>handleNewWork()}>
                <figure className="flex w-[177px] max-w-full mt-60 flex-col self-center whitespace-nowrap rounded-3xl bg-neutral-400 px-16 py-10 text-black">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADWElEQVR4nO2ay08UQRDGf0Zk12BEFhCPcjQY9Z9QQVGBG4o3DV5Egl59nNGTCQl/hwYJJGoQ3w/Ui4LISeVgxJsLBM2ait8knbiz7M727s4SvmSyj66prpqurq7+emATGxcpoAu4CYwBs8BPYFWXff+oNpM5BTQQEySBs8Ak8AfIFHj9BiaAPiBRCQe2A5eBRceoFeABcFUjs09PfJuuBv1nbdeAh7onuP8bMKSHUxYcBxYcA14B54D6CLp2AeeB146+z0AHJYQ9qVGnwzfAEY/624G3jv6RUozOHhluHfwCLgJbfXfCP52XgLQz2i2+lLdquDPKOvspPQ4Ac+pzXjYUhWZH4UugifKhAXisvhcUFZGQdMLpKVBH+VEHPHfCLNKcGXXCyRa7SqHRiQpLAAWn2GBil2NO5DNn0rLJslvei12wTlh2igsGncmfV4hdcdaJUqTYqKgB3sk2cyonEioVTPgw8cMx2ba43qj0ORkijtjiZNLTuQQnJWS1ky+8AJ551NcvG8fDBFIqq1ciFoBhCGonnwvlKrAWZme3OryPX/h2xDAlnSfIgltqtP1E3B25IZ3D2RrH1HiyChzpls472Ro/qdF2cXF3pE06jRf4D0tqTFWBI03S+T1b46oaayMono5APASX3VsoEg5PEBtHHvl2ZKmKQqs5V2htmMk+pkZjAOPuSE+u9BssiEaeVfWC2KVGYwurpUTpDCvGgqLRGMC4OpJyisadYUIT6tRoTF+Yjphiw3BBNt4LlQDOSMi42LhurGZkY+96C81XCR4lfuiUbV/yOYYYkvBMDMmH97JtIJ8bkg7Xa4RyXDAkm+YKORTq0E1pkWOVxiFgWTYVfJQx4jwBoy0rhWaRcmbL7SgKkqKFMiKSK0Fi7xALk9FnopinMescK9jvciEFPHGO44o+8Gl1htbC7CDlmRPz6tOq8r2+FLc4YZYW92rp0DdqlJ2WnXDa7buTpJMAMiKUOzyu2HaUEawTwcQu6dl7uzPsAWvfH/EthpRqp6DsyCiUfJ4Wrzs6g045k1FFauX1dfFObUrbtboadWjUI5kphycIyo6BSr0BkRArPq4tQKHEw5p2pr2VciAb6sXF2q7trs4efzgv1dj3D9qeDks2dD+xCaocfwGfzEwBMfegNQAAAABJRU5ErkJggg==" alt="" className="self-center w-full aspect-square" />
                    <figcaption className="mt-6 text-center">Add</figcaption>
                </figure>
            </button>
        </section>
    )
}
