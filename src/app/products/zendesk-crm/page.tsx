"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Briefcase,
  FileText,
  Clock,
  Plus,
  ArrowRight,
  Check,
  Smartphone,
  Share2,
  AlertCircle,
  FileCheck,
  Send
} from "lucide-react";

// Interfaces
interface Deal {
  id: string;
  clientName: string;
  businessType: string;
  serviceNeeded: string;
  value: number;
  stage: "Incoming" | "QuoteSent" | "Negotiation" | "Won" | "Lost";
  lastContact: string;
  phone: string;
}

interface QuoteItem {
  description: string;
  amount: number;
}

interface Quote {
  id: string;
  clientName: string;
  items: QuoteItem[];
  subtotal: number;
  tax: number;
  total: number;
  date: string;
}

const INITIAL_DEALS: Deal[] = [
  { id: "deal_1", clientName: "Apex Dental Clinic", businessType: "Clinic", serviceNeeded: "Website + Booking Funnel", value: 18000, stage: "Incoming", lastContact: "2026-05-28", phone: "9876543210" },
  { id: "deal_2", clientName: "Bright Academy", businessType: "Coaching Center", serviceNeeded: "TutorPlus LMS Setup", value: 25000, stage: "QuoteSent", lastContact: "2026-05-26", phone: "9123456789" },
  { id: "deal_3", clientName: "FitLife Gymnasium", businessType: "Gym / Fitness", serviceNeeded: "Instagram Trial Funnel", value: 14000, stage: "Negotiation", lastContact: "2026-05-25", phone: "9988776655" },
  { id: "deal_4", clientName: "Metro Brokers", businessType: "Real Estate", serviceNeeded: "Brochure Automation Bot", value: 20000, stage: "Won", lastContact: "2026-05-20", phone: "9555667788" },
  { id: "deal_5", clientName: "Flavors Café", businessType: "Restaurant", serviceNeeded: "Local SEO + GBP Engine", value: 8000, stage: "Lost", lastContact: "2026-05-18", phone: "9333445566" }
];

