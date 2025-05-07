import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const countryData = [
  { region: "APAC", country: "Australia", supplier: "Direct", currency: "USD", paymentTerms: "60 Days" },
  { region: "Europe", country: "Austria", supplier: "Direct", currency: "Euro", paymentTerms: "60 Days" },
  { region: "Europe", country: "Belgium", supplier: "Direct", currency: "Euro", paymentTerms: "60 Days" },
  { region: "Latin America (LAM)", country: "Brazil", supplier: "Direct", currency: "USD", paymentTerms: "60 Days" },
  { region: "Europe", country: "Bulgaria", supplier: "Direct", currency: "Euro", paymentTerms: "60 Days" },
  { region: "North America (NAM)", country: "Canada", supplier: "Direct", currency: "USD", paymentTerms: "60 Days" },
  { region: "Europe", country: "Denmark", supplier: "Direct", currency: "Euro", paymentTerms: "60 Days" },
  { region: "Africa", country: "Egypt", supplier: "Direct", currency: "USD", paymentTerms: "60 Days" },
  { region: "Europe", country: "Estonia", supplier: "Direct", currency: "Euro", paymentTerms: "60 Days" },
  { region: "Europe", country: "Finland", supplier: "Direct", currency: "Euro", paymentTerms: "60 Days" },
  { region: "Europe", country: "France", supplier: "Direct", currency: "Euro", paymentTerms: "60 Days" },
  { region: "Europe", country: "Germany", supplier: "Direct", currency: "Euro", paymentTerms: "60 Days" },
  { region: "Europe", country: "Greece", supplier: "Direct", currency: "Euro", paymentTerms: "60 Days" },
  { region: "Europe", country: "Hungary", supplier: "Direct", currency: "Euro", paymentTerms: "60 Days" },
  { region: "APAC", country: "India", supplier: "Direct", currency: "USD", paymentTerms: "60 Days" },
  { region: "Europe", country: "Italy", supplier: "Direct", currency: "Euro", paymentTerms: "60 Days" },
  { region: "APAC", country: "Japan", supplier: "Direct", currency: "USD", paymentTerms: "60 Days" },
  { region: "Europe", country: "Latvia", supplier: "Direct", currency: "Euro", paymentTerms: "60 Days" },
  { region: "Europe", country: "Lithuania", supplier: "Direct", currency: "Euro", paymentTerms: "60 Days" },
  { region: "Europe", country: "Luxembourg", supplier: "Direct", currency: "Euro", paymentTerms: "60 Days" }
];

const ProductListPage = () => {
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [selectedSupplier, setSelectedSupplier] = useState('All');
  const [selectedCurrency, setSelectedCurrency] = useState('All');
  const [selectedPaymentTerms, setSelectedPaymentTerms] = useState('All');

  const regions = ['All', 'APAC', 'Europe', 'Latin America (LAM)', 'North America (NAM)', 'Africa'];
  const countries = ['All', ...new Set(countryData.map(item => item.country))];
  const suppliers = ['All', 'Direct'];
  const currencies = ['All', 'USD', 'Euro'];
  const paymentTerms = ['All', '60 Days'];

  const filteredProducts = countryData.filter(product => {
    const matchesRegion = selectedRegion === 'All' || product.region === selectedRegion;
    const matchesCountry = selectedCountry === 'All' || product.country === selectedCountry;
    const matchesSupplier = selectedSupplier === 'All' || product.supplier === selectedSupplier;
    const matchesCurrency = selectedCurrency === 'All' || product.currency === selectedCurrency;
    const matchesPaymentTerms = selectedPaymentTerms === 'All' || product.paymentTerms === selectedPaymentTerms;
    return matchesRegion && matchesCountry && matchesSupplier && matchesCurrency && matchesPaymentTerms;
  });

  return (
    <div className="secondary px-4 py-10 sm:px-6 lg:px-8 justify-center font-bold" id="ProductListPage">
      <motion.div
         initial={{opacity:0 , x:-100}}
         transition={{duration:1.5}}
         whileInView={{opacity:1,x:0}}
         viewport={{once:true}}
      >
          <h1 className="text-3xl font-bold text-black mb-6 text-center">All Services and Products</h1>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">

              <select
                value={selectedRegion}
                onChange={e => setSelectedRegion(e.target.value)}
                className="w-full sm:w-1/5 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {regions.map(region => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>

              <select
                value={selectedCountry}
                onChange={e => setSelectedCountry(e.target.value)}
                className="w-full sm:w-1/5 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {countries.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>

              <select
                value={selectedSupplier}
                onChange={e => setSelectedSupplier(e.target.value)}
                className="w-full sm:w-1/5 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {suppliers.map(supplier => (
                  <option key={supplier} value={supplier}>{supplier}</option>
                ))}
              </select>

              <select
                value={selectedCurrency}
                onChange={e => setSelectedCurrency(e.target.value)}
                className="w-full sm:w-1/5 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {currencies.map(currency => (
                  <option key={currency} value={currency}>{currency}</option>
                ))}
              </select>

              <select
                value={selectedPaymentTerms}
                onChange={e => setSelectedPaymentTerms(e.target.value)}
                className="w-full sm:w-1/5 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {paymentTerms.map(term => (
                  <option key={term} value={term}>{term}</option>
                ))}
              </select>
            </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Region</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Country</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Supplier</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Currency</th>
                  <th className="py-3 px-4 text-center text-sm font-semibold text-gray-700">PaymentTerms</th>
                  <th className="py-3 px-4 text-center text-sm font-semibold text-gray-700">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product, index) => (
                    <tr key={index} className="border-t hover:bg-gray-50">
                      <td className="py-3 px-4 text-sm text-gray-800">{product.region}</td>
                      <td className="py-3 px-4 text-sm text-gray-800">{product.country}</td>
                      <td className="py-3 px-4 text-sm text-gray-800">{product.supplier}</td>
                      <td className="py-3 px-4 text-sm text-gray-800">{product.currency}</td>
                      <td className="py-3 px-4 text-sm text-gray-800">{product.paymentTerms}</td>
                      <td className="py-3 px-4 text-center">
                        <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                          Add to Quote
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center py-6 text-gray-500">
                      No products found for your filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </motion.div>
    </div>
  );
};

export default ProductListPage;
