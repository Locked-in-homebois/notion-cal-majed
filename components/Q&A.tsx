"use client";
import { PlusIcon } from "lucide-react";
import { useState } from "react";

const QA = () => {
    const [QA1isOpen, setQA1IsOpen] = useState(false);
    const handleQA1 = () => {
        setQA1IsOpen(!QA1isOpen);
    };
    const [QA2isOpen, setQA2IsOpen] = useState(false);
    const handleQA2 = () => {
        setQA2IsOpen(!QA2isOpen);
    };
    const [QA3isOpen, setQA3IsOpen] = useState(false);
    const handleQA3 = () => {
        setQA3IsOpen(!QA3isOpen);
    };
    return (
        <div className="grid grid-rows-3 grid-cols-1 h-fit w-[50%] mb-[155px] text-left items-center">
            <div className=" bg-white   text-black">
                <h1 className="text-2xl ">
                    Which calendar provider(s) is Notion Calendar compatible
                    with?
                </h1>
                <div>
                    <PlusIcon
                        text-black
                        onClick={handleQA1}
                        className="place-items-end justify-self-end"
                    />
                </div>
                <div
                    className={
                        QA1isOpen
                            ? " place-items-end items-center h-auto bg-white "
                            : "hidden"
                    }
                >
                    Currently, Notion Calendar integrates and syncs with Google
                    Calendar accounts and Apple iCloud-synced Calendars. Adding
                    support for other calendar providers such as Outlook is on
                    our roadmap.
                </div>
            </div>
            <div className=" bg-white border-t border-b py-[15px] border-gray-200  text-black">
                <h1 className="text-2xl">
                    Is Notion Calendar available on mobile devices?
                </h1>
                <div>
                    <PlusIcon
                        text-black
                        onClick={handleQA2}
                        className="place-items-end justify-self-end"
                    />
                </div>
                <div
                    className={
                        QA2isOpen
                            ? " place-items-end items-center h-auto bg-white "
                            : "hidden"
                    }
                >
                    Yes, Notion Calendar is available for iPhone and Android
                    devices. We know some users are looking for an optimized
                    version for tablet devices, such as iPad, and are working to
                    make Notion Calendar the best experience on all platforms.
                </div>
            </div>
            <div className=" bg-white border-t border-b py-[15px] border-gray-200  text-black">
                <h1 className="text-2xl ">
                    Does Notion Calendar bring Google Calendar sync to Notion?
                </h1>
                <div>
                    <PlusIcon
                        text-black
                        onClick={handleQA3}
                        className="place-items-end justify-self-end"
                    />
                </div>
                <div
                    className={
                        QA3isOpen
                            ? " place-items-end items-center h-auto bg-white "
                            : "hidden"
                    }
                >
                    Notion Calendar allows you to view your Notion database
                    items alongside your Google Calendar events. This offers a
                    streamlined way to see project timelines and task due dates
                    alongside other scheduled events. However, importing Google
                    Calendar events directly into a Notion database is not yet
                    possible. We’re always exploring new ways for Notion and
                    calendars to interact. Expect exciting developments soon!
                </div>
            </div>
        </div>
    );
};
export default QA;
