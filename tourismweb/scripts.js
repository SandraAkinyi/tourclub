let basePrice = 0;

function openBookingForm(siteName, price) {
    basePrice = price;
    document.getElementById('site-name').value = siteName;
    document.getElementById('price').value = `$${price}`;
    document.getElementById('days').value = 1;
    document.getElementById('persons').value = 1;
    document.getElementById('total-price').value = `$${price}`;
    document.getElementById('booking-form').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closeBookingForm() {
    document.getElementById('booking-form').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function updateTotalPrice() {
    const persons = document.getElementById('persons').value;
    const days = document.getElementById('days').value;
    const totalPrice = basePrice * persons * days;
    document.getElementById('total-price').value = `$${totalPrice}`;
}
