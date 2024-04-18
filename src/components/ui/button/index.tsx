import {Button} from '../../../types/interface'

export default function index(data:Button) {
  return (
    <button onClick={data.click()} className='w-full bg-[#251c68] text-white py-[10px] mt-4 rounded-xl font-bold text-[20px] active:bg-[#231f53]'>
       {data.text}
    </button>
  )
}
