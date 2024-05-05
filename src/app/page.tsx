import React from "react";

const mainPage = () => {
  return (
    <div className="bg-neutral-dark-grey py-4 px-2 rounded-lg">
      <div className="flex flex-col justify-center">
        <img
          src="avatar-jessica.jpeg"
          alt="avatar"
          className="block mx-auto h-24 m-2 rounded-full "
        />
      </div>
      <div className="text-center m-4">
        <h1 className="text-3xl font-base text-neutral-white">
          Jessica Randall
        </h1>
        <h2 className="text-sm text-primary mt-2">London, United Kingdom</h2>
        <div>
          <p className="text-sm mt-4 text-neutral-white">
            &quot;Front-end developer and avid reader.&quot;
          </p>
        </div>
      </div>
      <div className="flex flex-col px-4 py-2">
        <div className="bg-neutral-grey rounded-lg p-3 text-center">
          <p className="text-sm text-neutral-white">GitHub</p>
        </div>
      </div>
      <div className="flex flex-col px-4 py-2">
        <div className="bg-neutral-grey rounded-lg p-3 text-center">
          <p className="text-sm text-neutral-white">Frontend Mentor</p>
        </div>
      </div>
      <div className="flex flex-col px-4 py-2">
        <div className="bg-neutral-grey rounded-lg p-3 text-center">
          <p className="text-sm text-neutral-white">LinkedIn</p>
        </div>
      </div>
      <div className="flex flex-col px-4 py-2">
        <div className="bg-neutral-grey rounded-lg p-3 text-center">
          <p className="text-sm text-neutral-white">Twitter</p>
        </div>
      </div>
      <div className="flex flex-col px-4 py-2">
        <div className="bg-neutral-grey rounded-lg p-3 text-center">
          <p className="text-sm text-neutral-white">Instagram</p>
        </div>
      </div>
    </div>
  );
};

export default mainPage;
