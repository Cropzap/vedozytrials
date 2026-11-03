import React, { useState } from "react";

export default function RFQCreatePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [rfqData, setRfqData] = useState({
    title: "",
    reference: `RFQ-${new Date().getFullYear()}-${Math.floor(Math.random() * 100000)}`,
    category: "",
    purchaseType: "one-time",
    quoteDeadline: "",
    currency: "INR",
    visibility: "invite",
    items: [],
    delivery: {
      location: "",
      requiredBy: "",
      preference: "standard",
      freightResponsibility: "include",
      incoterm: "",
      partialDelivery: false,
      packaging: "",
    },
    commercial: {
      paymentTerms: [],
      quoteValidity: "30",
      warranty: "12",
      taxTreatment: true,
      pricingFormat: ["unit", "total", "freight", "tax"],
      notes: "",
    },
    suppliers: {
      mode: "recommended",
      selected: [],
      filters: {
        location: "",
        verifiedOnly: true,
        type: [],
        minYears: 0,
        certifications: [],
        minRating: 0,
        responseTime: "",
        capacity: "",
      },
    },
  });

  const [newItem, setNewItem] = useState({
    productName: "",
    specification: "",
    quantity: "",
    unit: "units",
    targetPrice: "",
  });

  const updateField = (section, field, value) => {
    setRfqData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const addItem = () => {
    if (!newItem.productName || !newItem.quantity) return;
    setRfqData((prev) => ({
      ...prev,
      items: [...prev.items, { ...newItem, id: Date.now() }],
    }));
    setNewItem({
      productName: "",
      specification: "",
      quantity: "",
      unit: "units",
      targetPrice: "",
    });
  };

  const removeItem = (index) => {
    setRfqData((prev) => ({
      ...prev,
      items: prev.items.filter((_, i) => i !== index),
    }));
  };

  const handleSaveDraft = () => {
    console.log("Saving draft:", rfqData);
    alert("Draft saved! (Connect to your API)");
  };

  const handlePublish = () => {
    console.log("Publishing RFQ:", rfqData);
    alert("RFQ published! (Connect to your API)");
  };

  const totalQty = rfqData.items.reduce(
    (sum, item) => sum + (parseFloat(item.quantity) || 0),
    0
  );

  const steps = ["Product details", "Delivery & terms", "Supplier preferences", "Review"];

  return (
    <div style={styles.page}>
      {/* Header */}
      <header style={styles.header}>
        <nav style={styles.breadcrumb}>
          <span>Marketplace</span> / <span>RFQs</span> / <strong>Create RFQ</strong>
        </nav>
        <h1 style={styles.title}>Create RFQ</h1>
        <p style={styles.subtitle}>
          Get quotes from relevant suppliers based on your requirements.
        </p>
      </header>

      {/* Progress */}
      <div style={styles.progress}>
        {steps.map((label, idx) => (
          <div
            key={label}
            style={{
              ...styles.step,
              ...(idx + 1 === currentStep ? styles.stepActive : {}),
              ...(idx + 1 < currentStep ? styles.stepCompleted : {}),
            }}
          >
            <span style={styles.stepNumber}>{idx + 1}</span>
            <span style={styles.stepLabel}>{label}</span>
          </div>
        ))}
      </div>

      {/* Main Layout */}
      <div style={styles.layout}>
        <main style={styles.form}>
          {/* Step 1: Product Details */}
          {currentStep === 1 && (
            <>
              <section style={styles.section}>
                <h2>RFQ Basics</h2>
                <div style={styles.grid}>
                  <label style={styles.label}>
                    RFQ Title
                    <input
                      type="text"
                      style={styles.input}
                      value={rfqData.title}
                      onChange={(e) =>
                        setRfqData((prev) => ({ ...prev, title: e.target.value }))
                      }
                      placeholder="e.g., Industrial Safety Gloves — Bulk Purchase"
                    />
                  </label>

                  <label style={styles.label}>
                    RFQ Reference
                    <input
                      type="text"
                      style={styles.input}
                      value={rfqData.reference}
                      onChange={(e) =>
                        setRfqData((prev) => ({ ...prev, reference: e.target.value }))
                      }
                    />
                  </label>

                  <label style={styles.label}>
                    Category
                    <select
                      style={styles.input}
                      value={rfqData.category}
                      onChange={(e) =>
                        setRfqData((prev) => ({ ...prev, category: e.target.value }))
                      }
                    >
                      <option value="">Select category</option>
                      <option value="safety">Safety & PPE</option>
                      <option value="electronics">Electronics</option>
                      <option value="machinery">Machinery</option>
                    </select>
                  </label>

                  <label style={styles.label}>
                    Purchase Type
                    <select
                      style={styles.input}
                      value={rfqData.purchaseType}
                      onChange={(e) =>
                        setRfqData((prev) => ({ ...prev, purchaseType: e.target.value }))
                      }
                    >
                      <option value="one-time">One-time</option>
                      <option value="recurring">Recurring</option>
                      <option value="trial">Trial order</option>
                    </select>
                  </label>

                  <label style={styles.label}>
                    Quote Deadline
                    <input
                      type="datetime-local"
                      style={styles.input}
                      value={rfqData.quoteDeadline}
                      onChange={(e) =>
                        setRfqData((prev) => ({ ...prev, quoteDeadline: e.target.value }))
                      }
                    />
                  </label>

                  <label style={styles.label}>
                    Currency
                    <select
                      style={styles.input}
                      value={rfqData.currency}
                      onChange={(e) =>
                        setRfqData((prev) => ({ ...prev, currency: e.target.value }))
                      }
                    >
                      <option value="INR">INR</option>
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                    </select>
                  </label>
                </div>
              </section>

              <section style={styles.section}>
                <h2>Requested Items</h2>

                {rfqData.items.length > 0 && (
                  <table style={styles.table}>
                    <thead>
                      <tr>
                        <th style={styles.th}>Product</th>
                        <th style={styles.th}>Specification</th>
                        <th style={styles.th}>Qty</th>
                        <th style={styles.th}>Unit</th>
                        <th style={styles.th}>Target Price</th>
                        <th style={styles.th}>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rfqData.items.map((item, idx) => (
                        <tr key={item.id}>
                          <td style={styles.td}>{item.productName}</td>
                          <td style={styles.td}>{item.specification}</td>
                          <td style={styles.td}>{item.quantity}</td>
                          <td style={styles.td}>{item.unit}</td>
                          <td style={styles.td}>{item.targetPrice || "—"}</td>
                          <td style={styles.td}>
                            <button
                              style={styles.btnSmall}
                              onClick={() => removeItem(idx)}
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}

                <div style={styles.addItemForm}>
                  <input
                    type="text"
                    style={styles.input}
                    placeholder="Product name"
                    value={newItem.productName}
                    onChange={(e) =>
                      setNewItem((prev) => ({ ...prev, productName: e.target.value }))
                    }
                  />
                  <input
                    type="text"
                    style={styles.input}
                    placeholder="Specification"
                    value={newItem.specification}
                    onChange={(e) =>
                      setNewItem((prev) => ({ ...prev, specification: e.target.value }))
                    }
                  />
                  <input
                    type="number"
                    style={styles.input}
                    placeholder="Quantity"
                    value={newItem.quantity}
                    onChange={(e) =>
                      setNewItem((prev) => ({ ...prev, quantity: e.target.value }))
                    }
                  />
                  <select
                    style={styles.input}
                    value={newItem.unit}
                    onChange={(e) =>
                      setNewItem((prev) => ({ ...prev, unit: e.target.value }))
                    }
                  >
                    <option value="units">Units</option>
                    <option value="pairs">Pairs</option>
                    <option value="kg">Kg</option>
                    <option value="meters">Meters</option>
                  </select>
                  <input
                    type="text"
                    style={styles.input}
                    placeholder="Target price (optional)"
                    value={newItem.targetPrice}
                    onChange={(e) =>
                      setNewItem((prev) => ({ ...prev, targetPrice: e.target.value }))
                    }
                  />
                  <button style={styles.btnPrimary} onClick={addItem}>
                    + Add Item
                  </button>
                </div>
              </section>
            </>
          )}

          {/* Step 2: Delivery & Terms */}
          {currentStep === 2 && (
            <section style={styles.section}>
              <h2>Delivery & Commercial Terms</h2>
              <div style={styles.grid}>
                <label style={styles.label}>
                  Delivery Location
                  <input
                    type="text"
                    style={styles.input}
                    value={rfqData.delivery.location}
                    onChange={(e) =>
                      setRfqData((prev) => ({
                        ...prev,
                        delivery: { ...prev.delivery, location: e.target.value },
                      }))
                    }
                    placeholder="City, State, Country"
                  />
                </label>

                <label style={styles.label}>
                  Required By
                  <input
                    type="date"
                    style={styles.input}
                    value={rfqData.delivery.requiredBy}
                    onChange={(e) =>
                      setRfqData((prev) => ({
                        ...prev,
                        delivery: { ...prev.delivery, requiredBy: e.target.value },
                      }))
                    }
                  />
                </label>

                <label style={styles.label}>
                  Incoterm
                  <select
                    style={styles.input}
                    value={rfqData.delivery.incoterm}
                    onChange={(e) =>
                      setRfqData((prev) => ({
                        ...prev,
                        delivery: { ...prev.delivery, incoterm: e.target.value },
                      }))
                    }
                  >
                    <option value="">Select Incoterm</option>
                    <option value="EXW">EXW</option>
                    <option value="FOB">FOB</option>
                    <option value="CIF">CIF</option>
                    <option value="DDP">DDP</option>
                  </select>
                </label>

                <label style={styles.label}>
                  Quote Validity (days)
                  <select
                    style={styles.input}
                    value={rfqData.commercial.quoteValidity}
                    onChange={(e) =>
                      setRfqData((prev) => ({
                        ...prev,
                        commercial: { ...prev.commercial, quoteValidity: e.target.value },
                      }))
                    }
                  >
                    <option value="15">15</option>
                    <option value="30">30</option>
                    <option value="60">60</option>
                  </select>
                </label>

                <label style={styles.label}>
                  Warranty (months)
                  <input
                    type="number"
                    style={styles.input}
                    value={rfqData.commercial.warranty}
                    onChange={(e) =>
                      setRfqData((prev) => ({
                        ...prev,
                        commercial: { ...prev.commercial, warranty: e.target.value },
                      }))
                    }
                  />
                </label>

                <label style={styles.label}>
                  Notes for Suppliers
                  <textarea
                    style={{ ...styles.input, minHeight: "80px" }}
                    value={rfqData.commercial.notes}
                    onChange={(e) =>
                      setRfqData((prev) => ({
                        ...prev,
                        commercial: { ...prev.commercial, notes: e.target.value },
                      }))
                    }
                    placeholder="Additional instructions..."
                  />
                </label>
              </div>
            </section>
          )}

          {/* Step 3: Supplier Preferences */}
          {currentStep === 3 && (
            <section style={styles.section}>
              <h2>Supplier Preferences</h2>

              <div style={styles.radioGroup}>
                <label style={styles.radioLabel}>
                  <input
                    type="radio"
                    name="mode"
                    checked={rfqData.suppliers.mode === "recommended"}
                    onChange={() =>
                      setRfqData((prev) => ({
                        ...prev,
                        suppliers: { ...prev.suppliers, mode: "recommended" },
                      }))
                    }
                  />
                  Recommended suppliers
                </label>
                <label style={styles.radioLabel}>
                  <input
                    type="radio"
                    name="mode"
                    checked={rfqData.suppliers.mode === "invite"}
                    onChange={() =>
                      setRfqData((prev) => ({
                        ...prev,
                        suppliers: { ...prev.suppliers, mode: "invite" },
                      }))
                    }
                  />
                  Invite selected suppliers
                </label>
                <label style={styles.radioLabel}>
                  <input
                    type="radio"
                    name="mode"
                    checked={rfqData.suppliers.mode === "open"}
                    onChange={() =>
                      setRfqData((prev) => ({
                        ...prev,
                        suppliers: { ...prev.suppliers, mode: "open" },
                      }))
                    }
                  />
                  Open RFQ
                </label>
              </div>

              <div style={styles.grid}>
                <label style={styles.label}>
                  Minimum Supplier Rating
                  <input
                    type="number"
                    style={styles.input}
                    min="0"
                    max="5"
                    step="0.1"
                    value={rfqData.suppliers.filters.minRating}
                    onChange={(e) =>
                      setRfqData((prev) => ({
                        ...prev,
                        suppliers: {
                          ...prev.suppliers,
                          filters: { ...prev.suppliers.filters, minRating: parseFloat(e.target.value) },
                        },
                      }))
                    }
                  />
                </label>

                <label style={styles.label}>
                  Verified Suppliers Only
                  <input
                    type="checkbox"
                    checked={rfqData.suppliers.filters.verifiedOnly}
                    onChange={(e) =>
                      setRfqData((prev) => ({
                        ...prev,
                        suppliers: {
                          ...prev.suppliers,
                          filters: { ...prev.suppliers.filters, verifiedOnly: e.target.checked },
                        },
                      }))
                    }
                  />
                </label>
              </div>
            </section>
          )}

          {/* Step 4: Review */}
          {currentStep === 4 && (
            <section style={styles.section}>
              <h2>Review RFQ</h2>

              <div style={styles.reviewCard}>
                <h3>{rfqData.title || "Untitled RFQ"}</h3>
                <p><strong>Reference:</strong> {rfqData.reference}</p>
                <p><strong>Items:</strong> {rfqData.items.length}</p>
                <p><strong>Delivery:</strong> {rfqData.delivery.location || "Not set"}</p>
                <p><strong>Deadline:</strong> {rfqData.quoteDeadline || "Not set"}</p>
              </div>

              <div style={styles.checkboxGroup}>
                <label style={styles.checkboxLabel}>
                  <input type="checkbox" />
                  I confirm that the specifications and quantities are accurate.
                </label>
                <label style={styles.checkboxLabel}>
                  <input type="checkbox" />
                  I agree not to share supplier quotations outside this marketplace.
                </label>
              </div>
            </section>
          )}
        </main>

        {/* Sidebar */}
        <aside style={styles.sidebar}>
          <h3 style={styles.sidebarTitle}>RFQ Summary</h3>
          <p><strong>ID:</strong> {rfqData.reference}</p>
          <p><strong>Status:</strong> Draft</p>
          <p><strong>Items:</strong> {rfqData.items.length}</p>
          <p><strong>Estimated quantity:</strong> {totalQty}</p>
          <p><strong>Delivery:</strong> {rfqData.delivery.location || "Not set"}</p>
          <p><strong>Deadline:</strong> {rfqData.quoteDeadline || "Not set"}</p>
        </aside>
      </div>

      {/* Footer Actions */}
      <div style={styles.footer}>
        <button
          style={styles.btnSecondary}
          onClick={handleSaveDraft}
          disabled={currentStep === 1}
        >
          Save as draft
        </button>

        {currentStep < 4 ? (
          <button
            style={styles.btnPrimary}
            onClick={() => setCurrentStep((prev) => prev + 1)}
          >
            Continue
          </button>
        ) : (
          <button style={styles.btnPrimary} onClick={handlePublish}>
            Publish RFQ
          </button>
        )}
      </div>
    </div>
  );
}

// Inline styles for quick setup
const styles = {
  page: {
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "24px",
    backgroundColor: "#f9fafb",
    minHeight: "100vh",
  },
  header: {
    marginBottom: "24px",
  },
  breadcrumb: {
    fontSize: "14px",
    color: "#6b7280",
    marginBottom: "8px",
  },
  title: {
    fontSize: "28px",
    fontWeight: "700",
    margin: "0 0 8px 0",
    color: "#111827",
  },
  subtitle: {
    fontSize: "16px",
    color: "#6b7280",
    margin: 0,
  },
  progress: {
    display: "flex",
    gap: "16px",
    marginBottom: "32px",
    flexWrap: "wrap",
  },
  step: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "8px 16px",
    borderRadius: "8px",
    backgroundColor: "#e5e7eb",
    color: "#6b7280",
  },
  stepActive: {
    backgroundColor: "#3b82f6",
    color: "#ffffff",
  },
  stepCompleted: {
    backgroundColor: "#10b981",
    color: "#ffffff",
  },
  stepNumber: {
    fontWeight: "700",
  },
  stepLabel: {
    fontSize: "14px",
  },
  layout: {
    display: "grid",
    gridTemplateColumns: "1fr 320px",
    gap: "24px",
  },
  form: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    padding: "24px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
  },
  section: {
    marginBottom: "32px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "16px",
  },
  label: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    fontSize: "14px",
    fontWeight: "500",
    color: "#374151",
  },
  input: {
    padding: "10px 12px",
    borderRadius: "6px",
    border: "1px solid #d1d5db",
    fontSize: "14px",
    outline: "none",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "16px",
  },
  th: {
    textAlign: "left",
    padding: "12px",
    borderBottom: "2px solid #e5e7eb",
    fontSize: "13px",
    fontWeight: "600",
    color: "#6b7280",
  },
  td: {
    padding: "12px",
    borderBottom: "1px solid #e5e7eb",
    fontSize: "14px",
    color: "#374151",
  },
  addItemForm: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "12px",
    alignItems: "end",
  },
  btnPrimary: {
    padding: "10px 20px",
    backgroundColor: "#3b82f6",
    color: "#ffffff",
    border: "none",
    borderRadius: "6px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
  },
  btnSecondary: {
    padding: "10px 20px",
    backgroundColor: "#ffffff",
    color: "#374151",
    border: "1px solid #d1d5db",
    borderRadius: "6px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
  },
  btnSmall: {
    padding: "6px 12px",
    backgroundColor: "#ef4444",
    color: "#ffffff",
    border: "none",
    borderRadius: "4px",
    fontSize: "12px",
    cursor: "pointer",
  },
  sidebar: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    padding: "24px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    position: "sticky",
    top: "24px",
  },
  sidebarTitle: {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "16px",
    color: "#111827",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "24px",
    gap: "16px",
  },
  radioGroup: {
    display: "flex",
    gap: "24px",
    marginBottom: "24px",
    flexWrap: "wrap",
  },
  radioLabel: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "14px",
    color: "#374151",
  },
  checkboxGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    marginTop: "24px",
  },
  checkboxLabel: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "14px",
    color: "#374151",
  },
  reviewCard: {
    backgroundColor: "#f3f4f6",
    padding: "20px",
    borderRadius: "8px",
  },
};