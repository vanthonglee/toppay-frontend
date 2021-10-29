// 404.js
import Link from 'next/link'

export default function FourOhFour() {
  return (
    <>
      <section className="flex flex-col items-center justify-center w-full h-full mt-[100px]">
        <h1 className="font-black font-san-montserrat">404 - Page Not Found</h1>
        <Link href="/">
          <a>Go back home</a>
        </Link>
      </section>
    </>
  )
}
