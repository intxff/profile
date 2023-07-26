import { FaUser, FaBirthdayCake, FaVenusMars, FaGraduationCap, FaMapMarkedAlt, FaAt } from 'react-icons/fa';

type Title = "Name" | "Age" | "Education" | "Gender" | "Location" | "Email"
interface Entry {
    name: Title,
    icon: JSX.Element
    value: string
}
const iconColor = "#99d98c";
const iconClass = "sm:h-fit sm:w-fit max-sm:h-8 max-sm:w-8 max-sm:p-1 sm:p-2 border-2 border-gray-300 rounded-full"
const sheet: Entry[] = [{
    name: "Name",
    icon: <FaUser color={iconColor} className={iconClass}/>,
    value: "INTXFF",
}, {
    name: "Age",
    icon: <FaBirthdayCake color={iconColor} className={iconClass}/>,
    value: "27",
}, {
    name: "Gender",
    icon: <FaVenusMars color={iconColor} className={iconClass}/>,
    value: "Male",
}, {
    name: "Education",
    icon: <FaGraduationCap color={iconColor} className={iconClass}/>,
    value: "Zhengzhou University(Bachelor)",
}, {
    name: "Location",
    icon: <FaMapMarkedAlt color={iconColor} className={iconClass} />,
    value: "Nanjing",
}, {
    name: "Email",
    icon: <FaAt color={iconColor} className={iconClass}/>,
    value: "intxff@gmail.com",
}];

export default function() {
    const lists = sheet.map(({ name, icon, value }) => {
        return (
            <div key={name} className="flex items-center content-center">
                <div className="">
                    {icon}
                </div>
                <div className="ml-4 self-center">
                    <h4 className="text-lg">{name}</h4>
                    <p className="text-xl text-slate-500 mt-2">{value}</p>
                </div>
            </div>
        )
    })
    return (
        <div className="max-lg:w-full lg:w-[720px] h-full overflow-y-auto justify-start items-center p-[50px] max-sm:p-5">
            <h3 className="border-b-2 pb-2 text-2xl bold">PROFILES</h3>
            <div className="flex justify-center content-center h-[450px]">
                <div className="grid grid-cols-2 gap-y-8">
                    {lists}
                </div>
            </div>
        </div>
    )
}
