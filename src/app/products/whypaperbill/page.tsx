"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Trash2,
  Plus,
  Minus,
  Receipt,
  ShoppingCart,
  Search,
  Database,
  Check,
  Share2,
  Printer,
  Loader2,
  Sparkles
} from "lucide-react";

// Types
interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image?: string;
  gstRate: number; // percentage
}

interface CartItem {
  product: Product;
  quantity: number;
}

interface Invoice {
  id: string;
  customerName: string;
  customerPhone: string;
  items: CartItem[];
  subtotal: number;
  gstTotal: number;
  grandTotal: number;
  timestamp: string;
  paymentMode: string;
  gstOption: boolean;
}

const PRODUCTS_DATA: Product[] = [
  { id: "1", name: "Masala Chai", category: "Beverages", price: 30, gstRate: 5 },
  { id: "2", name: "Cold Brew Coffee", category: "Beverages", price: 120, gstRate: 5 },
  { id: "3", name: "Café Latte", category: "Beverages", price: 90, gstRate: 5 },
  { id: "4", name: "Samosa (2 pcs)", category: "Snacks", price: 40, gstRate: 5 },
  { id: "5", name: "Paneer Tikka Roll", category: "Snacks", price: 150, gstRate: 5 },
  { id: "6", name: "Club Sandwich", category: "Snacks", price: 110, gstRate: 5 },
  { id: "7", name: "Chocolate Chip Cookie", category: "Bakery", price: 60, gstRate: 18 },
  { id: "8", name: "Blueberry Muffin", category: "Bakery", price: 80, gstRate: 18 },
  { id: "9", name: "Croissant", category: "Bakery", price: 95, gstRate: 18 },
  { id: "10", name: "Jeera Grains (500g)", category: "Grocery", price: 180, gstRate: 0 },
  { id: "11", name: "Premium Basmati Rice", category: "Grocery", price: 220, gstRate: 0 },
  { id: "12", name: "Assorted Spices Pack", category: "Grocery", price: 340, gstRate: 12 }
];

