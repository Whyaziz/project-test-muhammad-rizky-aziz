"use client";
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBFlEJE7a3_vxMFWeC-5-7lW4NSQl9-ipE",
  authDomain: "project-test-5bccc.firebaseapp.com",
  projectId: "project-test-5bccc",
  storageBucket: "project-test-5bccc.appspot.com",
  messagingSenderId: "525399919004",
  appId: "1:525399919004:web:ddd70018a9ad25e4e8a059",
  measurementId: "G-HXLGWCH0N1",
};

export default function Hero() {
  const [backgroundUrl, setBackgroundUrl] = useState("");

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const storage = getStorage(app);
    const gsReference = ref(storage, "bg_hero_suit.png");

    getDownloadURL(gsReference)
      .then((url) => {
        setBackgroundUrl(url);
      })
      .catch((error) => {
        console.error("Error getting background image URL: ", error);
      });
  }, []);

  const backgroundImage = {
    backgroundImage: `url('${backgroundUrl}')`,
    backgroundSize: "cover",
    backgroundPosition: "top",
  };

  return (
    <div
      style={backgroundImage}
      className="flex w-full flex-col min-h-screen items-center justify-center p-4 md:p-6 xl:p-8 bg-fixed"
    >
      <h1 className="text-white text-xl md:text-4xl xl:text-5xl text-center">
        Ideas
      </h1>
      <p className="text-white text-base md:text-lg xl:text-xl text-center">
        Where all our great things begin
      </p>
    </div>
  );
}
