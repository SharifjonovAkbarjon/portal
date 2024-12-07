import React from "react";
import { Link, useParams } from "react-router-dom";
import messi from '../../assets/messi.jpg';
import haaland from '../../assets/haaland.jpg'; 
import neymar from '../../assets/neymar.jpg'; 
import raphinha from '../../assets/raphinha.jpg'; 
import lewandowski from '../../assets/lewandowski.jpg'; 
import yamal from '../../assets/yamal.jpeg'; 
const NewsDetail = () => {
    const { id } = useParams();

    const newsData = {
        1: {
            Image: messi,
            title: "Messi Yangi Klubga O'tdi",
            content:
                "Lionel Messi, Parij Saint-Germain klubidan keyin yangi klubga o'tdi va yangi muvaffaqiyatlarga erishishga tayyor.",
        },
        2: {
            Image: haaland,
            title: "Haaland Premier Ligada Eng Yaxshi To'purar",
            content:
                "Erling Haaland Premier Ligada eng ko'p gol urgan futbolchiga aylandi. Uning o'yinlari butun dunyo bo'ylab mashhurlikka erishdi.",
        },
        3: {
            Image: neymar,
            title: "Neymar Xavfli Jarohat Oldi",
            content:
                "Braziliyalik futbolchi Neymar jarohat oldi va tez orada operatsiya qilinishi kerak. Bu jarohat uning joriy mavsumdagi kelajagini xavf ostiga qo'ydi.",
        },
        4: {
            Image: raphinha,
            title: "Raphinha Yangi Klubga O'tdi",
            content:
                "Braziliyalik futbolchi Raphinha Barcelona klubidan yangi jamoaga o'tdi va yangi boshlanish uchun tayyor.",
        },
        5: {
            Image: lewandowski,
            title: "Lewandowski Yevropa Ligasi G'olibi",
            content:
                "Robert Lewandowski, Barcelona hujumchisi, Yevropa Ligasi g'olibi bo'ldi va uning gollari jamoani g'alabaga olib keldi.",
        },
        6: {
            Image: yamal,
            title: "Yamal Yevropaning Eng Yaxshi Yosh Futbolchisi",
            content:
                "Gavi, Yamal nomi bilan tanilgan yosh futbolchi, Yevropaning eng yaxshi yosh futbolchisi sifatida tan olindi va kelajagi uchun katta umidlar mavjud.",
        },
    };

    const selectedNews = newsData[id];

    if (!selectedNews) {
        return (
            <div className="flex items-center flex-col p-[50px]">
                <p className="text-[32px] font-bold">Yangilik topilmadi</p>
                <button className="hover:text-blue-700 mt-[50px] p-[15px] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <Link to={"/"}>Asosiy sahifaga qaytish</Link>
                </button>
            </div>
        );
    }

    return (
        <div className="container mx-auto flex flex-col items-center gap-2 py-16">
            <img className="w-[500px] flex text-center" src={selectedNews.Image} alt="" />
            <h1 className="text-3xl font-bold text-gray-800">{selectedNews.title}</h1>
            <p className="text-lg text-gray-600 mt-4">{selectedNews.content}</p>
            <button className="hover:text-blue-700 p-[15px] mt-[100px] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <Link to={"/"}>Asosiy sahifaga qaytish</Link>
            </button>
        </div>
    );
};

export default NewsDetail;
