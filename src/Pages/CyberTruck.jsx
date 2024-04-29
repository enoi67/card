import Bg from '../assets/Cybertruck-bg.avif'

const Cybertruck = () => {
    return (
        <main>
            <section>
                <div className="w-full h-screen justify-center">
                    <div className='absolute z-[-999]'>
                        <img src={Bg} alt="" />
                    </div>
                    <div className="flex text-white flex-col gap-[500px]">
                        <h1 className="font-base text-xl md:text-2xl lg:text-4xl mx-auto mt-[100px]">Cybertruck</h1>
                    <div className='flex mx-auto'>
                        <button className="block font-bold text-center text-white bg-gray-800 px-[80px] py-[10px] rounded">Order Now</button>
                    </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
export default Cybertruck;