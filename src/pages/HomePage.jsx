import { useLayoutEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CardLink, SearchBar, Navbar, Catalogue, Banner, Categories, Stories, CustomButton, ControlPanel, Loader } from '../components';
import { discount20, discount50, chatsIcon, cartIcon, profileIcon, likeIcon, addIcon, sellerIcon, creditCardIcon, settingsIcon } from '../assets';
import { becomeSeller, getUserInfo } from '../utils';
import { ru, uz } from '../constants';

const HomePage = () => {
  const [language, setLanguage] = useState(ru);
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useLayoutEffect(() => {
    const currentUrl = window.location.href;
    const user_id = currentUrl.split('=')[1];

    if (sessionStorage.getItem('user')) {
      getUserInfo(JSON.parse(sessionStorage.getItem('user')).user_id)
        .then((data) => {
          sessionStorage.setItem('user', JSON.stringify(data));
          setUserInfo(data);
          setLanguage(data.lang_code.toLowerCase() === 'ru' ? ru : uz);
        })
        .finally(() => setLoading(false));
    } else {
      getUserInfo(user_id)
        .then((data) => {
          sessionStorage.setItem('user', JSON.stringify(data));
          setUserInfo(data);
          setLanguage(data.lang_code.toLowerCase() === 'ru' ? ru : uz);
        })
        .finally(() => setLoading(false));
    }
  }, []);

  const handleBecomeSeller = () => {
    const { user_id: id } = userInfo;

    becomeSeller(id).then(({ user_id }) => {
      getUserInfo(user_id).then((newUserInfo) => {
        sessionStorage.setItem('user', JSON.stringify(newUserInfo));
        setUserInfo(newUserInfo);
      });
    });
  };

  return (
    <div className="bg-white w-full flex flex-col justify-start items-center gap-6">
      {!loading && <Navbar userInfo={userInfo} language={language} />}
      <SearchBar language={language} />
      <Stories />
      {!loading ? (
        userInfo.phone_number ? (
          userInfo.is_seller ? (
            <CustomButton styles="w-full text-[14px] text-white bg-[var(--color-green)] flex justify-center items-center gap-2 rounded-xl p-3">
              <img src={creditCardIcon} alt="credit card icon" width={14} height={14} />
              Запросить кредитную историю
            </CustomButton>
          ) : (
            <CustomButton
              styles="w-full text-[14px] text-white bg-[var(--color-green)] flex justify-center items-center gap-2 rounded-xl p-3"
              onClick={handleBecomeSeller}
            >
              <img src={sellerIcon} alt="seller icon" width={14} height={14} />
              {language['Become-a-seller']}
            </CustomButton>
          )
        ) : (
          <div className="w-full flex flex-col justify-center items-center gap-2">
            <Link to="/register" className="w-full flex justify-center">
              <CustomButton styles="w-full self-center text-white p-3 bg-[var(--color-green)]">Зарегистрироваться</CustomButton>
            </Link>
            <Link to="/register" className="w-full flex justify-center">
              <CustomButton
                styles="w-full text-[14px] text-white bg-[var(--color-green)] flex justify-center items-center gap-2 rounded-xl p-3"
                onClick={handleBecomeSeller}
              >
                <img src={sellerIcon} alt="seller icon" width={14} height={14} />
                {language['Become-a-seller']}
              </CustomButton>
            </Link>
          </div>
        )
      ) : null}
      <div className="w-full flex flex-col justify-center items-center gap-4 bg-[var(--color-gray)] p-4 rounded-2xl text-sm">
        <h2 className="text-base">{language['Discounted products']}</h2>
        <div className="flex justify-between items-center gap-4">
          <CardLink title={language['50%-discount']} color="blue-green-gradient" height="140px" image={discount50} />
          <CardLink title={language['New-Years-discounts']} color="orange-pink-purple-gradient" height="140px" image={discount20} />
        </div>
        <CardLink
          title={language['Goods-in-stock']}
          color="bg-[var(--color-light-gray)]"
          textColor="black"
          height="40px"
          nextBtn={true}
          invert={false}
          justifyCenter={true}
        />
      </div>

      <div className="w-full flex justify-between">
        {loading ? (
          <div className="w-full flex justify-center">
            <Loader />
          </div>
        ) : (
          userInfo.phone_number && (
            <>
              <div className="w-full flex flex-col justify-start items-center gap-4">
                <CardLink icon={cartIcon} title={language['Want-to-buy']} color="orange-red-gradient" nextBtn={true} />

                <CardLink icon={chatsIcon} title={language.Chats} color="blue-gradient" nextBtn={true} />

                {userInfo?.is_seller && (
                  <CardLink
                    icon={addIcon}
                    title={language['Add-product']}
                    fontSize="11px"
                    color="green-gradient"
                    nextBtn={true}
                    onClick={() => navigate('/products/new')}
                  />
                )}
              </div>
              <div className="w-full flex flex-col justify-start items-center gap-4">
                <CardLink icon={profileIcon} title={language.Profile} color="blue-gradient" nextBtn={true} />

                <CardLink icon={likeIcon} iconStyles="invert" title={language.Favorites} color="green-gradient" nextBtn={true} />

                {userInfo.is_seller && <ControlPanel language={language} />}
              </div>
            </>
          )
        )}
      </div>
      <CardLink
        title="Настройки"
        color="bg-[var(--color-light-gray)]"
        textColor="black"
        height="40px"
        nextBtn={true}
        invert={false}
        justifyCenter={true}
        width="95%"
        icon={settingsIcon}
      />

      <div className="w-full flex flex-col">
        <Banner image="https://t3.ftcdn.net/jpg/04/87/16/16/360_F_487161671_VrCEimVcrhtWjq7btJwhslxFVIPt7pyx.jpg" />
      </div>
      <Categories language={language} />

      <Catalogue language={language} />
    </div>
  );
};

export default HomePage;
