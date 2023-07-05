import axios from "axios";
import { Comments } from "../Data/Comments";
import { BiChevronRight } from 'react-icons/bi'
import happy from '/src/assets/emojis/Smiling Face Emoji.png'
import sad from '/src/assets/emojis/Crying Sad Emoji.png'
import angry from '/src/assets/emojis/Very Angry Emoji.png'
import crying from '/src/assets/emojis/Loudly Crying Face Emoji.png'
import surprised from '/src/assets/emojis/Surprised Emoji [Free Download IOS Emojis].png'
import shy from '/src/assets/emojis/Shy Emoji [Free Download IOS Emojis].png'
import { HiEmojiHappy } from 'react-icons/hi'
import Loading from "./Loading";
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types';

const FreedomWall = (props) => {

    const navigate = useNavigate()

    const {comments,isLoading} = Comments();

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

    const askQuestion =(name,id)=>{
      Swal.fire({
        title: `Be honest! Are you ${name}?`,
        showDenyButton: true,
        denyButtonColor:'rgb(37,59,90)',
        confirmButtonText: 'Yes',
        confirmButtonColor:'rgb(237,162,8)',
        denyButtonText: `No`,
        showLoaderOnConfirm:true,
        showLoaderOnDeny:true,
        preConfirm: async()=>{
          try {
            const env = import.meta.env;
            const url = env.VITE_REACT_SERVER_URL

              const model ={
                seen:true
              }
              await axios.put(`${url}/api/comment/${id}`, model)
              navigate(`/convo/${id}`)
          } catch (error) {
            console.log(error)
          }
        },
        preDeny:()=>{
          navigate(`/convo/${id}`)
        }
      })
    }

  return (
    <div className="flex flex-row-reverse items-center justify-center flex-wrap w-full gap-4 mt-10 max-[257px]:p-0 p-3">
    {isLoading ? <Loading/>:comments.filter((item)=>{
      if(props.search === ''){
        return item
      }else if(item.to.toLowerCase().includes(props.search.toLocaleLowerCase())){
        return item
      }
    }).map((item)=>(
      <button onClick={()=>{askQuestion(item.to,item._id)}} key={item._id} className="flex flex-col items-center bg-[rgb(38,55,72)] w-[15rem] min-h-[23rem] max-h-[23rem] rounded-lg drop-shadow-md select-none cursor-pointer">
        
        <div className="flex items-center bg-slate-600 px-3 h-[4rem] w-full rounded-t-lg">
            <span className='h-[2.5rem] w-[2.5rem] rounded-full flex items-center justify-center me-3' style={{background:item.theme}}>
                <p className={`${item.theme === '#ffffff' ? 'text-black':'text-white'} text-2xl`}>
                  {item.to.slice(0,1).toUpperCase()}
                </p>
            </span>
            <span>
                <p className="text-2xl">{item.to}</p>
                <p className="text-[12px]">
                  {getTimeDifference(item.createdAt) === 'Just now' ? '':'Active'} <span>{getTimeDifference(item.createdAt)}</span>
                </p>
            </span>
        </div>

          <div className="p-3 h-[15rem] w-full overflow-y-auto flex flex-col">
              <span className="flex flex-col items-end justify-end h-[15rem] mt-[2rem] text-left">
                <p className={`${item.theme === '#ffffff' ? 'text-black':'text-white'} p-3 max-w-full break-words rounded-lg`} style={{background:item.theme}}>
                  {item.message}
                </p>
                <p className="text-[11px]">
                  {item.seen != undefined ? item.seen? 'Seen':'Sent':''}
                </p>
              </span>
          </div>
          <div className="flex items-center justify-between bg-slate-600 p-3 h-[4rem] w-full rounded-b-lg">

              <div style={{background:item.theme}} className="rounded-full">
                <span className={`${item.theme === '#ffffff' ? 'text-black':'text-white'} text-xl`}>
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
                  <img src={emojiMap[item.emoji]} className="h-[2rem] w-[2rem]"/>
              </div>
          </div>
        </button>
    ))}
  </div>
  )
}

FreedomWall.propTypes = {
    search: PropTypes.string,
}

export default FreedomWall