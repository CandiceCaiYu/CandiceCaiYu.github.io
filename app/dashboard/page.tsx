'use client'

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
import Link from "next/link";
import {usePathname,useRouter} from "next/navigation";

export default function Page() {
    const router = useRouter()
    const pathName = usePathname()

    return( <div>
        <h1 style={{height:'100px'}}>Hello, Dashboard Page!</h1>
        <div onClick={() => router.push('/')}>click button direct to category</div>
        <Link href='/dashboard/category' scroll={true}>Button</Link>
        <div>Current url is {pathName}</div>
        <Link href='/dashboard#list'>id section</Link>
        <div id={'list'}>list</div>
    </div>)
}
