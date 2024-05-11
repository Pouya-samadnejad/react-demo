"use client";
import { useState } from "react";
import MainHeader from "@/components/MainHeader/MainHeader";
import New from "@/components/NewPost/New";
function page() {
  const [modalVisibilty, setModalVisibility] = useState(true);
  function showCreatPost() {
    setModalVisibility(true);
  }

  function modalVisibiltyHandler() {
    setModalVisibility(false);
  }

  return (
    <div>
      <MainHeader creatPost={showCreatPost} />
      <New isPosting={modalVisibilty} hidePost={modalVisibiltyHandler} />
    </div>
  );
}

export default page;
