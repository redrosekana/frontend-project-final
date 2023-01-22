//* import picture
import picture1 from "../../assets/picture1.jpg"

const amountItem:number[] = []
for (let i=1;i<=10;i++){
    amountItem.push(i)
}

function HomeBefore() {
    return (
    <main className='mt-12 mb-4 max-w-[1400px] mx-auto px-5'>
        <div className='flex flex-col specific:flex-row'>
            <div className='flex flex-col justify-center order-2 text-center mt-8 w-full specific:w-[55%] specific:order-1 specific:mt-0 specific:text-start'>
                <h3 className='font-bold text-2xl telephone:text-4xl lg:text-5xl'>Board Game RecCommu</h3>
                <p className='mt-4 text-xl text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque esse ab ipsam blanditiis quaerat odit exercitationem necessitatibus totam rem omnis tempore vitae quos odio, deserunt tempora sunt enim quo! Quibusdam?</p>
                <div className='mt-4 flex flex-col telephone:block'>
                    <button className='bg-orangey p-2 font-medium text-xl rounded-md text-white hover:bg-orange-500'>ระบบแนะนำบอร์ดเกม</button>
                    <button className='border-2 border-black p-2 font-medium text-xl rounded-md ml-0 mt-3 telephone:ml-4 telephone:mt-0'>ระบบค้นหาผู้เล่น</button>
                </div>
            </div>

            <div className='flex justify-center order-1 w-full specific:justify-end specific:w-[45%] specific:order-2'>
                <img src={picture1} alt="picture1" className='max-w-[450px] w-full rounded-3xl specific:max-w-[550px] shakeAnimation' />
            </div>
        </div>

        <div className='mt-20'>
            <h3 className='font-bold text-2xl telephone:text-4xl'>บอร์ดเกมยอดนิยม</h3>
            <div>
                {amountItem.map((e,i) => {
                    return ItemPopular(e,i)
                })}
            </div>
        </div>
    </main>
  )
}

const ItemPopular = (detail:number,index:number) => {
    return (
        <div key={index} className="flex flex-col sm:flex-row items-center border-b-2 border-b-gray-300 my-8 pb-4">
            <div>
                <img src={picture1} alt="picture1" className='w-[320px] sm:w-[220px] rounded-md' />
            </div>
            <div className='flex-grow ml-8 mt-8 sm:mt-0'>
                <h4 className='text-2xl font-semibold'>Board Game {detail}</h4>
                <p className='text-lg text-gray-400'>2022</p>
                <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </div>
        </div>
    )
}

export default HomeBefore
