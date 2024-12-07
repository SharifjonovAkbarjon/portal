import React from "react";
import { useParams } from "react-router-dom";

const NewsDetail = () => {
    const { id } = useParams();

    const newsData = {
        1: {
            title: "Messi Yangi Klubga O'tdi",
            content:
                "Lionel Messi, Parij Saint-Germain klubidan keyin yangi klubga o'tdi va yangi muvaffaqiyatlarga erishishga tayyor.",
        },
        2: {
            title: "Cristiano Ronaldo Boshqa Ligaga O'tdi",
            content:
                "Cristiano Ronaldo Saudiyaga ko'chib o'tdi va yangi jamoada o'zining ta'sirini ko'rsatmoqda.",
        },
    };

    const selectedNews = newsData[id];

    if (!selectedNews) {
        return <div>Yangilik topilmadi</div>;
    }

    return (
        <div className="container mx-auto py-16">
            <h1 className="text-3xl font-bold text-gray-800">{selectedNews.title}</h1>
            <p className="text-lg text-gray-600 mt-4">{selectedNews.content}</p>
        </div>
    );
};

export default NewsDetail;