export default function WhypaperBillPOS() {
  // State
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [gstOption, setGstOption] = useState<boolean>(true);
  const [customerName, setCustomerName] = useState<string>("");
  const [customerPhone, setCustomerPhone] = useState<string>("");
  const [paymentMode, setPaymentMode] = useState<string>("UPI");
  
  // Checkout process states
  const [checkoutStep, setCheckoutStep] = useState<"idle" | "processing" | "receipt">("idle");
  const [loadingText, setLoadingText] = useState<string>("");
  const [currentInvoice, setCurrentInvoice] = useState<Invoice | null>(null);
  const [invoices, setInvoices] = useState<Invoice[]>([
    {
      id: "INV-2026-052901",
      customerName: "Rahul Sharma",
      customerPhone: "9876543210",
      items: [
        { product: PRODUCTS_DATA[0], quantity: 2 },
        { product: PRODUCTS_DATA[4], quantity: 1 }
      ],
      subtotal: 210,
      gstTotal: 10.5,
      grandTotal: 220.5,
      timestamp: "2026-05-29 18:42",
      paymentMode: "UPI",
      gstOption: true
    },
    {
      id: "INV-2026-052902",
      customerName: "Priya Patel",
      customerPhone: "9123456789",
      items: [
        { product: PRODUCTS_DATA[7], quantity: 3 },
        { product: PRODUCTS_DATA[1], quantity: 1 }
      ],
      subtotal: 270,
      gstTotal: 33.9,
      grandTotal: 303.9,
      timestamp: "2026-05-29 20:15",
      paymentMode: "Cash",
      gstOption: true
    }
  ]);
  const [showShareSuccess, setShowShareSuccess] = useState<boolean>(false);

  // Active register categories list
  const categories = ["All", "Beverages", "Snacks", "Bakery", "Grocery"];

  // Filtered products list
  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((p) => {
      const matchCategory = activeCategory === "All" || p.category === activeCategory;
      const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  // Cart operations
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.product.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return { ...item, quantity: newQty };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
    setCustomerName("");
    setCustomerPhone("");
  };

  // Calculations
  const subtotal = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }, [cart]);

  const gstTotal = useMemo(() => {
    if (!gstOption) return 0;
    return cart.reduce((sum, item) => {
      const itemGst = (item.product.price * item.product.gstRate) / 100;
      return sum + itemGst * item.quantity;
    }, 0);
  }, [cart, gstOption]);

  const grandTotal = useMemo(() => {
    return subtotal + gstTotal;
  }, [subtotal, gstTotal]);

  // Trigger Checkout Simulator
  const handleCheckout = () => {
    if (cart.length === 0) return;
    
    setCheckoutStep("processing");
    setLoadingText("Syncing offline-first database...");
    
    setTimeout(() => {
      setLoadingText("Auditing inventory stocks...");
      
      setTimeout(() => {
        setLoadingText("Constructing GST compliance data...");
        
        setTimeout(() => {
          // Generate simulated Invoice
          const now = new Date();
          const timestampStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")} ${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
          const newInvoice: Invoice = {
            id: `INV-${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}${String(now.getHours()).padStart(2, "0")}${String(now.getMinutes()).padStart(2, "0")}`,
            customerName: customerName || "Guest Customer",
            customerPhone: customerPhone || "Not Provided",
            items: [...cart],
            subtotal,
            gstTotal,
            grandTotal,
            timestamp: timestampStr,
            paymentMode,
            gstOption
          };

          setCurrentInvoice(newInvoice);
          setInvoices((prev) => [newInvoice, ...prev]);
          setCheckoutStep("receipt");
        }, 400);
      }, 400);
    }, 450);
  };

  // Mock Share Actions
  const handleShareWhatsApp = () => {
    setShowShareSuccess(true);
    setTimeout(() => setShowShareSuccess(false), 2000);
  };

  const handlePrint = () => {
    alert("Simulator Action: Thermal print instruction sent successfully via local network. Checkout completed in under 2 seconds.");
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh", color: "var(--text-primary)" }}>
      {/* Background glow fx */}
      <div className="glow-blur-1"></div>

      <div className="container" style={{ padding: "2rem 1rem 5rem 1rem" }}>
        {/* Navigation Head */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
          <Link href="/products" className="btn btn-secondary" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <ArrowLeft size={16} /> Back to Products
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span className="live-indicator">
              <span className="pulse-dot"></span> Active Session
            </span>
            <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginLeft: "0.5rem" }}>
              Offline-First Mode
            </span>
          </div>
        </div>

        {/* Title */}
        <div style={{ marginBottom: "3rem" }}>
          <span className="tagline" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Database size={14} style={{ color: "var(--primary)" }} /> WhypaperBill POS
          </span>
          <h1 className="text-gradient" style={{ fontSize: "2.5rem", marginTop: "0.5rem", marginBottom: "0.5rem" }}>
            POS & Inventory Simulator
          </h1>
          <p style={{ color: "var(--text-secondary)", maxWidth: "700px" }}>
            Test the blazing-fast capabilities of our offline-first local billing system. Run a busy checkout queue, apply dynamic GST configs, print compliance thermal receipts, and audit transactions in our local sales register.
          </p>
        </div>

        {/* Main Work Area */}
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "2rem", alignItems: "start" }}>
          
          {/* Left Grid: Product Menu */}
          <div className="glass-card" style={{ padding: "2rem", background: "rgba(10,10,10,0.6)" }}>
            
            {/* Search and Filters */}
            <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", marginBottom: "2rem", flexWrap: "wrap" }}>
              <div style={{ display: "flex", gap: "0.5rem", overflowX: "auto", paddingBottom: "0.5rem", maxWidth: "100%" }}>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className="btn"
                    style={{
                      padding: "0.5rem 1rem",
                      fontSize: "0.85rem",
                      background: activeCategory === cat ? "var(--primary)" : "rgba(255, 255, 255, 0.03)",
                      color: activeCategory === cat ? "#fff" : "var(--text-secondary)",
                      border: activeCategory === cat ? "none" : "1px solid var(--border-color)",
                      whiteSpace: "nowrap"
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div style={{ position: "relative", minWidth: "220px", flex: 1 }}>
                <Search
                  size={16}
                  style={{ position: "absolute", left: "0.75rem", top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)" }}
                />
                <input
                  type="text"
                  placeholder="Scan barcode or type name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "0.5rem 1rem 0.5rem 2.2rem",
                    fontSize: "0.85rem",
                    background: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid var(--border-color)",
                    borderRadius: "8px",
                    color: "#fff"
                  }}
                />
              </div>
            </div>

            {/* Menu Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))", gap: "1rem" }}>
              {filteredProducts.map((p) => (
                <div
                  key={p.id}
                  onClick={() => addToCart(p)}
                  style={{
                    padding: "1.5rem 1rem",
                    background: "rgba(255, 255, 255, 0.01)",
                    border: "1px solid var(--border-color)",
                    borderRadius: "12px",
                    cursor: "pointer",
                    textAlign: "center",
                    transition: "all 0.3s ease",
                    position: "relative",
                    overflow: "hidden"
                  }}
                  className="niche-card-hover"
                >
                  <span style={{ fontSize: "0.7rem", textTransform: "uppercase", color: "var(--text-muted)", display: "block", marginBottom: "0.5rem" }}>
                    {p.category}
                  </span>
                  <h4 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: "0.75rem", minHeight: "2.4rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {p.name}
                  </h4>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1rem" }}>
                    <span style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--primary)" }}>
                      ₹{p.price}
                    </span>
                    <span style={{ fontSize: "0.7rem", background: "rgba(255,255,255,0.05)", padding: "0.2rem 0.4rem", borderRadius: "4px", color: "var(--text-muted)" }}>
                      GST {p.gstRate}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Grid: Active Checkout Basket */}
          <div className="glass-card" style={{ padding: "2rem", background: "rgba(15,15,15,0.8)", borderColor: "rgba(240,123,0,0.15)", position: "sticky", top: "100px" }}>
            <h3 style={{ fontSize: "1.2rem", fontWeight: "700", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <ShoppingCart size={18} style={{ color: "var(--primary)" }} /> Active Checkout Basket
            </h3>

            {/* Cart Items list */}
            {cart.length === 0 ? (
              <div style={{ textAlign: "center", padding: "4rem 0", color: "var(--text-muted)" }}>
                <ShoppingCart size={40} style={{ opacity: 0.15, marginBottom: "1rem" }} />
                <p style={{ fontSize: "0.9rem" }}>Basket is empty. Select items from the menu to start billing.</p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem", maxHeight: "300px", overflowY: "auto", paddingRight: "0.5rem" }}>
                {cart.map((item) => (
                  <div
                    key={item.product.id}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingBottom: "1rem",
                      borderBottom: "1px solid rgba(255,255,255,0.05)"
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <h4 style={{ fontSize: "0.9rem", fontWeight: "600" }}>{item.product.name}</h4>
                      <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                        ₹{item.product.price} each • GST {item.product.gstRate}%
                      </span>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <button
                        onClick={() => updateQuantity(item.product.id, -1)}
                        style={{
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid var(--border-color)",
                          width: "24px",
                          height: "24px",
                          borderRadius: "4px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          cursor: "pointer"
                        }}
                      >
                        <Minus size={12} />
                      </button>
                      <span style={{ fontSize: "0.9rem", fontWeight: "600", width: "20px", textAlign: "center" }}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, 1)}
                        style={{
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid var(--border-color)",
                          width: "24px",
                          height: "24px",
                          borderRadius: "4px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          cursor: "pointer"
                        }}
                      >
                        <Plus size={12} />
                      </button>
                      
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        style={{
                          background: "none",
                          border: "none",
                          color: "rgba(220, 50, 50, 0.6)",
                          cursor: "pointer",
                          padding: "0.25rem",
                          marginLeft: "0.5rem"
                        }}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Customer Information Form */}
            {cart.length > 0 && (
              <div style={{ padding: "1rem", background: "rgba(255,255,255,0.01)", border: "1px solid var(--border-color)", borderRadius: "8px", marginBottom: "1.5rem" }}>
                <h4 style={{ fontSize: "0.8rem", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.75rem" }}>
                  Customer Details (Optional)
                </h4>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
                  <input
                    type="text"
                    placeholder="Customer Name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid var(--border-color)",
                      padding: "0.4rem 0.75rem",
                      fontSize: "0.8rem",
                      borderRadius: "6px",
                      color: "#fff"
                    }}
                  />
                  <input
                    type="text"
                    placeholder="WhatsApp No."
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid var(--border-color)",
                      padding: "0.4rem 0.75rem",
                      fontSize: "0.8rem",
                      borderRadius: "6px",
                      color: "#fff"
                    }}
                  />
                </div>
              </div>
            )}

            {/* Calculations and Actions */}
            {cart.length > 0 && (
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>GST (Tax Setup)</span>
                  <label style={{ display: "inline-flex", alignItems: "center", cursor: "pointer" }}>
                    <input
                      type="checkbox"
                      checked={gstOption}
                      onChange={(e) => setGstOption(e.target.checked)}
                      style={{ marginRight: "0.5rem", cursor: "pointer" }}
                    />
                    <span style={{ fontSize: "0.85rem", color: gstOption ? "var(--primary)" : "var(--text-muted)" }}>
                      {gstOption ? "Active" : "Bypass GST"}
                    </span>
                  </label>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem", fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  <span>Subtotal</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>
                {gstOption && (
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>
                    <span>GST (Tax Breakup)</span>
                    <span>₹{gstTotal.toFixed(2)}</span>
                  </div>
                )}
                
                <div style={{ borderTop: "1px solid var(--border-color)", margin: "1rem 0", paddingTop: "1rem" }}></div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                  <span style={{ fontSize: "1.1rem", fontWeight: "700" }}>Grand Total</span>
                  <span style={{ fontSize: "1.4rem", fontWeight: "800", color: "var(--primary)" }}>
                    ₹{grandTotal.toFixed(2)}
                  </span>
                </div>

                {/* Payment Option */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.5rem", marginBottom: "1.5rem" }}>
                  {["UPI", "Cash", "Card"].map((mode) => (
                    <button
                      key={mode}
                      onClick={() => setPaymentMode(mode)}
                      className="btn"
                      style={{
                        padding: "0.4rem 0",
                        fontSize: "0.8rem",
                        background: paymentMode === mode ? "rgba(240, 123, 0, 0.1)" : "rgba(255,255,255,0.02)",
                        border: paymentMode === mode ? "1px solid var(--primary)" : "1px solid var(--border-color)",
                        color: paymentMode === mode ? "var(--primary)" : "var(--text-secondary)",
                      }}
                    >
                      {mode}
                    </button>
                  ))}
                </div>

                {/* Checkout Trigger */}
                <button
                  onClick={handleCheckout}
                  className="btn btn-primary"
                  style={{ width: "100%", padding: "1rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", textTransform: "uppercase", letterSpacing: "0.05em" }}
                >
                  <Sparkles size={16} /> Process Checkout (Sub-2s)
                </button>
                
                <button
                  onClick={clearCart}
                  className="btn btn-secondary"
                  style={{ width: "100%", marginTop: "0.5rem", padding: "0.5rem", fontSize: "0.8rem" }}
                >
                  Clear Order
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Offline Sales Registry Database Log */}
        <div className="glass-card" style={{ marginTop: "4rem", padding: "2.5rem", background: "rgba(10,10,10,0.5)" }}>
          <h3 style={{ fontSize: "1.4rem", fontWeight: "700", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Database size={20} style={{ color: "var(--primary)" }} /> Offline Local Sales Registry (Database Log)
          </h3>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "2rem" }}>
            This panel simulates the local SQLite/WatermelonDB device log embedded in WhypaperBill. It is fully operational and saves records offline on the machine's memory during checkout.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem", marginBottom: "2rem" }}>
            <div style={{ padding: "1.5rem", background: "rgba(255,255,255,0.01)", border: "1px solid var(--border-color)", borderRadius: "8px" }}>
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Total Generated Invoices</span>
              <div style={{ fontSize: "1.8rem", fontWeight: "800", color: "#fff", marginTop: "0.5rem" }}>{invoices.length} Invoices</div>
            </div>
            <div style={{ padding: "1.5rem", background: "rgba(255,255,255,0.01)", border: "1px solid var(--border-color)", borderRadius: "8px" }}>
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase" }}>GST Tax Registry Collections</span>
              <div style={{ fontSize: "1.8rem", fontWeight: "800", color: "#fff", marginTop: "0.5rem" }}>
                ₹{invoices.reduce((sum, inv) => sum + inv.gstTotal, 0).toFixed(2)}
              </div>
            </div>
            <div style={{ padding: "1.5rem", background: "rgba(255,255,255,0.01)", border: "1px solid var(--border-color)", borderRadius: "8px" }}>
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Total Offline Net Revenue</span>
              <div style={{ fontSize: "1.8rem", fontWeight: "800", color: "var(--primary)", marginTop: "0.5rem" }}>
                ₹{invoices.reduce((sum, inv) => sum + inv.grandTotal, 0).toFixed(2)}
              </div>
            </div>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
              <thead>
                <tr style={{ textAlign: "left", borderBottom: "1px solid var(--border-color)", color: "var(--text-muted)" }}>
                  <th style={{ padding: "1rem" }}>Invoice ID</th>
                  <th style={{ padding: "1rem" }}>Customer Details</th>
                  <th style={{ padding: "1rem" }}>Purchased Items</th>
                  <th style={{ padding: "1rem" }}>Tax Setup</th>
                  <th style={{ padding: "1rem" }}>Total Billing</th>
                  <th style={{ padding: "1rem" }}>Payment Mode</th>
                  <th style={{ padding: "1rem" }}>Network State</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((inv) => (
                  <tr key={inv.id} style={{ borderBottom: "1px solid rgba(255,255,255,0.03)", verticalAlign: "top" }}>
                    <td style={{ padding: "1rem", fontWeight: "700", color: "var(--primary)" }}>{inv.id}</td>
                    <td style={{ padding: "1rem" }}>
                      <strong>{inv.customerName}</strong>
                      <span style={{ display: "block", fontSize: "0.75rem", color: "var(--text-muted)" }}>{inv.customerPhone}</span>
                      <span style={{ display: "block", fontSize: "0.75rem", color: "var(--text-muted)" }}>{inv.timestamp}</span>
                    </td>
                    <td style={{ padding: "1rem" }}>
                      {inv.items.map((it, idx) => (
                        <div key={idx}>
                          {it.product.name} ({it.quantity}x)
                        </div>
                      ))}
                    </td>
                    <td style={{ padding: "1rem" }}>{inv.gstOption ? `Active (₹${inv.gstTotal.toFixed(1)})` : "Bypassed"}</td>
                    <td style={{ padding: "1rem", fontWeight: "600" }}>₹{inv.grandTotal.toFixed(2)}</td>
                    <td style={{ padding: "1rem" }}>
                      <span style={{ fontSize: "0.75rem", background: "rgba(255,255,255,0.05)", padding: "0.2rem 0.4rem", borderRadius: "4px" }}>
                        {inv.paymentMode}
                      </span>
                    </td>
                    <td style={{ padding: "1rem" }}>
                      <span style={{ color: "rgb(50, 200, 50)", display: "flex", alignItems: "center", gap: "0.25rem", fontSize: "0.75rem" }}>
                        <Check size={12} /> Sync Done (Local DB)
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Checkout Processing Overlay */}
      {checkoutStep === "processing" && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0,0,0,0.85)",
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(8px)"
        }}>
          <Loader2 size={48} className="spin" style={{ color: "var(--primary)", marginBottom: "1.5rem" }} />
          <h3 style={{ fontSize: "1.2rem", fontWeight: "600", marginBottom: "0.5rem" }}>{loadingText}</h3>
          <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>WhypaperBill Offline Engine active</p>
        </div>
      )}

      {/* Thermal Receipt Modal */}
      {checkoutStep === "receipt" && currentInvoice && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0,0,0,0.8)",
          zIndex: 9998,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(6px)",
          padding: "1rem"
        }}>
          <div className="glass-card" style={{
            width: "100%",
            maxWidth: "380px",
            background: "#fff",
            color: "#000",
            border: "none",
            borderRadius: "0",
            padding: "1.5rem",
            boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
            position: "relative",
            maxHeight: "90vh",
            overflowY: "auto"
          }}>
            {/* Retro jagged edge effect header */}
            <div style={{ textAlign: "center", marginBottom: "1.5rem", borderBottom: "1px dashed #000", paddingBottom: "1rem" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: "800", letterSpacing: "0.05em" }}>ZENLIFT CAFE</div>
              <div style={{ fontSize: "0.75rem", textTransform: "uppercase", marginTop: "0.25rem" }}>
                Sector-15, Faridabad, Haryana
              </div>
              <div style={{ fontSize: "0.75rem", marginTop: "0.25rem" }}>GSTIN: 06ABCDE1234F1Z5</div>
            </div>

            {/* Meta */}
            <div style={{ fontSize: "0.75rem", marginBottom: "1rem", lineHeight: "1.5" }}>
              <div><strong>Invoice No:</strong> {currentInvoice.id}</div>
              <div><strong>Date:</strong> {currentInvoice.timestamp}</div>
              <div><strong>Billing Mode:</strong> {currentInvoice.paymentMode}</div>
              <div><strong>Customer Name:</strong> {currentInvoice.customerName}</div>
              <div><strong>Customer Phone:</strong> {currentInvoice.customerPhone}</div>
              <div style={{ borderBottom: "1px dashed #000", margin: "0.5rem 0" }}></div>
            </div>

            {/* Receipt Table Header */}
            <div style={{ fontSize: "0.75rem", fontWeight: "700", display: "grid", gridTemplateColumns: "1.5fr 0.5fr 0.8fr 0.8fr", gap: "0.25rem", marginBottom: "0.5rem" }}>
              <span>Item Description</span>
              <span style={{ textAlign: "center" }}>Qty</span>
              <span style={{ textAlign: "right" }}>Rate</span>
              <span style={{ textAlign: "right" }}>Amount</span>
            </div>

            {/* Receipt Items */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.75rem" }}>
              {currentInvoice.items.map((item, idx) => (
                <div key={idx} style={{ display: "grid", gridTemplateColumns: "1.5fr 0.5fr 0.8fr 0.8fr", gap: "0.25rem" }}>
                  <span>{item.product.name}</span>
                  <span style={{ textAlign: "center" }}>{item.quantity}</span>
                  <span style={{ textAlign: "right" }}>₹{item.product.price}</span>
                  <span style={{ textAlign: "right" }}>₹{(item.product.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div style={{ borderBottom: "1px dashed #000", margin: "1rem 0" }}></div>

            {/* Summary calculations */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem", fontSize: "0.75rem", alignItems: "flex-end" }}>
              <div style={{ display: "flex", justifyContent: "space-between", width: "150px" }}>
                <span>Subtotal:</span>
                <span>₹{currentInvoice.subtotal.toFixed(2)}</span>
              </div>
              {currentInvoice.gstOption && (
                <div style={{ display: "flex", justifyContent: "space-between", width: "150px" }}>
                  <span>CGST / SGST:</span>
                  <span>₹{currentInvoice.gstTotal.toFixed(2)}</span>
                </div>
              )}
              <div style={{ display: "flex", justifyContent: "space-between", width: "150px", fontWeight: "700", fontSize: "0.85rem", marginTop: "0.25rem", borderTop: "1px solid #000", paddingTop: "0.25rem" }}>
                <span>GRAND TOTAL:</span>
                <span>₹{currentInvoice.grandTotal.toFixed(2)}</span>
              </div>
            </div>

            <div style={{ borderBottom: "1px dashed #000", margin: "1rem 0" }}></div>

            {/* Simulated barcode */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.25rem", marginBottom: "1.5rem" }}>
              <div style={{ width: "140px", height: "35px", background: "repeating-linear-gradient(90deg, #000, #000 2px, #fff 2px, #fff 5px)" }}></div>
              <span style={{ fontSize: "0.6rem", letterSpacing: "0.15em" }}>*WHOPEEPBILL*</span>
            </div>

            {/* Thank footer */}
            <div style={{ textAlign: "center", fontSize: "0.75rem", fontWeight: "600", marginBottom: "2rem" }}>
              THANK YOU! VISIT AGAIN.<br />
              Powered by WhypaperBill
            </div>

            {/* Action buttons (ZenLift dark style overlays) */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <button
                onClick={handlePrint}
                className="btn btn-primary"
                style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", fontSize: "0.85rem", padding: "0.75rem" }}
              >
                <Printer size={16} /> Print Receipt (Direct)
              </button>

              <button
                onClick={handleShareWhatsApp}
                className="btn btn-secondary"
                style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", fontSize: "0.85rem", padding: "0.75rem", background: "rgba(0,0,0,0.05)", border: "1px solid #000", color: "#000" }}
              >
                {showShareSuccess ? (
                  <>
                    <Check size={16} style={{ color: "green" }} /> Dispatch Sent!
                  </>
                ) : (
                  <>
                    <Share2 size={16} /> Dispatch WhatsApp Bill
                  </>
                )}
              </button>

              <button
                onClick={() => {
                  setCart([]);
                  setCheckoutStep("idle");
                  setCurrentInvoice(null);
                }}
                className="btn"
                style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", fontSize: "0.85rem", padding: "0.5rem", background: "#f0f0f0", color: "#333", border: "1px solid #ddd" }}
              >
                Reset & New Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
