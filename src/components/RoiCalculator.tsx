/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from "react";
import { 
  TrendingUp, 
  Coins, 
  ShieldAlert, 
  Clock, 
  ArrowRightLeft, 
  Users, 
  Ticket, 
  Zap, 
  CheckCircle, 
  HelpCircle,
  TrendingDown,
  Info
} from "lucide-react";

interface RoiState {
  headcount: number;
  ticketsPerMonth: number;
  queueDelayDays: number;
  disruptionHours: number;
  deflectionRate: number;
}

export default function RoiCalculator() {
  // Initialize slider states in a single state object
  const [inputs, setInputs] = useState<RoiState>({
    headcount: 14000,
    ticketsPerMonth: 0.15,
    queueDelayDays: 3.4,
    disruptionHours: 4.5,
    deflectionRate: 75,
  });

  // Setup static/calculated parameters for the Microsoft Security Stack context
  const hrAgentMinutes = 20; // Baseline manual SecOps triage latency (minutes) for unresolved/siloed security incidents
  const BLENDED_HOURLY_RATE = 50; // Standardized fully loaded US enterprise rate ($50/hour)

  // Calculations based on deterministic formulas
  const calculations = useMemo(() => {
    // 1. Annual Tickets: Global Headcount * Monthly Tickets per Employee * 12
    const annualTickets = inputs.headcount * inputs.ticketsPerMonth * 12;

    // 2. Security Incidents: Assuming a industry standard of 12% of total support tickets are security-related events or incidents
    const annualSecurityIncidents = annualTickets * 0.12;

    // 3. Service Disruption Hours (Hours): annualSecurityIncidents * inputs.disruptionHours
    const serviceDisruptionHours = annualSecurityIncidents * inputs.disruptionHours;

    // 4. Idle Queue Latency Wait (Hours): Annual Tickets * (daysResponseDelay * 0.1)
    // Context: Downtime drag while waiting for manual device approval and provisioning vs. Intune auto-enrollment
    const idleQueueHours = annualTickets * (inputs.queueDelayDays * 0.1);

    // 5. IT Security Triage / SecOps Manual SLA Overhead (Hours): Annual Tickets * (hrAgentMinutes / 60)
    const hrAdminHours = annualTickets * (hrAgentMinutes / 60);

    // 6. Total Cost of Inaction: (Service Disruption Hours + Idle Queue Hours + HR/SecOps Hours) * BLENDED_HOURLY_RATE
    const totalCostOfInaction = (serviceDisruptionHours + idleQueueHours + hrAdminHours) * BLENDED_HOURLY_RATE;

    // 7. Platform Implementation Cost: licensing package adjusted to corporate size ($12/user/yr standard scale + enterprise baseline setup)
    const platformCost = (inputs.headcount * 12) + 45000;

    // 8. Annual Realized Productivity Savings: Total Cost of Inaction * (aiDeflectionRate / 100)
    // Context: Automated incident resolution via Sentinel SIEM/SOAR & Microsoft Security Copilot assistance
    const annualSavings = totalCostOfInaction * (inputs.deflectionRate / 100);

    // 9. Net Annual Saved: Annual Realized Savings - Platform Implementation Cost
    const netAnnualSaved = annualSavings - platformCost;

    // 10. Payback Period: (Platform Cost / Annual Saved) * 12
    const paybackPeriodMonths = annualSavings > 0 ? (platformCost / annualSavings) * 12 : 999;

    return {
      annualTickets,
      annualSecurityIncidents,
      serviceDisruptionHours,
      idleQueueHours,
      hrAdminHours,
      totalCostOfInaction,
      platformCost,
      annualSavings,
      netAnnualSaved,
      paybackPeriodMonths,
    };
  }, [inputs]);

  // Handler for state modifications
  const handleSliderChange = (key: keyof RoiState, value: number) => {
    setInputs(prev => ({
      ...prev,
      [key]: value
    }));
  };

  // Humanize integers for display in US Dollars
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0
    }).format(val);
  };

  const formatNumber = (val: number) => {
    return new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(val);
  };

  const formatHours = (val: number) => {
    return new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }).format(val);
  };

  return (
    <div className="flex flex-col h-full bg-[#0a0b0f] text-slate-100 rounded-2xl shadow-2xl overflow-hidden border border-slate-800/80">
      
      {/* Visual Header Banner */}
      <div className="bg-[#0e1015]/90 border-b border-slate-800/80 p-5 shrink-0 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[9px] bg-amber-500/10 text-amber-550 border border-amber-500/20 px-2 py-0.5 rounded font-mono font-bold tracking-widest uppercase">
              Financial & Resource ROI Model
            </span>
            <span className="text-[9px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded font-mono font-semibold tracking-widest uppercase">
              Microsoft Stack Configured
            </span>
          </div>
          <h2 className="text-xl font-bold font-serif italic text-white tracking-tight">
            Security & Operations Business Case
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Analyze compounding savings driven by unified identity validation, streamlined device onboarding, and Sentinel/Copilot auto-remediation.
          </p>
        </div>
        
        {/* Quick HUD Metrics */}
        <div className="flex gap-4 bg-[#11131c] border border-slate-800/60 p-2.5 rounded-xl text-xs">
          <div>
            <span className="block text-slate-500 text-[9px] uppercase font-mono tracking-wider">Tickets Solved</span>
            <span className="font-semibold text-sky-400">{formatNumber(calculations.annualTickets)} / Year</span>
          </div>
          <div className="border-l border-slate-800/80 pl-4">
            <span className="block text-slate-500 text-[9px] uppercase font-mono tracking-wider">Estimated License</span>
            <span className="font-semibold text-slate-300">{formatCurrency(calculations.platformCost)} / Year</span>
          </div>
        </div>
      </div>

      {/* Main Responsive Grid Layout */}
      <div className="flex-1 overflow-auto p-5 scrollbar-thin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* LEFT SIDE: Dynamic Interactive Parameter Controls (col-span-12 to col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="bg-[#12141c]/65 border border-slate-800/60 rounded-2xl p-4.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                Input Parameters & Sliders
              </h3>

              {/* Slider list */}
              <div className="space-y-5">
                {/* 1. Global Headcount */}
                <div>
                  <div className="flex justify-between items-center mb-1 text-xs">
                    <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-slate-400" />
                      Global Enterprise Headcount
                    </span>
                    <span className="font-mono text-amber-500 font-bold bg-amber-500/5 px-2 py-0.5 rounded border border-amber-550/15">
                      {formatNumber(inputs.headcount)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={5000}
                    max={25000}
                    step={500}
                    value={inputs.headcount}
                    onChange={(e) => handleSliderChange("headcount", Number(e.target.value))}
                    className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#ff7139]"
                  />
                  <div className="flex justify-between text-[9px] font-mono text-slate-500 mt-1">
                    <span>min: 5,000</span>
                    <span>Entra Account Footprint</span>
                    <span>max: 25,000</span>
                  </div>
                </div>

                {/* 2. Monthly Tickets per Employee */}
                <div>
                  <div className="flex justify-between items-center mb-1 text-xs">
                    <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                      <Ticket className="w-3.5 h-3.5 text-slate-400" />
                      Monthly Support Incidents
                    </span>
                    <span className="font-mono text-amber-500 font-bold bg-amber-500/5 px-2 py-0.5 rounded border border-amber-550/15">
                      {inputs.ticketsPerMonth.toFixed(2)} / user
                    </span>
                  </div>
                  <input
                    type="range"
                    min={0.05}
                    max={0.50}
                    step={0.05}
                    value={inputs.ticketsPerMonth}
                    onChange={(e) => handleSliderChange("ticketsPerMonth", Number(e.target.value))}
                    className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#ff7139]"
                  />
                  <div className="flex justify-between text-[9px] font-mono text-slate-500 mt-1">
                    <span>min: 0.05</span>
                    <span>Incidents per Employee / Month</span>
                    <span>max: 0.50</span>
                  </div>
                </div>

                {/* 3. Service disruption caused by security incident by employee per hours */}
                <div>
                  <div className="flex justify-between items-center mb-1 text-xs">
                    <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      Incident Service Disruption
                    </span>
                    <span className="font-mono text-amber-500 font-bold bg-amber-500/5 px-2 py-0.5 rounded border border-amber-550/15">
                      {inputs.disruptionHours.toFixed(1)} Hours
                    </span>
                  </div>
                  <input
                    type="range"
                    min={1.0}
                    max={12.0}
                    step={0.5}
                    value={inputs.disruptionHours}
                    onChange={(e) => handleSliderChange("disruptionHours", Number(e.target.value))}
                    className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#ff7139]"
                  />
                  <div className="flex justify-between text-[9px] font-mono text-slate-500 mt-1">
                    <span>min: 1.0 hr</span>
                    <span>Service disruption hours per employee security event</span>
                    <span>max: 12.0 hrs</span>
                  </div>
                </div>

                {/* 4. IT Provisioning Queue Latency */}
                <div>
                  <div className="flex justify-between items-center mb-1 text-xs">
                    <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                      <ArrowRightLeft className="w-3.5 h-3.5 text-slate-400" />
                      IT Provisioning Queue Latency
                    </span>
                    <span className="font-mono text-amber-500 font-bold bg-amber-500/5 px-2 py-0.5 rounded border border-amber-550/15">
                      {inputs.queueDelayDays.toFixed(1)} Days
                    </span>
                  </div>
                  <input
                    type="range"
                    min={1.0}
                    max={7.0}
                    step={0.5}
                    value={inputs.queueDelayDays}
                    onChange={(e) => handleSliderChange("queueDelayDays", Number(e.target.value))}
                    className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#ff7139]"
                  />
                  <div className="flex justify-between text-[9px] font-mono text-slate-500 mt-1">
                    <span>min: 1.0 day</span>
                    <span>Average device/user release queue</span>
                    <span>max: 7.0 days</span>
                  </div>
                </div>

                {/* 5. Agent Deflection Rate */}
                <div>
                  <div className="flex justify-between items-center mb-1 text-xs">
                    <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-emerald-400" />
                      Sentinel / Copilot Auto-Deflection
                    </span>
                    <span className="font-mono text-emerald-400 font-bold bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/25">
                      {inputs.deflectionRate}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min={50}
                    max={95}
                    step={5}
                    value={inputs.deflectionRate}
                    onChange={(e) => handleSliderChange("deflectionRate", Number(e.target.value))}
                    className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                  />
                  <div className="flex justify-between text-[9px] font-mono text-slate-500 mt-1">
                    <span>min: 50%</span>
                    <span>Automatic incident remediation level</span>
                    <span>max: 95%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Explanatory Formula Helper Card */}
            <div className="bg-[#0b0c10] border border-slate-855 rounded-2xl p-4 text-[11px] text-slate-400 select-none">
              <h4 className="text-[10px] uppercase font-mono tracking-widest text-slate-300 font-bold mb-2 flex items-center gap-1">
                <Info className="w-3 h-3 text-sky-400" /> Mathematical Model Structure (USD)
              </h4>
              <ul className="space-y-1.5 font-mono text-[9.5px]">
                <li>• <strong className="text-slate-350">Annual Tickets</strong> = Headcount × Incident Rate × 12</li>
                <li>• <strong className="text-slate-350">Security Incidents</strong> = Annual Tickets × 12% baseline</li>
                <li>• <strong className="text-slate-350">Service Disruption Hours</strong> = Security Incidents × Disruption Hours</li>
                <li>• <strong className="text-slate-350">Queue Friction</strong> = Annual Tickets × (Ticketing Queue Delay × 10% drag)</li>
                <li>• <strong className="text-slate-350">Operational Triage</strong> = Annual Tickets × (20m manual SLA / 60)</li>
                <li>• <strong className="text-slate-350">Cost of Inaction</strong> = Total Wasted Hours × Loaded Rate ($50/hr standard)</li>
                <li>• <strong className="text-slate-350">Net Saved</strong> = (Cost of Inaction × Automation %) - Software License Bundle</li>
              </ul>
            </div>
          </div>

          {/* RIGHT SIDE: Dynamic Visual Cards & Graphic Projections (col-span-12 to col-span-7) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Bento Layout Row 1: KPI Output metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* Cost of Inaction Card */}
              <div className="relative bg-[#181113] rounded-2xl p-4.5 border border-red-500/10 shadow-lg group overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-full blur-2xl"></div>
                
                <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-red-400/90 block mb-1">
                  Cost of Inaction
                </span>
                <div className="text-2xl font-serif tracking-tight font-black text-rose-350 my-1 group-hover:scale-101 transition-transform">
                  {formatCurrency(calculations.totalCostOfInaction)}
                </div>
                <div className="flex items-center gap-1.5 mt-2.5 text-[10px] text-slate-400">
                  <ShieldAlert className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                  <span>Siloed security friction & service disruption waste</span>
                </div>
              </div>

              {/* Net Annual Saved Card */}
              <div className="relative bg-[#101915] rounded-2xl p-4.5 border border-emerald-500/15 shadow-lg group overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl"></div>

                <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                  Net Annual Saved
                </span>
                <div className={`text-2xl font-serif tracking-tight font-black my-1 transition-transform group-hover:scale-101 ${
                  calculations.netAnnualSaved > 0 ? "text-emerald-400" : "text-rose-400"
                }`}>
                  {formatCurrency(calculations.netAnnualSaved)}
                </div>
                <div className="flex items-center gap-1.5 mt-2.5 text-[10px] text-slate-400">
                  {calculations.netAnnualSaved > 0 ? (
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  ) : (
                    <TrendingDown className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                  )}
                  <span>Net benefit after license overheads</span>
                </div>
              </div>

              {/* Payback Rate Card */}
              <div className="relative bg-[#11161f] rounded-2xl p-4.5 border border-sky-500/10 shadow-lg group overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/5 rounded-full blur-2xl"></div>

                <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-sky-400 block mb-1">
                  Payback Period
                </span>
                <div className="text-2xl font-serif tracking-tight font-black text-sky-300 my-1 group-hover:scale-101 transition-transform">
                  {calculations.netAnnualSaved > 0 
                    ? `${calculations.paybackPeriodMonths.toFixed(1)} Months` 
                    : "No Break-Even"}
                </div>
                <div className="flex items-center gap-1.5 mt-2.5 text-[10px] text-slate-400">
                  <CheckCircle className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>Days to fully recoup implementation costs</span>
                </div>
              </div>
            </div>

            {/* Bento Grid Item: Visual Interactive Cost-Reduction Breakdown Chart (SVG) */}
            <div className="bg-[#12141c]/65 border border-slate-800/60 rounded-2xl p-5 flex flex-col justify-between">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                  Annual Burden Breakdown (Hours & Cost comparison)
                </h3>
                
                {/* Custom Interactive SVG Visualizing Loss categories and the savings */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  
                  {/* Category bars representing Status Quo vs Microsoft Stack */}
                  <div className="space-y-4">
                    {/* Category 1: Service Disruption Hours */}
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-300 font-semibold font-sans">
                          1️⃣ Security Incident Service Disruption
                        </span>
                        <span className="font-mono text-slate-400 text-[11px]">
                          {formatHours(calculations.serviceDisruptionHours)} hrs / yr
                        </span>
                      </div>
                      <div className="relative h-2 bg-slate-900 rounded-full overflow-hidden">
                        {/* Status Quo Bar */}
                        <div className="absolute left-0 top-0 bottom-0 bg-rose-500/40 rounded-full" style={{ width: '100%' }}></div>
                        {/* Remedied savings bar overlay */}
                        <div className="absolute left-0 top-0 bottom-0 bg-emerald-550 rounded-full transition-all duration-300" style={{ width: `${inputs.deflectionRate}%` }}></div>
                      </div>
                      <div className="flex justify-between text-[9px] text-slate-500 font-mono mt-0.5">
                        <span>Status Quo: {formatCurrency(calculations.serviceDisruptionHours * BLENDED_HOURLY_RATE)}</span>
                        <span>Saved: {formatCurrency((calculations.serviceDisruptionHours * BLENDED_HOURLY_RATE) * (inputs.deflectionRate / 100))}</span>
                      </div>
                    </div>

                    {/* Category 2: Ticketing Latency Waiting Cost */}
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-300 font-semibold font-sans">
                          2️⃣ IT Provisioning Queue Wait-Drag
                        </span>
                        <span className="font-mono text-slate-400 text-[11px]">
                          {formatHours(calculations.idleQueueHours)} hrs / yr
                        </span>
                      </div>
                      <div className="relative h-2 bg-slate-900 rounded-full overflow-hidden">
                        {/* Status Quo Bar */}
                        <div className="absolute left-0 top-0 bottom-0 bg-rose-500/40 rounded-full" style={{ width: '100%' }}></div>
                        {/* Remedied savings bar overlay */}
                        <div className="absolute left-0 top-0 bottom-0 bg-emerald-550 rounded-full transition-all duration-300" style={{ width: `${inputs.deflectionRate}%` }}></div>
                      </div>
                      <div className="flex justify-between text-[9px] text-slate-500 font-mono mt-0.5">
                        <span>Status Quo: {formatCurrency(calculations.idleQueueHours * BLENDED_HOURLY_RATE)}</span>
                        <span>Saved: {formatCurrency((calculations.idleQueueHours * BLENDED_HOURLY_RATE) * (inputs.deflectionRate / 100))}</span>
                      </div>
                    </div>

                    {/* Category 3: SecOps SLA Manual Triage */}
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-300 font-semibold font-sans">
                          3️⃣ SecOps SLA Manual Triage
                        </span>
                        <span className="font-mono text-slate-400 text-[11px]">
                          {formatHours(calculations.hrAdminHours)} hrs / yr
                        </span>
                      </div>
                      <div className="relative h-2 bg-slate-900 rounded-full overflow-hidden">
                        {/* Status Quo Bar */}
                        <div className="absolute left-0 top-0 bottom-0 bg-rose-500/40 rounded-full" style={{ width: '100%' }}></div>
                        {/* Remedied savings bar overlay */}
                        <div className="absolute left-0 top-0 bottom-0 bg-emerald-550 rounded-full transition-all duration-300" style={{ width: `${inputs.deflectionRate}%` }}></div>
                      </div>
                      <div className="flex justify-between text-[9px] text-slate-500 font-mono mt-0.5">
                        <span>Status Quo: {formatCurrency(calculations.hrAdminHours * BLENDED_HOURLY_RATE)}</span>
                        <span>Saved: {formatCurrency((calculations.hrAdminHours * BLENDED_HOURLY_RATE) * (inputs.deflectionRate / 100))}</span>
                      </div>
                    </div>
                  </div>

                  {/* SVG Multi-Year Breakeven Projection line chart representation */}
                  <div className="flex flex-col items-center justify-center bg-black/40 border border-slate-855 rounded-xl p-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                      3-Year Cost Projection Profile ($)
                    </span>
                    
                    {/* Dynamic SVG Drawing */}
                    <div className="w-full h-32 relative">
                      <svg viewBox="0 0 300 120" className="w-full h-full overflow-visible">
                        {/* Grid lines */}
                        <line x1="30" y1="10" x2="30" y2="100" stroke="#1e293b" strokeWidth="1" />
                        <line x1="30" y1="100" x2="280" y2="100" stroke="#1e293b" strokeWidth="1" />
                        <line x1="30" y1="70" x2="280" y2="70" stroke="#1e293b" strokeWidth="0.5" strokeDasharray="3,3" />
                        <line x1="30" y1="40" x2="280" y2="40" stroke="#1e293b" strokeWidth="0.5" strokeDasharray="3,3" />

                        {/* Labels for Years */}
                        <text x="30" y="112" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="monospace">Start</text>
                        <text x="110" y="112" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="monospace">Year 1</text>
                        <text x="190" y="112" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="monospace">Year 2</text>
                        <text x="270" y="112" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="monospace">Year 3</text>

                        {/* Cost of Inaction (Red Line) */}
                        {/* Accumulates cost linearly */}
                        <path 
                          d="M 30,100 L 110,75 L 190,50 L 270,25" 
                          fill="none" 
                          stroke="#ef4444" 
                          strokeWidth="2.5" 
                          strokeLinecap="round" 
                        />
                        {/* Microsoft stack cost (Green Line) - starting with implementation license cost but flatter rise */}
                        {/* Y-coordinate values: 100 = $0 cost. Height is inversely proportional to cost. */}
                        {(() => {
                          const maxRangeCost = calculations.totalCostOfInaction * 3;
                          const getSvgY = (cost: number) => {
                            const ratio = Math.min(1, cost / Math.max(1, maxRangeCost));
                            return 100 - (ratio * 80);
                          };
                          
                          const inactionY1 = getSvgY(calculations.totalCostOfInaction);
                          const inactionY2 = getSvgY(calculations.totalCostOfInaction * 2);
                          const inactionY3 = getSvgY(calculations.totalCostOfInaction * 3);

                          const msCost0 = calculations.platformCost;
                          const msCost1 = calculations.platformCost + (calculations.totalCostOfInaction - calculations.annualSavings);
                          const msCost2 = msCost1 + (calculations.totalCostOfInaction - calculations.annualSavings);
                          const msCost3 = msCost2 + (calculations.totalCostOfInaction - calculations.annualSavings);

                          const msY0 = getSvgY(msCost0);
                          const msY1 = getSvgY(msCost1);
                          const msY2 = getSvgY(msCost2);
                          const msY3 = getSvgY(msCost3);

                          return (
                            <>
                              {/* Inaction path */}
                              <path 
                                d={`M 30,100 L 110,${inactionY1} L 190,${inactionY2} L 270,${inactionY3}`} 
                                fill="none" 
                                stroke="#f43f5e" 
                                strokeWidth="2.5" 
                                strokeLinecap="round" 
                                strokeDasharray="3,1"
                              />
                              {/* Microsoft Path */}
                              <path 
                                d={`M 30,${msY0} L 110,${msY1} L 190,${msY2} L 270,${msY3}`} 
                                fill="none" 
                                stroke="#10b981" 
                                strokeWidth="2.5" 
                                strokeLinecap="round" 
                              />
                              
                              {/* Dots */}
                              <circle cx="270" cy={inactionY3} r="3.5" fill="#f43f5e" />
                              <circle cx="270" cy={msY3} r="3.5" fill="#10b981" />
                            </>
                          );
                        })()}
                      </svg>
                    </div>

                    <div className="flex gap-4 mt-2 text-[8px] font-mono">
                      <div className="flex items-center gap-1">
                        <span className="w-2.5 h-0.5 bg-rose-500 inline-block"></span>
                        <span className="text-slate-450 uppercase">Status Quo Cost Burden</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-2.5 h-0.5 bg-emerald-500 inline-block"></span>
                        <span className="text-slate-450 uppercase">Microsoft Stack Net Burden</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Business value summary box */}
            <div className="bg-[#12141c]/65 border border-slate-800/60 rounded-2xl p-4 flex items-center justify-between gap-4">
              <div className="p-3 bg-emerald-500/5 rounded-xl border border-emerald-500/15 shrink-0 hidden sm:block">
                <TrendingUp className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="flex-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  Business Case Narrative Alignment
                </span>
                <p className="text-[11.5px] leading-relaxed text-slate-300 mt-1">
                  By standardizing on the **Microsoft Security & Operations Suite**, Coca-Cola HBC can streamline passwordless credential access (Entra), enforce real-time terminal configurations (Intune/Defender), automate compliance governance (Purview), and utilize SIEM/SOAR rules and Security Copilot to reduce frontline incident downtime by up to 50%.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
