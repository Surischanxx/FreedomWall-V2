import { Link, Outlet } from "react-router-dom"
import Typewriter from "../Components/Typewriter"
import { HiOutlineBookOpen,HiOutlineChat,HiOutlineSearch} from 'react-icons/hi'
import { VscGistSecret } from 'react-icons/vsc'
import { Comments } from "../Data/Comments"
import PropTypes from 'prop-types';

const Inbox = (props) => {
  const {comments} = Comments();


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
              <p className="flex items-center text-center justify-center text-xl gap-1 text-[rgb(237,162,8)] flex-wrap">
                <span><VscGistSecret/></span>
                <span>{comments.length}</span>
                Secret Messages Found
              </p>
              <div className="flex items-center mt-5 bg-white max-[566px]:w-2/3 w-1/2 rounded-full ps-3">
                <span className="text-xl text-black"><HiOutlineSearch/></span>
                <input type="text" onChange={(e)=>{props.setSearch(e.target.value)}} className="w-full rounded-r-full p-3 text-black outline-none" placeholder="Search for a name..."/>
              </div>
          </div>
      </div>
      <Outlet/>
    </div>
  )
}

Inbox.propTypes = {
  setSearch: PropTypes.func,
};
export default Inbox