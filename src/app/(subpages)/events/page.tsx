"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EventCard from "@/components/EventCard";
import eventData from "@/Data/events";
import Head from "next/head";

const Page = () => {


  return (
    <>
     <Head>
        <title>FCSC - Events, Webinars, and Industry Engagements</title>
        <meta
          name="description"
          content="Stay updated with FCSC's latest events, conferences, and webinars showcasing innovative specialty chemical solutions for the construction industry."
        />
      </Head>
    <main className="min-h-screen p-4 flex flex-col items-center bg-white">
      <div className="flex items-center w-full p-2 md:px-10">
        <span className="h-7 md:h-10 w-1 md:w-2 rounded-lg bg-custom-red" />
        <h3 className="text-lg md:text-3xl text-slate-700 font-medium ml-4">
          EVENTS
        </h3>
      </div>
      <div className="max-w-screen-lg py-10">
    
        <div className="flex flex-wrap justify-center gap-2">
          <AnimatePresence>
            {eventData.map((event, index) => (
                <motion.div
                  key={`${index}${event.category}${event.image}`}
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index}}
                >
                  <EventCard
                    src={event.image}
                    title={event.heading}
                    className="h-[18rem] aspect-square"
                  />
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </div>
    </main>
    </>
  );
};

export default Page;
