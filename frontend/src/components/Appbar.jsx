export const Appbar = ({ name }) => {
    return <div>
        <div className="shadow-lg shadow-cyan-300/50 h-14 flex justify-between rounded-md ">
            <div className="flex flex-row justify-center h-full ml-4 ">
                <div className="mt-2">
                    <img src="./rupee-gold-coin-10889 (2).svg" alt="Rupee Gold Coin" className="h-10 w-10" />
                </div>
                <div className="mt-4 pl-2">
                YogPay App
                </div>
            </div>
            <div className="flex">
                <div className="flex flex-col justify-center h-full mr-4 uppercase font-bold">
                    <b> {name}</b>
                </div>
                <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                    <div className="flex flex-col justify-center h-full text-xl uppercase font-bold">
                        {/* U */}
                        <b> {name[0]}</b>
                    </div>
                </div>
            </div>
        </div>
    </div>
}