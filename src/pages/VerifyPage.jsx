import { useEffect, useState, useRef, createRef } from 'react';
import { CustomButton, ArrowButton, Welcome } from '../components';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getCode, verifyCode } from '../utils';

const VerifyPage = () => {
  const { phone } = useParams();
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([...Array(6)].map(() => createRef()));
  const [phoneNumber, setPhoneNumber] = useState('');
  const [success, setSuccess] = useState(false);
  const [wrongCode, setWrongCode] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    getCode(`${phone}`).then((codeData) => setPhoneNumber(codeData.phone_number));
  }, [phone]);

  const handleCodeInput = (index, event) => {
    const inputValue = event.target.value;

    if (/^\d*$/.test(inputValue) && inputValue.length <= 1) {
      const newCode = [...code];
      newCode[index] = inputValue;
      setCode(newCode);

      if (index < 5 && inputValue.length === 1) {
        inputRefs.current[index + 1].current.focus();
      }
    }
  };

  const handleSumbmit = () => {
    const data = {
      user_id: JSON.parse(sessionStorage.getItem('user')).user_id,
      code: code.join(''),
      phone_number: phoneNumber,
    };

    verifyCode(data)
      .then(() => {
        setSuccess(true);
        setTimeout(() => {
          navigate('/');
        }, 1500);
      })
      .catch(() => {
        setWrongCode(true);
        setTimeout(() => {
          setWrongCode(false);
        }, 1500);
      });
  };

  return (
    <div className="bg-white w-full flex flex-col justify-start items-center">
      {success && <Welcome />}
      <div className="w-full flex justify-center">
        <Link to="/register">
          <ArrowButton styles="absolute top-6 left-2 border-none rotate-180 shadow-none" />
        </Link>
        <h2 className="text-[24px] font-light self-center">Регистрация</h2>
      </div>

      <div className="w-[98%]">
        <p className="mt-2 mb-10 text-[var(--color-dark-gray)] text-[10px] text-center">Введите проверочный код</p>
        <div className="w-full ">
          <label htmlFor="code" className="mb-2 w-full text-[10px] self-start">
            Код
          </label>

          <div className="w-full flex justify-between items-center gap-2">
            {code.map((digit, index) => (
              <input
                id="code"
                key={index}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(event) => handleCodeInput(index, event)}
                className="w-10 text-center shadow-sm shadow-[var(--color-shadow)] rounded-lg p-3 focus:outline-[var(--color-light)] text-[16px] text-[var(--color-dark-gray)]"
                ref={inputRefs.current[index]}
                required={true}
              />
            ))}
          </div>

          {wrongCode && <p className="w-full font-light text-[11px] text-[var(--color-dark-gray)]">Неверный код</p>}
        </div>
      </div>

      <CustomButton disabled={!code} onClick={handleSumbmit} styles="mt-10 p-3 w-[80%] bg-[var(--color-green)] text-white text-[14px] rounded-xl">
        Отправить
      </CustomButton>
    </div>
  );
};

export default VerifyPage;
