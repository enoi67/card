import Bg from '../assets/Model-X-bg.avif'


const MX = () => {
    return (
        <main>
        <section>
            <div className="w-full h-screen mx-auto">
                <div className='absolute z-[-999]'>
                    <img src={Bg} alt="" />
                </div>
                <div className="flex text-white  items-center flex-col py-[100px] gap-2">
                    <h1 className="font-semibold text-xl md:text-2xl lg:text-4xl">Model X</h1>
                    <h3 className="font-semibold text-lg md:text-xl lg:text-lg">From $63,990*</h3>
                    <p className="font-sm text-sm">After Federal Tax Credit & Est. Gas Savings</p>
                </div>
                <div className="flex mx-auto justify-between max-w-[600px] mt-[400px]">
                     <div className="flex text-white flex-col items-center">
                        <h3 className="font-semibold text-2xl">326mi</h3>
                        <p className="font-base text-md">Range (EPA est.)</p>
                    </div>
                    <div className="flex text-white flex-col items-center">
                        <h3 className="font-semibold text-2xl">2.5s</h3>
                        <p className="font-base text-md">0-60 mph*</p>
                    </div>
                    <div className="flex text-white flex-col items-center">
                        <h3 className="font-semibold text-2xl">9.9s</h3>
                        <p className="font-base text-md">1/4 Mile</p>
                    </div>
                    <div className="flex text-white flex-col items-center">
                        <h3 className="font-semibold text-2xl">1,020hp</h3>
                        <p className="font-base text-md">Peak Power</p>
                    </div>
                </div>
                <div className="flex items-center gap-5 justify-center">
                    <button className="block font-bold text-black bg-white px-[80px] py-[12px] rounded mt-10 hover:bg-slate-50">Order Now</button>
                    <button className="block font-bold text-white bg-transparent border-[2px] px-[80px] py-[10px] rounded mt-10 hover:bg-white hover:text-black">Demo Drive</button>
                </div>
                <div className="flex items-center text-center text-white justify-center flex-col mt-[25px]">
                    <p className="max-w-[500px] text-sm">
                        *Price before savings is $72,990, excluding taxes and fees. Subject to change.
                        Learn about est. gas savings.
                    </p>
                    <p className="text-sm">
                        Specs displayed are Model S Plaid values.
                    </p>
                </div>
            </div>
        </section>
    </main>
    );
}
export default MX;