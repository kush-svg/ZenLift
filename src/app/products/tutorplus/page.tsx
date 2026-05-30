"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Users,
  Calendar,
  MessageSquare,
  DollarSign,
  Plus,
  ArrowRight,
  Check,
  Bell,
  Smartphone,
  BookOpen,
  Send
} from "lucide-react";

// Interfaces
interface Student {
  id: string;
  name: string;
  grade: string;
  subject: string;
  parentName: string;
  parentPhone: string;
  stage: "Inquiry" | "DemoScheduled" | "DemoAttended" | "Enrolled";
  inquiryDate: string;
  feeStatus: "Paid" | "Pending";
  feeAmount: number;
}

interface Batch {
  id: string;
  subject: string;
  grade: string;
  day: string;
  time: string;
  tutor: string;
}

interface WhatsAppLog {
  id: string;
  recipient: string;
  message: string;
  timestamp: string;
  status: "Sent" | "Delivered";
}

const INITIAL_STUDENTS: Student[] = [
  { id: "1", name: "Aarav Gupta", grade: "Class 10", subject: "Mathematics", parentName: "Sanjay Gupta", parentPhone: "9876543210", stage: "Inquiry", inquiryDate: "2026-05-28", feeStatus: "Pending", feeAmount: 3500 },
  { id: "2", name: "Neha Verma", grade: "Class 12", subject: "Physics", parentName: "Meenakshi Verma", parentPhone: "9123456789", stage: "DemoScheduled", inquiryDate: "2026-05-27", feeStatus: "Pending", feeAmount: 4500 },
  { id: "3", name: "Vivaan Malhotra", grade: "Class 9", subject: "Science", parentName: "Raman Malhotra", parentPhone: "9988776655", stage: "DemoAttended", inquiryDate: "2026-05-25", feeStatus: "Paid", feeAmount: 3000 },
  { id: "4", name: "Diya Sharma", grade: "Class 10", subject: "Mathematics", parentName: "Anil Sharma", parentPhone: "9555667788", stage: "Enrolled", inquiryDate: "2026-05-15", feeStatus: "Paid", feeAmount: 3500 },
  { id: "5", name: "Kabir Singh", grade: "Class 11", subject: "Chemistry", parentName: "Harpreet Singh", parentPhone: "9333445566", stage: "Enrolled", inquiryDate: "2026-05-10", feeStatus: "Pending", feeAmount: 4000 }
];

const INITIAL_BATCHES: Batch[] = [
  { id: "1", subject: "Mathematics", grade: "Class 10", day: "Monday", time: "04:00 PM - 05:30 PM", tutor: "Amit Sir" },
  { id: "2", subject: "Physics", grade: "Class 12", day: "Tuesday", time: "05:30 PM - 07:00 PM", tutor: "Karan Sir" },
  { id: "3", subject: "Science", grade: "Class 9", day: "Wednesday", time: "04:00 PM - 05:30 PM", tutor: "Neha Ma'am" },
  { id: "4", subject: "Chemistry", grade: "Class 11", day: "Thursday", time: "05:30 PM - 07:00 PM", tutor: "Amit Sir" }
];

