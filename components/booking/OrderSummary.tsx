const OrderSummary: React.FC<{ bookingDetails: any }> = ({ bookingDetails }) => (
    <div className="bg-white p-6 shadow-md rounded-xl sticky top-6">
    <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
    
    <div className="flex items-start gap-4 mb-6">
        <img
        src="/assets/properties/villa.jpg"
        alt="Property"
        className="w-32 h-32 object-cover rounded-lg"
        />
        <div>
        <h3 className="text-lg font-semibold">{bookingDetails.propertyName}</h3>
        <p className="text-sm text-gray-600 mt-1">★ 4.76 (345 reviews)</p>
        <p className="text-sm text-gray-600 mt-2">
            {bookingDetails.startDate} • {bookingDetails.totalNights} nights
        </p>
        </div>
    </div>

    {/* Price Breakdown */}
    <div className="space-y-4 border-t pt-6">
        <div className="flex justify-between">
        <span className="text-gray-600">${bookingDetails.price} x {bookingDetails.totalNights} nights</span>
        <span>${bookingDetails.price * bookingDetails.totalNights}</span>
        </div>
        <div className="flex justify-between">
        <span className="text-gray-600">Booking fee</span>
        <span>${bookingDetails.bookingFee}</span>
        </div>
        
        <div className="flex justify-between font-semibold border-t pt-4">
        <span>Total</span>
        <span>
            $
            {(bookingDetails.price * bookingDetails.totalNights) +
            bookingDetails.bookingFee}
        </span>
        </div>
    </div>
    </div>
);

export default OrderSummary;