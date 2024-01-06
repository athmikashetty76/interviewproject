import React, { useState } from 'react';

const MenuBar = () => {
 const languages = ['English', 'Spanish', 'French', 'German', 'Chinese'];
 const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
 const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'CNY'];
 const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
 const list=['Home',"Contact","ShopNow","BookMark"]
 const handleChange = (event) => {
    setSelectedLanguage(event.target.value);

 };
 const handleCurrency= (event) => {
    setSelectedCurrency(event.target.value);

 };
 return (
    <div className='flex justify-between bg-pink-500 p-4 text-white'>
        <div className='lists'>
            <ul className='list-none flex mr-4'>
            {
            list.map((v,i)=><li className='mr-4' key={i}>{v}</li>)
         }

            </ul>
        

        </div>
        <div className='slect-items '>
          <select className='bg-transparent' value={selectedLanguage} onChange={handleChange}>
        {languages.map((language) => (
          <option className="text-black"key={language} value={language}>
            {language.slice(0,2)}
          </option>
        ))}
         </select>
         <select className='bg-transparent' value={selectedCurrency} onChange={handleCurrency}>
      {
        currencies.map((currencies)=>(
        <option className='text-black' key={currencies} value={currencies}>
            {currencies}
        </option>
        ))
      }
        </select>
      </div>
    </div>
 );
};
export default MenuBar;
