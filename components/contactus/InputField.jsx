import { Input } from "../ui/input"
import { Label } from "../ui/label"

const InputField = ({ label, id, type = "text" }) => {
    return (
        <>
            <Input id={id} type={type} className="placeholder:text-transparent peer rounded-xl border-solid border-white/10 bg-[#1F1F1F] text-white h-14 px-[20px] pt-[26px] text-base w-full" placeholder="fullName" />
            <Label htmlFor={id} className="top-1/2 text-base text-white/50 -translate-y-1/2 absolute left-[20px] font-normal peer-[:not(:placeholder-shown)]:top-[16px] peer-[:not(:placeholder-shown)]:text-[14px] peer-focus:text-[14px] peer-focus:top-[16px] transition-all">{label}</Label>
        </>
    )
}

export default InputField