export default function ZenDeskCRMDashboard() {
  // State
  const [deals, setDeals] = useState<Deal[]>(INITIAL_DEALS);
  const [activeView, setActiveView] = useState<"pipeline" | "quote" | "reminders">("pipeline");
  const [crmLogs, setCrmLogs] = useState<string[]>([
    "Apex Dental Clinic deal created - Incoming",
    "Quote sent to Bright Academy on WhatsApp"
  ]);

  // Deal Modal state
  const [showAddDeal, setShowAddDeal] = useState<boolean>(false);
  const [cName, setCName] = useState<string>("");
  const [cType, setCType] = useState<string>("Clinic");
  const [cService, setCService] = useState<string>("");
  const [cVal, setCVal] = useState<number>(15000);
  const [cPhone, setCPhone] = useState<string>("");

  // Quote generator states
  const [qClient, setQClient] = useState<string>("");
  const [qDesc1, setQDesc1] = useState<string>("");
  const [qAmt1, setQAmt1] = useState<number>(0);
  const [qDesc2, setQDesc2] = useState<string>("");
  const [qAmt2, setQAmt2] = useState<number>(0);
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null);
  const [showQuoteModal, setShowQuoteModal] = useState<boolean>(false);
  const [quoteSharedSuccess, setQuoteSharedSuccess] = useState<boolean>(false);

  // Transition stage
  const updateDealStage = (dealId: string, nextStage: "Incoming" | "QuoteSent" | "Negotiation" | "Won" | "Lost") => {
    setDeals((prev) =>
      prev.map((d) => {
        if (d.id === dealId) {
          const logMsg = `Deal for ${d.clientName} transitioned to ${nextStage}`;
          setCrmLogs((prevLogs) => [logMsg, ...prevLogs]);
          return { ...d, stage: nextStage, lastContact: new Date().toISOString().split("T")[0] };
        }
        return d;
      })
    );
  };

  // Add deal
  const handleCreateDeal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cName || !cService || !cPhone) return;

    const newD: Deal = {
      id: `deal_${Date.now()}`,
      clientName: cName,
      businessType: cType,
      serviceNeeded: cService,
      value: Number(cVal),
      stage: "Incoming",
      lastContact: new Date().toISOString().split("T")[0],
      phone: cPhone
    };

    setDeals((prev) => [newD, ...prev]);
    setCrmLogs((prevLogs) => [`New deal created for ${cName} - Incoming`, ...prevLogs]);
    
    setCName("");
    setCService("");
    setCPhone("");
    setShowAddDeal(false);
  };

  // Assemble custom quote
  const handleAssembleQuote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!qClient || !qDesc1 || qAmt1 <= 0) return;

    const items: QuoteItem[] = [{ description: qDesc1, amount: Number(qAmt1) }];
    if (qDesc2 && qAmt2 > 0) {
      items.push({ description: qDesc2, amount: Number(qAmt2) });
    }

    const sub = items.reduce((sum, it) => sum + it.amount, 0);
    const taxVal = sub * 0.18; // 18% GST

    const newQ: Quote = {
      id: `QT-${Date.now().toString().slice(-6)}`,
      clientName: qClient,
      items,
      subtotal: sub,
      tax: taxVal,
      total: sub + taxVal,
      date: new Date().toISOString().split("T")[0]
    };

    setCurrentQuote(newQ);
    setShowQuoteModal(true);
  };

  const handleSendQuoteWhatsApp = () => {
    if (!currentQuote) return;
    
    // Find matching deal if any and advance it to "QuoteSent"
    const match = deals.find((d) => d.clientName.toLowerCase() === currentQuote.clientName.toLowerCase());
    if (match) {
      updateDealStage(match.id, "QuoteSent");
    }

    setQuoteSharedSuccess(true);
    setTimeout(() => {
      setQuoteSharedSuccess(false);
      setShowQuoteModal(false);
      // Clear forms
      setQClient("");
      setQDesc1("");
      setQAmt1(0);
      setQDesc2("");
      setQAmt2(0);
      setCurrentQuote(null);
    }, 1800);
  };

  // Reminders list
  const activeReminders = useMemo(() => {
    return deals.filter((d) => d.stage === "Incoming" || d.stage === "QuoteSent" || d.stage === "Negotiation");
  }, [deals]);

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
              <span className="pulse-dot"></span> ZenDesk CRM Active
            </span>
          </div>
        </div>

        {/* Title */}
        <div style={{ marginBottom: "3rem" }}>
          <span className="tagline" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Briefcase size={14} style={{ color: "var(--primary)" }} /> Service CRM Suite
          </span>
          <h1 className="text-gradient" style={{ fontSize: "2.5rem", marginTop: "0.5rem", marginBottom: "0.5rem" }}>
            Deals & Custom Proposal Board
          </h1>
          <p style={{ color: "var(--text-secondary)", maxWidth: "700px" }}>
            Simulate ZenDesk CRM's operational deals pipeline. Manage local agency clients, assemble visual GST compliance quote proposals in one click, and handle daily follow-up alert queues seamlessly.
          </p>
        </div>

        {/* View Tabs */}
        <div style={{ display: "flex", borderBottom: "1px solid var(--border-color)", marginBottom: "2.5rem", gap: "1rem" }}>
          <button
            onClick={() => setActiveView("pipeline")}
            className="btn"
            style={{
              padding: "1rem 1.5rem",
              background: "none",
              border: "none",
              borderBottom: activeView === "pipeline" ? "2px solid var(--primary)" : "none",
              color: activeView === "pipeline" ? "var(--primary)" : "var(--text-secondary)",
              borderRadius: "0",
              fontWeight: "600"
            }}
          >
            Visual Deals Pipeline
          </button>
          <button
            onClick={() => setActiveView("quote")}
            className="btn"
            style={{
              padding: "1rem 1.5rem",
              background: "none",
              border: "none",
              borderBottom: activeView === "quote" ? "2px solid var(--primary)" : "none",
              color: activeView === "quote" ? "var(--primary)" : "var(--text-secondary)",
              borderRadius: "0",
              fontWeight: "600"
            }}
          >
            One-Click Quote Builder
          </button>
          <button
            onClick={() => setActiveView("reminders")}
            className="btn"
            style={{
              padding: "1rem 1.5rem",
              background: "none",
              border: "none",
              borderBottom: activeView === "reminders" ? "2px solid var(--primary)" : "none",
              color: activeView === "reminders" ? "var(--primary)" : "var(--text-secondary)",
              borderRadius: "0",
              fontWeight: "600"
            }}
          >
            Follow-up Alert Queue
          </button>
        </div>

        {/* Layout Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "2rem", alignItems: "start" }}>
          
          {/* Left panel: Active View */}
          <div>
            
            {/* View 1: Pipeline Board */}
            {activeView === "pipeline" && (
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700" }}>Active Deals Pipeline</h3>
                  <button onClick={() => setShowAddDeal(true)} className="btn btn-primary" style={{ display: "flex", alignItems: "center", gap: "0.25rem", padding: "0.5rem 1rem", fontSize: "0.85rem" }}>
                    <Plus size={16} /> New Client Deal
                  </button>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr", gap: "0.75rem" }}>
                  
                  {/* Column 1: Incoming */}
                  <div style={{ background: "rgba(255,255,255,0.01)", border: "1px solid var(--border-color)", borderRadius: "8px", padding: "0.75rem", minHeight: "350px" }}>
                    <h4 style={{ fontSize: "0.75rem", textTransform: "uppercase", color: "var(--text-muted)", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "0.5rem", marginBottom: "0.75rem" }}>
                      Incoming ({deals.filter(d => d.stage === "Incoming").length})
                    </h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      {deals.filter(d => d.stage === "Incoming").map(d => (
                        <div key={d.id} className="glass-card" style={{ padding: "0.75rem", fontSize: "0.75rem" }}>
                          <strong style={{ display: "block" }}>{d.clientName}</strong>
                          <span style={{ color: "var(--text-muted)", display: "block", fontSize: "0.7rem", margin: "0.2rem 0" }}>{d.serviceNeeded}</span>
                          <span style={{ fontWeight: "700", color: "var(--primary)" }}>₹{d.value}</span>
                          <button
                            onClick={() => updateDealStage(d.id, "QuoteSent")}
                            style={{ width: "100%", marginTop: "0.5rem", fontSize: "0.65rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.2rem", padding: "0.2rem 0" }}
                            className="btn btn-secondary"
                          >
                            Send Quote <ArrowRight size={10} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Column 2: Quote Sent */}
                  <div style={{ background: "rgba(255,255,255,0.01)", border: "1px solid var(--border-color)", borderRadius: "8px", padding: "0.75rem", minHeight: "350px" }}>
                    <h4 style={{ fontSize: "0.75rem", textTransform: "uppercase", color: "var(--text-muted)", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "0.5rem", marginBottom: "0.75rem" }}>
                      Quote Sent ({deals.filter(d => d.stage === "QuoteSent").length})
                    </h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      {deals.filter(d => d.stage === "QuoteSent").map(d => (
                        <div key={d.id} className="glass-card" style={{ padding: "0.75rem", fontSize: "0.75rem" }}>
                          <strong style={{ display: "block" }}>{d.clientName}</strong>
                          <span style={{ color: "var(--text-muted)", display: "block", fontSize: "0.7rem", margin: "0.2rem 0" }}>{d.serviceNeeded}</span>
                          <span style={{ fontWeight: "700", color: "var(--primary)" }}>₹{d.value}</span>
                          <button
                            onClick={() => updateDealStage(d.id, "Negotiation")}
                            style={{ width: "100%", marginTop: "0.5rem", fontSize: "0.65rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.2rem", padding: "0.2rem 0" }}
                            className="btn btn-secondary"
                          >
                            Start Neg. <ArrowRight size={10} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Column 3: Negotiation */}
                  <div style={{ background: "rgba(255,255,255,0.01)", border: "1px solid var(--border-color)", borderRadius: "8px", padding: "0.75rem", minHeight: "350px" }}>
                    <h4 style={{ fontSize: "0.75rem", textTransform: "uppercase", color: "var(--text-muted)", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "0.5rem", marginBottom: "0.75rem" }}>
                      Negotiation ({deals.filter(d => d.stage === "Negotiation").length})
                    </h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      {deals.filter(d => d.stage === "Negotiation").map(d => (
                        <div key={d.id} className="glass-card" style={{ padding: "0.75rem", fontSize: "0.75rem", borderColor: "rgba(240,123,0,0.2)" }}>
                          <strong style={{ display: "block" }}>{d.clientName}</strong>
                          <span style={{ color: "var(--text-muted)", display: "block", fontSize: "0.7rem", margin: "0.2rem 0" }}>{d.serviceNeeded}</span>
                          <span style={{ fontWeight: "700", color: "var(--primary)" }}>₹{d.value}</span>
                          <div style={{ display: "flex", gap: "0.2rem", marginTop: "0.5rem" }}>
                            <button
                              onClick={() => updateDealStage(d.id, "Won")}
                              style={{ flex: 1, fontSize: "0.6rem", padding: "0.2rem 0", background: "rgba(50,200,50,0.1)", border: "1px solid rgba(50,200,50,0.2)", color: "rgb(50,200,50)" }}
                              className="btn"
                            >
                              Win
                            </button>
                            <button
                              onClick={() => updateDealStage(d.id, "Lost")}
                              style={{ flex: 1, fontSize: "0.6rem", padding: "0.2rem 0", background: "rgba(220,50,50,0.1)", border: "1px solid rgba(220,50,50,0.2)", color: "rgb(220,50,50)" }}
                              className="btn"
                            >
                              Lose
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Column 4: Won */}
                  <div style={{ background: "rgba(255,255,255,0.01)", border: "1px solid var(--border-color)", borderRadius: "8px", padding: "0.75rem", minHeight: "350px" }}>
                    <h4 style={{ fontSize: "0.75rem", textTransform: "uppercase", color: "rgb(50, 200, 50)", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "0.5rem", marginBottom: "0.75rem" }}>
                      Won ({deals.filter(d => d.stage === "Won").length})
                    </h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      {deals.filter(d => d.stage === "Won").map(d => (
                        <div key={d.id} className="glass-card" style={{ padding: "0.75rem", fontSize: "0.75rem", borderColor: "rgba(50,200,50,0.25)" }}>
                          <strong style={{ display: "block", color: "rgb(50,200,50)" }}>{d.clientName}</strong>
                          <span style={{ color: "var(--text-muted)", display: "block", fontSize: "0.7rem", margin: "0.2rem 0" }}>{d.serviceNeeded}</span>
                          <span style={{ fontWeight: "700", color: "rgb(50,200,50)" }}>₹{d.value}</span>
                          <span style={{ display: "block", fontSize: "0.6rem", color: "var(--text-muted)", marginTop: "0.5rem" }}>
                            ✓ Active Project Setup
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Column 5: Lost */}
                  <div style={{ background: "rgba(255,255,255,0.01)", border: "1px solid var(--border-color)", borderRadius: "8px", padding: "0.75rem", minHeight: "350px" }}>
                    <h4 style={{ fontSize: "0.75rem", textTransform: "uppercase", color: "rgb(220, 50, 50)", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "0.5rem", marginBottom: "0.75rem" }}>
                      Lost ({deals.filter(d => d.stage === "Lost").length})
                    </h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      {deals.filter(d => d.stage === "Lost").map(d => (
                        <div key={d.id} className="glass-card" style={{ padding: "0.75rem", fontSize: "0.75rem", borderColor: "rgba(220,50,50,0.15)", opacity: 0.6 }}>
                          <strong style={{ display: "block", color: "rgb(220,50,50)" }}>{d.clientName}</strong>
                          <span style={{ color: "var(--text-muted)", display: "block", fontSize: "0.7rem", margin: "0.2rem 0" }}>{d.serviceNeeded}</span>
                          <span style={{ fontWeight: "700", color: "var(--text-muted)" }}>₹{d.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* View 2: One-Click Quote Builder */}
            {activeView === "quote" && (
              <div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "700", marginBottom: "1.5rem" }}>One-Click Compliance Quote Proposal Builder</h3>
                
                <div className="glass-card" style={{ padding: "2rem", background: "rgba(10,10,10,0.6)" }}>
                  <form onSubmit={handleAssembleQuote}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                      <div>
                        <label style={{ display: "block", fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "0.4rem" }}>
                          Select Client Deal or Enter New Customer
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g., Bright Academy"
                          value={qClient}
                          onChange={(e) => setQClient(e.target.value)}
                          style={{ width: "100%", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border-color)", padding: "0.5rem 0.75rem", borderRadius: "6px", color: "#fff", fontSize: "0.9rem" }}
                        />
                      </div>

                      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "1rem" }}>
                        <div>
                          <label style={{ display: "block", fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "0.4rem" }}>
                            Line Item 1 Description
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g., Clinic Landing Page & GBP Setup"
                            value={qDesc1}
                            onChange={(e) => setQDesc1(e.target.value)}
                            style={{ width: "100%", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border-color)", padding: "0.5rem 0.75rem", borderRadius: "6px", color: "#fff", fontSize: "0.9rem" }}
                          />
                        </div>
                        <div>
                          <label style={{ display: "block", fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "0.4rem" }}>
                            Amount (INR)
                          </label>
                          <input
                            type="number"
                            required
                            placeholder="e.g., 12000"
                            value={qAmt1 || ""}
                            onChange={(e) => setQAmt1(Number(e.target.value))}
                            style={{ width: "100%", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border-color)", padding: "0.5rem 0.75rem", borderRadius: "6px", color: "#fff", fontSize: "0.9rem" }}
                          />
                        </div>
                      </div>

                      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "1rem" }}>
                        <div>
                          <label style={{ display: "block", fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "0.4rem" }}>
                            Line Item 2 Description (Optional)
                          </label>
                          <input
                            type="text"
                            placeholder="e.g., FAQ Chatbot & CRM Sheet Sync"
                            value={qDesc2}
                            onChange={(e) => setQDesc2(e.target.value)}
                            style={{ width: "100%", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border-color)", padding: "0.5rem 0.75rem", borderRadius: "6px", color: "#fff", fontSize: "0.9rem" }}
                          />
                        </div>
                        <div>
                          <label style={{ display: "block", fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "0.4rem" }}>
                            Amount (INR)
                          </label>
                          <input
                            type="number"
                            placeholder="e.g., 6000"
                            value={qAmt2 || ""}
                            onChange={(e) => setQAmt2(Number(e.target.value))}
                            style={{ width: "100%", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border-color)", padding: "0.5rem 0.75rem", borderRadius: "6px", color: "#fff", fontSize: "0.9rem" }}
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary"
                        style={{ marginTop: "1rem", padding: "1rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}
                      >
                        <FileCheck size={18} /> Assemble & Review Digital Quote
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* View 3: Follow-up Reminders */}
            {activeView === "reminders" && (
              <div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "700", marginBottom: "1.5rem" }}>Outstanding Deal Follow-up Checklist</h3>
                
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {activeReminders.map((d) => (
                    <div
                      key={d.id}
                      className="glass-card"
                      style={{
                        padding: "1.5rem",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderLeft: d.stage === "Incoming" ? "4px solid var(--primary)" : "4px solid var(--accent-gold)"
                      }}
                    >
                      <div>
                        <span
                          style={{
                            fontSize: "0.7rem",
                            background: "rgba(255,255,255,0.05)",
                            padding: "0.2rem 0.4rem",
                            borderRadius: "4px",
                            color: "var(--text-secondary)"
                          }}
                        >
                          Stage: {d.stage}
                        </span>
                        <h4 style={{ fontSize: "1.1rem", fontWeight: "700", margin: "0.4rem 0" }}>{d.clientName}</h4>
                        <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                          Requirement: {d.serviceNeeded}
                        </p>
                        <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "block", marginTop: "0.3rem" }}>
                          Last Action Taken: {d.lastContact}
                        </span>
                      </div>

                      <div style={{ display: "flex", gap: "0.5rem" }}>
                        <a
                          href={`https://wa.me/${d.phone}?text=${encodeURIComponent(
                            `Hi ${d.clientName}, just checking if you had any questions on the proposal we discussed for ${d.serviceNeeded}?`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-secondary"
                          style={{ padding: "0.5rem 1rem", fontSize: "0.8rem", display: "inline-flex", alignItems: "center", gap: "0.25rem" }}
                        >
                          <Send size={12} /> WhatsApp Touch
                        </a>
                        <button
                          onClick={() => updateDealStage(d.id, "Won")}
                          className="btn btn-primary"
                          style={{ padding: "0.5rem 1rem", fontSize: "0.8rem" }}
                        >
                          Mark Won
                        </button>
                      </div>
                    </div>
                  ))}
                  {activeReminders.length === 0 && (
                    <div className="glass-card" style={{ padding: "3rem", textAlign: "center", color: "var(--text-muted)" }}>
                      <AlertCircle size={32} style={{ opacity: 0.15, marginBottom: "1rem" }} />
                      <p>All deals are completed or lost. Ledger queue is clear!</p>
                    </div>
                  )}
                </div>
              </div>
            )}

          </div>

          {/* Right panel: Activity Log & Audit trail */}
          <div className="glass-card" style={{ padding: "2rem", background: "rgba(15,15,15,0.8)", borderColor: "rgba(240,123,0,0.15)", position: "sticky", top: "100px" }}>
            <h3 style={{ fontSize: "1.2rem", fontWeight: "700", marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Clock size={18} style={{ color: "var(--primary)" }} /> CRM Action Audit Logs
            </h3>
            <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "block", marginBottom: "2.5rem" }}>
              Audit trail of active deal updates and quotes dispatched.
            </span>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {crmLogs.map((log, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "0.75rem 1rem",
                    background: "rgba(255,255,255,0.01)",
                    border: "1px solid var(--border-color)",
                    borderRadius: "6px",
                    fontSize: "0.8rem",
                    color: "var(--text-secondary)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem"
                  }}
                >
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--primary)" }}></span>
                  <span>{log}</span>
                </div>
              ))}
            </div>

            <div style={{ borderTop: "1px solid var(--border-color)", marginTop: "2rem", paddingTop: "1.5rem" }}>
              <h4 style={{ fontSize: "0.85rem", fontWeight: "600", color: "var(--text-muted)", marginBottom: "0.5rem", textTransform: "uppercase" }}>
                Active Deals Volume
              </h4>
              <div style={{ fontSize: "1.8rem", fontWeight: "800", color: "#fff" }}>
                ₹{deals.filter(d => d.stage !== "Lost").reduce((sum, d) => sum + d.value, 0).toLocaleString("en-IN")}
              </div>
              <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Total active contract values</span>
            </div>
          </div>

        </div>
      </div>

      {/* Modal: Add Deal Form */}
      {showAddDeal && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0,0,0,0.8)",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(6px)",
          padding: "1rem"
        }}>
          <div className="glass-card" style={{ width: "100%", maxWidth: "450px", padding: "2.5rem" }}>
            <h3 style={{ fontSize: "1.4rem", fontWeight: "700", marginBottom: "1.5rem" }}>Record Customer Deal</h3>
            
            <form onSubmit={handleCreateDeal}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.3rem" }}>Business Client Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Smile Care Dental"
                    value={cName}
                    onChange={(e) => setCName(e.target.value)}
                    style={{ width: "100%", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border-color)", padding: "0.5rem 0.75rem", borderRadius: "6px", color: "#fff", fontSize: "0.85rem" }}
                  />
                </div>
                
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.3rem" }}>Niche Category</label>
                    <select
                      value={cType}
                      onChange={(e) => setCType(e.target.value)}
                      style={{ width: "100%", background: "rgb(15,15,15)", border: "1px solid var(--border-color)", padding: "0.5rem 0.75rem", borderRadius: "6px", color: "#fff", fontSize: "0.85rem" }}
                    >
                      {["Clinic", "Coaching", "Fitness", "Restaurant", "Real Estate"].map(t => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.3rem" }}>Deal Value (INR)</label>
                    <input
                      type="number"
                      required
                      placeholder="e.g., 18000"
                      value={cVal || ""}
                      onChange={(e) => setCVal(Number(e.target.value))}
                      style={{ width: "100%", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border-color)", padding: "0.5rem 0.75rem", borderRadius: "6px", color: "#fff", fontSize: "0.85rem" }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.3rem" }}>Service Needed</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Clinic Website + GBP Setup"
                    value={cService}
                    onChange={(e) => setCService(e.target.value)}
                    style={{ width: "100%", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border-color)", padding: "0.5rem 0.75rem", borderRadius: "6px", color: "#fff", fontSize: "0.85rem" }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.3rem" }}>WhatsApp Contact No.</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., +91 98765 43210"
                    value={cPhone}
                    onChange={(e) => setCPhone(e.target.value)}
                    style={{ width: "100%", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border-color)", padding: "0.5rem 0.75rem", borderRadius: "6px", color: "#fff", fontSize: "0.85rem" }}
                  />
                </div>

                <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
                  <button type="submit" className="btn btn-primary" style={{ flex: 1, padding: "0.6rem" }}>
                    Configure Deal
                  </button>
                  <button type="button" onClick={() => setShowAddDeal(false)} className="btn btn-secondary" style={{ flex: 1, padding: "0.6rem" }}>
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: View Quotes & Send */}
      {showQuoteModal && currentQuote && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0,0,0,0.85)",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(6px)",
          padding: "1rem"
        }}>
          <div className="glass-card" style={{ width: "100%", maxWidth: "500px", padding: "2.5rem", background: "rgba(10,10,10,0.9)" }}>
            
            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--border-color)", paddingBottom: "1rem", marginBottom: "1.5rem" }}>
              <div>
                <span style={{ fontSize: "0.75rem", color: "var(--primary)" }}>DIGITAL PROPOSAL STATEMENT</span>
                <h3 style={{ fontSize: "1.3rem", fontWeight: "700" }}>{currentQuote.id}</h3>
              </div>
              <div style={{ textAlign: "right" }}>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Date: {currentQuote.date}</span>
              </div>
            </div>

            {/* Content Details */}
            <div style={{ marginBottom: "1.5rem" }}>
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Prepared For:</span>
              <h4 style={{ fontSize: "1.1rem", fontWeight: "700" }}>{currentQuote.clientName}</h4>
            </div>

            {/* Line items table */}
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1.5fr 0.5fr", fontSize: "0.8rem", color: "var(--text-muted)", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "0.4rem", marginBottom: "0.5rem" }}>
                <span>Item Description</span>
                <span style={{ textAlign: "right" }}>Amount</span>
              </div>
              {currentQuote.items.map((it, idx) => (
                <div key={idx} style={{ display: "grid", gridTemplateColumns: "1.5fr 0.5fr", fontSize: "0.85rem", padding: "0.3rem 0" }}>
                  <span>{it.description}</span>
                  <span style={{ textAlign: "right", fontWeight: "600" }}>₹{it.amount}</span>
                </div>
              ))}
            </div>

            <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "1rem", display: "flex", flexDirection: "column", gap: "0.3rem", alignItems: "flex-end", fontSize: "0.85rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", width: "180px" }}>
                <span style={{ color: "var(--text-muted)" }}>Subtotal:</span>
                <span>₹{currentQuote.subtotal}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", width: "180px" }}>
                <span style={{ color: "var(--text-muted)" }}>GST (18% Slab):</span>
                <span>₹{currentQuote.tax.toFixed(1)}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", width: "180px", fontWeight: "800", fontSize: "1rem", color: "var(--primary)", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "0.3rem" }}>
                <span>Net Payable:</span>
                <span>₹{currentQuote.total.toFixed(0)}</span>
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
              <button
                onClick={handleSendQuoteWhatsApp}
                className="btn btn-primary"
                style={{ flex: 1.2, display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", padding: "0.75rem" }}
              >
                {quoteSharedSuccess ? (
                  <>
                    <Check size={16} /> Dispatched Successfully!
                  </>
                ) : (
                  <>
                    <Share2 size={16} /> Share via WhatsApp Gateway
                  </>
                )}
              </button>
              <button
                onClick={() => {
                  setShowQuoteModal(false);
                  setCurrentQuote(null);
                }}
                className="btn btn-secondary"
                style={{ flex: 0.8 }}
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
