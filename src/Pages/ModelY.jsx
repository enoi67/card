import Bg from '../assets/Model-Y-bg.avif'

const MY = () => {
    return (
        <main>
            <section>
                <div className="w-full h-screen">
                    <div className='absolute z-[-999]'>
                        <img src={Bg} alt="" />
                    </div>
                    <div className="items-start text-start text-white relative top-[700px] px-[50px]">
                        <h1 className="font-semibold text-xl md:text-2xl lg:text-4xl">Model Y</h1>
                        <p className="font-semibold text-lg md:text-xl lg:text-lg mt-[25px]">From $29,490*</p>
                        <p className="font-sm text-sm">After Federal Tax Credit & Est. Gas Savings</p>
                        <div className="flex flex-row gap-2">
                            <button className="block font-bold text-white bg-blue-600 px-[80px] py-[12px] rounded mt-10">Order Now</button>
                            <button className="block font-bold text-white bg-gray-800 px-[80px] py-[10px] rounded mt-10">Demo Drive</button>
                        </div>
                    </div>
                </div>
            </section >
        </main>
    );
}
export default MY;