/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TableConfig } from "../types";

export const MEDDPICC_TABLES: TableConfig[] = [
  {
    id: "table3_1",
    title: "3.1 Metrics (M): Key Quantified Value Metrics",
    description: "Map the specific KPIs, achieved security results, and ultimate business impact of Microsoft's solutions.",
    columns: ["Metric Category", "Specific KPI", "Achieved Result", "Business Impact"],
    rows: [
      "Security & Threat Defense",
      "Device Productivity",
      "Incident Response",
      "Endpoint Onboarding",
      "Policy Rollout",
      "CAPEX Optimization"
    ],
    cells: [
      {
        id: "t31-cell-0-1",
        text: "Access and threat block rate",
        correctRow: 0,
        correctCol: 1,
        keywords: ["picking transaction security", "device uptime", "failure rate"]
      },
      {
        id: "t31-cell-0-2",
        text: "99.99% threat-block accuracy",
        correctRow: 0,
        correctCol: 2,
        keywords: ["99.99% Threat & Access Accuracy", "two months", "Thessaloniki pilot"]
      },
      {
        id: "t31-cell-0-3",
        text: "Near-elimination of unverified devices, preventing supply chain disruptions and halted dispatches",
        correctRow: 0,
        correctCol: 3,
        keywords: ["vulnerabilities", "unmanaged endpoints", "unauthenticated logins", "supply chain disruptions"]
      },
      {
        id: "t31-cell-1-1",
        text: "Unified endpoint access rate",
        correctRow: 1,
        correctCol: 1,
        keywords: ["operational productivity", "unified endpoint", "device management"]
      },
      {
        id: "t31-cell-1-2",
        text: "10% productivity increase",
        correctRow: 1,
        correctCol: 2,
        keywords: ["10% Productivity Increase", "productivity"]
      },
      {
        id: "t31-cell-1-3",
        text: "Critical for addressing labor shortages in European logistics hubs",
        correctRow: 1,
        correctCol: 3,
        keywords: ["labor shortages", "European markets", "productivity per worker"]
      },
      {
        id: "t31-cell-2-1",
        text: "Security incident resolution time",
        correctRow: 2,
        correctCol: 1,
        keywords: ["downtime", "incident response", "cyber threat", "triaging"]
      },
      {
        id: "t31-cell-2-2",
        text: "Up to 50% downtime reduction",
        correctRow: 2,
        correctCol: 2,
        keywords: ["50% Downtime Reduction", "downtime"]
      },
      {
        id: "t31-cell-2-3",
        text: "Significant cost savings from avoided cyber-related production stoppages",
        correctRow: 2,
        correctCol: 3,
        keywords: ["production stoppages", "cost savings", "$10,000"]
      },
      {
        id: "t31-cell-3-1",
        text: "Fleet device configuration speed",
        correctRow: 3,
        correctCol: 1,
        keywords: ["onboarding", "onboarded", "device provisioning", "employee"]
      },
      {
        id: "t31-cell-3-2",
        text: "30% faster onboarding",
        correctRow: 3,
        correctCol: 2,
        keywords: ["30% faster onboarding", "onboarding"]
      },
      {
        id: "t31-cell-3-3",
        text: "Enables rapid response to seasonal demand fluctuations and workforce shifts",
        correctRow: 3,
        correctCol: 3,
        keywords: ["seasonal demand", "fluctuations"]
      },
      {
        id: "t31-cell-4-1",
        text: "Global security policy deployment time",
        correctRow: 4,
        correctCol: 1,
        keywords: ["policy deployment", "changeovers", "regulatory compliance"]
      },
      {
        id: "t31-cell-4-2",
        text: "20% faster deployment",
        correctRow: 4,
        correctCol: 2,
        keywords: ["20% faster changeovers", "changeovers"]
      },
      {
        id: "t31-cell-4-3",
        text: "More flexible production planning, fully synchronized zero-trust compliance on floor terminals",
        correctRow: 4,
        correctCol: 3,
        keywords: ["production planning", "zero-trust compliance"]
      },
      {
        id: "t31-cell-5-1",
        text: "Consolidated software licensing costs",
        correctRow: 5,
        correctCol: 1,
        keywords: ["siloed security", "licensing consolidation", "costs", "CAPEX"]
      },
      {
        id: "t31-cell-5-2",
        text: "Lower licensing CAPEX",
        correctRow: 5,
        correctCol: 2,
        keywords: ["lower licensing consolidation", "hardware"]
      },
      {
        id: "t31-cell-5-3",
        text: "Reduced capital expenditure by avoiding best-of-breed point agent subscription overlaps",
        correctRow: 5,
        correctCol: 3,
        keywords: ["capital expenditure", "licensing", "disjointed", "agents"]
      }
    ]
  },
  {
    id: "table3_2",
    title: "3.2 Economic Buyer (E): Stakeholder & Influence Board",
    description: "Map key stakeholders to their operational titles, functional tasks, and hierarchical influence levels.",
    columns: ["Stakeholder", "Role", "Function in Deal", "Influence Level"],
    rows: [
      "Angel Boyanov",
      "Suzana Rari",
      "C-Suite / VP Support",
      "IT / SAP Governance"
    ],
    cells: [
      {
        id: "t32-cell-0-1",
        text: "Digital Security Product Manager, Warehouse Mgmt & Cold Drinks Ops",
        correctRow: 0,
        correctCol: 1,
        keywords: ["Angel Boyanov", "Digital Security Product Manager"]
      },
      {
        id: "t32-cell-0-2",
        text: "Product owner, internal champion, technical bridge between operations and corporate SecOps",
        correctRow: 0,
        correctCol: 2,
        keywords: ["Angel Boyanov", "product owner", "advocate", "operations and IT"]
      },
      {
        id: "t32-cell-0-3",
        text: "Champion / Key Influencer",
        correctRow: 0,
        correctCol: 3,
        keywords: ["Angel Boyanov", "Champion", "Key Influencer"]
      },
      {
        id: "t32-cell-1-1",
        text: "Supply Chain Manager, Greece & Cyprus",
        correctRow: 1,
        correctCol: 1,
        keywords: ["Suzana Rari", "Supply Chain Manager", "Greece", "Cyprus"]
      },
      {
        id: "t32-cell-1-2",
        text: "Operational validator, ground-level credibility, user acceptance sponsor",
        correctRow: 1,
        correctCol: 2,
        keywords: ["Suzana Rari", "Operational validator", "credibility", "acceptance"]
      },
      {
        id: "t32-cell-1-3",
        text: "Champion / Operational Sponsor",
        correctRow: 1,
        correctCol: 3,
        keywords: ["Suzana Rari", "Champion", "Operational Sponsor"]
      },
      {
        id: "t32-cell-2-1",
        text: "Executive Leadership",
        correctRow: 2,
        correctCol: 1,
        keywords: ["C-Suite", "VP", "Executive Leadership"]
      },
      {
        id: "t32-cell-2-2",
        text: "Budget approval for enterprise-wide rollout across 17 countries",
        correctRow: 2,
        correctCol: 2,
        keywords: ["Budget approval", "enterprise-wide rollout", "17 countries"]
      },
      {
        id: "t32-cell-2-3",
        text: "Economic Buyer (Inferred)",
        correctRow: 2,
        correctCol: 3,
        keywords: ["C-Suite", "Economic Buyer", "Inferred"]
      },
      {
        id: "t32-cell-3-1",
        text: "IT Security & Architecture Integration",
        correctRow: 3,
        correctCol: 1,
        keywords: ["IT", "SAP", "Integration", "Architecture"]
      },
      {
        id: "t32-cell-3-2",
        text: "Technical approval for SAP WMS integration, Central Active Directory security, compliance",
        correctRow: 3,
        correctCol: 2,
        keywords: ["Technical approval", "SAP WMS", "data security", "compliance"]
      },
      {
        id: "t32-cell-3-3",
        text: "Technical Gatekeeper",
        correctRow: 3,
        correctCol: 3,
        keywords: ["TECHNICAL", "Technical Gatekeeper", "Gatekeeper"]
      }
    ]
  },
  {
    id: "table3_3",
    title: "3.3 Decision Criteria (D): Alignments & Requirements",
    description: "Map out critical, high, and medium priority requirements to check how Microsoft addressed Coca-Cola's demands.",
    columns: ["Criteria", "Priority", "Description", "How Microsoft Addressed It"],
    rows: [
      "Threat Protection",
      "Scalability",
      "Identity Governance",
      "Compliance Control",
      "SIEM & SOAR Response",
      "CAPEX Efficiency",
      "Vendor Support"
    ],
    cells: [
      // Priorities
      {
        id: "t3-cell-0-1",
        text: "Critical",
        correctRow: 0,
        correctCol: 1,
        keywords: ["Threat Protection", "Critical", "Defender", "99.99%"]
      },
      {
        id: "t3-cell-1-1",
        text: "Critical",
        correctRow: 1,
        correctCol: 1,
        keywords: ["Scalability", "28 countries", "29 warehouses", "1,000+ users"]
      },
      {
        id: "t3-cell-2-1",
        text: "High",
        correctRow: 2,
        correctCol: 1,
        keywords: ["Identity Governance", "Entra", "SSO", "Invelon"]
      },
      {
        id: "t3-cell-3-1",
        text: "High",
        correctRow: 3,
        correctCol: 1,
        keywords: ["Compliance Control", "GDPR", "Purview", "compliance"]
      },
      {
        id: "t3-cell-4-1",
        text: "High",
        correctRow: 4,
        correctCol: 1,
        keywords: ["SIEM & SOAR Response", "Sentinel", "automated responses", "triaging"]
      },
      {
        id: "t3-cell-5-1",
        text: "Medium",
        correctRow: 5,
        correctCol: 1,
        keywords: ["CAPEX Efficiency", "siloed", "agents", "consolidation"]
      },
      {
        id: "t3-cell-6-1",
        text: "Medium",
        correctRow: 6,
        correctCol: 1,
        keywords: ["Vendor Support", "customer success support", "Enterprise Agreement"]
      },
      // Descriptions
      {
        id: "t3-cell-0-2",
        text: "Near-elimination of unverified devices and unauthorized logins to reduce system exposure and data leaks",
        correctRow: 0,
        correctCol: 2,
        keywords: ["unverified devices", "unauthorized logins", "Defender", "99.99% access validation"]
      },
      {
        id: "t3-cell-1-2",
        text: "Solution must scale across 28 countries with diverse warehouse operational devices",
        correctRow: 1,
        correctCol: 2,
        keywords: ["scale across 28 countries", "diverse warehouse layouts", "reusable rollout template"]
      },
      {
        id: "t3-cell-2-2",
        text: "Seamless integration with existing Active Directory & Corporate identity systems",
        correctRow: 2,
        correctCol: 2,
        keywords: ["Backend Integration", "existing Active Directory", "Invelon", "Azure secure APIs"]
      },
      {
        id: "t3-cell-3-2",
        text: "Meet rigorous GDPR standards and operational data loss guidelines on mobile floor terminals",
        correctRow: 3,
        correctCol: 2,
        keywords: ["GDPR standards", "data loss guidelines", "Purview"]
      },
      {
        id: "t3-cell-4-2",
        text: "Warehouse IT needs automated triage for threat detection to prevent physical shipping bottlenecks",
        correctRow: 4,
        correctCol: 2,
        keywords: ["automated triage", "threat detection", "Sentinel"]
      },
      {
        id: "t3-cell-5-2",
        text: "Consolidate and reduce license spend on fragmented, third-party siloed security agents",
        correctRow: 5,
        correctCol: 2,
        keywords: ["CAPEX", "licensing consolidation costs", "siloed agents"]
      },
      {
        id: "t3-cell-6-2",
        text: "Ongoing solution delivery and customer success support through and after deployment",
        correctRow: 6,
        correctCol: 2,
        keywords: ["Vendor Support", "customer success support", "Enterprise Agreement"]
      },
      // Microsoft Responses
      {
        id: "t3-cell-0-3",
        text: "Defender endpoint threat protection and Entra conditional access achieved 99.99% access validation accuracy within 2 months",
        correctRow: 0,
        correctCol: 3,
        keywords: ["Microsoft addressed this with Defender", "within 2 months", "99.99% access validation"]
      },
      {
        id: "t3-cell-1-3",
        text: "Created reusable rollout template; deployed to 29 warehouses across 17 countries with 1,000+ users",
        correctRow: 1,
        correctCol: 3,
        keywords: ["reusable rollout template", "29 warehouses", "17 countries", "1,000+ users"]
      },
      {
        id: "t3-cell-2-3",
        text: "Full SAP WMS integration via system integrator (Invelon), enabling secure real-time order updates",
        correctRow: 2,
        correctCol: 3,
        keywords: ["SAP WMS integration", "Invelon", "real-time secure order updates"]
      },
      {
        id: "t3-cell-3-3",
        text: "Purview data loss prevention (DLP) and compliance trackers automatically enforced workspace regulations",
        correctRow: 3,
        correctCol: 3,
        keywords: ["Purview data loss prevention", "workplace regulations", "Purview"]
      },
      {
        id: "t3-cell-4-3",
        text: "Sentinel SIEM/SOAR triggers rapid plays and playbook flows to isolate issues instantly",
        correctRow: 4,
        correctCol: 3,
        keywords: ["Sentinel triggering automated responses", "automated responses and playbooks"]
      },
      {
        id: "t3-cell-5-3",
        text: "Enterprise-wide ELA bundle lower cost than disjointed, best-of-breed point solutions; no costly infrastructure changes",
        correctRow: 5,
        correctCol: 3,
        keywords: ["licensing consolidation costs", "siloed agents", "Enterprise Agreement"]
      },
      {
        id: "t3-cell-6-3",
        text: "Microsoft customer success engineering and expert solution architect teams provided continuous after-go-live support",
        correctRow: 6,
        correctCol: 3,
        keywords: ["customer success engineering", "continuous after-go-live support", "Enterprise Agreement"]
      }
    ]
  },
  {
    id: "table3_4",
    title: "3.4 Decision Process (D): Phased Rollout Timeline",
    description: "Align the timeline, scope, key actions, and outcome to each phase of the 'land and expand' enterprise layout.",
    columns: ["Phase", "Timeline", "Scope", "Key Actions", "Outcome"],
    rows: [
      "Phase 1: Pilot",
      "Phase 2: Initial Ramp-Up",
      "Phase 3: Mass Rollout",
      "Phase 4: Product Expansion",
      "Phase 5: Continued Growth"
    ],
    cells: [
      // Timelines
      {
        id: "t4-cell-0-1",
        text: "2019 (Start)",
        correctRow: 0,
        correctCol: 1,
        keywords: ["Phase 1: Pilot", "2019", "Thessaloniki", "Greece"]
      },
      {
        id: "t4-cell-1-1",
        text: "2019 (Same year)",
        correctRow: 1,
        correctCol: 1,
        keywords: ["Phase 2", "Initial Ramp-Up", "2019", "Same year"]
      },
      {
        id: "t4-cell-2-1",
        text: "2019-2022",
        correctRow: 2,
        correctCol: 1,
        keywords: ["Phase 3", "Mass Rollout", "2019-2022"]
      },
      {
        id: "t4-cell-3-1",
        text: "2020+",
        correctRow: 3,
        correctCol: 1,
        keywords: ["Phase 4", "Product Expansion", "2020+"]
      },
      {
        id: "t4-cell-4-1",
        text: "2023+",
        correctRow: 4,
        correctCol: 1,
        keywords: ["Phase 5", "Continued Growth", "2023+"]
      },
      // Scopes
      {
        id: "t4-cell-0-2",
        text: "1 warehouse, 16 users, Thessaloniki, Greece",
        correctRow: 0,
        correctCol: 2,
        keywords: ["Thessaloniki, Greece", "1 warehouse", "16 users"]
      },
      {
        id: "t4-cell-1-2",
        text: "6 additional warehouses",
        correctRow: 1,
        correctCol: 2,
        keywords: ["6 additional warehouses", "six additional warehouses"]
      },
      {
        id: "t4-cell-2-2",
        text: "29 warehouses total across 17 countries",
        correctRow: 2,
        correctCol: 2,
        keywords: ["29 warehouses total", "17 countries", "onboarded"]
      },
      {
        id: "t4-cell-3-2",
        text: "18 logistics locations (plants and DCs)",
        correctRow: 3,
        correctCol: 2,
        keywords: ["18 logistics locations", "plants and DCs"]
      },
      {
        id: "t4-cell-4-2",
        text: "5+ additional warehouse go-lives planned",
        correctRow: 4,
        correctCol: 2,
        keywords: ["5+ additional warehouse", "planned"]
      },
      // Key Actions
      {
        id: "t4-cell-0-3",
        text: "Deployed Defender & Intune baseline; tested against legacy policies; gathered IT feedback",
        correctRow: 0,
        correctCol: 3,
        keywords: ["Defender and Intune on smart endpoints", "tested against legacy voice devices", "worker feedback"]
      },
      {
        id: "t4-cell-1-3",
        text: "Replicated pilot template on active terminals; agile identity baseline refined via Entra and Intune",
        correctRow: 1,
        correctCol: 3,
        keywords: ["Replicated pilot template on active terminals", "identity baseline refined", "Entra integration and validating"]
      },
      {
        id: "t4-cell-2-3",
        text: "Standardized deployment playbook; localized configuration; onboarded 1,000+ users securely",
        correctRow: 2,
        correctCol: 3,
        keywords: ["modern endpoint management the standard", "1,000+ users and making", "reusable rollout"]
      },
      {
        id: "t4-cell-3-3",
        text: "Extended to Sentinel for SIEM/SOAR automation and Purview for compliance and GDPR tracking",
        correctRow: 3,
        correctCol: 3,
        keywords: ["Sentinel for automated threat", "Purview for compliance and data governance"]
      },
      {
        id: "t4-cell-4-3",
        text: "Ongoing expansion of modern endpoint and security scope with Security Copilot added for AI-guided SecOps",
        correctRow: 4,
        correctCol: 3,
        keywords: ["Security Copilot added", "modern endpoint and security"]
      },
      // Outcomes
      {
        id: "t4-cell-0-4",
        text: "Convincing defense results; workers adopted modern SSO authentication; decision to scale",
        correctRow: 0,
        correctCol: 4,
        keywords: ["Convincing results", "workers preferred vision picking", "decision to scale"]
      },
      {
        id: "t4-cell-1-4",
        text: "Validated scalability; created reusable rollout template for mass security enforcement",
        correctRow: 1,
        correctCol: 4,
        keywords: ["Validated scalability", "reusable rollout template", "mass deployment"]
      },
      {
        id: "t4-cell-2-4",
        text: "Unified identity & modern management policy became standard at Coca-Cola HBC",
        correctRow: 2,
        correctCol: 4,
        keywords: ["modern endpoint management", "warehousing technology", "Coca-Cola HBC"]
      },
      {
        id: "t4-cell-3-4",
        text: "50% downtime reduction; 30% faster onboarding; 20% faster policy deployment",
        correctRow: 3,
        correctCol: 4,
        keywords: ["downtime reduction", "faster onboarding", "faster policy deployment"]
      },
      {
        id: "t4-cell-4-4",
        text: "Sustained enterprise commitment to the Microsoft security & management suite",
        correctRow: 4,
        correctCol: 4,
        keywords: ["Sustained enterprise commitment", "Microsoft Enterprise Agreement"]
      }
    ]
  },
  {
    id: "table3_5",
    title: "3.5 Paper Process (P): Procurement & Integration Governance",
    description: "Delineate the crucial commercial steps, gatekeeper requirements, and operational compliance paths.",
    columns: ["Aspect", "Key Entity Involved", "Process Requirements", "Business Function"],
    rows: [
      "Enterprise Procurement",
      "System Integrator Partnership",
      "SAP Integration Governance",
      "Multi-Year Commitment",
      "Country-Specific Compliance"
    ],
    cells: [
      {
        id: "t35-cell-0-1",
        text: "Global Procurement Team",
        correctRow: 0,
        correctCol: 1,
        keywords: ["procurement process", "global procurement"]
      },
      {
        id: "t35-cell-0-2",
        text: "Formal RFP, security assessments, and vendor due diligence",
        correctRow: 0,
        correctCol: 2,
        keywords: ["Enterprise Procurement", "RFP processes", "security assessments", "due diligence"]
      },
      {
        id: "t35-cell-0-3",
        text: "Enterprise agreement approval on global software licensing",
        correctRow: 0,
        correctCol: 3,
        keywords: ["Enterprise Procurement", "procurement", "Enterprise Agreement"]
      },
      {
        id: "t35-cell-1-1",
        text: "Invelon Technologies & Microsoft Partner",
        correctRow: 1,
        correctCol: 1,
        keywords: ["Invelon Technologies", "Invelon", "Microsoft", "licensing"]
      },
      {
        id: "t35-cell-1-2",
        text: "Multi-vendor contracting, cloud licensing, and service level agreements",
        correctRow: 1,
        correctCol: 2,
        keywords: ["multi-vendor contracting", "licensing platform", "service level agreements"]
      },
      {
        id: "t35-cell-1-3",
        text: "De-risks multi-country implementation and secures localized engineering backup",
        correctRow: 1,
        correctCol: 3,
        keywords: ["de-risks", "de-risks the deployment", "local support"]
      },
      {
        id: "t35-cell-2-1",
        text: "IT Governance Board",
        correctRow: 2,
        correctCol: 1,
        keywords: ["IT", "Governance", "SAP Integration"]
      },
      {
        id: "t35-cell-2-2",
        text: "Secure API connectivity, Azure-SAP integration, and change management logs",
        correctRow: 2,
        correctCol: 2,
        keywords: ["API compatibility", "data security review", "change management"]
      },
      {
        id: "t35-cell-2-3",
        text: "Ensures secure flow of real-time inventory and shipping telemetry",
        correctRow: 2,
        correctCol: 3,
        keywords: ["seamless connection", "warehouse management systems", "WMS"]
      },
      {
        id: "t35-cell-3-1",
        text: "Executive Stakeholders",
        correctRow: 3,
        correctCol: 1,
        keywords: ["sponsorship", "Executive", "commitments"]
      },
      {
        id: "t35-cell-3-2",
        text: "Unified Microsoft Enterprise Agreement with milestone expansion parameters",
        correctRow: 3,
        correctCol: 2,
        keywords: ["Enterprise Agreement", "ELA", "milestone-based commitments"]
      },
      {
        id: "t35-cell-3-3",
        text: "Supports long-term land-and-expand security rollout blueprint",
        correctRow: 3,
        correctCol: 3,
        keywords: ["land-and-expand", "long-term", "strategy"]
      },
      {
        id: "t35-cell-4-1",
        text: "Legal & HR Councils",
        correctRow: 4,
        correctCol: 1,
        keywords: ["Legal", "GDPR", "compliance", "privacy"]
      },
      {
        id: "t35-cell-4-2",
        text: "Workplace privacy audits, compliance trackers, and local data protection regulations",
        correctRow: 4,
        correctCol: 2,
        keywords: ["GDPR", "local labor law", "privacy", "workplace privacy"]
      },
      {
        id: "t35-cell-4-3",
        text: "Resolves multi-jurisdictional compliance using Microsoft Purview",
        correctRow: 4,
        correctCol: 3,
        keywords: ["Purview", "privacy", "camera", "jurisdiction"]
      }
    ]
  },
  {
    id: "table3_6",
    title: "3.6 Implicating Pain (I): Operational & Strategic Pains",
    description: "Map each operational or strategic pain point to its real-world business context and quantified cost of inaction.",
    columns: ["Pain Point", "Category", "Description", "Financial Impact"],
    rows: [
      "Access & Identity Risks",
      "Customer Complaints",
      "Labor Shortages",
      "Security Downtime",
      "Manual Compliance Docs",
      "Remote Management Needs"
    ],
    cells: [
      // Categories
      {
        id: "t5-cell-0-1",
        text: "Operational",
        correctRow: 0,
        correctCol: 1,
        keywords: ["Access & Identity Risks", "Operational", "Inconsistent device status"]
      },
      {
        id: "t5-cell-1-1",
        text: "Strategic",
        correctRow: 1,
        correctCol: 1,
        keywords: ["Customer Complaints", "Strategic", "tiny security outage"]
      },
      {
        id: "t5-cell-2-1",
        text: "Strategic",
        correctRow: 2,
        correctCol: 1,
        keywords: ["Labor Shortages", "Strategic", "labor constraints"]
      },
      {
        id: "t5-cell-3-1",
        text: "Operational",
        correctRow: 3,
        correctCol: 1,
        keywords: ["Security Downtime", "Operational", "siloed legacy security"]
      },
      {
        id: "t5-cell-4-1",
        text: "Operational",
        correctRow: 4,
        correctCol: 1,
        keywords: ["Manual Compliance Docs", "Operational", "auditing"]
      },
      {
        id: "t5-cell-5-1",
        text: "Operational",
        correctRow: 5,
        correctCol: 1,
        keywords: ["Remote Management Needs", "Operational", "Central IT"]
      },
      // Descriptions
      {
        id: "t5-cell-0-2",
        text: "Inconsistent device status, lack of unified endpoint security leading to unverified access and data leakage",
        correctRow: 0,
        correctCol: 2,
        keywords: ["unverified access", "data leakage", "device status"]
      },
      {
        id: "t5-cell-1-2",
        text: "Even tiny security outage on warehouse floors causes wrong log entries, halting deliveries and creating complaints",
        correctRow: 1,
        correctCol: 2,
        keywords: ["tiny security outage", "wrong log entries", "halting deliveries"]
      },
      {
        id: "t5-cell-2-2",
        text: "European labor market constraints requiring higher productivity per worker",
        correctRow: 2,
        correctCol: 2,
        keywords: ["labor constraints", "higher productivity per worker"]
      },
      {
        id: "t5-cell-3-2",
        text: "Legacy security tools were siloed; triage required specialist travel, extending outage wait times",
        correctRow: 3,
        correctCol: 2,
        keywords: ["siloed legacy security", "specialist travel", "wait times"]
      },
      {
        id: "t5-cell-4-2",
        text: "Data protection reports, auditing, and warehouse access records were manual, slow, and error-prone",
        correctRow: 4,
        correctCol: 2,
        keywords: ["data protection reports", "auditing", "manual, slow"]
      },
      {
        id: "t5-cell-5-2",
        text: "Securing and managing endpoints across 28 countries required massive, expensive travel for Central IT teams",
        correctRow: 5,
        correctCol: 2,
        keywords: ["managing endpoints", "travel for Central IT"]
      },
      // Financial Impacts
      {
        id: "t5-cell-0-3",
        text: "High - risk of ransomware on production devices, lost operational revenue from halted ship systems",
        correctRow: 0,
        correctCol: 3,
        keywords: ["ransomware on production", "halted ship systems", "lost operational revenue"]
      },
      {
        id: "t5-cell-1-3",
        text: "Very High - supply chain block, relationship strain with retail partners, lost contract volume",
        correctRow: 1,
        correctCol: 3,
        keywords: ["supply chain block", "relationship strain", "lost contract volume"]
      },
      {
        id: "t5-cell-2-3",
        text: "High - increased overtime costs, temp staffing, inability to meet seasonal demand peaks",
        correctRow: 2,
        correctCol: 3,
        keywords: ["increased overtime costs", "temp staffing", "seasonal demand peaks"]
      },
      {
        id: "t5-cell-3-3",
        text: "Very High - stoppage costs in FMCG can exceed $10,000/hour from cyber incidents or technical failures",
        correctRow: 3,
        correctCol: 3,
        keywords: ["stoppage costs in FMCG", "exceed $10,000/hour"]
      },
      {
        id: "t5-cell-4-3",
        text: "Medium - audit failures, GDPR regulatory compliance risk, compliance report delays",
        correctRow: 4,
        correctCol: 3,
        keywords: ["audit failures", "GDPR regulatory compliance", "compliance report delays"]
      },
      {
        id: "t5-cell-5-3",
        text: "Medium - travel budgets, operational inefficiency, delay in deploying security fixes",
        correctRow: 5,
        correctCol: 3,
        keywords: ["travel budgets", "operational inefficiency", "deploying security fixes"]
      }
    ]
  },
  {
    id: "table3_7",
    title: "3.7 Champion (C): Internal Advocates",
    description: "Connect key internal champions to their strategic roles, personal stakes, and key evidence of advocacy.",
    columns: ["Champion", "Role", "Champion Characteristics", "Key Evidence"],
    rows: [
      "Angel Boyanov",
      "Suzana Rari",
      "Warehouse Workers (Collective)"
    ],
    cells: [
      // Roles
      {
        id: "t6-cell-0-1",
        text: "Digital Security Product Manager, Warehouse Management & Cold Drinks Operations",
        correctRow: 0,
        correctCol: 1,
        keywords: ["Angel Boyanov", "Digital Security Product Manager", "Cold Drinks"]
      },
      {
        id: "t6-cell-1-1",
        text: "Supply Chain Manager, Coca-Cola HBC Greece and Cyprus",
        correctRow: 1,
        correctCol: 1,
        keywords: ["Suzana Rari", "Supply Chain Manager", "Greece", "Greece and Cyprus"]
      },
      {
        id: "t6-cell-2-1",
        text: "1,000+ users across 17 countries",
        correctRow: 2,
        correctCol: 1,
        keywords: ["1,000+ users", "17 countries"]
      },
      // Characteristics
      {
        id: "t6-cell-0-2",
        text: "Technical authority on logistics digitization; bridges operations and corporate SecOps; champion of modern workspace",
        correctRow: 0,
        correctCol: 2,
        keywords: ["technical authority on logistics", "bridges operations", "champion of modern workspace"]
      },
      {
        id: "t6-cell-1-2",
        text: "Operational leader; focused on security impact on truck turnaround times; credible advocate to business C-Suite",
        correctRow: 1,
        correctCol: 2,
        keywords: ["operational leader", "truck turnaround times", "business C-Suite"]
      },
      {
        id: "t6-cell-2-2",
        text: "Logistics floor end-users who adopted the modern endpoints; their high enrollment speed validated the workspace design",
        correctRow: 2,
        correctCol: 2,
        keywords: ["logistics floor end-users", "enrollment speed", "workspace design"]
      },
      // Evidence
      {
        id: "t6-cell-0-3",
        text: "Enthusiastically quoted modern security as 'not an innovation project, but an enterprise solution at scale' - driving group integration",
        correctRow: 0,
        correctCol: 3,
        keywords: ["not an innovation project", "enterprise solution at scale", "driving group integration"]
      },
      {
        id: "t6-cell-1-3",
        text: "Quantified the operational cost of identity failures (0.1% = 1,000 wrong dispatches); validated Defender/Entra usability",
        correctRow: 1,
        correctCol: 3,
        keywords: ["operational cost of identity", "0.1% = 1,000", "validated Defender"]
      },
      {
        id: "t6-cell-2-3",
        text: "Adopted and explicitly preferred the unified single sign-on terminal interface over older, complex multiple scan procedures",
        correctRow: 2,
        correctCol: 3,
        keywords: ["preferred the unified single sign-on", "scan procedures", "high engagement"]
      }
    ]
  },
  {
    id: "table3_8",
    title: "3.8 Competition (C): Competitive Landscape",
    description: "Evaluate competitor offerings against Microsoft solutions to understand how security consolidation won this landmark deal.",
    columns: ["Competitor / Alternative", "Type", "Strengths", "Weaknesses vs. Microsoft"],
    rows: [
      "Siloed Security Point Solutions",
      "Legacy Unmanaged RF Devices",
      "Outdated Manual Access Worksheets",
      "Unsecured Android Tablet Workstations",
      "Niche MDM & Endpoint Software Providers"
    ],
    cells: [
      // Types
      {
        id: "t7-cell-0-1",
        text: "Alternative Technology",
        correctRow: 0,
        correctCol: 1,
        keywords: ["Siloed Security Point Solutions", "Alternative Technology"]
      },
      {
        id: "t7-cell-1-1",
        text: "Status Quo",
        correctRow: 1,
        correctCol: 1,
        keywords: ["Legacy Unmanaged RF Devices", "Status Quo"]
      },
      {
        id: "t7-cell-2-1",
        text: "Status Quo",
        correctRow: 2,
        correctCol: 1,
        keywords: ["Outdated Manual Access Worksheets", "Status Quo"]
      },
      {
        id: "t7-cell-3-1",
        text: "Status Quo",
        correctRow: 3,
        correctCol: 1,
        keywords: ["Unsecured Android Tablet Workstations", "Status Quo"]
      },
      {
        id: "t7-cell-4-1",
        text: "Direct Competitor",
        correctRow: 4,
        correctCol: 1,
        keywords: ["Niche MDM", "Direct Competitor"]
      },
      // Strengths
      {
        id: "t7-cell-0-2",
        text: "Targeted threat controls; already deployed in selective hubs",
        correctRow: 0,
        correctCol: 2,
        keywords: ["Targeted threat controls", "deployed in selective hubs"]
      },
      {
        id: "t7-cell-1-2",
        text: "Familiar to workers on floor; established device inventory",
        correctRow: 1,
        correctCol: 2,
        keywords: ["Familiar to workers on floor", "established device inventory"]
      },
      {
        id: "t7-cell-2-2",
        text: "No technology licensing fees; simple process tracking",
        correctRow: 2,
        correctCol: 2,
        keywords: ["no technology licensing", "simple process tracking"]
      },
      {
        id: "t7-cell-3-2",
        text: "Larger interface for warehouse floor navigation",
        correctRow: 3,
        correctCol: 2,
        keywords: ["larger interface for warehouse", "floor navigation"]
      },
      {
        id: "t7-cell-4-2",
        text: "Specialized features for device locks; competitive pricing options",
        correctRow: 4,
        correctCol: 2,
        keywords: ["specialized features", "device locks"]
      },
      // Weaknesses vs Microsoft
      {
        id: "t7-cell-0-3",
        text: "Rejected by security teams as less unified with no correlated threat view, resulting in higher incident response times",
        correctRow: 0,
        correctCol: 3,
        keywords: ["rejected by security teams", "less unified", "incident response times"]
      },
      {
        id: "t7-cell-1-3",
        text: "Not secure by design; vulnerable to endpoint exploits, poor mobile compliance tracking, and zero identity enforcement",
        correctRow: 1,
        correctCol: 3,
        keywords: ["not secure by design", "endpoint exploits", "poor mobile compliance tracking", "identity enforcement"]
      },
      {
        id: "t7-cell-2-3",
        text: "Vulnerable to extreme data leakage, zero real-time visibility, and complete failure under strict compliance audits",
        correctRow: 2,
        correctCol: 3,
        keywords: ["vulnerable to extreme data leakage", "real-time visibility", "compliance audits"]
      },
      {
        id: "t7-cell-3-3",
        text: "Vulnerable to lateral attacks, mounted in insecure settings, lacking active management and update compliance policies",
        correctRow: 3,
        correctCol: 3,
        keywords: ["vulnerable to lateral attacks", "insecure settings", "compliance policies"]
      },
      {
        id: "t7-cell-4-3",
        text: "Lacks Microsoft's comprehensive modern security architecture (Defender + Entra + Intune + Purview + Sentinel + Security Copilot) and deep SAP integration",
        correctRow: 4,
        correctCol: 3,
        keywords: ["Lacks Microsoft", "comprehensive modern security architecture", "Defender", "Entra", "Intune", "Purview", "Sentinel", "Security Copilot"]
      }
    ]
  }
];
