import React, { useState } from 'react';

const Skidka = () => {
    const products = [
        "Apple",
        "Banana",
        "Orange",
        "Mango",
        "Pineapple",
        "Grapes",
        "Apricot",
        "Cucumber",
        "Potato",
        "Tomato",
    ];

    // Qidiruv so'rovini saqlash uchun state
    const [searchTerm, setSearchTerm] = useState("");

    // Filtrlangan mahsulotlar ro'yxati
    const filteredProducts = products.filter((product) =>
        product.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className=' bg-[rgb(250,251,253)]'>
                <div className='flex'>
                    <div className='w-[150px] h-[80px] p-[25px]'>
                        <p className='text-[rgb(39,37,37)] font-semibold cursor-pointer hover:rounded-[6px] hover:bg-[rgb(39,37,37)] hover:text-white'>
                            Наборы
                        </p>
                    </div>
                </div>
                <div>
                    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
                        <h2>Mahsulotlarni qidirish</h2> 
                        <input type="text" placeholder="Mahsulot nomini kiriting..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                            style={{
                                width: "100%",
                                padding: "10px",
                                marginBottom: "10px",
                                borderRadius: "4px",
                                border: "1px solid #ccc",
                            }}
                        />
                        <ul>
                            {filteredProducts.length > 0 ? (
                                filteredProducts.map((product, index) => (
                                    <li key={index} style={{ margin: "5px 0" }}>
                                        {product}
                                    </li>
                                ))
                            ) : (
                                <p>Hech nima topilmadi</p>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </>     
    );
};

export default Skidka;
