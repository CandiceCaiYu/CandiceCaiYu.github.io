import Link from "next/link";

export default function Category() {
  return (
      <div>
          <h1 style={{height:'1200px'}}>Hello, Category Page!</h1>
          <div>click button direct to dashboard</div>
          <Link href='/dashboard'>Button</Link>
      </div>
  )
}
