'use client'
import React, { useEffect, useState } from 'react'
import { signIn } from 'next-auth/react'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import axios from 'axios'

export default function page() {

    const [channelData, setChannelData] = useState([]);
    const [approvals, setApprovals] = useState();

    const router = useRouter();
    const session = useSession();

    const handleSignIn = async () => {
        await signIn("google");
        toast.success('Signed In..');
    }

    const handleNewWork = () => {
        router.push("/newwork");
    }

    useEffect(() => {

        if (!session.data)
            return;
        const getChannelDetails = async () => {
            try {

                const userEmail = session.data.user.email;
                const requestBody = {// Destructure directly from the argument
                    email: userEmail,
                };

                // Send a POST request to your API route
                const requestBodyString = JSON.stringify(requestBody);
                const response = await axios.post('/api/getcollaborations', requestBodyString);
                const channelDetails = response.data;
                // Use the retrieved channelDetails in your application logic
                console.log(channelDetails)
                setChannelData(channelDetails.data);
                setApprovals(channelData.uploadApproved);
            } catch (error) {
                console.error('Error fetching channel details:', error);
            }
        }
        getChannelDetails();

    }, [session])

    function formatSubscribersCount(subscribersCount) {
        if (subscribersCount >= 1000000000) {
            return (subscribersCount / 1000000000).toFixed(1) + 'B';
        } else if (subscribersCount >= 1000000) {
            return (subscribersCount / 1000000).toFixed(1) + 'M';
        } else if (subscribersCount >= 1000) {
            return (subscribersCount / 1000).toFixed(1) + 'K';
        } else {
            return subscribersCount.toString();
        }
    }

    return (
        <section className="flex h-screen w-screen flex-col items-center bg-zinc-100 px-14 py-5 text-base font-medium leading-6 max-md:px-5">
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

            {channelData && (
                <div className='flex flex-row gap-10 flex-wrap mt-10'>
                    {channelData.map((channel, index) => (
                        <section key={index} class="flex flex-col items-center rounded-3xl bg-lime-200 px-6 pb-8 pt-9 max-md:px-5">
                            <div className="flex  flex-col items-center">
                                <a href={`https://www.youtube.com/channel/${channel.id.channelId}`} target="_blank" rel="noreferrer noopener">
                                    <img className='h-36 w-36 aspect-square shrink-0 rounded-full' src={channel.snippet.thumbnails.high.url} alt={`Channel ${channel.id} Thumbnail`} />
                                </a>
                                <div className="text-center font-bold text-2xl">
                                    {channel.snippet?.title || 'Channel Name'}
                                </div>
                                <div className="text-center text-xs">
                                    {formatSubscribersCount(channel.statistics.subscriberCount) + ' Subs'}
                                </div>
                                <div className="text-center text-bold text-xs">
                                    {channel.snippet.customUrl}
                                </div>
                                <div className="text-center">
                                    Uploads Approved : 0 {approvals} {/* Replace with actual data from channel.statistics or other property */}
                                </div>
                            </div>
                        </section>
                    ))}
                </div>
            )}
            <div className='mt-10'>
                <button onClick={() => handleNewWork()}>
                    <figure className="w-[177px] max-w-full whitespace-nowrap rounded-3xl bg-neutral-400 px-16 py-10 text-black">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADWElEQVR4nO2ay08UQRDGf0Zk12BEFhCPcjQY9Z9QQVGBG4o3DV5Egl59nNGTCQl/hwYJJGoQ3w/Ui4LISeVgxJsLBM2ait8knbiz7M727s4SvmSyj66prpqurq7+emATGxcpoAu4CYwBs8BPYFWXff+oNpM5BTQQEySBs8Ak8AfIFHj9BiaAPiBRCQe2A5eBRceoFeABcFUjs09PfJuuBv1nbdeAh7onuP8bMKSHUxYcBxYcA14B54D6CLp2AeeB146+z0AHJYQ9qVGnwzfAEY/624G3jv6RUozOHhluHfwCLgJbfXfCP52XgLQz2i2+lLdquDPKOvspPQ4Ac+pzXjYUhWZH4UugifKhAXisvhcUFZGQdMLpKVBH+VEHPHfCLNKcGXXCyRa7SqHRiQpLAAWn2GBil2NO5DNn0rLJslvei12wTlh2igsGncmfV4hdcdaJUqTYqKgB3sk2cyonEioVTPgw8cMx2ba43qj0ORkijtjiZNLTuQQnJWS1ky+8AJ551NcvG8fDBFIqq1ciFoBhCGonnwvlKrAWZme3OryPX/h2xDAlnSfIgltqtP1E3B25IZ3D2RrH1HiyChzpls472Ro/qdF2cXF3pE06jRf4D0tqTFWBI03S+T1b46oaayMono5APASX3VsoEg5PEBtHHvl2ZKmKQqs5V2htmMk+pkZjAOPuSE+u9BssiEaeVfWC2KVGYwurpUTpDCvGgqLRGMC4OpJyisadYUIT6tRoTF+Yjphiw3BBNt4LlQDOSMi42LhurGZkY+96C81XCR4lfuiUbV/yOYYYkvBMDMmH97JtIJ8bkg7Xa4RyXDAkm+YKORTq0E1pkWOVxiFgWTYVfJQx4jwBoy0rhWaRcmbL7SgKkqKFMiKSK0Fi7xALk9FnopinMescK9jvciEFPHGO44o+8Gl1htbC7CDlmRPz6tOq8r2+FLc4YZYW92rp0DdqlJ2WnXDa7buTpJMAMiKUOzyu2HaUEawTwcQu6dl7uzPsAWvfH/EthpRqp6DsyCiUfJ4Wrzs6g045k1FFauX1dfFObUrbtboadWjUI5kphycIyo6BSr0BkRArPq4tQKHEw5p2pr2VciAb6sXF2q7trs4efzgv1dj3D9qeDks2dD+xCaocfwGfzEwBMfegNQAAAABJRU5ErkJggg==" alt="" className="self-center w-full aspect-square" />
                        <figcaption className="mt-6 text-center">Add</figcaption>
                    </figure>
                </button>
            </div>
        </section>
    )
}
