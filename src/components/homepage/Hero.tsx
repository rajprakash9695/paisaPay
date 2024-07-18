export default function Hero() {
  return (
    <div className=" pt-32 curve">
      <div className="max-w-screen-xl  mx-auto  px-4  text-white   ">
        <div className="flex justify-between items-center gap-10 my-32 flex-col md:flex-row">
          <div className="max-w-xl ">
            <p className="text-6xl md:text-8xl font-bold">PaisaPay</p>
            <div className="my-8 text-md">
              <p className="mb-2">
                <span className="font-medium text-lg border-gradient-bottom pb-0.5">
                  The Best
                </span>{' '}
                crypto smart-contract to make better future.
              </p>
              <p>
                Start building your smart contract with{' '}
                <span className="font-medium text-lg border-gradient-bottom pb-0.5">
                  CRYPTODO
                </span>
              </p>
            </div>
            <button className="custombtn px-4 py-2 rounded-full font-medium">
              Create a contract
            </button>
          </div>
          <div className="hidden md:block">
            <img src="/homepage/home-mobile.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
