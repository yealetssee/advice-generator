import { dice, dividerDesktop, dividerMobile } from "./assets";
import useAdvice from "./useAdvice";

function App() {
  const { advice, getAdvice } = useAdvice();
  const dividerSrc = window.innerWidth < 768 ? dividerMobile : dividerDesktop;
  console.log(dividerSrc);
  return (
    <main className="w-screen h-screen bg-darkBlue flex items-center justify-center px-4">
      <div className="w-[343px] md:w-[540px] h-auto bg-grayishBlue shadow-customShadow rounded-xl px-6 pt-10 pb-[71px] relative">
        <div className="w-full h-full flex  flex-col items-center gap-6  ">
          {advice && (
            <h4 className="text-neonGreen text-base  md:text-lg tracking-[2px] font-bold">
              Advice #{advice?.id}
            </h4>
          )}
          {advice && (
            <p className="text-center h-auto text-lightCyan text-2xl md:text-3xl font-bold">
              "{advice?.advice}"
            </p>
          )}

          <div>
            <img src={dividerSrc} alt="divider svg" />
          </div>
        </div>
        <div
          className="absolute bg-neonGreen w-14 h-14 rounded-full flex items-center justify-center -bottom-5 left-1/2 transform -translate-x-1/2 hover:shadow-hoverNeon cursor-pointer"
          onClick={getAdvice}
        >
          <img src={dice} alt="" />
        </div>
      </div>
    </main>
  );
}

export default App;
