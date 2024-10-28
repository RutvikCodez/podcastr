import React from "react";

const page = ({ params }: { params: { podcastId: string } }) => {
  return <div className="text-white-1">{params.podcastId}</div>;
};

export default page;
