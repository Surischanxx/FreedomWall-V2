import axios from 'axios';
import { useEffect, useState } from 'react';

const Typewriter = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const env = import.meta.env;
        const url = env.VITE_REACT_SERVER_URL;

        const { data } = await axios.get(`${url}/api/comments`);
        setComments(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchComments();
  }, []);

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTypingOut, setIsTypingOut] = useState(false);

  useEffect(() => {
    if (!comments.length) {
      return; // Return if comments array is empty
    }

    const currentMessage = comments[currentMessageIndex]?.message || '';

    const type = () => {
      if (!isTypingOut) {
        if (currentCharIndex < currentMessage.length) {
          setCurrentCharIndex((prevIndex) => prevIndex + 1);
        } else {
          setIsTypingOut(true);
        }
      } else {
        if (currentCharIndex > 0) {
          setCurrentCharIndex((prevIndex) => prevIndex - 1);
        } else {
          setIsTypingOut(false);
          setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % comments.length);
        }
      }
    };

    const intervalId = setInterval(type, 110);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentCharIndex, currentMessageIndex, comments, isTypingOut]);

  if (!comments.length) {
    return null; // Return null or a loading indicator if comments array is empty
  }

  const currentMessage = comments[currentMessageIndex]?.message || '';

  return (
    <div className="typewriter-page break-words max-h-40 overflow-auto p-3">
      <div className="typewriter text-5xl font-bold text-[rgb(246,176,35)]">
        {`${currentMessage.substring(0, currentCharIndex)}|`}
      </div>
    </div>
  );
};

export default Typewriter;
