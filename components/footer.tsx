import Link from "next/link"

function footer() {
    return (
        <footer className=" h-5xl w-full border-t-[1px]  border-stone-100/25">
            <section className="flex justify-between py-12">
                <div className="flex gap-16">
                    <Link href='/' className="text-[#fff] font-bold">Vercel Store</Link>
                    <ul className="text-[#c4c4c4] flex flex-col gap-4 text-sm">
                        <li>Home</li>
                        <li>About</li>
                        <li>Terms & Conditions</li>
                        <li>Shipping and Return Policy</li>
                        <li>Privacy Policy</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <button className="text-sm px-4 py-2 rounded-md w-fit h-fit text-white bg-black border-[1px] border-stone-100/25">Deploy</button>
            </section>

            <div className="flex justify-between text-[#c4c4c4] text-sm border-t-[1px] py-4 border-stone-100/25">
                <div className="flex">
                    <span className="pr-4">© 2023 ACME, Inc. All rights reserved.</span>
                    <span className="pl-4 border-l-[1px] border-stone-100/25">Designed in California</span>
                </div>
                <span>Crafted by <span className="text-white">Vercel</span></span>
            </div>

        </footer>
    )
}

export default footer