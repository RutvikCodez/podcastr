import React from "react";

const page = ({ params: { profileId } }: { params: { profileId: string } }) => {
  return <div className="text-xl">
    <h1 className="text-xl">{profileId}</h1>
  </div>;
};

export default page;
