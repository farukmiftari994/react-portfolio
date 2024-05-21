const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Experience</h1>
      <div className="mb-8 flex flex-wrap lg:justify-center">
        <div className="w-full lg:w-1/4">
          <p className="mb-2 text-sm text-neutral-400">May 2019 - Aug 2021</p>
        </div>
        <div className="w-full max-w-xl lg:w-1/4">
          <h6 className="mb-2 font-semibold text-sky-400">
            Math Teacher -{" "}
            <span className="text-sm text-white">
              High School - “Marija Kiri Skllodovska”
            </span>
          </h6>
          <p>Skopje, North Macedonia</p>
        </div>
      </div>
      <div className="mb-8 flex flex-wrap lg:justify-center">
        <div className="w-full lg:w-1/4">
          <p className="mb-2 text-sm text-neutral-400">Oct 2017 - Jan 2019</p>
        </div>
        <div className="w-full max-w-xl lg:w-1/4">
          <h6 className="mb-2 font-semibold text-sky-400">
            Sales Assistant -{" "}
            <span className="text-sm text-white">LC WAIKIKI</span>
          </h6>
          <h6 className="mb-2 font-semibold text-sky-400">
            Warehouse Assistant -{" "}
            <span className="text-sm text-white">LC WAIKIKI</span>
          </h6>
          <p>Skopje, North Macedonia</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
