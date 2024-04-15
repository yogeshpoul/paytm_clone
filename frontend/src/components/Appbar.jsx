export const Appbar = ({name}) => {
    return <div>
        <div className="shadow-lg shadow-cyan-300/50 h-14 flex justify-between rounded-md ">
            <div className="flex flex-col justify-center h-full ml-4">
                PayTM App
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