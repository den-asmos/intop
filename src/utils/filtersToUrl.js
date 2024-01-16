export const filtersToUrl = ([
  sortingOption,
  selectedCurrency,
  selectedTypeOfSale,
  selectedCondition,
  selectedSeller,
  productsNearby,
  bidding,
  priceFrom,
  priceTo,
]) => {
  const filtersStrings = [
    `${sortingOption ? (sortingOption === 'Сначала дешевле' ? 'is_ascending=true' : 'is_ascending=false') : ''}`,
    `${selectedCurrency && 'currency=' + selectedCurrency}`,
    `${
      selectedTypeOfSale
        ? selectedTypeOfSale === 'Розница'
          ? 'is_retail=true'
          : selectedTypeOfSale === 'Опт'
          ? 'is_wholesale=true'
          : 'is_installment=true'
        : ''
    }`,
    `${selectedCondition ? (selectedCondition === 'Новый' ? 'is_new=true' : 'is_new=false') : ''}`,
    `${selectedSeller ? (selectedSeller === 'Верифицированный' ? 'is_seller_verified=true' : 'is_seller_verified=false') : ''}`,
    `${productsNearby ? 'is_nearby=true' : 'is_nearby=false'}`,
    `${bidding ? 'is_negotiable=true' : 'is_negotiable=false'}`,
    `${priceFrom && 'price_min=' + priceFrom}`,
    `${priceTo && 'price_max=' + priceTo}`,
  ];

  const url = '?' + filtersStrings.filter((filter) => filter !== '').join('&');

  return url;
};
