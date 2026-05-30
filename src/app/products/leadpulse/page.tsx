"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Bell,
  Search,
  Filter,
  TrendingUp,
  MapPin,
  Globe,
  Share2,
  Sliders,
  DollarSign,
  UserCheck,
  Zap,
  AlertTriangle,
  Clock,
  ThumbsUp
} from "lucide-react";

// Interfaces
interface Lead {
  id: string;
  name: string;
  phone: string;
  source: "Google Maps" | "Meta Ads" | "Website Form";
  serviceNeeded: string;
  responseTime: number; // in minutes
  timestamp: string;
  status: "Contacted" | "Pending" | "Unanswered";
}

const INITIAL_LEADS: Lead[] = [
  { id: "lead_1", name: "Vikram Malhotra", phone: "9876543210", source: "Google Maps", serviceNeeded: "Dentist Consultation", responseTime: 1.5, timestamp: "Just Now", status: "Pending" },
  { id: "lead_2", name: "Shalini Iyer", phone: "9123456789", source: "Meta Ads", serviceNeeded: "Class 10 Demo Registration", responseTime: 45, timestamp: "12 mins ago", status: "Contacted" },
  { id: "lead_3", name: "Rohan Kapoor", phone: "9988776655", source: "Website Form", serviceNeeded: "Gym Trial Booking", responseTime: 120, timestamp: "1 hour ago", status: "Unanswered" },
  { id: "lead_4", name: "Ananya Sen", phone: "9555667788", source: "Google Maps", serviceNeeded: "Property Site Visit", responseTime: 0.8, timestamp: "2 hours ago", status: "Contacted" },
  { id: "lead_5", name: "Manish Joshi", phone: "9333445566", source: "Meta Ads", serviceNeeded: "Cafe Review Promo Code", responseTime: 180, timestamp: "5 hours ago", status: "Unanswered" },
  { id: "lead_6", name: "Gaurav Mehta", phone: "9444556677", source: "Website Form", serviceNeeded: "Physio Assessment", responseTime: 2.2, timestamp: "1 day ago", status: "Contacted" }
];

