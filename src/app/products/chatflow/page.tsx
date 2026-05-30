"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  MessageSquare,
  Plus,
  Trash2,
  Send,
  Smartphone,
  Save,
  Check,
  RotateCcw,
  Sparkles,
  Bot
} from "lucide-react";

// Interfaces
interface TriggerRule {
  id: string;
  trigger: string; // keyword trigger
  reply: string; // auto answer
}

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
}

const INITIAL_RULES: TriggerRule[] = [
  { id: "rule_1", trigger: "fees", reply: "Our primary consulting fee is ₹500. Standard dental procedures range from ₹2,000 to ₹18,000 depending on the treatment. Shall I check available slots for an assessment?" },
  { id: "rule_2", trigger: "timings", reply: "We are open Mon-Sat, 9:00 AM to 8:00 PM. Sundays are by pre-booked emergencies only. Would you like to schedule a consultation?" },
  { id: "rule_3", trigger: "location", reply: "We are located at Shop No. 12, Main Market, Sector 15, Faridabad, Haryana. Click here for Google Maps directions: https://maps.google.com" },
  { id: "rule_4", trigger: "book", reply: "I can help you book! Please share your (1) Full Name, (2) Grade/Class or Specialty needed, and (3) Preferred Day. Our coordinator will contact you instantly." }
];