export default function TutorPlusDashboard() {
  // State
  const [activeTab, setActiveTab] = useState<"pipeline" | "scheduler" | "fees">("pipeline");
  const [students, setStudents] = useState<Student[]>(INITIAL_STUDENTS);
  const [batches, setBatches] = useState<Batch[]>(INITIAL_BATCHES);
  const [whatsAppLogs, setWhatsAppLogs] = useState<WhatsAppLog[]>([
    {
      id: "log_1",
      recipient: "Sanjay Gupta (Parent)",
      message: "Dear Sanjay, thanks for inquiring at TutorPlus. We have logged Aarav's interest for Class 10 Mathematics. Team ZenLift.",
      timestamp: "18:42",
      status: "Delivered"
    }
  ]);

  // Scheduler Create Batch states
  const [showAddBatch, setShowAddBatch] = useState<boolean>(false);
  const [newSubject, setNewSubject] = useState<string>("");
  const [newGrade, setNewGrade] = useState<string>("");
  const [newDay, setNewDay] = useState<string>("Monday");
  const [newTime, setNewTime] = useState<string>("04:00 PM");
  const [newTutor, setNewTutor] = useState<string>("");

  // Create Student state
  const [showAddStudent, setShowAddStudent] = useState<boolean>(false);
  const [sName, setSName] = useState<string>("");
  const [sGrade, setSGrade] = useState<string>("");
  const [sSubject, setSSubject] = useState<string>("");
  const [sParent, setSParent] = useState<string>("");
  const [sPhone, setSPhone] = useState<string>("");

  // Pipeline transitions
  const moveStudent = (studentId: string, nextStage: "Inquiry" | "DemoScheduled" | "DemoAttended" | "Enrolled") => {
    setStudents((prev) =>
      prev.map((s) => {
        if (s.id === studentId) {
          // Trigger automatic mock WhatsApp notification log depending on stage transition
          let message = "";
          if (nextStage === "DemoScheduled") {
            message = `Dear ${s.parentName}, a Free Demo Class is scheduled for ${s.name} (${s.grade} - ${s.subject}) on Saturday at 10:00 AM. Kindly ensure attendance. - TutorPlus`;
          } else if (nextStage === "DemoAttended") {
            message = `Dear ${s.parentName}, hope ${s.name} enjoyed the demo class for ${s.subject} today. Special admission offers expire in 48 hours. Secure your seat! - TutorPlus`;
          } else if (nextStage === "Enrolled") {
            message = `Welcome to TutorPlus! ${s.name}'s admission for ${s.grade} ${s.subject} is confirmed. Monthly batches begin next Monday. Team ZenLift.`;
          }

          if (message) {
            const now = new Date();
            const timeStr = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
            setWhatsAppLogs((prevLogs) => [
              {
                id: `log_${now.getTime()}`,
                recipient: `${s.parentName} (${s.parentPhone})`,
                message,
                timestamp: timeStr,
                status: "Sent"
              },
              ...prevLogs
            ]);
          }

          return { ...s, stage: nextStage };
        }
        return s;
      })
    );
  };

  // Add Batch
  const handleCreateBatch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSubject || !newGrade || !newTutor) return;
    
    const newB: Batch = {
      id: `batch_${Date.now()}`,
      subject: newSubject,
      grade: newGrade,
      day: newDay,
      time: `${newTime} - ${String(Number(newTime.split(":")[0]) + 1).padStart(2, "0")}:${newTime.split(":")[1]} PM`,
      tutor: newTutor
    };

    setBatches((prev) => [...prev, newB]);
    setNewSubject("");
    setNewGrade("");
    setNewTutor("");
    setShowAddBatch(false);
  };

  // Add Student
  const handleCreateStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!sName || !sGrade || !sSubject || !sPhone) return;

    const newS: Student = {
      id: `std_${Date.now()}`,
      name: sName,
      grade: sGrade,
      subject: sSubject,
      parentName: sParent || `${sName}'s Parent`,
      parentPhone: sPhone,
      stage: "Inquiry",
      inquiryDate: new Date().toISOString().split("T")[0],
      feeStatus: "Pending",
      feeAmount: 3500
    };

    setStudents((prev) => [...prev, newS]);
    setSName("");
    setSGrade("");
    setSSubject("");
    setSParent("");
    setSPhone("");
    setShowAddStudent(false);
  };

  // Fee collection triggers
  const triggerFeeReminder = (s: Student) => {
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
    const message = `Fee Alert: Dear ${s.parentName}, monthly tuition fees of ₹${s.feeAmount} for ${s.name} (${s.grade} - ${s.subject}) is currently outstanding. Kindly clear before 5th. - TutorPlus`;
    
    setWhatsAppLogs((prevLogs) => [
      {
        id: `log_${now.getTime()}`,
        recipient: `${s.parentName} (${s.parentPhone})`,
        message,
        timestamp: timeStr,
        status: "Sent"
      },
      ...prevLogs
    ]);

    alert(`Simulated Fee Alert: Auto WhatsApp fee reminder logged for ${s.name}. Check Live parent WhatsApp Logs.`);
  };

  const markFeePaid = (studentId: string) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === studentId ? { ...s, feeStatus: "Paid" } : s))
    );
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
              <span className="pulse-dot"></span> TutorPlus Active
            </span>
          </div>
        </div>

        {/* Title */}
        <div style={{ marginBottom: "3rem" }}>
          <span className="tagline" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Users size={14} style={{ color: "var(--primary)" }} /> TutorPlus System
          </span>
          <h1 className="text-gradient" style={{ fontSize: "2.5rem", marginTop: "0.5rem", marginBottom: "0.5rem" }}>
            Student Scheduling & Admissions Manager
          </h1>
          <p style={{ color: "var(--text-secondary)", maxWidth: "700px" }}>
            Take control of your admissions season pipeline, schedule tuition batches on a visual calendar matrix, log fee lists, and automate parent notification WhatsApp dispatches seamlessly.
          </p>
        </div>

        {/* Tabs navigation */}
        <div style={{ display: "flex", borderBottom: "1px solid var(--border-color)", marginBottom: "2.5rem", gap: "1rem" }}>
          <button
            onClick={() => setActiveTab("pipeline")}
            className="btn"
            style={{
              padding: "1rem 1.5rem",
              background: "none",
              border: "none",
              borderBottom: activeTab === "pipeline" ? "2px solid var(--primary)" : "none",
              color: activeTab === "pipeline" ? "var(--primary)" : "var(--text-secondary)",
              borderRadius: "0",
              fontWeight: "600"
            }}
          >
            Admissions Pipeline Board
          </button>
          <button
            onClick={() => setActiveTab("scheduler")}
            className="btn"
            style={{
              padding: "1rem 1.5rem",
              background: "none",
              border: "none",
              borderBottom: activeTab === "scheduler" ? "2px solid var(--primary)" : "none",
              color: activeTab === "scheduler" ? "var(--primary)" : "var(--text-secondary)",
              borderRadius: "0",
              fontWeight: "600"
            }}
          >
            Batch Calendar Scheduler
          </button>
          <button
            onClick={() => setActiveTab("fees")}
            className="btn"
            style={{
              padding: "1rem 1.5rem",
              background: "none",
              border: "none",
              borderBottom: activeTab === "fees" ? "2px solid var(--primary)" : "none",
              color: activeTab === "fees" ? "var(--primary)" : "var(--text-secondary)",
              borderRadius: "0",
              fontWeight: "600"
            }}
          >
            Fee Collection Ledger
          </button>
        </div>

        {/* Main interactive grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "2rem", alignItems: "start" }}>
          
          {/* Left panel: Selected tab dashboard */}
          <div>
            
            {/* 1. Admissions Pipeline Tab */}
            {activeTab === "pipeline" && (
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700" }}>Active Intake Pipeline</h3>
                  <button onClick={() => setShowAddStudent(true)} className="btn btn-primary" style={{ display: "flex", alignItems: "center", gap: "0.25rem", padding: "0.5rem 1rem", fontSize: "0.85rem" }}>
                    <Plus size={16} /> New Inquiry Card
                  </button>
                </div>

                {/* Pipeline Board Grid */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "1rem" }}>
                  
                  {/* Column 1: Inquiries */}
                  <div style={{ background: "rgba(255,255,255,0.01)", border: "1px solid var(--border-color)", borderRadius: "8px", padding: "1rem", minHeight: "350px" }}>
                    <h4 style={{ fontSize: "0.8rem", textTransform: "uppercase", color: "var(--text-muted)", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "0.5rem", marginBottom: "1rem" }}>
                      Inquiry ({students.filter(s => s.stage === "Inquiry").length})
                    </h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                      {students.filter(s => s.stage === "Inquiry").map(s => (
                        <div key={s.id} className="glass-card" style={{ padding: "1rem", fontSize: "0.8rem" }}>
                          <strong style={{ display: "block", fontSize: "0.9rem" }}>{s.name}</strong>
                          <span style={{ color: "var(--text-muted)", display: "block", margin: "0.25rem 0" }}>{s.grade} • {s.subject}</span>
                          <button
                            onClick={() => moveStudent(s.id, "DemoScheduled")}
                            style={{ width: "100%", marginTop: "0.75rem", fontSize: "0.75rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.25rem", padding: "0.25rem 0" }}
                            className="btn btn-secondary"
                          >
                            Schedule Demo <ArrowRight size={12} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Column 2: Demo Scheduled */}
                  <div style={{ background: "rgba(255,255,255,0.01)", border: "1px solid var(--border-color)", borderRadius: "8px", padding: "1rem", minHeight: "350px" }}>
                    <h4 style={{ fontSize: "0.8rem", textTransform: "uppercase", color: "var(--text-muted)", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "0.5rem", marginBottom: "1rem" }}>
                      Demo Booked ({students.filter(s => s.stage === "DemoScheduled").length})
                    </h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                      {students.filter(s => s.stage === "DemoScheduled").map(s => (
                        <div key={s.id} className="glass-card" style={{ padding: "1rem", fontSize: "0.8rem", borderColor: "rgba(240, 123, 0, 0.25)" }}>
                          <strong style={{ display: "block", fontSize: "0.9rem" }}>{s.name}</strong>
                          <span style={{ color: "var(--text-muted)", display: "block", margin: "0.25rem 0" }}>{s.grade} • {s.subject}</span>
                          <button
                            onClick={() => moveStudent(s.id, "DemoAttended")}
                            style={{ width: "100%", marginTop: "0.75rem", fontSize: "0.75rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.25rem", padding: "0.25rem 0" }}
                            className="btn btn-secondary"
                          >
                            Mark Attended <ArrowRight size={12} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Column 3: Demo Attended */}
                  <div style={{ background: "rgba(255,255,255,0.01)", border: "1px solid var(--border-color)", borderRadius: "8px", padding: "1rem", minHeight: "350px" }}>
                    <h4 style={{ fontSize: "0.8rem", textTransform: "uppercase", color: "var(--text-muted)", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "0.5rem", marginBottom: "1rem" }}>
                      Attended ({students.filter(s => s.stage === "DemoAttended").length})
                    </h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                      {students.filter(s => s.stage === "DemoAttended").map(s => (
                        <div key={s.id} className="glass-card" style={{ padding: "1rem", fontSize: "0.8rem" }}>
                          <strong style={{ display: "block", fontSize: "0.9rem" }}>{s.name}</strong>
                          <span style={{ color: "var(--text-muted)", display: "block", margin: "0.25rem 0" }}>{s.grade} • {s.subject}</span>
                          <button
                            onClick={() => moveStudent(s.id, "Enrolled")}
                            style={{ width: "100%", marginTop: "0.75rem", fontSize: "0.75rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.25rem", padding: "0.25rem 0" }}
                            className="btn btn-primary"
                          >
                            Mark Enrolled <Check size={12} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Column 4: Enrolled */}
                  <div style={{ background: "rgba(255,255,255,0.01)", border: "1px solid var(--border-color)", borderRadius: "8px", padding: "1rem", minHeight: "350px" }}>
                    <h4 style={{ fontSize: "0.8rem", textTransform: "uppercase", color: "rgb(50, 200, 50)", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "0.5rem", marginBottom: "1rem" }}>
                      Enrolled ({students.filter(s => s.stage === "Enrolled").length})
                    </h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                      {students.filter(s => s.stage === "Enrolled").map(s => (
                        <div key={s.id} className="glass-card" style={{ padding: "1rem", fontSize: "0.8rem", borderColor: "rgba(50, 200, 50, 0.25)" }}>
                          <strong style={{ display: "block", fontSize: "0.9rem", color: "rgb(50, 200, 50)" }}>{s.name}</strong>
                          <span style={{ color: "var(--text-muted)", display: "block", margin: "0.25rem 0" }}>{s.grade} • {s.subject}</span>
                          <span style={{ display: "block", fontSize: "0.7rem", color: "var(--text-muted)", marginTop: "0.5rem" }}>
                            ✓ Sync Successful
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* 2. Batch Scheduler Tab */}
            {activeTab === "scheduler" && (
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700" }}>Active Batch Class Matrix</h3>
                  <button onClick={() => setShowAddBatch(true)} className="btn btn-primary" style={{ display: "flex", alignItems: "center", gap: "0.25rem", padding: "0.5rem 1rem", fontSize: "0.85rem" }}>
                    <Plus size={16} /> New Batch Setup
                  </button>
                </div>

                {/* Calendar Schedule list */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  {batches.map((b) => (
                    <div key={b.id} className="glass-card" style={{ padding: "1.5rem", display: "flex", gap: "1rem", alignItems: "center" }}>
                      <div style={{ padding: "1rem", background: "rgba(240, 123, 0, 0.05)", border: "1px solid var(--border-color)", borderRadius: "8px" }}>
                        <BookOpen size={24} style={{ color: "var(--primary)" }} />
                      </div>
                      <div>
                        <span style={{ fontSize: "0.75rem", background: "rgba(255,255,255,0.05)", padding: "0.2rem 0.4rem", borderRadius: "4px", color: "var(--text-muted)" }}>
                          {b.day}
                        </span>
                        <h4 style={{ fontSize: "1.1rem", fontWeight: "700", margin: "0.3rem 0" }}>
                          {b.grade} - {b.subject}
                        </h4>
                        <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", margin: "0.2rem 0" }}>
                          🕒 {b.time}
                        </p>
                        <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                          👨‍🏫 Tutor: {b.tutor}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. Fee Ledger Tab */}
            {activeTab === "fees" && (
              <div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "700", marginBottom: "1.5rem" }}>Monthly Tuition Fee Ledger</h3>
                
                <div className="glass-card" style={{ padding: "1.5rem 0", background: "rgba(10,10,10,0.6)" }}>
                  <div style={{ overflowX: "auto" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
                      <thead>
                        <tr style={{ textAlign: "left", borderBottom: "1px solid var(--border-color)", color: "var(--text-muted)" }}>
                          <th style={{ padding: "1rem" }}>Student</th>
                          <th style={{ padding: "1rem" }}>Course Subject</th>
                          <th style={{ padding: "1rem" }}>Monthly Fee</th>
                          <th style={{ padding: "1rem" }}>Status</th>
                          <th style={{ padding: "1rem", textAlign: "right" }}>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {students.filter(s => s.stage === "Enrolled").map((s) => (
                          <tr key={s.id} style={{ borderBottom: "1px solid rgba(255,255,255,0.03)" }}>
                            <td style={{ padding: "1rem", fontWeight: "600" }}>{s.name}</td>
                            <td style={{ padding: "1rem" }}>{s.grade} • {s.subject}</td>
                            <td style={{ padding: "1rem", fontWeight: "700" }}>₹{s.feeAmount}</td>
                            <td style={{ padding: "1rem" }}>
                              <span
                                style={{
                                  fontSize: "0.75rem",
                                  padding: "0.2rem 0.5rem",
                                  borderRadius: "4px",
                                  background: s.feeStatus === "Paid" ? "rgba(50, 200, 50, 0.1)" : "rgba(220, 50, 50, 0.1)",
                                  color: s.feeStatus === "Paid" ? "rgb(50, 200, 50)" : "rgb(220, 50, 50)",
                                  border: s.feeStatus === "Paid" ? "1px solid rgba(50,200,50,0.2)" : "1px solid rgba(220,50,50,0.2)"
                                }}
                              >
                                {s.feeStatus}
                              </span>
                            </td>
                            <td style={{ padding: "1rem", textAlign: "right" }}>
                              {s.feeStatus === "Pending" ? (
                                <div style={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end" }}>
                                  <button
                                    onClick={() => triggerFeeReminder(s)}
                                    className="btn btn-secondary"
                                    style={{ padding: "0.25rem 0.5rem", fontSize: "0.75rem", display: "inline-flex", alignItems: "center", gap: "0.25rem" }}
                                  >
                                    <Bell size={12} /> Send Alert
                                  </button>
                                  <button
                                    onClick={() => markFeePaid(s.id)}
                                    className="btn btn-primary"
                                    style={{ padding: "0.25rem 0.5rem", fontSize: "0.75rem" }}
                                  >
                                    Mark Paid
                                  </button>
                                </div>
                              ) : (
                                <span style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>Ledger Clean</span>
                              )}
                            </td>
                          </tr>
                        ))}
                        {students.filter(s => s.stage === "Enrolled").length === 0 && (
                          <tr>
                            <td colSpan={5} style={{ padding: "3rem 1rem", textAlign: "center", color: "var(--text-muted)" }}>
                              No enrolled students yet in the active database.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right panel: Parent WhatsApp Gateway log simulation */}
          <div className="glass-card" style={{ padding: "2rem", background: "rgba(15,15,15,0.8)", borderColor: "rgba(240,123,0,0.15)", position: "sticky", top: "100px" }}>
            <h3 style={{ fontSize: "1.2rem", fontWeight: "700", marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Smartphone size={18} style={{ color: "var(--primary)" }} /> Parent WhatsApp Gateway
            </h3>
            <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "block", marginBottom: "2rem" }}>
              Simulates automated student intake alert dispatches live.
            </span>

            {/* Smart mobile phone frame mockup */}
            <div style={{
              background: "#080808",
              border: "8px solid rgba(255,255,255,0.05)",
              borderRadius: "24px",
              padding: "1rem",
              minHeight: "380px",
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
                width: "60px",
                height: "8px",
                background: "rgba(255,255,255,0.1)",
                borderRadius: "4px",
                zIndex: 2
              }}></div>

              {/* Chat head */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "0.75rem", marginTop: "0.5rem", marginBottom: "1rem" }}>
                <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem", fontWeight: "800", color: "#fff" }}>
                  TP
                </div>
                <div>
                  <h4 style={{ fontSize: "0.8rem", fontWeight: "700", color: "#fff" }}>TutorPlus WhatsApp Bot</h4>
                  <span style={{ fontSize: "0.6rem", color: "rgb(50, 200, 50)" }}>● Connected & Ready</span>
                </div>
              </div>

              {/* Messages Body */}
              <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: "0.75rem", paddingRight: "0.25rem", maxHeight: "280px" }}>
                {whatsAppLogs.map((log) => (
                  <div
                    key={log.id}
                    style={{
                      background: "rgba(240, 123, 0, 0.08)",
                      border: "1px solid rgba(240, 123, 0, 0.15)",
                      borderRadius: "12px 12px 0 12px",
                      padding: "0.75rem",
                      fontSize: "0.75rem",
                      alignSelf: "flex-end",
                      maxWidth: "90%",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
                    }}
                  >
                    <span style={{ fontWeight: "700", color: "var(--primary)", fontSize: "0.65rem", display: "block", marginBottom: "0.2rem" }}>
                      To: {log.recipient}
                    </span>
                    <p style={{ color: "rgba(255,255,255,0.95)", lineHeight: "1.4" }}>{log.message}</p>
                    <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.25rem", marginTop: "0.3rem", fontSize: "0.6rem", color: "var(--text-muted)" }}>
                      <span>{log.timestamp}</span>
                      <span style={{ color: "rgb(50, 200, 50)" }}>✓ Sent</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Modal Add Batch Form */}
      {showAddBatch && (
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
            <h3 style={{ fontSize: "1.4rem", fontWeight: "700", marginBottom: "1.5rem" }}>Create Class Batch</h3>
            
            <form onSubmit={handleCreateBatch}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.3rem" }}>Grade / Class</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Class 10"
                    value={newGrade}
                    onChange={(e) => setNewGrade(e.target.value)}
                    style={{ width: "100%", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border-color)", padding: "0.5rem 0.75rem", borderRadius: "6px", color: "#fff", fontSize: "0.85rem" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.3rem" }}>Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Mathematics"
                    value={newSubject}
                    onChange={(e) => setNewSubject(e.target.value)}
                    style={{ width: "100%", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border-color)", padding: "0.5rem 0.75rem", borderRadius: "6px", color: "#fff", fontSize: "0.85rem" }}
                  />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.3rem" }}>Weekly Day</label>
                    <select
                      value={newDay}
                      onChange={(e) => setNewDay(e.target.value)}
                      style={{ width: "100%", background: "rgb(15,15,15)", border: "1px solid var(--border-color)", padding: "0.5rem 0.75rem", borderRadius: "6px", color: "#fff", fontSize: "0.85rem" }}
                    >
                      {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(d => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.3rem" }}>Start Time</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., 04:00 PM"
                      value={newTime}
                      onChange={(e) => setNewTime(e.target.value)}
                      style={{ width: "100%", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border-color)", padding: "0.5rem 0.75rem", borderRadius: "6px", color: "#fff", fontSize: "0.85rem" }}
                    />
                  </div>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.3rem" }}>Teacher / Tutor Assigned</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Amit Sir"
                    value={newTutor}
                    onChange={(e) => setNewTutor(e.target.value)}
                    style={{ width: "100%", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border-color)", padding: "0.5rem 0.75rem", borderRadius: "6px", color: "#fff", fontSize: "0.85rem" }}
                  />
                </div>

                <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
                  <button type="submit" className="btn btn-primary" style={{ flex: 1, padding: "0.6rem" }}>
                    Configure Batch
                  </button>
                  <button type="button" onClick={() => setShowAddBatch(false)} className="btn btn-secondary" style={{ flex: 1, padding: "0.6rem" }}>
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal Add Student Form */}
      {showAddStudent && (
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
            <h3 style={{ fontSize: "1.4rem", fontWeight: "700", marginBottom: "1.5rem" }}>Record Student Inquiry</h3>
            
            <form onSubmit={handleCreateStudent}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.3rem" }}>Student Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter student name"
                    value={sName}
                    onChange={(e) => setSName(e.target.value)}
                    style={{ width: "100%", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border-color)", padding: "0.5rem 0.75rem", borderRadius: "6px", color: "#fff", fontSize: "0.85rem" }}
                  />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.3rem" }}>Grade / Class</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Class 10"
                      value={sGrade}
                      onChange={(e) => setSGrade(e.target.value)}
                      style={{ width: "100%", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border-color)", padding: "0.5rem 0.75rem", borderRadius: "6px", color: "#fff", fontSize: "0.85rem" }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.3rem" }}>Course Subject</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Physics"
                      value={sSubject}
                      onChange={(e) => setSSubject(e.target.value)}
                      style={{ width: "100%", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border-color)", padding: "0.5rem 0.75rem", borderRadius: "6px", color: "#fff", fontSize: "0.85rem" }}
                    />
                  </div>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.3rem" }}>Parent Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter parent's full name"
                    value={sParent}
                    onChange={(e) => setSParent(e.target.value)}
                    style={{ width: "100%", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border-color)", padding: "0.5rem 0.75rem", borderRadius: "6px", color: "#fff", fontSize: "0.85rem" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.3rem" }}>Contact WhatsApp Number</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., +91 98765 43210"
                    value={sPhone}
                    onChange={(e) => setSPhone(e.target.value)}
                    style={{ width: "100%", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border-color)", padding: "0.5rem 0.75rem", borderRadius: "6px", color: "#fff", fontSize: "0.85rem" }}
                  />
                </div>

                <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
                  <button type="submit" className="btn btn-primary" style={{ flex: 1, padding: "0.6rem" }}>
                    Create Inquiry
                  </button>
                  <button type="button" onClick={() => setShowAddStudent(false)} className="btn btn-secondary" style={{ flex: 1, padding: "0.6rem" }}>
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
