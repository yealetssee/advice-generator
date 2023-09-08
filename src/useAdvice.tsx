import axios from "axios";
import { useEffect, useState } from "react";

type adviceType = {
  id: string;
  advice: string;
};

const useAdvice = () => {
  const [advice, setAdvice] = useState<adviceType>();
  // console.log(advice);

  const getAdvice = async () => {
    try {
      const response = await axios("https://api.adviceslip.com/advice");

      setAdvice({
        id: response.data.slip.id,
        advice: response.data.slip.advice,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return { advice, getAdvice };
};

export default useAdvice;
