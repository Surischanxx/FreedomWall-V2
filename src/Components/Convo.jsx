import { useParams } from "react-router-dom"
import { Comments } from "../Data/Comments"
import { BiChevronRight } from 'react-icons/bi'
import happy from '/src/assets/emojis/Smiling Face Emoji.png'
import sad from '/src/assets/emojis/Crying Sad Emoji.png'
import angry from '/src/assets/emojis/Very Angry Emoji.png'
import crying from '/src/assets/emojis/Loudly Crying Face Emoji.png'
import surprised from '/src/assets/emojis/Surprised Emoji [Free Download IOS Emojis].png'
import shy from '/src/assets/emojis/Shy Emoji [Free Download IOS Emojis].png'
import { HiEmojiHappy } from 'react-icons/hi'
import Loading from "./Loading"

const Convo = () => {
    const { comments } = Comments()
    const { id } = useParams()

    const data = comments.find((item)=> item._id === id)

    const emojiMap = {
        happy:happy,
        sad:sad,
        angry:angry,
        crying:crying,
        surprised:surprised,
        shy:shy
        }
    
        const getTimeDifference = (createdAt) => {
        const currentTime = new Date().getTime();
        const messageTime = new Date(createdAt).getTime();
        const timeDifference = currentTime - messageTime;
    
        const minutes = Math.floor(timeDifference / (1000 * 60));
        const hours = Math.floor(minutes / 60);
    
        if (hours > 0) {
            return `${hours} hours ago`;
        } else if (minutes > 0) {
            return `${minutes} minutes ago`;
        } else {
            return 'Just now';
        }
    };

return (
    <div className="flex flex-row-reverse items-center justify-center flex-wrap w-full gap-4 max-[257px]:p-0 p-3">
        {
            data != undefined ? 
        <div key={data._id} className="flex flex-col items-center bg-[rgb(38,55,72)] w-[15rem] min-h-[23rem] max-h-[23rem] rounded-lg drop-shadow-md select-none cursor-pointer">
        
            <div className="flex items-center bg-slate-600 px-3 h-[4rem] w-full rounded-t-lg">
                <span className='h-[2.5rem] w-[2.5rem] rounded-full flex items-center justify-center me-3' style={{background:data.theme}}>
                    <p className={`${data.theme === '#ffffff' ? 'text-black':'text-white'} text-2xl`}>
                    {data.to.slice(0,1).toUpperCase()}
                    </p>
                </span>
                <span>
                    <p className="text-2xl">{data.to}</p>
                    <p className="text-[12px]">
                    {getTimeDifference(data.createdAt) === 'Just now' ? '':'Active'} <span>{getTimeDifference(data.createdAt)}</span>
                    </p>
                </span>
            </div>

            <div className="p-3 h-[15rem] w-full overflow-y-auto flex flex-col">
                <span className="flex flex-col items-end justify-end h-[15rem] mt-[2rem] text-left">
                    <p className={`${data.theme === '#ffffff' ? 'text-black':'text-white'} p-3 max-w-full break-words rounded-lg`} style={{background:data.theme}}>
                    {data.message}
                    </p>
                    <p className="text-[11px]">
                    {data.seen != undefined ? data.seen? 'Seen':'Sent':''}
                    </p>
                </span>
            </div>
            <div className="flex items-center justify-between bg-slate-600 p-3 h-[4rem] w-full rounded-b-lg">

                <div style={{background:data.theme}} className="rounded-full">
                    <span className={`${data.theme === '#ffffff' ? 'text-black':'text-white'} text-xl`}>
                    <BiChevronRight/>
                    </span>
                </div>

                <div className="w-1/2 bg-white text-slate-500 py-1 px-3 rounded-full">
                    <span className="flex items-center justify-between">
                        <p>Aa</p>
                        <span>
                            <HiEmojiHappy/>
                        </span>
                    </span>
                </div>

                <div>
                    <img src={emojiMap[data.emoji]} className="h-[2rem] w-[2rem]"/>
                </div>
            </div>
        </div>
            :
            <Loading/>
        }
    </div>
)
}

export default Convo