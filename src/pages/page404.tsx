export default function Page404() {
  return (
    <div>
      <div className="h-[100vh] w-full">
        <div className="border h-full flex justify-center items-center text-center">
          <div>
            <p className="text-9xl text-[#05055F] font-bold">404</p>
            <p className="text-3xl font-bold text-blue-800 my-3">
              Page Not Found
            </p>
            <div className="flex justify-center mt-8">
              <button>home</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
