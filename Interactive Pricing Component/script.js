const pricingComponents = document.querySelectorAll('.pricing-component');

pricingComponents.forEach(component => {
  const priceElement = component.querySelector('.price');
  const btnElement = component.querySelector('.btn');

  btnElement.addEventListener('click', () => {
    const currentPrice = parseFloat(priceElement.textContent.replace('$', '').replace('/month', ''));
    const newPrice = currentPrice * 0.9; // apply 10% discount

    priceElement.textContent = `$${newPrice.toFixed(2)}/month`;
  });
});
