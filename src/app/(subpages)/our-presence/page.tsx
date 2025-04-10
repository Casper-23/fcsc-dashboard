import FullScreenCover from '@/components/FullScreenCover';
import React from 'react';
import cover from "@/assets/our-presence/Copy of Untitled (1).png"
import Locations from '@/components/Locations';
const page = () => {
    return (
        <div >
            <FullScreenCover
                src={cover}
                alt="cover-image"
                className="h-[60vh] md:h-[75vh]"
                heading={"Our Presence"}
            />
            <Locations />
        </div>
    );
}

export default page;
