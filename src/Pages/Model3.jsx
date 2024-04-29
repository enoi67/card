import bg from '../assets/Model-3-bg.avif'

const M3 = () => {
    return (
        <main>
        <section>
            <div className="w-full h-screen mx-auto">
                <div className='absolute z-[-999]'>
                    <img src={bg} alt="" />
                </div>
                <div className="flex text-white  items-center flex-col py-[100px] gap-1">
                <h1 className="font-base text-lg md:text-xl lg:text-2xl">Reengineered</h1>
                    <h1 className="font-semibold text-xl md:text-2xl lg:text-4xl">Model 3</h1>
                    <h3 className="font-semibold text-lg md:text-xl lg:text-lg">From $299/mo*</h3>
                    <p className="font-sm text-sm">Est. Lease Price Before Gas Savings</p>
                </div>
                <div className="flex mx-auto justify-between max-w-[500px] mt-[400px]">
                     <div className="flex text-white flex-col items-center">
                        <h3 className="font-semibold text-2xl">15min</h3>
                        <p className="font-base text-md">Recharge up to 175 miles</p>
                    </div>
                    <div className="flex text-white flex-col items-center">
                        <h3 className="font-semibold text-2xl">341mi</h3>
                        <p className="font-base text-md">Range (EPA est.)</p>
                    </div>
                    <div className="flex text-white flex-col items-center">
                        <h3 className="font-semibold text-2xl">AWD</h3>
                        <p className="font-base text-md">Dual Motor</p>
                    </div>
                </div>
                <div className="flex items-center gap-5 justify-center">
                    <button className="block font-bold text-black bg-white px-[80px] py-[12px] rounded mt-10 hover:bg-slate-50">Order Now</button>
                    <button className="block font-bold text-white bg-transparent border-[2px] px-[80px] py-[10px] rounded mt-10 hover:bg-white hover:text-black">Demo Drive</button>
                </div>
            </div>
        </section>
    </main>
    )
}
export default M3;