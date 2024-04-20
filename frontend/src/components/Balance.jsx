export const Balance=({value})=>{
    const formattedValue=value?value.toFixed(2):"";
    return <div className="flex">
        <div className="font-bold text-lg">
            Your Balance is
        </div>
        <div className="font-semibold text-lg ml-4">
            Rs {formattedValue}
        </div>
    </div>
}