export default function ChatFlowDashboard() {
  // State
  const [welcomeMessage, setWelcomeMessage] = useState<string>(
    "Hi there! Welcome to ZenLift Hub. How can I help you today? Please tap a suggestion below or ask me about our fees, timings, location, or booking a slot!"
  );
  const [rules, setRules] = useState<TriggerRule[]>(INITIAL_RULES);
  const [chatMessages, setChatMessages] = useState<Message[]>([
    {
      id: "msg_init",
      sender: "bot",
      text: "Hi there! Welcome to ZenLift Hub. How can I help you today? Please tap a suggestion below or ask me about our fees, timings, location, or booking a slot!",
      timestamp: "09:00"
    }
  ]);
  const [userTypedMessage, setUserTypedMessage] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);

  // New Rule form states
  const [newTrigger, setNewTrigger] = useState<string>("");
  const [newReply, setNewReply] = useState<string>("");
  const [showAddRule, setShowAddRule] = useState<boolean>(false);
  const [rulesSaved, setRulesSaved] = useState<boolean>(false);

  // Reference to auto scroll chat
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages, isTyping]);

  // Synchronize initial message when welcome message is saved
  const handleSaveWelcome = () => {
    setChatMessages((prev) =>
      prev.map((msg) =>
        msg.id === "msg_init" ? { ...msg, text: welcomeMessage } : msg
      )
    );
    setRulesSaved(true);
    setTimeout(() => setRulesSaved(false), 2000);
  };

  // Cart operations
  const addTriggerRule = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTrigger || !newReply) return;

    const newRule: TriggerRule = {
      id: `rule_${Date.now()}`,
      trigger: newTrigger.toLowerCase().trim(),
      reply: newReply
    };

    setRules((prev) => [...prev, newRule]);
    setNewTrigger("");
    setNewReply("");
    setShowAddRule(false);
  };

  const deleteRule = (ruleId: string) => {
    setRules((prev) => prev.filter((r) => r.id !== ruleId));
  };

  // Reset chat session mockup
  const handleResetChat = () => {
    setChatMessages([
      {
        id: "msg_init",
        sender: "bot",
        text: welcomeMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  // Bot response parser logic
  const triggerBotReply = (userText: string) => {
    setIsTyping(true);

    setTimeout(() => {
      const normalizedText = userText.toLowerCase();
      
      // Match trigger keyword
      const matchedRule = rules.find((r) => normalizedText.includes(r.trigger));
      
      let replyText = "";
      if (matchedRule) {
        replyText = matchedRule.reply;
      } else {
        replyText = "I'm a local FAQ assistant. I didn't quite catch that trigger. Could you try asking about 'fees', 'timings', 'location', or 'book a slot'?";
      }

      const now = new Date();
      const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      setChatMessages((prev) => [
        ...prev,
        {
          id: `msg_${now.getTime()}`,
          sender: "bot",
          text: replyText,
          timestamp: timeStr
        }
      ]);
      
      setIsTyping(false);
    }, 1000); // 1s typing indicator delay
  };

  // Send Message
  const handleSendMessage = (textToSend?: string) => {
    const finalMsg = textToSend || userTypedMessage;
    if (!finalMsg.trim()) return;

    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    setChatMessages((prev) => [
      ...prev,
      {
        id: `msg_${now.getTime()}`,
        sender: "user",
        text: finalMsg,
        timestamp: timeStr
      }
    ]);

    if (!textToSend) {
      setUserTypedMessage("");
    }

    triggerBotReply(finalMsg);
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
              <span className="pulse-dot"></span> ChatFlow Designer Active
            </span>
          </div>
        </div>

        {/* Title */}
        <div style={{ marginBottom: "3rem" }}>
          <span className="tagline" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <MessageSquare size={14} style={{ color: "var(--primary)" }} /> ChatFlow Panel
          </span>
          <h1 className="text-gradient" style={{ fontSize: "2.5rem", marginTop: "0.5rem", marginBottom: "0.5rem" }}>
            FAQ Chatbot Designer & Simulator
          </h1>
          <p style={{ color: "var(--text-secondary)", maxWidth: "700px" }}>
            Design your client's automated front-desk assistant instantly. Set up visual greetings, customize trigger auto-reply keywords, and test the results inside a high-fidelity mobile device simulator in real-time.
          </p>
        </div>

        {/* Main Workspace grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1.25fr 0.75fr", gap: "2rem", alignItems: "start" }}>
          
          {/* Left panel: Greetings & FAQ triggers editor */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            
            {/* Greetings Setup Card */}
            <div className="glass-card" style={{ padding: "2rem", background: "rgba(10,10,10,0.6)" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: "700", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Sparkles size={16} style={{ color: "var(--primary)" }} /> Bot Welcome Greeting Setup
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", marginBottom: "1.5rem" }}>
                Customize the initial message your customers receive when they initiate the WhatsApp click-to-chat or Tidio website widget.
              </p>

              <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-end" }}>
                <textarea
                  value={welcomeMessage}
                  onChange={(e) => setWelcomeMessage(e.target.value)}
                  style={{
                    flex: 1,
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid var(--border-color)",
                    padding: "0.75rem",
                    fontSize: "0.85rem",
                    borderRadius: "8px",
                    color: "#fff",
                    minHeight: "80px",
                    resize: "none"
                  }}
                />
                <button
                  onClick={handleSaveWelcome}
                  className="btn btn-primary"
                  style={{ padding: "0.75rem 1.2rem", display: "flex", alignItems: "center", gap: "0.25rem", height: "fit-content" }}
                >
                  {rulesSaved ? <Check size={16} /> : <Save size={16} />} Save
                </button>
              </div>
            </div>

            {/* Keyword triggers dictionary Card */}
            <div className="glass-card" style={{ padding: "2rem", background: "rgba(10,10,10,0.6)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "700" }}>FAQ Keyword Auto-Reply Triggers</h3>
                <button
                  onClick={() => setShowAddRule(true)}
                  className="btn btn-primary"
                  style={{ display: "flex", alignItems: "center", gap: "0.25rem", padding: "0.4rem 0.8rem", fontSize: "0.8rem" }}
                >
                  <Plus size={16} /> Add FAQ Trigger
                </button>
              </div>

              {/* Rules Lists */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {rules.map((r) => (
                  <div
                    key={r.id}
                    style={{
                      padding: "1.2rem",
                      background: "rgba(255,255,255,0.01)",
                      border: "1px solid var(--border-color)",
                      borderRadius: "10px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "start",
                      gap: "1.5rem"
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <span style={{ fontSize: "0.7rem", background: "rgba(240, 123, 0, 0.1)", border: "1px solid rgba(240,123,0,0.2)", padding: "0.2rem 0.5rem", borderRadius: "4px", color: "var(--primary)", fontWeight: "700", textTransform: "uppercase" }}>
                        Keyword Trigger: "{r.trigger}"
                      </span>
                      <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "0.6rem", lineHeight: "1.4" }}>
                        {r.reply}
                      </p>
                    </div>

                    <button
                      onClick={() => deleteRule(r.id)}
                      style={{ background: "none", border: "none", color: "rgba(220, 50, 50, 0.6)", cursor: "pointer", padding: "0.25rem" }}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right panel: Phone simulator chat sandbox */}
          <div className="glass-card" style={{ padding: "2rem", background: "rgba(15,15,15,0.8)", borderColor: "rgba(240,123,0,0.15)", position: "sticky", top: "100px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: "700", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Smartphone size={18} style={{ color: "var(--primary)" }} /> Chat Sandbox Mockup
              </h3>
              <button
                onClick={handleResetChat}
                style={{ background: "none", border: "none", color: "var(--text-secondary)", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.2rem", fontSize: "0.75rem" }}
              >
                <RotateCcw size={12} /> Reset Chat
              </button>
            </div>
            <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "block", marginBottom: "2rem" }}>
              Live test your defined auto-reply triggers below.
            </span>

            {/* Smart Phone frame */}
            <div style={{
              background: "#080808",
              border: "10px solid rgba(255,255,255,0.05)",
              borderRadius: "28px",
              padding: "1rem",
              minHeight: "440px",
              display: "flex",
              flexDirection: "column",
              boxShadow: "inset 0 0 20px rgba(0,0,0,0.9)",
              position: "relative"
            }}>
              
              {/* Speaker & notch */}
              <div style={{
                position: "absolute",
                top: "4px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "70px",
                height: "8px",
                background: "rgba(255,255,255,0.1)",
                borderRadius: "4px",
                zIndex: 2
              }}></div>

              {/* Chat Header details */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "0.75rem", marginTop: "0.5rem", marginBottom: "1rem" }}>
                <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
                  <Bot size={14} />
                </div>
                <div>
                  <h4 style={{ fontSize: "0.8rem", fontWeight: "700", color: "#fff" }}>FAQ Receptionist Bot</h4>
                  <span style={{ fontSize: "0.6rem", color: "rgb(50, 200, 50)" }}>● Live Sandbox</span>
                </div>
              </div>

              {/* Chat Message feed */}
              <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: "0.75rem", paddingRight: "0.25rem", maxHeight: "250px", marginBottom: "1rem" }}>
                {chatMessages.map((msg) => (
                  <div
                    key={msg.id}
                    style={{
                      background: msg.sender === "bot" ? "rgba(255,255,255,0.03)" : "rgba(240, 123, 0, 0.08)",
                      border: msg.sender === "bot" ? "1px solid var(--border-color)" : "1px solid rgba(240,123,0,0.15)",
                      borderRadius: msg.sender === "bot" ? "12px 12px 12px 0" : "12px 12px 0 12px",
                      padding: "0.6rem 0.8rem",
                      fontSize: "0.75rem",
                      alignSelf: msg.sender === "bot" ? "flex-start" : "flex-end",
                      maxWidth: "85%",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                      lineHeight: "1.4"
                    }}
                  >
                    <p style={{ color: "rgba(255,255,255,0.95)" }}>{msg.text}</p>
                    <span style={{ display: "block", textAlign: "right", fontSize: "0.6rem", color: "var(--text-muted)", marginTop: "0.2rem" }}>
                      {msg.timestamp}
                    </span>
                  </div>
                ))}

                {/* Typing bubble indicator */}
                {isTyping && (
                  <div style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid var(--border-color)",
                    borderRadius: "12px 12px 12px 0",
                    padding: "0.5rem 0.8rem",
                    fontSize: "0.75rem",
                    alignSelf: "flex-start",
                    color: "var(--text-muted)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.2rem",
                    width: "fit-content"
                  }}>
                    <span className="dot-blink">●</span>
                    <span className="dot-blink" style={{ animationDelay: "0.2s" }}>●</span>
                    <span className="dot-blink" style={{ animationDelay: "0.4s" }}>●</span>
                  </div>
                )}

                <div ref={chatEndRef} />
              </div>

              {/* Tap Suggestion pills */}
              <div style={{ display: "flex", gap: "0.4rem", overflowX: "auto", paddingBottom: "0.5rem", marginBottom: "0.5rem" }}>
                {rules.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => handleSendMessage(r.trigger)}
                    style={{
                      padding: "0.3rem 0.6rem",
                      fontSize: "0.7rem",
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid var(--border-color)",
                      borderRadius: "15px",
                      color: "var(--text-secondary)",
                      cursor: "pointer",
                      whiteSpace: "nowrap"
                    }}
                  >
                    {r.trigger}
                  </button>
                ))}
              </div>

              {/* Input Message box */}
              <div style={{ display: "flex", gap: "0.5rem", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "0.75rem" }}>
                <input
                  type="text"
                  placeholder="Type inquiry e.g. timings..."
                  value={userTypedMessage}
                  onChange={(e) => setUserTypedMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                  style={{
                    flex: 1,
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid var(--border-color)",
                    padding: "0.4rem 0.75rem",
                    fontSize: "0.8rem",
                    borderRadius: "6px",
                    color: "#fff"
                  }}
                />
                <button
                  onClick={() => handleSendMessage()}
                  className="btn btn-primary"
                  style={{ padding: "0.4rem", display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                  <Send size={14} />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Modal Add Trigger Form */}
      {showAddRule && (
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
            <h3 style={{ fontSize: "1.4rem", fontWeight: "700", marginBottom: "1.5rem" }}>Configure FAQ Trigger</h3>
            
            <form onSubmit={addTriggerRule}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "0.3rem" }}>User Keyword Trigger</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., pricing"
                    value={newTrigger}
                    onChange={(e) => setNewTrigger(e.target.value)}
                    style={{ width: "100%", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border-color)", padding: "0.5rem 0.75rem", borderRadius: "6px", color: "#fff", fontSize: "0.85rem" }}
                  />
                  <span style={{ fontSize: "0.7rem", color: "var(--text-muted)", display: "block", marginTop: "0.25rem" }}>
                    The chatbot scans for this exact word inside the user's input message.
                  </span>
                </div>
                
                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "0.3rem" }}>Chatbot Auto-Reply Answer</label>
                  <textarea
                    required
                    placeholder="Write the auto reply message here..."
                    value={newReply}
                    onChange={(e) => setNewReply(e.target.value)}
                    style={{ width: "100%", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border-color)", padding: "0.5rem 0.75rem", borderRadius: "6px", color: "#fff", fontSize: "0.85rem", minHeight: "100px", resize: "none" }}
                  />
                </div>

                <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
                  <button type="submit" className="btn btn-primary" style={{ flex: 1, padding: "0.6rem" }}>
                    Confirm Trigger
                  </button>
                  <button type="button" onClick={() => setShowAddRule(false)} className="btn btn-secondary" style={{ flex: 1, padding: "0.6rem" }}>
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