export default function LeadPulseDashboard() {
  // State
  const [leads, setLeads] = useState<Lead[]>(INITIAL_LEADS);
  const [sourceFilter, setSourceFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  // CAC optimization states
  const [adBudget, setAdBudget] = useState<number>(15000); // Monthly budget in INR
  const [targetingRadius, setTargetingRadius] = useState<number>(10); // in km

  // Calculations for CAC Optimizer
  const optimizerResults = useMemo(() => {
    // Dynamic simulation formula based on budget and radius
    const baseCPA = 140; // Base cost per acquisition
    const radiusMultiplier = targetingRadius < 5 ? 0.9 : targetingRadius > 15 ? 1.25 : 1.0;
    const volumeBonus = adBudget > 40000 ? 0.85 : adBudget > 20000 ? 0.92 : 1.0;
    
    const calculatedCAC = Math.round(baseCPA * radiusMultiplier * volumeBonus);
    const projectedLeads = Math.round(adBudget / calculatedCAC);
    const expectedClients = Math.round(projectedLeads * 0.18); // 18% average conversion
    const projectedRevenue = expectedClients * 12000; // 12,000 INR LTV
    const projectedROI = (projectedRevenue / adBudget).toFixed(1);

    return {
      cac: calculatedCAC,
      leads: projectedLeads,
      clients: expectedClients,
      roi: projectedROI
    };
  }, [adBudget, targetingRadius]);

  // Lead dispatch / call simulations
  const handleInstantContact = (leadId: string) => {
    setLeads((prev) =>
      prev.map((l) => {
        if (l.id === leadId) {
          alert(`Simulating Instant Response: Ringing ${l.name} (${l.phone}) via Whypaper CRM routing. Callback initialized successfully.`);
          return { ...l, status: "Contacted", responseTime: 1.2 };
        }
        return l;
      })
    );
  };

  // Filtered Leads
  const filteredLeads = useMemo(() => {
    return leads.filter((l) => {
      const matchSource = sourceFilter === "All" || l.source === sourceFilter;
      const matchSearch = l.name.toLowerCase().includes(searchQuery.toLowerCase()) || l.phone.includes(searchQuery);
      return matchSource && matchSearch;
    });
  }, [leads, sourceFilter, searchQuery]);

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
              <span className="pulse-dot"></span> LeadPulse Hub
            </span>
          </div>
        </div>

        {/* Title */}
        <div style={{ marginBottom: "3rem" }}>
          <span className="tagline" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <TrendingUp size={14} style={{ color: "var(--primary)" }} /> LeadPulse Dashboard
          </span>
          <h1 className="text-gradient" style={{ fontSize: "2.5rem", marginTop: "0.5rem", marginBottom: "0.5rem" }}>
            Unified GBP & Meta Ads Lead Feed
          </h1>
          <p style={{ color: "var(--text-secondary)", maxWidth: "700px" }}>
            Consolidate your active Google Business Profile inquiries, Meta ad campaigns, and website forms into a single real-time screen. Audit receptionist response times and optimize customer acquisition costs live.
          </p>
        </div>

        {/* Key Metrics strip */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "1rem", marginBottom: "2.5rem" }}>
          <div className="glass-card" style={{ padding: "1.5rem" }}>
            <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Total Intake Volume</span>
            <div style={{ fontSize: "2rem", fontWeight: "800", color: "#fff", marginTop: "0.5rem" }}>142 Inquiries</div>
            <span style={{ fontSize: "0.7rem", color: "rgb(50, 200, 50)" }}>▲ 24% month-on-month</span>
          </div>
          <div className="glass-card" style={{ padding: "1.5rem" }}>
            <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Average Response Time</span>
            <div style={{ fontSize: "2rem", fontWeight: "800", color: "#fff", marginTop: "0.5rem" }}>1m 45s</div>
            <span style={{ fontSize: "0.7rem", color: "rgb(50, 200, 50)" }}>⚡ Top 5% in Niche</span>
          </div>
          <div className="glass-card" style={{ padding: "1.5rem" }}>
            <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Average CAC / CPA</span>
            <div style={{ fontSize: "2rem", fontWeight: "800", color: "var(--primary)", marginTop: "0.5rem" }}>₹125 / Lead</div>
            <span style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>Faridabad local targeting</span>
          </div>
          <div className="glass-card" style={{ padding: "1.5rem" }}>
            <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Meta Campaign ROI</span>
            <div style={{ fontSize: "2rem", fontWeight: "800", color: "#fff", marginTop: "0.5rem" }}>8.4x return</div>
            <span style={{ fontSize: "0.7rem", color: "rgb(50, 200, 50)" }}>LTV optimization active</span>
          </div>
        </div>

        {/* Main Work Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "2rem", alignItems: "start" }}>
          
          {/* Left Panel: Lead Feed & Auditing */}
          <div>
            
            {/* Search and filter header */}
            <div className="glass-card" style={{ padding: "1.5rem", background: "rgba(10,10,10,0.6)", marginBottom: "1.5rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
                
                {/* Source buttons */}
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  {["All", "Google Maps", "Meta Ads", "Website Form"].map((src) => (
                    <button
                      key={src}
                      onClick={() => setSourceFilter(src)}
                      className="btn"
                      style={{
                        padding: "0.4rem 0.8rem",
                        fontSize: "0.8rem",
                        background: sourceFilter === src ? "var(--primary)" : "rgba(255, 255, 255, 0.02)",
                        color: sourceFilter === src ? "#fff" : "var(--text-secondary)",
                        border: sourceFilter === src ? "none" : "1px solid var(--border-color)",
                      }}
                    >
                      {src}
                    </button>
                  ))}
                </div>

                {/* Input Search */}
                <div style={{ position: "relative", minWidth: "200px", flex: 1 }}>
                  <Search
                    size={14}
                    style={{ position: "absolute", left: "0.75rem", top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)" }}
                  />
                  <input
                    type="text"
                    placeholder="Search leads by name or no..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "0.4rem 1rem 0.4rem 2.2rem",
                      fontSize: "0.8rem",
                      background: "rgba(255, 255, 255, 0.02)",
                      border: "1px solid var(--border-color)",
                      borderRadius: "6px",
                      color: "#fff"
                    }}
                  />
                </div>

              </div>
            </div>

            {/* Consolidated Lead Feed lists */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {filteredLeads.map((l) => (
                <div
                  key={l.id}
                  className="glass-card"
                  style={{
                    padding: "1.5rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderLeft: l.source === "Google Maps"
                      ? "4px solid rgb(240, 123, 0)"
                      : l.source === "Meta Ads"
                      ? "4px solid rgb(50, 150, 250)"
                      : "4px solid rgb(200, 200, 200)"
                  }}
                >
                  <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                    
                    {/* Source icon badge */}
                    <div style={{
                      padding: "0.75rem",
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid var(--border-color)",
                      borderRadius: "8px",
                      color: l.source === "Google Maps" ? "var(--primary)" : l.source === "Meta Ads" ? "rgb(50,150,250)" : "var(--text-muted)"
                    }}>
                      {l.source === "Google Maps" ? <MapPin size={20} /> : l.source === "Meta Ads" ? <Share2 size={20} /> : <Globe size={20} />}
                    </div>

                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <h4 style={{ fontSize: "1.1rem", fontWeight: "700" }}>{l.name}</h4>
                        <span style={{ fontSize: "0.7rem", background: "rgba(255,255,255,0.05)", padding: "0.2rem 0.4rem", borderRadius: "4px", color: "var(--text-secondary)" }}>
                          {l.source}
                        </span>
                      </div>
                      <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", margin: "0.25rem 0" }}>
                        Inquired for: <strong>{l.serviceNeeded}</strong>
                      </p>
                      <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                        Contact No: {l.phone} • Raised {l.timestamp}
                      </span>
                    </div>

                  </div>

                  {/* Auditing and action buttons */}
                  <div style={{ textAlign: "right", display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.5rem" }}>
                    
                    {/* Response Badge */}
                    <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                      {l.responseTime <= 2 ? (
                        <span style={{ fontSize: "0.75rem", color: "rgb(50, 200, 50)", background: "rgba(50, 200, 50, 0.05)", padding: "0.2rem 0.4rem", borderRadius: "4px", border: "1px solid rgba(50,200,50,0.15)", display: "inline-flex", alignItems: "center", gap: "0.2rem" }}>
                          <Zap size={12} /> Lightning ({l.responseTime}m)
                        </span>
                      ) : l.responseTime < 60 ? (
                        <span style={{ fontSize: "0.75rem", color: "var(--accent-gold)", background: "rgba(212, 175, 55, 0.05)", padding: "0.2rem 0.4rem", borderRadius: "4px", border: "1px solid rgba(212,175,55,0.15)", display: "inline-flex", alignItems: "center", gap: "0.2rem" }}>
                          <Clock size={12} /> Good ({l.responseTime}m)
                        </span>
                      ) : (
                        <span style={{ fontSize: "0.75rem", color: "rgb(220, 50, 50)", background: "rgba(220, 50, 50, 0.05)", padding: "0.2rem 0.4rem", borderRadius: "4px", border: "1px solid rgba(220,50,50,0.15)", display: "inline-flex", alignItems: "center", gap: "0.2rem" }}>
                          <AlertTriangle size={12} /> Leakage Alert ({l.responseTime}m)
                        </span>
                      )}
                    </div>

                    {l.status === "Pending" ? (
                      <button
                        onClick={() => handleInstantContact(l.id)}
                        className="btn btn-primary"
                        style={{ padding: "0.4rem 0.75rem", fontSize: "0.75rem", display: "inline-flex", alignItems: "center", gap: "0.25rem" }}
                      >
                        <Zap size={12} /> Call Customer Now
                      </button>
                    ) : l.status === "Unanswered" ? (
                      <button
                        onClick={() => handleInstantContact(l.id)}
                        className="btn btn-secondary"
                        style={{ padding: "0.4rem 0.75rem", fontSize: "0.75rem", background: "rgba(220,50,50,0.1)", border: "1px solid rgba(220,50,50,0.2)", color: "rgb(220,50,50)" }}
                      >
                        Retry Callback
                      </button>
                    ) : (
                      <span style={{ color: "var(--text-muted)", fontSize: "0.75rem", display: "inline-flex", alignItems: "center", gap: "0.25rem" }}>
                        <ThumbsUp size={12} /> Synced & Contacted
                      </span>
                    )}

                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Panel: Budget & CAC Optimizer Sliders */}
          <div className="glass-card" style={{ padding: "2rem", background: "rgba(15,15,15,0.8)", borderColor: "rgba(240,123,0,0.15)", position: "sticky", top: "100px" }}>
            <h3 style={{ fontSize: "1.2rem", fontWeight: "700", marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Sliders size={18} style={{ color: "var(--primary)" }} /> Ad Campaign CAC Optimizer
            </h3>
            <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "block", marginBottom: "2rem" }}>
              Simulate budgets to optimize customer acquisition costs.
            </span>

            {/* Slider 1: Budget */}
            <div style={{ marginBottom: "2rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem", fontSize: "0.85rem" }}>
                <span style={{ color: "var(--text-secondary)" }}>Monthly Campaign Budget</span>
                <strong style={{ color: "var(--primary)", fontSize: "1rem" }}>₹{adBudget.toLocaleString("en-IN")}</strong>
              </div>
              <input
                type="range"
                min="5000"
                max="100000"
                step="5000"
                value={adBudget}
                onChange={(e) => setAdBudget(Number(e.target.value))}
                style={{ width: "100%", accentColor: "var(--primary)", cursor: "pointer" }}
              />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.7rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>
                <span>₹5k (Starter)</span>
                <span>₹100k (Full Growth)</span>
              </div>
            </div>

            {/* Slider 2: Target Radius */}
            <div style={{ marginBottom: "2.5rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem", fontSize: "0.85rem" }}>
                <span style={{ color: "var(--text-secondary)" }}>Local Target Radius</span>
                <strong style={{ color: "#fff" }}>{targetingRadius} km</strong>
              </div>
              <input
                type="range"
                min="3"
                max="25"
                step="1"
                value={targetingRadius}
                onChange={(e) => setTargetingRadius(Number(e.target.value))}
                style={{ width: "100%", accentColor: "var(--primary)", cursor: "pointer" }}
              />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.7rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>
                <span>3km (Hyperlocal)</span>
                <span>25km (NCR region)</span>
              </div>
            </div>

            {/* Simulated Outputs */}
            <div style={{ background: "rgba(255,255,255,0.01)", border: "1px solid var(--border-color)", borderRadius: "8px", padding: "1.5rem" }}>
              <h4 style={{ fontSize: "0.8rem", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "1rem", letterSpacing: "0.05em" }}>
                Simulated Campaign Forecast
              </h4>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>Expected CPA / CAC</span>
                  <span style={{ fontSize: "1.1rem", fontWeight: "700" }}>₹{optimizerResults.cac} / lead</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>Projected Monthly Leads</span>
                  <span style={{ fontSize: "1.1rem", fontWeight: "700", color: "#fff" }}>~{optimizerResults.leads} Inquiries</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>New Retained Clients</span>
                  <span style={{ fontSize: "1.1rem", fontWeight: "700", color: "rgb(50, 200, 50)" }}>~{optimizerResults.clients} bookings</span>
                </div>
                
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", margin: "0.5rem 0" }}></div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>Forecasted ROI Rate</span>
                  <span style={{ fontSize: "1.3rem", fontWeight: "800", color: "var(--primary)" }}>{optimizerResults.roi}x Return</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
