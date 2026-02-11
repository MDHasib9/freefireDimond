// src/pages/Cart.jsx
import { useCart } from '../context/CartContext';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';

export default function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    subtotal,
    totalDiscount,
    total,
  } = useCart();

  const navigate = useNavigate();

  // Payment form state
  const [paymentMethod, setPaymentMethod] = useState('bKash');
  const [senderPhone, setSenderPhone] = useState('');
  const [transactionId, setTransactionId] = useState('');

  const bKashNumber = '01312 345678';
  const nagadNumber = '01911 234567';

  // Form validation
  const isFormValid =
    senderPhone.length === 11 &&
    /^01[3-9]\d{8}$/.test(senderPhone) &&
    transactionId.trim().length >= 8;

  const handleCompleteOrder = () => {
    if (!isFormValid) {
      alert('Please fill all payment details correctly.');
      return;
    }

    if (cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    // Success
    alert(
      `✅ Order placed successfully!\n` +
      `Payment Method: ${paymentMethod.toUpperCase()}\n` +
      `Transaction ID: ${transactionId}\n\n` +
      `Thank you for shopping at Free Fire Store!`
    );

    clearCart();
    navigate('/success');
  };

  return (
    <div className="container mx-auto px-4 py-12 ">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-20  border border-gray-100  rounded-2xl">
          <div className="mx-auto w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center mb-6">
            🛒
          </div>
          <p className="text-lg text-gray-200 mb-8">Your shopping cart is empty</p>
          <Link
            to="/diamonds"
            className="inline-block bg-primary bg-[#7851A9] text-white hover: text-primary-foreground px-10 py-3.5 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
          >
            Browse Diamonds &amp; More
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-10">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
              {cartItems.map((item) => {
                const discountedUnitPrice =
                  item.discount > 0
                    ? (item.price * (1 - item.discount / 100)).toFixed(2)
                    : item.price.toFixed(2);

                const itemTotal = (
                  parseFloat(discountedUnitPrice) * item.quantity
                ).toFixed(2);

               
                  // ---------------------



return (
  <div
    key={item.id}
    className="flex flex-col sm:flex-row gap-6 p-5 sm:p-6 border-b border-gray-200 last:border-0 bg-white hover:bg-gray-50 transition"
  >
    {/* Image */}
    <div className="w-full sm:w-28 h-40 sm:h-28 flex-shrink-0 overflow-hidden rounded-2xl border">
      <img
        src={item.image}
        alt={item.name}
        className="h-full w-full object-cover"
      />
    </div>

    {/* Middle Section */}
    <div className="flex-1 flex flex-col justify-between">
      {/* Title */}
      <h3 className="font-semibold text-base sm:text-lg text-gray-900 line-clamp-2">
        {item.name}
      </h3>

      {/* Price */}
      <div className="flex flex-wrap items-center gap-3 mt-3">
        {item.discount > 0 ? (
          <>
            <span className="text-xl sm:text-2xl font-bold text-gray-900">
              ${discountedUnitPrice}
            </span>
            <span className="text-sm sm:text-base text-gray-400 line-through">
              ${item.price.toFixed(2)}
            </span>
            <span className="text-xs bg-red-600 text-white px-2 py-1 rounded-full font-semibold">
              -{item.discount}%
            </span>
          </>
        ) : (
          <span className="text-xl sm:text-2xl font-bold text-gray-900">
            ${item.price.toFixed(2)}
          </span>
        )}
      </div>

      {/* Mobile Bottom Section */}
      <div className="flex items-center justify-between mt-4 sm:hidden">
        {/* Quantity */}
        <div className="border border-gray-300 rounded-xl flex items-center overflow-hidden">
          <button
            onClick={() => decreaseQuantity(item.id)}
            className="w-9 h-9 flex items-center justify-center text-lg text-gray-600 hover:bg-gray-100"
          >
            −
          </button>
          <div className="w-10 text-center font-semibold text-base border-x border-gray-300">
            {item.quantity}
          </div>
          <button
            onClick={() => increaseQuantity(item.id)}
            className="w-9 h-9 flex items-center justify-center text-lg text-gray-600 hover:bg-gray-100"
          >
            +
          </button>
        </div>

        {/* Total */}
        <div className="text-right">
          <div className="font-semibold text-lg text-gray-900">
            ${itemTotal}
          </div>
          <div className="text-xs text-gray-500">
            {item.quantity} × ${discountedUnitPrice}
          </div>
        </div>
      </div>
    </div>

    {/* Desktop Right Section */}
    <div className="hidden sm:flex flex-col items-end justify-between">
      {/* Quantity */}
      <div className="border border-gray-300 rounded-xl flex items-center overflow-hidden">
        <button
          onClick={() => decreaseQuantity(item.id)}
          className="w-10 h-10 flex items-center justify-center text-xl text-gray-600 hover:bg-gray-100"
        >
          −
        </button>
        <div className="w-12 text-center font-semibold text-lg border-x border-gray-300">
          {item.quantity}
        </div>
        <button
          onClick={() => increaseQuantity(item.id)}
          className="w-10 h-10 flex items-center justify-center text-xl text-gray-600 hover:bg-gray-100"
        >
          +
        </button>
      </div>

      {/* Total */}
      <div className="text-right mt-4">
        <div className="font-semibold text-xl text-gray-900">
          ${itemTotal}
        </div>
        <div className="text-xs text-gray-500">
          {item.quantity} × ${discountedUnitPrice}
        </div>
      </div>

      {/* Remove */}
      <button
        onClick={() => removeFromCart(item.id)}
        className="text-sm font-medium text-gray-500 hover:text-red-600 transition mt-4"
      >
        Remove
      </button>
    </div>
  </div>
);


















      //  --------------------------------------------- 

              })}
            </div>
          </div>

          {/* Order Summary + Payment Form */}
          <div className="lg:col-span-1  ">
            <div className="bg-white border border-gray-200 rounded-3xl p-8 sticky top-8">
              <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>

              <div className="space-y-5   ">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-medium">${subtotal}</span>
                </div>

                {totalDiscount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>You save</span>
                    <span className="font-medium">-${totalDiscount}</span>
                  </div>
                )}

                <div className="pt-5 border-t border-gray-200 flex justify-between items-end text-3xl font-bold text-gray-900">
                  <span>Total</span>
                  <span>${total}</span>
                </div>
              </div>

              {/* Manual Payment Form */}
              <div className="mt-10 border-t border-gray-200 pt-8">
                <h3 className="text-lg font-semibold mb-6 text-gray-800">
                  Complete Payment
                </h3>

                <div className="space-y-6">
                  {/* Payment Method */}
                  <div className='' >
                    <p className="text-sm font-medium text-gray-700 mb-3">
                      Choose Payment Method
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('bKash')}
                        className={`flex items-center gap-3 border-2 rounded-2xl p-4 transition-all ${
                          paymentMethod === 'bKash'
                            ? 'border-green-600 bg-green-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <span className="text-4xl"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_-MTKeBKVsB2RoYcbrm3OCwVSK_8Ux0bOzg&s" alt="" /></span>
                        <div className="text-left">
                          <div className="font-semibold">bKash</div>
                          <div className="text-xs text-gray-500">Mobile Banking</div>
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod('nagad')}
                        className={`flex items-center gap-3 border-2 rounded-2xl p-4 transition-all ${
                          paymentMethod === 'nagad'
                            ? 'border-green-600 bg-green-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <span className="text-4xl">  <img src="https://freelogopng.com/images/all_img/1679248787Nagad-Logo.png" alt="" /> </span>
                        <div className="text-left">
                          <div className="font-semibold">Nagad</div>
                          <div className="text-xs text-gray-500">Mobile Banking</div>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Send To */}
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
                    <div className="uppercase text-[10px] tracking-widest text-green-700 font-bold mb-1">
                      SEND MONEY TO
                    </div>
                    <div className="font-mono text-3xl font-bold text-green-800">
                      {paymentMethod === 'bKash' ? bKashNumber : nagadNumber}
                    </div>
                    <div className="text-green-600 text-sm mt-1">
                      {paymentMethod === 'bKash' ? 'bKash' : 'Nagad'} Personal Account
                    </div>
                  </div>

                  {/* Sender Phone */}
                  <div >
                    <label className="block text-sm font-medium  text-gray-700 mb-2">
                      Your Phone Number (Sender)
                    </label>
                    <input
                      type="tel"
                      value={senderPhone}
                      onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, '').slice(0, 11);
                        setSenderPhone(val);
                      }}
                      placeholder="013XXXXXXXX"
                      className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-primary text-lg font-medium"
                    />
                    <p className="text-xs text-gray-500 mt-1.5">11 digits starting with 01</p>
                  </div>

                  {/* Transaction ID */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Transaction ID / Reference
                    </label>
                    <input
                      type="text"
                      value={transactionId}
                      onChange={(e) => setTransactionId(e.target.value.toUpperCase().trim())}
                      placeholder="BK123456789012"
                      className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-primary text-lg font-medium uppercase tracking-widest"
                    />
                  </div>
                </div>
              </div>

              {/* Complete Order Button */}
              <button
                onClick={handleCompleteOrder}
                disabled={!isFormValid}
                className={`mt-10 w-full py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 transition-all ${
                  isFormValid
                    ? 'bg-green-600 hover:bg-green-700 text-white active:scale-95'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <span>✅ Complete Order</span>
                <span className="text-2xl font-bold">৳{total}</span>
              </button>

              <p className="text-center text-[10px] text-gray-400 mt-6">
                Demo store • No real payment processed
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}