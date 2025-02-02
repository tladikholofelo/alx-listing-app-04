const CancellationPolicy = () => {
  return (
    <div className="bg-white p-6 shadow-md rounded-xl">
      <h2 className="text-xl font-semibold mb-4">Cancellation Policy</h2>
      <p className="text-gray-600 mb-6">
        Free cancellation before Aug 23. Cancel before check-in on Aug 24 for a 50% refund. 
        No refund after check-in.
      </p>

      <h2 className="text-xl font-semibold mb-4">Ground Rules</h2>
      <ul className="list-disc list-inside text-gray-600 space-y-2">
        <li>Follow the house rules</li>
        <li>Treat the Host's home with respect</li>
        <li>No smoking</li>
        <li>No parties or events</li>
        <li>Check-in time is 3 PM - 8 PM</li>
      </ul>
    </div>
  );
};

export default CancellationPolicy;