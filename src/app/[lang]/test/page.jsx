"use client";

import { getDictionary } from "@/utils/getDictionary";
import { useParams } from "next/navigation";
const test = async () => {
  const { lang } = useParams();

  const dict = await getDictionary(lang);
  return (
    <div>
      {dict.text.welcome}
      <h1> test</h1>
      <p>This is a test page.</p>
    </div>
  );
};

export default test;
