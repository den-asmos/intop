import React from 'react';

const LegalEntity = ({ fields, handleFieldsChange }) => {
  return (
    <div className="w-[98%]">
      <p className="mt-2 mb-10 text-[var(--color-dark-gray)] text-[10px] text-center">Введите ваш номер телефона</p>

      <div className="w-full">
        <label htmlFor="phone number" className="mb-2 w-full text-[10px] self-start">
          Номер телефона
        </label>
        <input
          id="phone number"
          type="number"
          className="w-full shadow-sm shadow-[var(--color-shadow)] rounded-lg p-3 focus:outline-none"
          value={fields.phone}
          onChange={handleFieldsChange}
          placeholder="+ 123 44 5566 789"
          required={true}
          data-name="phone"
        />
      </div>
    </div>
  );
};

export default LegalEntity;
