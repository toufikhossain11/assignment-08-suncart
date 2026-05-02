
import { Card, Link } from "@heroui/react";
import React from 'react';
import Marquee from "react-fast-marquee";

const SummarTips = () => {
    return (
        <Marquee pauseOnHover={true}>
                <div className="grid px-0 grid-cols-3 gap-4">

            <Card className="w-[400px] border border-orange-100 shadow-md animate__slideInRight">
                <Card.Header>
                    <Card.Title className="font-bold text-xl hover:text-orange-500 text-slate-900 py-2">☀️ Stay Hydrated</Card.Title>
                    <Card.Description className="text-[15px]">
                        Drink plenty of water throughout the day to keep your body cool, refreshed, and energized during hot summer weather.
                    </Card.Description>
                </Card.Header>
            </Card>
            <Card className="w-[400px] border border-orange-100 shadow-md ">
                <Card.Header>
                    <Card.Title className="font-bold text-xl hover:text-orange-500 text-slate-900 py-2">🧴 Protect Your Skin</Card.Title>
                    <Card.Description className="text-[15px]">
                        Apply sunscreen with SPF 30+ before going outside to protect your skin from harmful UV rays and sunburn.
                    </Card.Description>
                </Card.Header>
            </Card>
            <Card className="w-[400px] border border-orange-100 shadow-md ">
                <Card.Header>
                    <Card.Title className="font-bold text-xl hover:text-orange-500 text-slate-900 py-2">👕 Choose Light Clothing</Card.Title>
                    <Card.Description className="text-[15px]">
                        Wear breathable cotton or lightweight fabrics that help your body stay cool and comfortable all day.
                    </Card.Description>
                </Card.Header>
            </Card>
        </div>
            </Marquee>
    );
};

export default SummarTips;
