export function Photo() {
  return (
    <div className="p-0 sm:p-1 md:p-2 lg:p-5 xl:p-6 2xl:p-8">
      <img
        src="./profile.png"
        alt="Profile logo"
        className="mb-1 w-50 h-auto rounded-full"
      />
    </div>
  );
}

export default Photo;
