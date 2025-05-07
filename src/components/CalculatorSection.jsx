import React, { useState } from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import {motion} from "framer-motion"

const mockServices = [
  { id: 1, name: 'Cloud Hosting', category: 'Cloud', unitPrice: 100 },
  { id: 2, name: 'Firewall Setup', category: 'Security', unitPrice: 200 },
  { id: 3, name: 'VPN Configuration', category: 'Networking', unitPrice: 150 },
];

const CalculatorSection = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [quoteItems, setQuoteItems] = useState([]);

  const handleAddToQuote = () => {
    if (!selectedService || quantity <= 0) return;

    const item = {
      ...selectedService,
      quantity,
      total: selectedService.unitPrice * quantity,
    };

    setQuoteItems([...quoteItems, item]);
    setSelectedService(null);
    setQuantity(1);
  };

  const handleExport = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Service Quote', 14, 20);

    const tableData = quoteItems.map((item, index) => [
      index + 1,
      item.name,
      item.quantity,
      `$${item.unitPrice}`,
      `$${item.total}`,
    ]);

    autoTable(doc, {
      head: [['#', 'Service', 'Qty', 'Unit Price', 'Total']],
      body: tableData,
      startY: 30,
    });

    const total = quoteItems.reduce((sum, item) => sum + item.total, 0);
    doc.text(`Grand Total: $${total}`, 14, doc.lastAutoTable.finalY + 10);

    doc.save('Service_Quote.pdf');
  };

  return (
    <section className="primary py-16 px-4 sm:px-6 lg:px-8" id='CalculatorSection'>
      <motion.div
        initial={{opacity:0 , x:100}}
        transition={{duration:1.5}}
        whileInView={{opacity:1,x:0}}
        viewport={{once:true}}
      className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-6 text-center">Service Price Calculator</h2>

        <div className="bg-white rounded-xl shadow p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Select Service</label>
              <select
                value={selectedService?.id || ''}
                onChange={(e) => {
                  const service = mockServices.find(s => s.id === parseInt(e.target.value));
                  setSelectedService(service);
                }}
                className="w-full border-gray-300 rounded-lg shadow-sm"
              >
                <option value="" className='bg-blue-300 border-spacing-2'> Choose a Service </option>
                {mockServices.map(service => (
                  <option key={service.id} value={service.id}>
                    {service.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Quantity</label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="w-full border-gray-300 rounded-lg shadow-sm"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Total Price</label>
              <div className="h-12 flex items-center px-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 font-semibold">
                {selectedService ? `$${selectedService.unitPrice * quantity}` : '$0'}
              </div>
            </div>
          </div>

          <button
            onClick={handleAddToQuote}
            className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700"
          >
            ➕ Add to Quote
          </button>
        </div>

        {quoteItems.length > 0 && (
          <div className="mt-10 bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Quote Summary</h3>
            <ul className="divide-y divide-gray-200">
              {quoteItems.map((item, index) => (
                <li key={index} className="py-4 flex justify-between">
                  <span>{item.name} x {item.quantity}</span>
                  <span className="font-semibold">${item.total}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${quoteItems.reduce((sum, item) => sum + item.total, 0)}</span>
            </div>

            <button
              onClick={handleExport}
              className="mt-6 w-full md:w-auto px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              📄 Export Quote as PDF
            </button>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default CalculatorSection;
