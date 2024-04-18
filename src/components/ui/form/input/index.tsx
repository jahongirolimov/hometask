import "./style.scss";
import {Input} from '../../../../types/interface'


const index = (child:Input) => {
    return (
        <label className="block mb-[20px]">
            <input onChange={(e) => {
                child.state(e.target.value)
            }} className="border w-full rounded-xl p-2 text-[20px] outline-none font-medium" type={child.type} placeholder={`Enter your ${child.placeholder}`} required/>
        </label>
    );
};

export default index;