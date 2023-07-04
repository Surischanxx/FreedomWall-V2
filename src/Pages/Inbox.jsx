import { Link } from "react-router-dom"
import Typewriter from "../Components/Typewriter"
import { HiOutlineBookOpen,HiOutlineChat,HiOutlineSearch,HiEmojiHappy } from 'react-icons/hi'
import { VscGistSecret } from 'react-icons/vsc'
import { BiChevronRight } from 'react-icons/bi'
import happy from '/src/assets/emojis/Smiling Face Emoji.png'
import sad from '/src/assets/emojis/Crying Sad Emoji.png'
import angry from '/src/assets/emojis/Very Angry Emoji.png'
import crying from '/src/assets/emojis/Loudly Crying Face Emoji.png'
import surprised from '/src/assets/emojis/Surprised Emoji [Free Download IOS Emojis].png'
import shy from '/src/assets/emojis/Shy Emoji [Free Download IOS Emojis].png'
import { useState } from "react"
import { Comments } from "../Data/Comments"

const Inbox = () => {
  const comments = Comments();

  const emojiMap = {
    happy:happy,
    sad:sad,
    angry:angry,
    crying:crying,
    surprised:surprised,
    shy:shy
  }

  const [search, setSearch] = useState('')

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
    <div>
      <div>
          <div className="text-center">
            <Typewriter/>
          </div>
          <div className="mt-5 py-5 flex flex-col items-center justify-center">
              <h1 className="text-3xl text-center w-2/3 font-semibold">
              Unleash OurSecrets – our school's online freedom wall. Share, connect, and express freely within our vibrant community.
              </h1>
              <div className="flex max-[447px]:flex-col flex-row gap-3 text-2xl mt-7">
                <Link to='/about' className="flex items-center py-2 px-3 border-solid border-2 border-[rgb(237,162,8)] rounded-lg text-[rgb(237,162,8)]">
                  <span>
                    <HiOutlineBookOpen/>
                  </span>
                  Learn more
                </Link>
                <Link to='/create' className="flex items-center bg-[rgb(237,162,8)]
                py-2 px-3 rounded-lg drop-shadow-md">
                  <span>
                    <HiOutlineChat/>
                  </span>
                  Post a Secret
                </Link>
              </div>
          </div>
          <div className="flex flex-col items-center mt-10">
              <p className="flex items-center text-xl gap-1 text-[rgb(237,162,8)]">
                <span><VscGistSecret/></span>
                <span>{comments.length}</span>
                Secret Messages Found
              </p>
              <div className="flex items-center mt-5 bg-white max-[566px]:w-2/3 w-1/2 rounded-full ps-3">
                <span className="text-xl text-black"><HiOutlineSearch/></span>
                <input type="text" onChange={(e)=>{setSearch(e.target.value)}} className="w-full rounded-r-full p-3 text-black outline-none" placeholder="Search for a name..."/>
              </div>
          </div>
      </div>
      <div className="flex flex-row-reverse items-center justify-center flex-wrap w-full gap-4 mt-10 p-3">
        {comments.filter((item)=>{
          if(search === ''){
            return item
          }else if(item.to.toLowerCase().includes(search.toLocaleLowerCase())){
            return item
          }
        }).map((item)=>(
          <div key={item._id} className="flex flex-col items-center bg-[rgb(38,55,72)] w-[15rem] min-h-[23rem] max-h-[23rem] rounded-lg drop-shadow-md select-none">
            
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
                  <span className="flex flex-col items-end justify-end h-[15rem] mt-[2rem]">
                    <p className={`${item.theme === '#ffffff' ? 'text-black':'text-white'} p-3 max-w-full break-words rounded-lg`} style={{background:item.theme}}>
                      {item.message}
                    </p>
                    <p className="text-[11px]">Sent</p>
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
            </div>
        ))}
      </div>
    </div>
  )
}

export default Inbox