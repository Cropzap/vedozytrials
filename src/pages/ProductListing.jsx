import React, { useState } from 'react';
import { Package, ShieldCheck, DollarSign, Store, Tag, CheckCircle2 } from 'lucide-react';

export default function ProductListing() {
  const [formData, setFormData] = useState({
    productName: '',
    brandName: '',
    category: '',
    subCategory: '',
    sku: '',
    description: '',
    basePrice: '',
    stockQuantity: '',
    minOrderQtyB2B: '10',
    targetChannels: { b2b: true, b2c: true },
    specifications: [{ key: '', value: '' }]
  });

  const B2B_FEE_PCT = 0.07;
  const B2C_FEE_PCT = 0.30;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleChannelToggle = (channel) => {
    setFormData((prev) => ({
      ...prev,
      targetChannels: {
        ...prev.targetChannels,
        [channel]: !prev.targetChannels[channel]
      }
    }));
  };

  const handleSpecChange = (index, field, value) => {
    const updatedSpecs = [...formData.specifications];
    updatedSpecs[index][field] = value;
    setFormData((prev) => ({ ...prev, specifications: updatedSpecs }));
  };

  const addSpecField = () => {
    setFormData((prev) => ({
      ...prev,
      specifications: [...prev.specifications, { key: '', value: '' }]
    }));
  };

  const base = parseFloat(formData.basePrice) || 0;
  const b2bFee = base * B2B_FEE_PCT;
  const b2bPayout = base - b2bFee;

  const b2cFee = base * B2C_FEE_PCT;
  const b2cPayout = base - b2cFee;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Product Data:', formData);
    alert('Product listed successfully!');
  };

  return (
    <div className="min-h-screen bg-slate-50 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
        <div className="bg-slate-900 text-white p-6">
          <div className="flex items-center space-x-3">
            <Store className="h-8 w-8 text-indigo-400" />
            <div>
              <h1 className="text-2xl font-bold">Unified Seller Product Listing</h1>
              <p className="text-sm text-slate-400">List once to sell across B2B enterprise & B2C retail channels</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-8">
          <div>
            <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-indigo-600" /> 1. Channel Visibility
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className={`border-2 rounded-lg p-4 cursor-pointer flex items-start justify-between transition-all ${formData.targetChannels.b2b ? 'border-indigo-600 bg-indigo-50/30' : 'border-slate-200'}`}>
                <div>
                  <div className="font-semibold text-slate-900">B2B Wholesale Channel</div>
                  <p className="text-xs text-slate-500 mt-1">Bulk buyers, required MOQs, lower platform fee (7%)</p>
                </div>
                <input
                  type="checkbox"
                  checked={formData.targetChannels.b2b}
                  onChange={() => handleChannelToggle('b2b')}
                  className="h-5 w-5 text-indigo-600 rounded focus:ring-indigo-500 mt-1"
                />
              </label>

              <label className={`border-2 rounded-lg p-4 cursor-pointer flex items-start justify-between transition-all ${formData.targetChannels.b2c ? 'border-indigo-600 bg-indigo-50/30' : 'border-slate-200'}`}>
                <div>
                  <div className="font-semibold text-slate-900">B2C Retail Marketplace</div>
                  <p className="text-xs text-slate-500 mt-1">Direct consumer reach, single unit orders (30% fee)</p>
                </div>
                <input
                  type="checkbox"
                  checked={formData.targetChannels.b2c}
                  onChange={() => handleChannelToggle('b2c')}
                  className="h-5 w-5 text-indigo-600 rounded focus:ring-indigo-500 mt-1"
                />
              </label>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
              <Tag className="h-5 w-5 text-indigo-600" /> 2. Core Product Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Product Name *</label>
                <input
                  type="text"
                  name="productName"
                  required
                  value={formData.productName}
                  onChange={handleChange}
                  placeholder="e.g. Premium Organic Fertilizer"
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Brand Name *</label>
                <input
                  type="text"
                  name="brandName"
                  required
                  value={formData.brandName}
                  onChange={handleChange}
                  placeholder="e.g. AgriTech Solutions"
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Category *</label>
                <select
                  name="category"
                  required
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">Select Category</option>
                  <option value="agriculture">Agriculture & Produce</option>
                  <option value="electronics">Electronics</option>
                  <option value="furniture">Furniture</option>
                  <option value="apparel">Apparel</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Sub-Category *</label>
                <input
                  type="text"
                  name="subCategory"
                  required
                  value={formData.subCategory}
                  onChange={handleChange}
                  placeholder="e.g. Soil Care"
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">SKU / Model Number</label>
                <input
                  type="text"
                  name="sku"
                  value={formData.sku}
                  onChange={handleChange}
                  placeholder="AGR-SKU-001"
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Total Available Inventory *</label>
                <input
                  type="number"
                  name="stockQuantity"
                  required
                  value={formData.stockQuantity}
                  onChange={handleChange}
                  placeholder="500"
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-slate-700 mb-1">Product Description</label>
              <textarea
                name="description"
                rows={3}
                value={formData.description}
                onChange={handleChange}
                placeholder="Provide detailed specifications, ingredients, or application instructions..."
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-indigo-600" /> 3. Pricing & Margin Breakdown
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Base Product Price (₹)</label>
                <input
                  type="number"
                  name="basePrice"
                  required
                  value={formData.basePrice}
                  onChange={handleChange}
                  placeholder="1000"
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {formData.targetChannels.b2b && (
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">B2B Minimum Order Quantity (MOQ)</label>
                  <input
                    type="number"
                    name="minOrderQtyB2B"
                    value={formData.minOrderQtyB2B}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {formData.targetChannels.b2b && (
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <div className="text-sm font-bold text-slate-700 mb-2">B2B Channel Economics</div>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between text-slate-600"><span>Listing Price:</span> <span>₹{base.toFixed(2)}</span></div>
                    <div className="flex justify-between text-amber-600"><span>Platform Fee (7%):</span> <span>- ₹{b2bFee.toFixed(2)}</span></div>
                    <div className="flex justify-between font-bold text-emerald-700 pt-2 border-t border-slate-200"><span>Est. Net Payout:</span> <span>₹{b2bPayout.toFixed(2)} / unit</span></div>
                  </div>
                </div>
              )}

              {formData.targetChannels.b2c && (
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <div className="text-sm font-bold text-slate-700 mb-2">B2C Channel Economics</div>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between text-slate-600"><span>Listing Price:</span> <span>₹{base.toFixed(2)}</span></div>
                    <div className="flex justify-between text-amber-600"><span>Platform Fee (30%):</span> <span>- ₹{b2cFee.toFixed(2)}</span></div>
                    <div className="flex justify-between font-bold text-emerald-700 pt-2 border-t border-slate-200"><span>Est. Net Payout:</span> <span>₹{b2cPayout.toFixed(2)} / unit</span></div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
              <Package className="h-5 w-5 text-indigo-600" /> 4. Technical Specifications
            </h2>
            {formData.specifications.map((spec, index) => (
              <div key={index} className="flex gap-4 mb-3">
                <input
                  type="text"
                  placeholder="Attribute (e.g. Weight / Material)"
                  value={spec.key}
                  onChange={(e) => handleSpecChange(index, 'key', e.target.value)}
                  className="w-1/2 px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="text"
                  placeholder="Value (e.g. 25 kg Bags)"
                  value={spec.value}
                  onChange={(e) => handleSpecChange(index, 'value', e.target.value)}
                  className="w-1/2 px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={addSpecField}
              className="text-sm font-medium text-indigo-600 hover:text-indigo-800"
            >
              + Add Attribute
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <CheckCircle2 className="h-5 w-5" /> Save and Publish Product
          </button>
        </form>
      </div>
    </div>
  );
}